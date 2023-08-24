import { basicInfoState, basicInfoType } from '@/atom/santyType'
import Image from 'next/image'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const HelloMessage = (props: Props) => {
  const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)
  return (
    <>
    {basicInfo.slice(0, 1).map((item) => (
         <div key={item._id} className=" flex justify-start items-start flex-col space-y-1 rounded max-w-xs">
                   
         <div className="whitespace-normal text-sm bg-[#D9D9D7]/10 p-2 rounded-r-md rounded-tl-md ml-5 font-normal text-white border border-white/30 flex flex-col -space-y-5 items-center">
         {/* <Image src="/hi.webp" alt='hello' width={300} height={300} className="w-32" /> */}
           <p>Hey there!👋 Welcome here. What can we help you with today?</p> 
           </div>                   
         <div className="w-6 h-6 relative">
         <Image src={item.myImage} width={50} height={50} alt="me" className="w-6 h-6 object-cover z-10 overflow-hidden rounded-full" />
         
         </div>
     </div>
    ))}
    </>
   
  )
}

export default HelloMessage