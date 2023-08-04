import React from 'react'
import { includeType, useIncudeState } from '@/atom/prichingTab'
import { BsChevronDown } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import {motion} from 'framer-motion'

type Props = {}

const IncludeIcon = (props: Props) => {
    const [includeValue, setIncludeValue] = useRecoilState<includeType>(useIncudeState)
  return (
    <div onClick={() => setIncludeValue((prev) => ({...prev, open:!includeValue.open}))} className="flex flex-grow items-center py-3 font-medium cursor-pointer text-info/90"><span className="flex-grow">What's Included</span> <motion.span initial={{rotate : "0deg"}} animate={{rotate : includeValue.open ? "180deg" : "0deg"}} transition={{duration : 0.1}}><BsChevronDown className="text-2xl text-primary/80" /></motion.span> </div>
  )
}

export default IncludeIcon