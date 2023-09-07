import React, { useEffect, useState } from 'react'
import Toolbar from './toolbar'
import SignatureDetails from './signatureDetails'
import SignaturePreview from './signaturePreview'
import { useRecoilState } from 'recoil'
import { EmailSignatureToolState, emailSignatureToolType } from '@/atom/emailSignatureToolSTate'
import SignatureImages from './signatureImages'
import SignatureSocial from './signatureSocial'
import { EmailSignatureState, emailSignatureType, signatureActivate, signatureAtivateType } from '@/atom/createEmailSignatureState/emailSignatureState'

type Props = {}

const SignatureTools = (props: Props) => {
  const [signatureTool, setSignaturTool] = useRecoilState<emailSignatureToolType>(EmailSignatureToolState)
  const [signatureValue, setSigantureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
  const [signatureStorageValue, setSignatureStorageValue] = useState<emailSignatureType>()
  useEffect(() => {
     const signatureStorage =  localStorage.getItem("userSignature")  
     setSignatureStorageValue(signatureStorage ?  JSON.parse(signatureStorage) : "")   
 
   }, [signatureStorageValue])

  const signatureStorageObj = {
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
  }

  const [showEdit, setShowEdit] = useRecoilState<signatureAtivateType>(signatureActivate)

 useEffect(() => {
 if(!showEdit.open){
  const signatureStringfy = JSON.stringify(signatureStorageObj)
  localStorage.setItem('userSignature', signatureStringfy)

 }

 }, [signatureValue])





  return (
    <div className="grid grid-cols-12">
       <div className="col-span-1">
       <Toolbar /> 
       </div>
       <div className="col-span-4 w-full h-full overflow-x-hidden overflow-y-scroll signatureTools bg-[#f9f9f9] border-r border-info/20">       
       {signatureTool.provider === "details" && <SignatureDetails />} 
       {signatureTool.provider === "images" && <SignatureImages />} 
       {signatureTool.provider === "social" && <SignatureSocial />}
       </div>
       <div className="col-span-7">
        <SignaturePreview />
       </div>
    </div>
  )
}

export default SignatureTools