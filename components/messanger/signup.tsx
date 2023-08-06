
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
      //  location.reload()
      
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
    <motion.form initial={{opacity : 0, y: -100}} animate={{opacity : messageSignupValue.open ? 1 : 0, y : messageSignupValue.open ? 0 : -100}} transition={{duration : 0.5}} onSubmit={submitHandler} className={` max-w-xs bg-[transparent] p-1 border border-white/30 rounded  flex-col space-y-3  ${messageSignupValue.open ? "flex" : "hidden"} `}>
    <div>
    <p className="text-sm text-white/60 font-Roboto">Hey there, please leave your details so we can contact you even if you are no longer on the site.</p>
    </div>
     <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className="w-full p-1 placeholder:text-sm text-sm text-white/80 bg-[transparent] border-b border-b-white/30 focus:outline-none font-thin" required /> 
     <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Email'  className="w-full p-1 placeholder:text-sm text-white/80 bg-[transparent] border-b border-b-white/30 focus:outline-none font-thin text-sm" required />
     <button type='submit'  className="text-white/50 px-5 py-1 rounded font-thin text-sm hover:text-secoundary flex items-center justify-center">{loading ? <ThreeDots 
height="15" 
width="45" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
visible={true}
 /> : "Submit"} </button>
  </motion.form>
  )
}

export default Signup