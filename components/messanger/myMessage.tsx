import Image from 'next/image'
import React from 'react'

type Props = {}

const MmyMessage = (props: Props) => {
  return (
    <div className=" flex justify-start items-start flex-col space-y-1 rounded">
                    
                    <div className="whitespace-normal text-sm bg-secoundary/20 p-2 rounded-r-md rounded-tl-md ml-5 font-normal">👋 Hi there! How can i help you?</div>
                    <div className="w-6 h-6 relative">
                    <Image src="/profile2.webp" width={50} height={50} alt="me" className="w-6 h-6 object-cover z-10 overflow-hidden rounded-full" />
                    
                    </div>
                </div>
  )
}

export default MmyMessage