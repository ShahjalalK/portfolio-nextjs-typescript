import { allMessageType, messageSignupState, messageSignupType, userCookieState } from '@/atom/messageState'
import { basicInfoState, basicInfoType } from '@/atom/santyType'
import Image from 'next/image'
import React from 'react'
import { useRecoilValue } from 'recoil'
import {motion} from 'framer-motion'

type Props = {}

const ContactMessage = (props: Props) => {
    const basicInfoValue = useRecoilValue<basicInfoType[]>(basicInfoState)
    const messageSignupValue = useRecoilValue<messageSignupType>(messageSignupState)
  return (
    <>
    {basicInfoValue.slice(0, 1).map((me) => (
         <motion.div initial={{display : "none"}} animate={{display : messageSignupValue.open ? "block" : "none"}} transition={{delay : 4}} key={me._id} className=" flex justify-start items-start flex-col space-y-1 rounded">
                   
         <div className="whitespace-normal text-sm bg-[#D9D9D7]/10 p-2 rounded-r-md rounded-tl-md ml-5 font-normal text-white border border-white/30 flex flex-col space-y-1">
        <p>Hey there, please leave your details so we can contact you even if you are no longer on the site.</p>          
           </div>
         <div className="flex items-center space-x-1">
         <div className="w-6 h-6 relative flex items-center space-x-1">
          
          <Image src={me.myImage} width={50} height={50} alt="me" className="w-6 h-6 object-cover overflow-hidden rounded-full" />
          
          </div>
        
         </div>
     </motion.div>
    ))}
    </>
  )
}

export default ContactMessage