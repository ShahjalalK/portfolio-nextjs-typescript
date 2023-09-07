import { EmailSignatureToolState, emailSignatureToolType } from '@/atom/emailSignatureToolSTate'
import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { BsFillImageFill } from 'react-icons/bs'
import {IoShareSocialOutline} from 'react-icons/io5'
import { useRecoilState } from 'recoil'

type Props = {}


const Toolbar = (props: Props) => {
  const [signatureTool, setSignaturTool] = useRecoilState<emailSignatureToolType>(EmailSignatureToolState)



  return (
    <div className="bg-primary w-full h-screen flex flex-col">
        
        <div onClick={() => setSignaturTool((prev) => ({...prev, provider : "details"}))} className={`flex flex-col space-y-1 justify-center items-center py-3 text-white/80 cursor-pointer ${signatureTool.provider === "details" && "!text-secoundary !border-secoundary !bg-white"}   border-l-4 border-[transparent] `}>
            <BiEditAlt className="text-2xl" />
            <span className="text-sm font-medium">Details</span>
        </div>


        <div onClick={() => setSignaturTool((prev) => ({...prev, provider : "images"}))} className={`flex flex-col space-y-1 justify-center items-center py-3 text-white/80 cursor-pointer ${signatureTool.provider === "images" && "!text-secoundary !border-secoundary !bg-white"}   border-l-4 border-[transparent] `}>
            <BsFillImageFill className="text-2xl" />
            <span className="text-sm font-medium">Images</span>
        </div>


        <div onClick={() => setSignaturTool((prev) => ({...prev, provider : "social"}))} className={`flex flex-col space-y-1 justify-center items-center py-3 text-white/80 cursor-pointer ${signatureTool.provider === "social" && "!text-secoundary !border-secoundary !bg-white"}   border-l-4 border-[transparent] `}>
            <IoShareSocialOutline className="text-2xl" />
            <span className="text-sm font-medium">Social</span>
        </div>
    </div>
  )
}

export default Toolbar