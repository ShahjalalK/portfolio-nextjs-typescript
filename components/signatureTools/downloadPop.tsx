import { EmailSignatureState, emailSignatureType } from '@/atom/createEmailSignatureState/emailSignatureState'
import { downloadState, downloadType } from '@/atom/emailSignatureToolSTate'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiDownload } from 'react-icons/bi'
import { useRecoilState, useRecoilValue } from 'recoil'

import Siganture from '../../public/facebook.png'

type Props = {}

const DownloadPop = (props: Props) => {
  const [showDownload, setShowDownload] = useRecoilState<downloadType>(downloadState)
  const closeDownloadHandler = () => {
    setShowDownload((prev) => ({
      ...prev,
      open : false
    }))
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const signatureValue = useRecoilValue<emailSignatureType>(EmailSignatureState)

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-primary/20 z-50 flex justify-center items-center">
      <div className="bg-white/80 max-w-md mx-auto flex-grow p-3 rounded flex flex-col space-y-2 relative">
        <AiOutlineClose className="text-primary/80 hover:text-primary/100 cursor-pointer absolute text-xl top-2 right-2" onClick={closeDownloadHandler} />
      <div className="flex flex-col space-y-1">  
                <label htmlFor="name">Name:</label>
                <input className="border rounded p-1 border-info/40 hover:border-secoundary/40 outline-none" id='name' type="text" required value={name} onChange={(e) => setName(e.target.value)}/> 
                
                </div>

                <div className="flex flex-col space-y-1">  
                <label htmlFor="email">Email:</label>
                <input className="border rounded p-1 border-info/40 hover:border-secoundary/40 outline-none" id='email' type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/> 
                
                </div>
                <div className="pt-5 flex justify-center items-center">
                <Link href={`/${signatureValue.id}wide.html`} target="_blank" download={true} className="button py-2 px-5 flex items-center justify-center"><i></i><span className="flex items-center space-x-2"><span>Download Signature</span> <BiDownload className="text-xl" /></span></Link>
                </div>
                
      </div>
    </div>
  )
}

export default DownloadPop