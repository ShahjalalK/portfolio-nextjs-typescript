import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiFillHeart, AiFillStar} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { messageOpenSate, messageOpenType } from "@/atom/messageState";
import { servicMessageState, serviceMessageType, serviceSectionType } from "@/atom/santyType";
import Link from "next/link";


type Props = {
  service : serviceSectionType
};

const Package = ({service}: Props) => {
  const [messageOpen, setMessageOpen] = useRecoilState<messageOpenType>(messageOpenSate)
  const [serviceMessage, setServiceMessage] = useRecoilState<serviceMessageType>(servicMessageState)
const [love, setLove] = useState(false)
 
  const router = useRouter()
  const messageHandler = () => {
    setMessageOpen((prev) => ({...prev, open : true, gigLink : true})) 
    setServiceMessage((prev) => ({
      ...prev,
      serviceTitle : service.serviceTitle,
      searchDescription : service.searchDescription,   
      serviceImage : service.serviceImage,
      orderLink : service.orderLink
  
    }))
  }
  const handleLove = () => {
   
   if(!love){
    setMessageOpen((prev) => ({...prev, open : true, gigLink : true})) 
    setServiceMessage((prev) => ({
      ...prev,
      serviceTitle : service.serviceTitle,
      searchDescription : service.searchDescription,   
      serviceImage : service.serviceImage,
      orderLink : service.orderLink
  
    }))
   }
   setLove(!love)
  }
  return (
    <div className=" col-span-1">
      <div className="md:sticky top-[100px] mb-20 flex flex-col space-y-2">
        <div className="border border-info/20 flex flex-col space-y-2 items-center justify-center p-5 relative font-Roboto rounded">
          <span className="border px-3 rounded-full border-[#19A463] text-[#19A463] flex items-center space-x-1 absolute top-10 right-5"><span className="w-[3px] h-[3px] rounded-full bg-[#19A463]"></span><span>Online</span></span>
          <div className="flex items-center space-x-1 absolute top-10 left-5">
          <span onClick={handleLove} className="text-2xl text-info/40 cursor-pointer hover:text-info/90"><HiMenuAlt2 /></span>
          <span onClick={handleLove} className={`text-2xl ${love ? "text-[#C51104]/80" : "text-info/40"}  cursor-pointer`}><AiFillHeart /></span>
          </div>
            <div className=" relative">
              <Image src="/myPhoto.webp" width={150} height={150} alt="shahjalal" className=" rounded-full w-32 object-cover" />

              <Image src="/lavel.png" width={100} height={100} className=" w-12 rounded-full absolute bottom-0 right-0" alt="lavel" />
              
              </div> 
              <div className="flex flex-col space-y-0 justify-center items-center">
              <h2 className="text-2xl font-bold text-info/90">Shahjalal Khan</h2> 
              <p className="text-info/80 text-base">Client Satisfaction is My only Goal</p>
              </div>
              <p className="flex items-center text-[#FF9529] text-2xl"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
              <div className="flex items-center space-x-2 pt-5">
                <button onClick={messageHandler} className="px-7 py-1 rounded border border-info/60 text-info/70 hover:bg-info/60 hover:text-white/80 hover:border-[transparent]">Contact Me</button>
                <Link href={service.orderLink} target="_blank" className="bg-[#19A463] hover:bg-[#0D8851] p-1 px-7 rounded text-white flex items-center space-x-1"><Image src="/fiverr.png" width={50} height={50} className="w-7 h-7 rounded-full" alt="f" /> <span>Order Now</span></Link>
              </div>
        </div>
        <div className="border border-info/20 rounded flex flex-col space-y-3 p-5">
        <h1 className="text-xl text-info/90 flex-grow">Description</h1>
          <div className=" h-[8rem] overflow-hidden overflow-y-scroll">
          <p>Hello, I am Shahjalal from Bangladesh. I am a professional full-stack web developer. I have good experience with HTML CSS typescript, firebase, and next js. Also good experience with email signatures and email templates. if you need this related work. You can give your job. I will do your job very quickly and very efficiently. ✔My only goal is to keep the client happy.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Package;
