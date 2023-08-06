import { firestore } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'
import { useRecoilState, useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'
import { subscribeState, subscribeUserType } from '@/atom/subscribeTypeState'

type Props = {}

const SubscribeItem = (props: Props) => {
    const [subscribeValue, setSubscribeValue] = useRecoilState<subscribeUserType[]>(subscribeState)
    const deleteEmail = (id: string) => {
        const deletRef = doc(firestore, "subscribe", id)
        deleteDoc(deletRef)
    }
   
    return (
   <div className="grid grid-cols-3 gap-5">
     <div className="col-span-2 max-w-2xl ml-auto">
        <h1 className="text-xl">All Subscribe User- <span className="text-primary/80 text-2xl">{subscribeValue.length}</span></h1>
        <hr className=" py-1 text-primary/30" />
    {subscribeValue.map((item) => (
      <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5}} className="flex flex-col mt-1 cursor-pointer " key={item.id}>
      <div className="p-3 border border-primary/20 rounded-md flex items-center flex-grow space-x-5 hover:bg-primary/5">
      <div className="w-9 h-9 rounded-full border border-primary/80 flex items-center justify-center">
        <span className="font-normal text-2xl uppercase text-primary/60">{item.email[0]}</span>
      </div>
      <p className="flex-grow italic">{item.email}</p>
      <p className="text-sm font-medium whitespace-nowrap"><Moment fromNow>{item.timestamp?.toDate()}</Moment></p>
      <MdDelete onClick={() => deleteEmail(item.id)} className="text-xl text-primary/60 cursor-pointer hover:text-primary" />
        
    </div>

    
    </motion.div>
    ))}
    </div>
    <div className="bg-primary/5 border border-primary/10 rounded p-1 flex flex-col space-y-1">
     {subscribeValue.map((item) => (
      <p key={item.id} className="bg-secoundary/5 border border-white rounded p-1 text-sm text-info/80">{item.email}</p>
     ))}
      
      
     
    </div>
   </div>
   
  )
}

export default SubscribeItem