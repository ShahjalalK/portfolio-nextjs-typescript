import React from 'react'
import {motion} from 'framer-motion'
import { CgMenuGridR } from 'react-icons/cg'
import { Link } from 'react-scroll'
import Image from 'next/image'

type Props = {}

const Portfolio = (props: Props) => {
 
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}}  id="portfolio" className="section-padding">
             <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><CgMenuGridR className="text-lg text-secoundary/75" /> <span className="text-sm">PORTFOLIO</span></motion.span>
             <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
            Featured <span className="text-secoundary">Projects</span>
            </motion.h1>

            <div  className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                 

                 <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className="  group lg:col-span-2 cursor-pointer">
                  
                  <div className="relative">
                  <div className="absolute bottom-3 left-5 flex items-center space-x-2">
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">NextJS</span>
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">Farmar</span>
                    <span className="bg-white transition-all duration-75 ease-in text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm">Firebase</span>
                  </div>
                  <Image src="/portfolio1.jpg"  alt='portfolio' width={550} height={550} className="w-full rounded-3xl"/>
                  </div>
                  <p className="text-xl group-hover:underline text-white my-5  underline-offset-8">Hinterland - Real Estate Site Redesign</p>
                 </motion.div>


                 <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className="  group cursor-pointer">
                  
                  <div className="relative">
                  <div className="absolute bottom-3 left-5 flex items-center space-x-2">
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">NextJS</span>
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">Farmar</span>
                    <span className="bg-white transition-all duration-75 ease-in text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm">Firebase</span>
                  </div>
                  <Image src="/portfolio1.jpg"  alt='portfolio' width={550} height={550} className="w-full rounded-3xl md:h-72"/>
                  </div>
                  <p className="text-xl group-hover:underline text-white my-5  underline-offset-8">Moonex WordPress Theme</p>
                 </motion.div>

                 <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className="  group cursor-pointer">
                  
                  <div className="relative">
                  <div className="absolute bottom-3 left-5 flex items-center space-x-2">
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">NextJS</span>
                    <span className="bg-white text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">Farmar</span>
                    <span className="bg-white transition-all duration-75 ease-in text-[#222] group-hover:bg-primary group-hover:text-white font-medium px-3 py-2 rounded-full text-sm">Firebase</span>
                  </div>
                  <Image src="/portfolio1.jpg"  alt='portfolio' width={550} height={550} className="w-full rounded-3xl md:h-72"/>
                  </div>
                  <p className="text-xl group-hover:underline text-white my-5  underline-offset-8">Taskly Dashboard</p>
                 </motion.div>
                 
                
            </div>
           
           
        </motion.section>
  )
}

export default Portfolio