import { allMessageType, messageContentState, messageType, myMessageState, userMessageState } from '@/atom/messageState';
import Client from '@/components/my-message-deshboard/client';
import Login from '@/components/my-message-deshboard/login';
import Me from '@/components/my-message-deshboard/me';
import { auth, firestore } from '@/firebase.config';
import { doc, getDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillEmojiSmileFill, BsFillSendFill } from 'react-icons/bs';
import {ImAttachment} from 'react-icons/im'
import { useRecoilState, useRecoilValue } from 'recoil';
import MessageApi from '@/firebaseApi/messageApi';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import MessageHandlerApi from '@/firebaseApi/messageHandlerApi';
import Emoji from '@/components/messanger/emoji';
import {motion} from 'framer-motion'
import AllClient from '@/components/my-message-deshboard/allClient';
import { GetServerSideProps } from 'next';
import SafeJsonStringfy from 'safe-json-stringify'
import MyMessageHeader from '@/components/my-message-deshboard/myMessageHeader';
import { Circles } from 'react-loader-spinner';
import { fetchBasicInfoSection } from '@/untils/fetchSanity';
import { basicInfoState, basicInfoType } from '@/atom/santyType';




type Props = {
  userData : allMessageType,
  id : string
  BasicInfoData : basicInfoType[]
}



const MessageId = ({userData, id, BasicInfoData}: Props) => {

//   const router = useRouter()
 
// const userrouterId = router.query.pid as string

  const [user, loading, error] = useAuthState(auth);
  const [showEmoji, setShowEmoji] = useState(false)

 
  const [userState, setUserState] = useRecoilState<allMessageType>(userMessageState)

  const myMessage = useRecoilValue<messageType[]>(myMessageState)
  
  const [message, setMessage] = useRecoilState(messageContentState)
  const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)


  useEffect(() => {
      setBasicInfo(
        BasicInfoData
      )
     }, [basicInfo])
  
useEffect(() => {
  setUserState(userData as allMessageType)
 }, [userData])


 const {GetClientMessage, getMyMessage, getAllUsers} = MessageApi()
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
  getMyMessage(id)
 
}, [firestore])

 useEffect(() => {
   GetClientMessage()
 }, [firestore])



const onKeyPressHandle = (e: any) => {  
  
    if(e.keyCode == "13"){
      myMessageHandler(id) 
    }
    setShowEmoji(false)
    
    
  
};

useEffect(() => {
  getAllUsers()
  
}, [firestore])



  return (
    <div className="my-[110px] max-w-6xl mx-auto">
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
    </div>

    :

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      
  
    <AllClient userId={id} />
    

     <div className="font-Roboto lg:col-span-2 flex flex-col  max-w-xl">
       <MyMessageHeader />
       <div className="relative mb-10">
       <div className=" flex flex-col space-y-6 pb-28 pt-5 h-[450px] overflow-y-scroll overflow-x-hidden p-3 border border-primary/30 rounded rounded-t-none relative">

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
     <div  className={`absolute bottom-16 right-3 w-[245px] rounded-lg z-20 bg-[transparent] ${showEmoji ? "pointer-events-auto" : "pointer-events-none"} `}>
      <div className={`relative h-52 overflow-y-hidden z-20  ${showEmoji ? "pointer-events-auto" : "pointer-events-none"}`}>
      <motion.div initial={{y: "150%"}} animate={{ y : showEmoji ? 0 : "150%"}} transition={{duration : 0.5}} className="absolute top-0 right-0 flex items-end justify-end z-20">
    <Emoji />
    </motion.div >
      </div>
      </div>
     <form onSubmit={submitHandler}  className="absolute flex-grow bottom-0 left-0 w-full p-3 bg-primary border-t border-t-secoundary rounded-b ">
      {message.previewImage &&  
      <div className="w-32 h-20 overflow-x-hidden overflow-y-scroll relative ">
         <Image src={message.previewImage} width={550} height={550} className="w-32 h-auto" alt='preview' />
         <AiOutlineClose className=" absolute top-2 right-2 text-xl shadow shadow-secoundary text-white/50 z-20 cursor-pointer" onClick={closeImage} />
       </div>
       }
         <div className="flex items-end space-x-5">
         <textarea onKeyPress={onKeyPressHandle} value={message.content} onChange={(e) => setMessage((prev) => ({
           ...prev,
           content : e.target.value
         }))} placeholder="Start Typing..." className="flex-grow border border-primary/30 rounded p-1 focus:outline-none min-h-[50px] max-h-32 bg-white/5 text-secoundary" ></textarea>
         <div className="flex items-center space-x-3">
           <BsFillEmojiSmileFill className={`cursor-pointer text-2xl text-white/50 hover:text-secoundary ${showEmoji && "!text-secoundary"}`} onClick={() => setShowEmoji(!showEmoji)} />
           <div>
             <label htmlFor="atachId">
             <ImAttachment className="cursor-pointer text-2xl text-white/50 hover:text-secoundary" />
             </label>
             <input onChange={changeHanderImage} type="file" accept='image/*' id='atachId' className="hidden" />
            
           </div>
           {(message.content.length > 0 || message.previewImage) && <button type="submit" className="text-secoundary/80 hover:text-secoundary text-2xl"><BsFillSendFill /></button>}
           
         </div>
         </div>
       </form>
       </div>
    
     </div>
  </div>

        }
      
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
    </div>

    :

    <Login />
      }
      
      </>
    
    
     
    
    }
    
    </div>
   
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.pid as string
  const userDocRef = doc(firestore, "users", id)  
  const userData = await getDoc(userDocRef)
  const BasicInfoData = await fetchBasicInfoSection()
 
  return { props: {
    userData : userData.exists() ? JSON.parse(SafeJsonStringfy({id: userData.id, ...userData.data()})) : "",
    id,
    BasicInfoData
    } }
}


export default MessageId
