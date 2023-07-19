import { messageType } from '@/atom/messageState'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Moment from 'react-moment'

type Props = {
  item : messageType
}

const MmyMessage = ({item}: Props) => {
  return (
    <div className=" flex justify-start items-start flex-col space-y-1 rounded">
                   
                    <div className="whitespace-normal text-sm bg-[#D9D9D7]/10 p-2 rounded-r-md rounded-tl-md ml-5 font-normal text-white border border-white/30 flex flex-col space-y-1">
                   <p> {item.message}</p>
        {item.media && <div className="cursor-pointer">
          <Link href={item.media} download={true} target="_blank"><Image src={item.media} alt={item.name} width={350} height={350} className="w-32 h-auto"/></Link>
        </div>}
                      </div>  

                    <div className="flex items-center space-x-1">
                    <div className="w-6 h-6 relative flex items-center space-x-1">
                     
                     <Image src="/profile2.webp" width={50} height={50} alt="me" className="w-6 h-6 object-cover overflow-hidden rounded-full" />
                     
                     </div>
                     <Moment fromNow className="text-xs text-white/30 select-none">{item.timestamp?.toDate()}</Moment>
                    </div>
                </div>
  )
}

export default MmyMessage