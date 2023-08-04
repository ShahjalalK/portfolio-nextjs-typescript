import React, { useState, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { motion } from "framer-motion";
import { LiaAngleDownSolid } from "react-icons/lia";
import MessangerForm from "./messangerForm";
import MmyMessage from "./myMessage";
import ClientMessage from "./clientMessage";
import MessageHeader from "./messageHeader";
import Signup from "./signup";
import {parseCookies} from 'nookies'
import { allMessageType, clientMessageState, messageContentState, messageSignupState, userCookieState } from "@/atom/messageState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import HelloMessage from "./helloMessage";
import Emoji from "./emoji";


type Props = {};

const Messanger = (props: Props) => {
  const messageValue = useRecoilValue(clientMessageState)
  const [showMessage, setShowMessage] = useState<boolean>(false);


  const [cookeValue, setCookeValue] = useRecoilState<allMessageType>(userCookieState)
const cookie = parseCookies()

const userCooke = cookie.user ? JSON.parse(cookie.user) : ""

const [showEmoji, setShowEmoji] = useState<boolean>(false)



const shwoFunc = async (showMessage : boolean) => {
  const audio = new Audio()
  audio.src = "/message.wav"
  audio.autoplay = true
  setShowMessage(true);
   
}


  useEffect(() => {
    let messageOpen = setTimeout(() => { 
      if(showMessage === false ){
        shwoFunc(showMessage)
      }
     
     
    }, 5000);
    return () => clearTimeout(messageOpen);
  }, []);

  return (
    <div className="fixed bottom-5 right-3 z-50 flex flex-col space-y-5 justify-end items-end font-Roboto ">
      
      <motion.div
        initial={{ display: "none" }}
        animate={{ display: showMessage ? "block" : "none" }}
        transition={{ duration: 0.5 }}
        className="rounded-xl shadow-2xl shadow-secoundary w-[340px] md:w-[400px] overflow-hidden relative"
      >
        <MessageHeader />
        <div className="w-full h-[350px] md:h-[400px] mb-10  bg-[#1b2137] overflow-y-auto overflow-x-hidden flex flex-col space-y-4 p-3 py-5 border border-primary ">
       
        {!userCooke.email &&  !cookeValue.email  &&  <Signup />}
        
       
        
          {messageValue.map((item) => {
            if(item.timestamp == null){
             const audio = new Audio("/message-button.mp3")
               audio.play()
            }
           
            return(
              <>
               {item.id === "cca5740a-6dd6-4fa9-b4da-6598ef9e49da" ?
             <MmyMessage item={item} key={item.messageId} /> 
             :
             <ClientMessage item={item} key={item.messageId}/>
            }
        
              </>
            )
          })}
         
          <HelloMessage />
          
        
        
        </div>
       <div  className={`absolute bottom-10 right-3 w-[245px] rounded-lg z-20 bg-[transparent] ${showEmoji ? "pointer-events-auto" : "pointer-events-none"} `}>
       <div className={`relative h-52 overflow-y-hidden z-20  ${showEmoji ? "pointer-events-auto" : "pointer-events-none"}`}>
       <motion.div initial={{y: "150%"}} animate={{ y : showEmoji ? 0 : "150%"}} transition={{duration : 0.5}} className="absolute top-0 right-0 flex items-end justify-end z-20">
     <Emoji />
     </motion.div >
       </div>
       </div>
        <MessangerForm showEmoji={showEmoji} setShowEmoji={setShowEmoji} />
      </motion.div>

      <motion.div
          onClick={() => setShowMessage(!showMessage)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-primary border-2 border-white/80 shadow-2xl shadow-secoundary relative cursor-pointer "
        >
          {showMessage ? (
            <LiaAngleDownSolid
              color="white"
              fill="#fff"
              className="text-white file:text-white text-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
          ) : (
            <AiOutlineMessage className="text-white  text-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
          )}
        </motion.div>
    </div>
  );
};

export default Messanger;
