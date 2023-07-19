import { allMessageState, allMessageType } from '@/atom/messageState';
import Login from '@/components/my-message-deshboard/login';
import MyMessage from '@/components/my-message-deshboard/myMessage';
import { auth, firestore } from '@/firebase.config';
import MessageApi from '@/firebaseApi/messageApi';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useMemo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';



type Props = {}

const MessageDesboard = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);


  const  setAllUserState = useSetRecoilState<allMessageType[]>(allMessageState)

  const {GetClientMessage} = MessageApi()


useEffect(() => {
  GetClientMessage()
}, [firestore])
  


  
 
useEffect(() => {
  const queryUsers = query(collection(firestore, "users"), orderBy("timestamp", "desc"))
  onSnapshot(queryUsers, (snapshot) => {
    setAllUserState(snapshot.docs.map((message : any) => {
     return {...message.data() }
   }))
  })
}, [firestore])

  return (
   <section className="section-padding ">
    {user?.email === "shahjalalkhan895@gmail.com" ? 
    
    <MyMessage />
    
    :

    <Login />
  
  }
    
   

   </section>
  )
}

export default MessageDesboard