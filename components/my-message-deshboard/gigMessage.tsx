import { messageType } from '@/atom/messageState'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    item : messageType
}

const GigMessage = ({item}: Props) => {
  return (
    <Link href={item.orderLink} target="_blank" className="block ml-5">
    <div className="grid grid-cols-12 items-center border border-info/30 rounded ">
    <div className=" w-full h-full rounded object-cover col-span-3 overflow-hidden border-r border-info/30">
          <Image src={item.serviceImage} alt='gig' width={350} height={350} className="w-full h-full object-fill" />
      </div>
      <div className="flex flex-col space-y-0 py-3 pl-2 pr-1 col-span-9 hover:bg-info/10">
          <h1 className="text-xs line-clamp-1 text-info/60"><b>Shahjalalk:</b> {item.serviceTitle}</h1>
          <p className="text-xs text-info/60 line-clamp-2">{item.searchDescription}
            </p>
      </div>
      
    </div>
    </Link>
  )
}

export default GigMessage