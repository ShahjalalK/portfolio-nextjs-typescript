import { pricingNameType } from '@/atom/santyType'
import { PricingType } from '@/atom/serviceType'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiRevision } from 'react-icons/bi'
import {TbArrowNarrowRight} from 'react-icons/tb'
import { useRecoilState } from 'recoil'
import {motion} from 'framer-motion'
import { includeType, useIncudeState } from '@/atom/prichingTab'
import { BsChevronDown } from 'react-icons/bs'
import IncludeIcon from './includeIcon'

type Props = {
  pricingInfo : pricingNameType[]
}

const Basic = ({pricingInfo}: Props) => {
  const [includeValue, setIncludeValue] = useRecoilState<includeType>(useIncudeState)
  return (
    <div>
        <h1 className="text-2xl font-bold">${pricingInfo[0].price}</h1>
        <p><span className="font-bold">Save up</span> to {pricingInfo[0].save}% with <span className="text-secoundary">Subscribe to Save</span></p>
        <p className="mt-5"><span className="font-bold">{pricingInfo[0].contentBold}</span> {pricingInfo[0].content}</p>

        <div className="mt-10">
    <div className="flex items-center space-x-5">
   <p className="flex items-center space-x-2"><AiOutlineClockCircle className="text-xl" /> <span className="font-bold">{pricingInfo[0].delevery} Day Delivery</span></p>
   {pricingInfo[0].rivishion && <p className="flex items-center space-x-2"><BiRevision className="text-xl" /> <span className="font-bold">Unlimited Revisions</span></p>}
   </div>
   <IncludeIcon />
    {includeValue.open ? 
    <>
    {pricingInfo[0].serviceInclude.map((item, index) => (
      <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5, staggerChildren : 0.5}} key={index} className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>{item}</span></motion.p>
    ))}
    </>
    : 
    ""
  }
    
   
    </div>

        <Link href={pricingInfo[0].gigUrl} target="_blank" className="flex flex-grow p-3 items-center bg-primary hover:bg-primary/90 text-white rounded-lg mt-5 text-sm w-full "><span className="flex-grow text-center">Continue with Fiverr</span> <TbArrowNarrowRight className="text-xl" /></Link>
    </div>
  )
}

export default Basic