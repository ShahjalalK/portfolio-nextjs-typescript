import { messageContentState, messageContentType} from '@/atom/messageState'
import MessageHandlerApi from '@/firebaseApi/messageHandlerApi'


import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsEmojiSmile, BsFillEmojiSmileFill, BsFillSendFill } from 'react-icons/bs'
import { RiAttachment2 } from 'react-icons/ri'
import { useRecoilState} from 'recoil'
import Emoji from './emoji'


type Props = {  
  showEmoji : boolean,
  setShowEmoji: React.Dispatch<React.SetStateAction<boolean>>
}

const MessangerForm = ({showEmoji, setShowEmoji}: Props) => {
  const {messageHandler} = MessageHandlerApi()


  const [messageState, setMessageState] = useRecoilState<messageContentType>(messageContentState)

  const [messageHeight, setMessageHeight] = useState<string | number>();

  const chageHandlerMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!e.target.value) {
      setMessageHeight(20);
    }
    setMessageState((prev) => ({
      ...prev,
      content : e.target.value
    }))
    
  };

  const closeImage = () => {
    setMessageState((prev) => ({
      ...prev,
      media : {} as File,
      previewImage : ""
    }))
  }

  const changeHanderImage = (e : React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.target.files as FileList
    setMessageState((prev) => ({
      ...prev,
      media : currentFile[0],
      previewImage : currentFile[0] ? URL.createObjectURL(currentFile[0]) : ""
    }))
  }

  const onKeyPressHandle = (e: any) => {
    setMessageHeight(e.target.scrollHeight);
   
    
      if(e.keyCode == "13"){
        messageHandler(setMessageHeight)
      }
      setShowEmoji(false)
      
      
    
  };

  




 const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      messageHandler(setMessageHeight)
      setShowEmoji(false)
 }
  
  return (
    <form className=" absolute bottom-0 left-0 right-0 w-full  bg-primary  shadow shadow-secoundary p-3  border-t border-t-secoundary/30" onSubmit={submitHandler}>
      {messageState.previewImage && 
        <div className="rounded py-1 w-32 h-20 overflow-x-hidden overflow-y-scroll relative object-contain z-10">
        <Image src={messageState.previewImage} width={500} height={500} alt='content' className="w-32 object-fill"/>
        <AiOutlineClose className="absolute top-2 right-2 z-20 text-primary text-2xl cursor-pointer shadow shadow-secoundary bg-white/30" onClick={closeImage} />
      </div>
      }
     
      
                <div className="flex items-end flex-grow space-x-3 bg-primary z-50">
                <textarea style={messageHeight ? { height : `${messageHeight}px`} : { height : `${messageHeight}px`} } value={messageState.content}  placeholder="Write Message..." className="text-sm flex-grow bg-[transparent]  focus:outline-none max-h-28 min-h-[20px]  resize-none text-white " rows={1} onKeyUp={onKeyPressHandle} onChange={chageHandlerMessage} ></textarea>
               <div className="flex items-center space-x-3 ">
                {showEmoji ?
                <BsFillEmojiSmileFill className="cursor-pointer text-secoundary/80 hover:text-secoundary/100" onClick={() => setShowEmoji(false)}/>
                : 
                <BsEmojiSmile className="cursor-pointer text-white/50 hover:text-white/100" onClick={() => setShowEmoji(true)} />
              }
               
               
<div>
<label htmlFor="media"><RiAttachment2 className="cursor-pointer text-white/50 hover:text-white/100 text-xl" /></label>
<input type="file" accept='image/*' id='media' className="hidden" onChange={changeHanderImage} />
</div>


{messageState.content.length > 0 || messageState.previewImage ? <button type='submit'>
    <BsFillSendFill className="text-lg text-secoundary/95 hover:text-secoundary/100" /> 
</button> : ""}  




               </div>

                </div>
            </form>
  )
}

export default MessangerForm