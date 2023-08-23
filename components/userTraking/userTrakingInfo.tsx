import { userTrakingType } from '@/atom/userTrakingState'
import { firestore } from '@/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Moment from 'react-moment'

type Props = {
    item : userTrakingType
}

const UserTrakingInfo = ({item}: Props) => {
    const [show, setShow] = useState(false)
const deleteHandler = async (id : string) => {
  const docRef = doc(firestore, "userTraking", id);
  await deleteDoc(docRef)
  setShow(false)
}
  return (
    <div className="border p-3 rounded border-primary/30 font-Roboto flex flex-col space-y-1 relative">
    <div className={`absolute -top-16 right-3 w-72 border border-primary/40 rounded bg-white p-1 ${show ? "block" : "hidden"}`}>
      <h1 className="p-2">Do you want to delete this user?</h1>
      <div className="flex-grow flex items-center justify-end space-x-5"><button className="px-5 border border-primary/30 text-secoundary" onClick={() => setShow(false)}>No</button><button className="px-5 border border-primary/30 text-[red]" onClick={() => deleteHandler(item.userId)}>Yes</button></div>
    </div>
    <div className="flex items-center justify-between">
    <Moment fromNow className="text-sm italic">{item.timestamp?.toDate()}</Moment>
    <span className="text-primary/30 hover:text-primary/80 rounded cursor-pointer text-xl" onClick={() => setShow(true)}><MdDelete /></span>
    </div>
  <div className="flex items-center justify-between">
  <h1><span className="font-bold">Location:</span> {item.city}, {item.country_name}</h1>
   
  </div>

  <p className="flex items-center justify-between"><span><span className="font-bold">View :</span> {item.userVew}</span></p>
  <div className="flex items-center justify-between">
  <p className="font-normal"><span className="font-bold">IP: </span><span>{item.IP}</span></p>
  <p><span className="font-bold">State :</span> {item.state}</p>
  </div>
</div>
  )
}

export default UserTrakingInfo