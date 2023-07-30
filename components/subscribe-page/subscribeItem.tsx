import { subscribeUserState, subscribeUserType } from '@/atom/subscribeUser'
import { firestore } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'
import { useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'

type Props = {}

const SubscribeItem = (props: Props) => {
    const subscribeValue = useRecoilValue<subscribeUserType[]>(subscribeUserState)
    const deleteEmail = (id: string) => {
        const deletRef = doc(firestore, "subscribe", id)
        deleteDoc(deletRef)
    }
    return (
    <div>
        <h1>All Subscribe User- {subscribeValue.length}</h1>
    {subscribeValue.map((item) => (
      <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5}} className="flex flex-col space-y-3 cursor-pointer " key={item.id}>
      <div className="p-3 border border-primary/20 rounded-md flex items-center flex-grow space-x-5 hover:bg-primary/5">
      <div className="w-9 h-9 rounded-full border border-primary/80 flex items-center justify-center">
        <span className="font-bold text-2xl">{item.email[0]}</span>
      </div>
      <p className="flex-grow">{item.email}</p>
      <p><Moment fromNow>{item.timestamp?.toDate()}</Moment></p>
      <MdDelete onClick={() => deleteEmail(item.id)} className="text-2xl text-primary/80 cursor-pointer hover:text-primary" />
        
    </div>

    
    </motion.div>
    ))}
    </div>
   
  )
}

export default SubscribeItem