
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import {parseCookies} from 'nookies'
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { messageSignupState, messageSignupType, userCookieState } from '@/atom/messageState';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'
import MessageHandlerApi from '@/firebaseApi/messageHandlerApi';
import { ThreeDots } from 'react-loader-spinner';

type Props = {}

const Signup = (props: Props) => {
  const messageSignupValue = useRecoilValue<messageSignupType>(messageSignupState)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const setCookieState = useSetRecoilState(userCookieState)
    const router = useRouter()
    const {messageHandler} = MessageHandlerApi()
    const [loading, setLoading] = useState(false)



    const addMessage = async (id : string) => {

      if(!email || !name) return

      

      setLoading(true)

      

     Cookies.set("user", JSON.stringify({
        email,
        name,
        id,
        timestamp : serverTimestamp()        
       }), { expires: 365 })




       const docRef = doc(firestore, `users/${id}`)
      await setDoc(docRef, {
        email,
        name,
        emailProvider : true,
        id,
        timestamp : serverTimestamp()       
       })

      setCookieState({
        email,
        name,
        emailProvider : true,
        id,
        timestamp : serverTimestamp() as any
       })
     
      
      setLoading(false)
    }

    const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
      await addMessage(uuidv4())
     
      if(router.pathname == "/"){
        router.push("/service/clickable-email-signature")
      }else{
        router.push("/")
      }
      
    }





   
   
   
  return (
    <motion.div  initial={{opacity : 0, y: -100}} animate={{opacity : messageSignupValue.open ? 1 : 0, y : messageSignupValue.open ? 0 : -100}} transition={{duration : 0.5}} className={` ${messageSignupValue.open ? "flex" : "hidden"}`} >
      <div className="messageContactBox"> 
      <span className='borderLine'></span>       
      <form  onSubmit={submitHandler}>
    
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required /> 
     
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Email'  required />
     
     <button type='submit' className={`${name && email && "active"}`}>{loading ? <ThreeDots 
height="15" 
width="45" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
visible={true}
 /> : "Submit"} </button>
  </form>
    </div>
    </motion.div>
  )
}

export default Signup