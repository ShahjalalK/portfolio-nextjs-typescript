import { allMessageType } from '@/atom/messageState'
import Link from 'next/link'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'

type Props = {
  messageUser : allMessageType
}

const MessageItem = ({messageUser}: Props) => {
  return (
    <Link href="/message/[pid]" as={`/message/${messageUser.id}`} className="flex flex-col space-y-2 md:flex-row justify-between items-center space-x-5 hover:bg-primary/10 rounded p-3 cursor-pointer border border-primary/30">
        
        <div className="flex items-center space-x-2">
          <div className="relative w-9 h-9 rounded-full border border-primary/50 flex items-center justify-center text-primary/50 text-lg cursor-pointer"><span>{messageUser.name[0]}</span></div>
          <div className="flex flex-col -space-y-1">
          <h1 className="text-lg font-bold capitalize">{messageUser.name}</h1>
          <p className="text-sm">{messageUser.email}</p>
          </div>
          </div>
         
          <div className="flex items-center space-x-5">
          <Moment fromNow>{messageUser.timestamp?.toDate()}</Moment>
          <button className="text-2xl text-primary/80 hover:text-primary/100"><MdDelete /></button>
          </div>
      </Link>
  )
}

export default MessageItem