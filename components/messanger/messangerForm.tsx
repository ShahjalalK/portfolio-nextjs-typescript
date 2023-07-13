import React from 'react'
import { BsFillEmojiSmileFill, BsFillSendFill } from 'react-icons/bs'
import { RiAttachment2 } from 'react-icons/ri'

type Props = {
    messageHeight : string | number | undefined,
    message : string,
    handleMessage : (e : any) => void,
    chageHandlerMessage : (e : React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MessangerForm = ({messageHeight, message, handleMessage, chageHandlerMessage}: Props) => {
  return (
    <form className=" absolute bottom-0 left-0 right-0 w-full  bg-white shadow shadow-secoundary p-3 flex items-end flex-grow space-x-3 border-t border-t-secoundary/30">
                <textarea style={messageHeight ? { height : `${messageHeight}px`} : { height : `${messageHeight}px`} }  placeholder="Type your message..." className="text-sm flex-grow bg-[transparent]  focus:outline-none max-h-28 min-h-[20px]  resize-none " rows={1} onKeyUp={handleMessage} onChange={chageHandlerMessage} required ></textarea>
               <div className="flex items-center space-x-3 ">
               
<BsFillEmojiSmileFill className="cursor-pointer text-primary/50 hover:text-primary/100" />

{message.length > 0 ? <button>
    <BsFillSendFill className="text-lg text-secoundary/95 hover:text-secoundary/100" />
</button> : <RiAttachment2 className="cursor-pointer text-primary/50 hover:text-primary/100 text-xl" />}



               </div>

            </form>
  )
}

export default MessangerForm