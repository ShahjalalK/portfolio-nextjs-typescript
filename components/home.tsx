import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { homeSectionType } from '@/atom/santyType'
import parse from 'html-react-parser';



type Props = {
  homeSectionData : homeSectionType[]
}

const Home = ({homeSectionData}: Props) => {
 
  return (
    
        <motion.section id="home" initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} className=" section-padding mb-10">
             <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><AiOutlineHome className="text-lg text-secoundary/75" /> <span className="text-sm">INTRODUCE</span></motion.span>
             <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="title" >{parse(homeSectionData[0].title)} </motion.h1>
           
 <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white/80 mt-5 md:mr-32 leading-[32px]">{homeSectionData[0].subtitle}</motion.p>           
        </motion.section>
  )
}

export default Home