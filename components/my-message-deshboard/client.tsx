import { messageType } from '@/atom/messageState'
import { firestore, storage } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'

type Props = {
  item : messageType,
  id : string
 
}

const Client = ({item, id}: Props) => {
  const deleteMessage = async () => {
    const deleteRef = doc(firestore, "users", id, "message", item.messageId) 
    const desertRef = ref(storage, `messages/${item.messageId}`);
  
    if(item.media){
      await deleteObject(desertRef)
     } 
     await deleteDoc(deleteRef)
  }

  return (
   <div className="flex flex-col space-y-3 items-start">
    <div className="flex items-center space-x-2">
        <div className="relative w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center" >
            <span>{item.name[0]}</span>
        </div>
       <div className="flex flex-col -space-y-1">
       <div className="flex items-center space-x-2">
       <h3 className="font-bold capitalize">{item.name}</h3>
       <span onClick={() => deleteMessage()} className="cursor-pointer"><MdDelete /></span>
       </div>
       <p className="text-xs"><span><Moment fromNow>{item.timestamp?.toDate()}</Moment></span> | <Link href={`mailto:${item.email}`}>{item.email}</Link></p>
       </div>
    </div>
    <div className="flex flex-col space-y-1 bg-primary/10 border border-primary/50 ml-5 rounded-r-lg rounded-bl-lg p-2">
  <p className="rounded-md text-sm self-start ">{item.message}</p>
  {item.media && <Link href={item.media} target="_blank" download={true}><Image src={item.media} alt={item.name} width={550} height={550} className="w-32 h-auto" /></Link>}
  </div>
     
    
   </div>
  )
}

export default Client