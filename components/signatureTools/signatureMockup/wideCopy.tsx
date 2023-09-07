import { EmailSignatureState, emailSignatureType } from '@/atom/createEmailSignatureState/emailSignatureState'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const Wide = (props: Props) => {
  const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
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
  return (
    
    <div className="flex items-center space-x-3 font-[sans-serif] text-[#222] border p-3  border-[gray]/40 bg-white shadow w-[600px]">
    <Image src="/signatrue1Logo.jpg" width={150} height={150} alt="logo" className="rounded-full w-32"/>
    <div>
      <h1 className="text-xl ">BARBARA L. LEGERE</h1>
      <p className="mb-2 text-sm text-[gray]">Author of "Keven's Choice" & "Talk to Me I'm Grieving"</p>
      <div className="h-2 w-full border-t-2 border-[#ddd9e6]"></div>

      <div className="flex flex-col space-y-0">
        <div className="flex items-center space-x-1"><div className="flex items-center space-x-1 text-[gray] text-sm">
        <span className="text-[#222]">Email:</span>
        <Link href="mailto:barbaralegere@gmail.com">barbaralegere@gmail.com</Link>
        </div>
        <span className="text-[#ddd9e6]">|</span>
        <div className="flex items-center space-x-1 text-[gray] text-sm">
        <span className="text-[#222]">Phone:</span>
        <Link href="tel:01303233683">01303233683</Link>
        </div>
        </div>
        <div className="flex items-center space-x-1 text-[gray] text-sm">
        <span className="text-[#222]">Web:</span>
        <Link href="wwwldlsye.com">www.barbaralegere.com</Link>
        </div>
        <div className="flex items-center space-x-1 text-[gray] text-sm">
        <span className="text-[#222]">Location:</span>
        <Link href="wwwldlsye.com">4743+4G Berhampore, West Bengal, India</Link>
        </div>
        
        <div className="flex items-center space-x-1 pt-1">
              <Link href="">
              <img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/facebook.png" width="24" height="24" alt="" />
              </Link>
              <Link href="">
              <img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/instagram.png" width="24" height="24" alt="" />
              </Link>
              <Link href="">
              <img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/facebook.png" width="24" height="24" alt="" />
              </Link>
              <Link href="">
              <img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/facebook.png" width="24" height="24" alt="" />
              </Link>
              <Link href="">
              <img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/facebook.png" width="24" height="24" alt="" />
              </Link>
        </div>
      </div>
      
     
    </div>
</div>
  
  )
}

export default Wide