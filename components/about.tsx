import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { BsPhone, BsMap } from 'react-icons/bs'
import { RiUserShared2Fill, RiUserShared2Line } from 'react-icons/ri'
import {TfiEmail} from 'react-icons/tfi'
import {BiDownload} from 'react-icons/bi'
import Link from 'next/link'
import Testimonials from './testimonials'
import { aboutSectionType, testimonialSectionType } from '@/atom/santyType'
import parse from 'html-react-parser';



type Props = {
  aboutSectionData : aboutSectionType[]
  testiMonailSectionData : testimonialSectionType[]
}




const About = ({aboutSectionData, testiMonailSectionData}: Props) => {
  console.log(aboutSectionData[0].uploadCV)
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="about" className="section-padding">
    <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><AiOutlineUser className="text-lg text-secoundary/75" /> <span className="text-sm uppercase">About</span></motion.span>
    <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white/80  md:mr-32 leading-[32px] italic">Nice to meet you!
</motion.p>
    <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title text-secoundary">WELCOME TO... </motion.h1>
    
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start mt-10">
      
      <div className="lg:col-span-2">
        <div>
        <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white/80 font-normal leading-[32px]">{parse(aboutSectionData[0].description)}</motion.p>
        <div className="mt-5 flex flex-col space-y-3">
            <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-10">
              <Link href={`tel:${aboutSectionData[0].phone}`} className="flex items-center space-x-2 text-white/80 font-medium text-sm"> <BsPhone className="text-lg" /> <span>{aboutSectionData[0].phone}</span></Link>
              <p className="flex items-center space-x-2 text-white/80 font-medium text-sm"> <RiUserShared2Line className="text-lg" /> <span>{aboutSectionData[0].name}</span></p>
            </motion.div>

            <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-10">
              <Link href={`mailto:${aboutSectionData[0].email}`} className="flex items-center space-x-2 text-white/80 font-medium text-sm"> <TfiEmail className="text-lg" /> <span>{aboutSectionData[0].email}</span></Link>
              <p className="flex items-center space-x-2 text-white/80 font-medium text-sm"> <BsMap className="text-lg" /> <span>{aboutSectionData[0].country}</span></p>
            </motion.div>
        </div>
        </div>
        <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="py-7 text-white/20">
          <hr />
        </motion.div>
        <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl text-secoundary">{aboutSectionData[0].experienceYears}+</h1>
              <p className="text-white/80">Years experience...</p>
            </div>
            <p className="text-white/80 font-light text-sm">{parse(aboutSectionData[0].experience)} </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl text-secoundary">{aboutSectionData[0].clientNumber}+</h1>
              <p className="text-white/80">Clients
Worldwide...</p>
            </div>
            <p className="text-white/80 font-light text-sm">{parse(aboutSectionData[0].client)}</p>
          </div>
          
        </motion.div>
        
      </div>

      <div className="flex flex-col space-y-4">
        <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="h-52 w-52 rounded-full object-cover overflow-hidden mx-auto">
        <Image src={aboutSectionData[0].aboutImage} width={450} height={450} alt='about-banner' className="w-52 object-cover" />
        </motion.div>
        <div className="flex flex-col space-y-1">
        <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className=" uppercase text-2xl text-secoundary font-bold text-center">{aboutSectionData[0].name}</motion.h1>
        <motion.h3 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className=" text-lg text-white/80 text-center">{aboutSectionData[0].title}</motion.h3>
        </div>
       <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}>
       <Link href={aboutSectionData[0].uploadCV} target="_blank" download={true}  className="button py-2 flex items-center justify-center"><i></i><span className="flex items-center space-x-2"><span>Download CV</span> <BiDownload className="text-xl" /></span></Link>
       </motion.div>
      </div>
      
  </div>

<Testimonials testiMonailSectionData={testiMonailSectionData} />

</motion.section>
  )
}

export default About