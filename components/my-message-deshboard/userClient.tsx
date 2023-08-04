import { allMessageType } from '@/atom/messageState'
import MessageApi from '@/firebaseApi/messageApi'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineMailLock } from 'react-icons/md'
import Moment from 'react-moment'

type Props = {
    messageUser : allMessageType,
    userId : string
  }

const UserClient = ({messageUser, userId}: Props) => {
  const {getMyMessage} = MessageApi()
    const router = useRouter()
    const userHandler = async () => {
      router.push(`/message/${messageUser.id}`)
      await getMyMessage(messageUser.id)
    }
   
  return (
    <div  className={`flex items-start space-x-2 flex-grow cursor-pointer border border-primary/30 p-1 rounded hover:bg-primary/5 ${messageUser.id == "1385ef99-a962-4381-819c-7a24c91d0989" && "hidden"} ${ messageUser.id === userId && "bg-primary/5"}`} onClick={userHandler }>
            <div className="w-9 h-9 rounded-full border border-primary/50 flex justify-center items-center text-xl uppercase">{messageUser.name[0]}</div>
           <div className="flex flex-col -space-y-1 flex-grow">
           <h1 className="line-clamp-1 font-bold capitalize">{messageUser.name}</h1>
            <p className="line-clamp-1 italic">{messageUser.email}</p>
           </div>
          <div className="flex flex-col space-y-0 items-end">
          <Moment className="italic capitalize text-sm whitespace-nowrap" fromNow>{messageUser.timestamp?.toDate()}</Moment>
           {!messageUser.emailProvider && <MdOutlineMailLock className="text-lg text-primary/50" />}
          </div>
          </div>
  )
}

export default UserClient