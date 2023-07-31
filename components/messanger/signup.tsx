
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

type Props = {}

const Signup = (props: Props) => {
  const messageSignupValue = useRecoilValue<messageSignupType>(messageSignupState)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const setCookieState = useSetRecoilState(userCookieState)
    const router = useRouter()
    const {messageHandler} = MessageHandlerApi()




    const addMessage = async (id : string) => {

      if(!email || !name){
        return
      }

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
        id,
        timestamp : serverTimestamp()       
       })

      setCookieState({
        email,
        name,
        id,
        timestamp : serverTimestamp() as any
       })
      //  location.reload()
      
      
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
    <motion.form initial={{opacity : 0, y: -100}} animate={{opacity : messageSignupValue.open ? 1 : 0, y : messageSignupValue.open ? 0 : -100}} transition={{duration : 0.5}} onSubmit={submitHandler} className={`max-w-xs bg-[transparent] p-1 border border-white/30 rounded  flex-col space-y-3  ${messageSignupValue.open ? "flex" : "hidden"} `}>
       <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className="w-full p-1 placeholder:text-sm text-sm text-white/80 bg-[transparent] border-b border-b-white/30 focus:outline-none font-thin" required /> 
       <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Email'  className="w-full p-1 placeholder:text-sm text-white/80 bg-[transparent] border-b border-b-white/30 focus:outline-none font-thin text-sm" required />
       <button type='submit'  className="text-white/50 px-5 py-1 rounded font-thin text-sm hover:text-secoundary">Submit</button>
    </motion.form>
  )
}

export default Signup