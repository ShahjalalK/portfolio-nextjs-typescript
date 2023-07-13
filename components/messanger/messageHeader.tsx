import Image from 'next/image'
import React from 'react'

type Props = {}

const MessageHeader = (props: Props) => {
  return (
    <div className="bg-primary px-3 py-2 shadow-2xl shadow-secoundary flex items-center space-x-2 border-b border-b-secoundary/30 sticky top-0 left-0 w-full right-0">
            <div className="w-9 h-9 relative object-cover ">
                    <Image src="/profile2.webp" width={50} height={50} alt="me" className="w-9 h-9 object-cover z-10 overflow-hidden border border-white/30 rounded-full" />   
                    <span className="w-2 h-2 rounded-full bg-secoundary z-50 absolute bottom-0 right-0 -translate-x-1 border-[2px] border-white/50  "></span>                 
             </div>
            <div className="flex flex-col space-y-0">
            <h1 className="text-lg font-bold text-white/80 line-clamp-1" >Shahjalal Khan</h1>
            <p className="flex items-center space-x-1 text-white/50 text-sm font-light"> Active Now</p>
            </div>
            </div>
  )
}

export default MessageHeader