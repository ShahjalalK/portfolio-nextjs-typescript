import Image from 'next/image'
import React from 'react'

type Props = {}

const HelloMessage = (props: Props) => {
  return (
    <div className=" flex justify-start items-start flex-col space-y-1 rounded">
                   
                    <div className="whitespace-normal text-sm bg-secoundary/10 p-2 rounded-r-md rounded-tl-md ml-5 font-normal text-white border border-white/30 flex flex-col -space-y-5 items-center">
                    <Image src="/hi.webp" alt='hello' width={300} height={300} className="w-32" />
                      <p>👋 Hey there, How can I help you?</p> 
                      </div>                   
                    <div className="w-6 h-6 relative">
                    <Image src="/profile2.webp" width={50} height={50} alt="me" className="w-6 h-6 object-cover z-10 overflow-hidden rounded-full" />
                    
                    </div>
                </div>
  )
}

export default HelloMessage