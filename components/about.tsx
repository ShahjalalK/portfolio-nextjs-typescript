import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {motion} from 'framer-motion'


type Props = {}




const About = (props: Props) => {
  
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="about" className="section-padding">
    <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><AiOutlineUser className="text-lg text-secoundary/75" /> <span className="text-sm uppercase">About</span></motion.span>
    <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title">Every great design begin with an even <span className="text-secoundary">better story</span></motion.h1>
    
  
   <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white/80 mt-5 md:mr-32 leading-[32px]">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</motion.p>


</motion.section>
  )
}

export default About