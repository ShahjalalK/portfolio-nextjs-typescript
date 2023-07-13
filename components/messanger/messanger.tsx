import React, { useState, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { motion } from "framer-motion";
import { LiaAngleDownSolid } from "react-icons/lia";
import MessangerForm from "./messangerForm";
import MmyMessage from "./myMessage";
import ClientMessage from "./clientMessage";
import MessageHeader from "./messageHeader";

type Props = {};

const Messanger = (props: Props) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [messageHeight, setMessageHeight] = useState<string | number>();
  const [message, setMessage] = useState<string>("");

  const handleMessage = (e: any) => {
    setMessageHeight(e.target.scrollHeight);
  };

  const chageHandlerMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!e.target.value) {
      setMessageHeight(20);
    }
    setMessage(e.target.value);
  };

  

  useEffect(() => {
    let messageOpen = setTimeout(() => {     
        const audio = new Audio("/message.wav")
       if(showMessage){
        audio.pause()   
       }else{
        audio.play()   
       }
        setShowMessage(true);
    }, 5000);
    return () => clearTimeout(messageOpen);
  }, []);

  return (
    <div className="fixed bottom-5 right-3 z-50 flex flex-col space-y-5 justify-end items-end font-Roboto ">
      
      <motion.div
        initial={{ display: "none" }}
        animate={{ display: showMessage ? "block" : "none" }}
        transition={{ duration: 0.5 }}
        className="rounded-xl shadow-2xl shadow-secoundary w-[95%] md:w-[400px] overflow-hidden relative"
      >
        <MessageHeader />
        <div className="w-full h-[350px] md:h-[400px] mb-10  bg-[#c7c7ca] overflow-y-auto overflow-x-hidden flex flex-col space-y-3 p-3 py-5">
          <MmyMessage />
          <ClientMessage />
         
        </div>

        <MessangerForm
          messageHeight={messageHeight}
          message={message}
          handleMessage={handleMessage}
          chageHandlerMessage={chageHandlerMessage}
        />
      </motion.div>

      <div>
        <motion.div
          onClick={() => setShowMessage(!showMessage)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-primary shadow-2xl shadow-secoundary relative cursor-pointer "
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
    </div>
  );
};

export default Messanger;
