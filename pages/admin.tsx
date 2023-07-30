import { allMessageState, allMessageType } from '@/atom/messageState';
import Login from '@/components/my-message-deshboard/login';
import MyMessage from '@/components/my-message-deshboard/myMessage';
import { auth, firestore } from '@/firebase.config';
import MessageApi from '@/firebaseApi/messageApi';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useMemo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Circles } from 'react-loader-spinner';
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
    <>
    {loading ? <div className="w-full flex items-center justify-center">
      <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div> : <MyMessage />} 
    
    
    </>
    
    
    :
    <>
{loading ? <div className="w-full flex items-center justify-center">
      <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div> : <Login />} 


</>

    
  
  }
    
   

   </section>
  )
}

export default MessageDesboard