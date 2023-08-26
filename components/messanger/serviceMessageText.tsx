import { messageOpenSate, messageOpenType } from '@/atom/messageState'
import { allServicState, servicMessageState, serviceMessageType, serviceSectionType } from '@/atom/santyType'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaDeleteLeft } from 'react-icons/fa6'
import { TiDelete } from 'react-icons/ti'
import { useRecoilState, useResetRecoilState } from 'recoil'

type Props = {}

const ServiceMessageText = (props: Props) => {
  const [messageOpen, setMessageOpen] = useRecoilState<messageOpenType>(messageOpenSate)
  const [serviceMessage, setServiceMessage] = useRecoilState<serviceMessageType>(servicMessageState)
  const resetMessage = useResetRecoilState(servicMessageState)
 
  const gigMessageHandler = () => {
    setMessageOpen((prev) => ({...prev, gigLink : false}))
    resetMessage()
  }

  return (
    <div className="block mb-5 relative">
      <span onClick={gigMessageHandler } className="absolute top-[2px] right-[2px] text-white/40 hover:text-white/60 text-2xl cursor-pointer z-40"><TiDelete /></span>
    <div className="grid grid-cols-12 items-center border border-white/30 rounded ">
      <Link href={serviceMessage.orderLink} target="_blank" className=" w-full h-full rounded object-cover col-span-3 overflow-hidden border-r border-white/30">
          <Image src={serviceMessage.serviceImage} alt='gig' width={350} height={350} className="w-full h-full object-fill" />
      </Link>
      <Link href={serviceMessage.orderLink} target="_blank" className="flex flex-col space-y-0 py-3 pl-2 pr-1 col-span-9 hover:bg-white/10">
          <h1 className="text-xs line-clamp-1 text-white/60"><b>Shahjalalk:</b> {serviceMessage.serviceTitle}</h1>
          <p className="text-xs text-white/60 line-clamp-2">
            {serviceMessage.searchDescription}
            </p>
      </Link>
    </div>
    </div>
  )
}

export default ServiceMessageText