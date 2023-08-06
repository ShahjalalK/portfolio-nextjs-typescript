import { messageType } from '@/atom/messageState'
import { basicInfoState, basicInfoType } from '@/atom/santyType'
import { firestore, storage } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import Image from 'next/image'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'
import { useRecoilValue } from 'recoil'

type Props = {
  item : messageType,
  id : string
 

}

const Me = ({item, id}: Props) => {
  const basicInfoValue = useRecoilValue<basicInfoType[]>(basicInfoState)
  const deleteMessage = async () => {
    const deleteRef = doc(firestore, "users", id, "message", item.messageId) 
    const desertRef = ref(storage, `messages/${id}/${item.messageId}`);  
   if(item.media){
    await deleteObject(desertRef)
   } 
   await deleteDoc(deleteRef)
  }
  return (
   <>
   {basicInfoValue.slice(0, 1).map((myinfo) => (
     <div key={myinfo._id} className="flex flex-col space-y-3 items-end">
     <div className="flex items-center space-x-2">
        
       <div className="flex flex-col -space-y-1">
       <div className="flex items-center space-x-2">
       <h3 className="font-bold capitalize">{item.name}</h3>
       <span onClick={() => deleteMessage()} className="cursor-pointer text-primary/50 hover:text-primary/100"><MdDelete /></span>
       </div>
       <p className="text-xs"><span><Moment fromNow>{item.timestamp?.toDate()}</Moment></span> | <span>{item.email}</span></p>
       </div>

       <div className="relative w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center" >
            <Image src={myinfo.myImage} alt="me" width={80} height={80} className="w-9 h-9 rounded-full object-cover" />
        </div>
    </div>
  <div className="flex flex-col items-center space-y-1 bg-secoundary/10 border border-primary/50 ml-5 rounded-br-lg rounded-l-lg p-2 mr-5">
  <p>{item.message}</p>
  {item.media && <Image src={item.media} alt={item.name} width={550} height={550} className="w-32 h-auto" />}
  </div>
   </div>
   ))}
   
   </>
  )
}

export default Me