import { allMessageType, messageContentState, messageType, myMessageState, userCookieState, userMessageState } from '@/atom/messageState';
import Client from '@/components/my-message-deshboard/client';
import Login from '@/components/my-message-deshboard/login';
import Me from '@/components/my-message-deshboard/me';
import { v4 as uuidv4 } from 'uuid';
import { auth, firestore } from '@/firebase.config';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillEmojiSmileFill, BsFillSendFill } from 'react-icons/bs';
import {ImAttachment} from 'react-icons/im'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MessageApi from '@/firebaseApi/messageApi';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import MessageHandlerApi from '@/firebaseApi/messageHandlerApi';




type Props = {}

const MessageId = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

 
  const [userState, setUserState] = useRecoilState<allMessageType>(userMessageState)

  const myMessage = useRecoilValue<messageType[]>(myMessageState)
  
  const [message, setMessage] = useRecoilState(messageContentState)
  


 const router = useRouter()
 const id = router.query.pid as string



 const {GetClientMessage, getMyMessage} = MessageApi()
 const {myMessageHandler} = MessageHandlerApi()


 const changeHanderImage = (e : React.ChangeEvent<HTMLInputElement>) => {
  const currentFile = e.target.files as FileList
  setMessage((prev) => ({
    ...prev,
    media : currentFile[0],
    previewImage : currentFile[0] ? URL.createObjectURL(currentFile[0]) : ""
  }))
}


const closeImage = () => {
  setMessage((prev) => ({
    ...prev,
    media : {} as File,
    previewImage : ""
  }))
}
 


 const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault() 
  myMessageHandler(id) 
}


 useEffect(() => {
   GetClientMessage()
 }, [firestore])


useEffect(() => {
  const userQuery = query(collection(firestore, "users"), where("id", "==", id as string))
  onSnapshot(userQuery, (res) => {
    res.docs.map((item) => {
      setUserState(item.data() as allMessageType)
    })   
   })
}, [firestore])






useEffect(() => {
  getMyMessage(id)
 
}, [firestore])




  return (
    <div className="section-padding">
      {user?.email === "shahjalalkhan895@gmail.com" ? 
      
      <div className="max-w-2xl mx-auto font-Roboto">
        <div className="flex items-center space-x-2 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 "><span className="text-xl">{userState.name[0]}</span></div>
          <div className="flex flex-col -space-y-1">
            <h1 className="text-lg font-medium">{userState.name}</h1>
            <p className="text-sm">{userState.email}</p>
          </div>
        </div>
        <div className="relative mb-10">
        <div className=" flex flex-col space-y-6 pb-28 pt-5 h-[450px] overflow-y-scroll overflow-x-hidden p-3 border border-primary/30 rounded relative">

      {myMessage.map((item, index) => {
        if(item.timestamp == null){
          const audio = new Audio("/message-button.mp3")
            audio.play()
         }
        return(
         <>
          {item.id === "cca5740a-6dd6-4fa9-b4da-6598ef9e49da" ? (
            <Me item={item} id={id} key={index} />
          ) : (
            <Client item={item} id={id}  key={index} />
          )}
         
         </>
        )
      })}





        
        
       
      </div>
      <form onSubmit={submitHandler}  className="absolute flex-grow bottom-0 left-0 w-full p-3 bg-[#E7E8EA] border-t border-t-secoundary ">
       {message.previewImage &&  
       <div className="w-32 h-20 overflow-x-hidden overflow-y-scroll relative ">
          <Image src={message.previewImage} width={550} height={550} className="w-32 h-auto" alt='preview' />
          <AiOutlineClose className=" absolute top-2 right-2 text-xl shadow shadow-secoundary text-primary z-20 cursor-pointer" onClick={closeImage} />
        </div>
        }
          <div className="flex items-center space-x-5">
          <textarea value={message.content} onChange={(e) => setMessage((prev) => ({
            ...prev,
            content : e.target.value
          }))} placeholder="Start Typing..." className="flex-grow border border-primary/30 rounded p-1 focus:outline-none bg-[transparent] min-h-[50px] max-h-32" ></textarea>
          <div className="flex items-center space-x-5">
            <BsFillEmojiSmileFill className="cursor-pointer text-2xl text-primary/80 hover:text-primary/100" />
            <div>
              <label htmlFor="atachId">
              <ImAttachment className="cursor-pointer text-2xl text-primary/80 hover:text-primary/100" />
              </label>
              <input onChange={changeHanderImage} type="file" accept='image/*' id='atachId' className="hidden" />
             
            </div>
            <button type="submit" className="text-primary hover:text-secoundary text-2xl"><BsFillSendFill /></button>
          </div>
          </div>
        </form>
        </div>
     
      </div>

      : 
    
    <Login />
     
    
    }
    
    </div>
  )
}

export default MessageId