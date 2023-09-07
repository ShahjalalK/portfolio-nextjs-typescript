import { EmailSignatureState, emailSignatureType, signatureImageState } from '@/atom/createEmailSignatureState/emailSignatureState'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { useRecoilState } from 'recoil'

type Props = {}

const Wide = (props: Props) => {
 
  const signatureHandler = async () => {
   await fetch("/api/createSiganture/wide", {
    method : "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({
        name : "Hello Shahjalal Khan"
    })
   })
  }

  const deleteHandler = async () => {
    await fetch(`/api/createSiganture/wide`, {
      method : "DELETE"
    })
  }

 const [signatureStorageValue, setSignatureStorageValue] = useState<emailSignatureType>()
 const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
  useEffect(() => {
    const signatureStorage =  localStorage.getItem("userSignature")  
    setSignatureStorageValue(signatureStorage ?  JSON.parse(signatureStorage) : "")   

  }, [signatureValue, signatureStorageValue])






  return (
    
    <div className="flex items-center space-x-3 font-[sans-serif] text-[#767180] border p-3  border-[gray]/40 bg-white shadow w-[600px] relative">
    {signatureStorageValue?.logo && <Image src={signatureStorageValue?.logo} width={150} height={150} alt="logo" className="rounded-full  w-28"/>}
      
      <div>
        {signatureStorageValue?.name && <h1 className="text-[14pt] text-[#767180] font-bold -mb-1">{signatureStorageValue?.name}</h1>}
    
       
        {signatureStorageValue?.title && <p className="text-[11pt] text-[gray] font-medium">{signatureStorageValue?.title} <span className="italic">{signatureStorageValue?.company}</span></p>} 
       {signatureStorageValue?.name || signatureStorageValue?.title ? 
        <div className="h-2 w-full mt-1 border-t-2 border-[#ddd9e6]"></div> : ""
       } 
  
        <div className="flex flex-col space-y-0">
          <div className="flex items-center space-x-1">
          {signatureStorageValue?.email && 
          <div className="flex items-center space-x-1 text-[gray] text-sm">
          <span className="text-[#8c8794] font-bold italic">Email:</span>
          <Link href={`mailto:${signatureStorageValue?.email }`}>{signatureStorageValue?.email}</Link>
          </div>
          }
          {signatureStorageValue?.email && signatureStorageValue?.mobile && <span className="text-[#ddd9e6]">|</span>}
          { signatureStorageValue?.mobile && <div className="flex items-center space-x-1 text-[gray] text-sm whitespace-nowrap">
          <span className="text-[#8c8794] font-bold italic">Phone:</span>
          <Link href={`tel:${signatureStorageValue?.mobile}`}>{signatureStorageValue?.mobile}</Link>
          </div>} 
          </div>
          {signatureStorageValue?.website &&  <div className="flex items-center space-x-1 text-[gray] text-sm">
          <span className="text-[#8c8794] font-bold italic">Web:</span>
          <Link href={`https://${signatureStorageValue?.website}`} target='_blank'>{signatureStorageValue?.website}</Link>
          </div>}
         {signatureStorageValue?.address && 
            <div className="flex items-center space-x-1 text-[gray] text-sm">
            <span className="text-[#8c8794] font-bold italic">Location:</span>
            <p>{signatureStorageValue?.address}</p>
            </div>
         }
          
          
          <div className="flex items-center space-x-1 pt-1">
             {signatureStorageValue?.linkedin && <Link href={signatureStorageValue?.linkedin} target="_blank">
                <Image src="/linkedin.png" width="24" height="24" alt="l" />
                </Link>             } 
               {signatureStorageValue?.instagram && <Link href={signatureStorageValue?.instagram} target="_blank">
                <Image src="/instagram.png" width="24" height="24" alt="i" />
                </Link> } 
                {signatureStorageValue?.twitter &&  
                <Link href={signatureStorageValue?.twitter} target="_blank"> 
             
                <Image src="/twitter.png" width="24" height="24" alt="t" />
                </Link>
                }            
                {signatureStorageValue?.facebook &&
                <Link href={signatureStorageValue?.facebook} target="_blank"> 
             
                <Image src="/facebook.png" width="24" height="24" alt="t" />
                </Link>
                }   
                 {signatureStorageValue?.tiktok &&  
               <Link href={signatureStorageValue?.tiktok}>
               <Image src="/tiktok.png" width="24" height="24" alt="tik" />
               </Link>
                }                
                
          </div>
        </div>
        
       
      </div>
  </div>
  
  )
}

export default Wide