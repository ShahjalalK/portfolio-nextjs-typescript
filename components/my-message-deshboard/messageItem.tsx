import { allMessageType } from '@/atom/messageState'
import { firestore, storage } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MdDelete, MdOutlineMailLock } from 'react-icons/md'
import Moment from 'react-moment'
import {motion} from 'framer-motion'
import { deleteObject, ref } from 'firebase/storage'

type Props = {
  messageUser : allMessageType
}

const MessageItem = ({messageUser}: Props) => {  
  const router = useRouter()
  const [showDelete, setShowDelete] = useState(false)

  const deleteMessage = () => {
    setShowDelete(!showDelete)
  }


  const deleteUser = async (id : string) => {
   const docRef = doc(firestore, "users", id)
  //  const desertRef = ref(storage, `messages/${id}/`);
  //  await deleteObject(desertRef)
   await deleteDoc(docRef)
 
  }
  return (
    <div className={`flex ${messageUser.id == "1385ef99-a962-4381-819c-7a24c91d0989" && "hidden" } flex-col space-y-2 md:flex-row justify-between items-center hover:bg-primary/10 rounded p-3 cursor-pointer border border-primary/30 relative `}>

      <motion.div initial={{display : "none", opacity : 0}} animate={{opacity : showDelete ? 1 : 0,display : showDelete ? "block" : "none"}} transition={{duration : 0.5}}  className="max-w-md absolute -top-16 right-5 border border-primary rounded rounded-br-none bg-white p-3 opacity-100">
        <p className="font-medium">Do you want to delete <span className="font-bold underline underline-offset-2">{messageUser.name}</span>?</p>
        <div className="flex items-center space-x-2 justify-end mt-2">
          <span className="px-3 py-1 border border-secoundary/80 rounded-md" onClick={() => setShowDelete(false)}>No</span>
          <span className="px-3 py-1 border border-[red] rounded-md" onClick={() => deleteUser(messageUser.id)}>Yes</span>
        </div>

      </motion.div>
        
        <div className="flex flex-grow items-center space-x-2" onClick={() => router.push(`/message/${messageUser.id}`)}>
          <div className="relative w-9 h-9 rounded-full border border-primary/50 flex items-center justify-center text-primary/50 text-xl cursor-pointer uppercase"><span>{messageUser.name[0]}</span></div>
          <div className="flex flex-col -space-y-1">
          <h1 className="text-xl font-bold capitalize">{messageUser.name}</h1>
          <p className="text-sm italic">{messageUser.email}</p>
          </div>
          </div>
         
          <div className="flex items-center space-x-5">
          <Moment className="italic capitalize" fromNow>{messageUser.timestamp?.toDate()}</Moment>
          {!messageUser.emailProvider && <MdOutlineMailLock className="text-2xl text-primary/50" />}
         {messageUser.id !== "1385ef99-a962-4381-819c-7a24c91d0989" && <button className={`text-2xl text-primary/50 ${showDelete ? "text-primary/100" : "text-primary/50"} hover:text-primary/100`} onClick={deleteMessage}><MdDelete /></button>} 
          </div>
      </div>
  )
}

export default MessageItem