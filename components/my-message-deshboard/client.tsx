import { messageType } from '@/atom/messageState'
import { firestore, storage } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'
import {motion} from 'framer-motion'

type Props = {
  item : messageType,
  id : string
 
}

const Client = ({item, id}: Props) => {

  const deleteMessage = async () => {
    const deleteRef = doc(firestore, "users", id, "message", item.messageId) 
    const desertRef = ref(storage, `messages/${id}/${item.messageId}`);
  
    if(item.media){
      await deleteObject(desertRef)
     } 
     await deleteDoc(deleteRef)
   
  }

  const [showDelete, setShowDelete] = useState(false)

  const massagePop = () => {
    setShowDelete(!showDelete)
  }

  return (
   <div className="flex flex-col space-y-3 items-start relative">
    <motion.div initial={{display : "none", opacity : 0}} animate={{opacity : showDelete ? 1 : 0,display : showDelete ? "block" : "none"}} transition={{duration : 0.5}}  className="max-w-md absolute -top-20 left-3 border border-primary rounded rounded-br-none bg-white p-3 opacity-100">
        <p className="font-medium text-sm">Do you want to delete <span className="font-bold underline underline-offset-2">{item.name}</span>?</p>
        <div className="flex items-center space-x-2 justify-end mt-2">
          <span className="px-3 py-1 border border-secoundary/80 rounded-md cursor-pointer text-sm" onClick={() => setShowDelete(false)}>No</span>
          <span className="px-3 py-1 border border-[red] rounded-md cursor-pointer text-sm" onClick={() => deleteMessage()}>Yes</span>
        </div>

      </motion.div>
    <div className="flex items-center space-x-2">
        <div className="relative w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center uppercase" >
            <span>{item.name[0]}</span>
        </div>
       <div className="flex flex-col -space-y-1">
       <div className="flex items-center space-x-2">
       <h3 className="font-bold capitalize">{item.name}</h3>
       <span onClick={() => massagePop()} className={`cursor-pointer text-primary/50 hover:text-primary/100 ${showDelete ? "text-primary/100" : "text-primary/50"}`}><MdDelete /></span>
       </div>
       <p className="text-xs"><span><Moment fromNow>{item.timestamp?.toDate()}</Moment></span> | <Link className="italic" href={`mailto:${item.email}`}>{item.email}</Link></p>
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