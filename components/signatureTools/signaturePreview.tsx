import React, { useEffect, useState } from 'react'
import Wide from './signatureMockup/wide'
import { useRecoilState } from 'recoil'
import { EmailSignatureState, emailSignatureType, signatureActivate, signatureAtivateType } from '@/atom/createEmailSignatureState/emailSignatureState'
import { parseCookies } from 'nookies'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import DownloadPop from './downloadPop'
import { downloadState, downloadType } from '@/atom/emailSignatureToolSTate'

type Props = {}

const SignaturePreview = (props: Props) => {
  const [showEdit, setShowEdit] = useRecoilState<signatureAtivateType>(signatureActivate)
  const [signatureStorageValue, setSignatureStorageValue] = useState<emailSignatureType>()
 const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
 const cookie = parseCookies()
 const userTrakingCooke = cookie.userTraking ? JSON.parse(cookie.userTraking) : ""

  useEffect(() => {
    const signatureStorage =  localStorage.getItem("userSignature")  
    setSignatureStorageValue(signatureStorage ?  JSON.parse(signatureStorage) : "")   

  }, [signatureValue, signatureStorageValue])
  const editHanler = () => {
    setSignatureValue((prev) => ({
      ...prev,
      id : userTrakingCooke.userId,
      name : signatureStorageValue?.name as string,
      title : signatureStorageValue?.title as string,
      company : signatureStorageValue?.company as string,
      mobile : signatureStorageValue?.mobile as string,
      website : signatureStorageValue?.website as string,
      email : signatureStorageValue?.email as string,
      address : signatureStorageValue?.address as string,
      logo : signatureStorageValue?.logo as string,
      linkedin : signatureStorageValue?.linkedin as string,
      facebook : signatureStorageValue?.facebook as string,
      instagram : signatureStorageValue?.instagram as string,
      twitter : signatureStorageValue?.twitter as string,
      tiktok : signatureStorageValue?.tiktok as string,
    }))

    setShowEdit((prev) => ({
      ...prev,
      open : false
    }))
   }


   const signatureHandler = async () => {
    await fetch("/api/createSiganture/wide", {
     method : "POST",
     headers : {
       "Content-Type": "application/json"
     },
     body : JSON.stringify({
      id : signatureValue.id,
      name : signatureValue.name,
      title : signatureValue.title,
      company : signatureValue.company,
      mobile : signatureValue.mobile,
      website : signatureValue.website,
      email : signatureValue.email,
      address : signatureValue.address,
      logo : signatureValue.logo,
      linkedin : signatureValue.linkedin,
      facebook : signatureValue.facebook,
      instagram : signatureValue.instagram,
      twitter : signatureValue.twitter,
      tiktok : signatureValue.tiktok,
     })
    })
   }
   
   const [showDownload, setShowDownload] = useRecoilState<downloadType>(downloadState)
   const downloadHandler = () => {
    signatureHandler()
    setShowDownload((prev) => ({
      ...prev,
      open : true
    }))
   }
  return (
   <div>
  {showDownload.open && <DownloadPop />}  
   <div className="bg-primary/5 pt-16 flex justify-center">

   <h1 className="text-sm text-[#f5467e] text-end">If you want to use the PRO features! <Link href="" className="underline underline-offset-4 font-bold">Contact the email signature developer</Link></h1>
    
  
   </div>
     <div className=" bg-primary/5 pt-5 flex justify-center  w-full ">
      
      <div className=" relative overflow-hidden h-48 overflow-y-scroll">
      <motion.div initial={{x : "100%"}} animate={{x : showEdit.open ? 0 : "100%"}} transition={{duration : 0.5}} className="flex flex-col space-y-3 justify-center border border-info/30 p-5 rounded absolute top-0 left-0 w-full bg-primary/70 z-20 h-full">
          <h1 className="text-xl text-center text-white shadow">Free Email Signature Generator to Boost Your Personal Brand</h1>
          <div className="flex justify-center items-center"><button className="px-5 py-1 border border-dashed transition-all duration-300 hover:rounded-none border-secoundary text-secoundary rounded font-bold hover:bg-primary hover:text-white " onClick={editHanler}>Create clickable email signature</button></div>
          </motion.div>
      <div className="">
      <Wide />
      </div>
      </div>
            
            
          </div>
          {!showEdit.open  && 
          <div className="bg-primary/5 pt-5 py-10 flex justify-end pr-32">
          <button className="px-5 py-2 rounded bg-secoundary text-white" onClick={downloadHandler}>Ok, I am done</button>
          </div>
          }
         
   </div>
  )
}
9
export default SignaturePreview