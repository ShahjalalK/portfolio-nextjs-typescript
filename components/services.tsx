import React from 'react'
import {motion} from 'framer-motion'
import {RiServiceLine} from 'react-icons/ri'
import { FaBezierCurve, FaFileSignature } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { allServicState, serviceSectionType } from '@/atom/santyType'
import { useRecoilState } from 'recoil'


type Props = {
  
}

const Services = ({}: Props) => {
  const [allService, setAllService] = useRecoilState<serviceSectionType[]>(allServicState)
 
  const router = useRouter()

 
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="services" className="section-padding">
    <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><RiServiceLine className="text-lg text-secoundary/75" /> <span className="text-sm">SERVICES</span></motion.span>
    <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
    My <span className="text-secoundary">Specializations</span>
   </motion.h1>

   {allService.slice(0, 3).map((item) => (
      <motion.div  key={item._id} onClick={() => router.push(`/service/${item.ServicePath}`)} initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="service-pointerImage mt-10 block group border border-white/30 hover:border-secoundary transition-all duration-100 ease-in-out rounded-2xl p-10 cursor-pointer ">
      <div className="flex items-start flex-grow">
      <div className="flex-grow relative ">
        <h2 className="text-xl text-white">{item.serviceName}</h2>
       
        <p className="text-white/50 text-sm mt-2">{item.serviceTitle}</p>
      </div>
      <div className="text-3xl text-secoundary">
        {item.icon === "FaFileSignature" && <FaFileSignature />}
        {item.icon === "BsCodeSlash" && <BsCodeSlash />}
        {item.icon === "FaBezierCurve" && <FaBezierCurve />}
       
      </div>
      </div>
      <p className="text-white/75 group-hover:text-white text-xs mt-10 inline-block group-hover:underline" >{item.orderLenth}+ PROJECTS</p>
      
    </motion.div>
   ))}
  
</motion.section>
  )
}

export default Services