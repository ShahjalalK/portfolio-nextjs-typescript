import { messageType } from "@/atom/messageState";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import ServiceMessageText from "./serviceMessageText";
import PreviewServiceMessage from "./previewServiceMessage";

type Props = {
  item : messageType
};

const ClientMessage = ({item}: Props) => {
  return (
    <div className=" flex justify-end items-end flex-col space-y-1">
      <div className="flex flex-col space-y-0 justify-end items-end">
     {item.serviceTitle && <PreviewServiceMessage item={item}/>} 
      <div className="text-sm bg-secoundary/10 text-white/80 hover:text-white/90 p-2 rounded-l-md rounded-tr-md mr-5 font-normal border border-white/30 flex flex-col space-y-1 justify-end items-end max-w-[16rem]">
        <p className="text-right">{item.message}</p>
        {item.media && <div >
          <Link href={item.media} target="_blank" download={true}><Image src={item.media} alt={item.name} width={350} height={350} className="w-full h-auto"/></Link>
        </div>}
      </div>
      </div>
      <div className="flex items-center space-x-1">
        <Moment fromNow className="text-xs text-white/30 select-none">{item.timestamp?.toDate()}</Moment>
      <div className="w-7 h-7 rounded-full border border-white/20 relative select-none t-10">
        <span className="text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white/80">
          {item.name[0]}
        </span>
      </div>
      </div>
    </div>
  );
};

export default ClientMessage;
