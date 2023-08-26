import { messageType } from '@/atom/messageState'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  item : messageType
}

const PreviewServiceMessage = ({item}: Props) => {
  return (
    <Link href={item.orderLink} target="_blank" className="block mr-5">
    <div className="grid grid-cols-12 items-center border border-white/30 rounded ">
      <div className="flex flex-col space-y-0 py-3 pl-2 pr-1 col-span-9 hover:bg-white/10">
          <h1 className="text-xs line-clamp-1 text-white/60"><b>Shahjalalk:</b> {item.serviceTitle}</h1>
          <p className="text-xs text-white/60 line-clamp-2">{item.searchDescription}
            </p>
      </div>
      <div className=" w-full h-full rounded object-cover col-span-3 overflow-hidden border-r border-white/30">
          <Image src={item.serviceImage} alt='gig' width={350} height={350} className="w-full h-full object-fill" />
      </div>
    </div>
    </Link>
  )
}

export default PreviewServiceMessage