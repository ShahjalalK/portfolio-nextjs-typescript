import { allMessageType, userCookieState } from '@/atom/messageState'
import { basicInfoState, basicInfoType } from '@/atom/santyType'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import React from 'react'
import Moment from 'react-moment'
import { useRecoilState, useRecoilValue } from 'recoil'

type Props = {}

const FirstMessage = (props: Props) => {
    const basicInfoValue = useRecoilValue<basicInfoType[]>(basicInfoState)
    
  const [cookeValue, setCookeValue] = useRecoilState<allMessageType>(userCookieState)
  const cookie = parseCookies()
  
  const userCooke = cookie.user ? JSON.parse(cookie.user) : ""
  return (
    <>
    {basicInfoValue.slice(0, 1).map((me) => (
         <div key={me._id} className=" flex justify-start items-start flex-col space-y-1 rounded">
                   
         <div className="whitespace-normal text-sm bg-[#D9D9D7]/10 p-2 rounded-r-md rounded-tl-md ml-5 font-normal text-white border border-white/30 flex flex-col space-y-1">
        <p>Welcome to <span className="capitalize">{cookeValue.name && userCooke.name}</span>! If you have any questions about our service or need any help, feel free to let us know, and we will reply to you within 30 minutes.</p>          
           </div>
         <div className="flex items-center space-x-1">
         <div className="w-6 h-6 relative flex items-center space-x-1">
          
          <Image src={me.myImage} width={50} height={50} alt="me" className="w-6 h-6 object-cover overflow-hidden rounded-full" />
          
          </div>
        
         </div>
     </div>
    ))}
    </>
  )
}

export default FirstMessage