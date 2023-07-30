import React from 'react'
import {motion} from 'framer-motion'
import { CgMenuGridR } from 'react-icons/cg'
import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import { portfolioSectionType } from '@/atom/santyType'


type Props = {
  portfolioSectionData : portfolioSectionType[]
}

const Portfolio = ({portfolioSectionData}: Props) => {
  

  // const PorfolioInfo = [
  //   {
  //     id : uuidv4(),
  //     title : "Linkedin - Social Media Application        ",
  //     targetLink : "https://linkedinin.vercel.app",
  //     media : "/portfolio1.jpg",
  //     className : "lg:col-span-2",
     
  //     pogramName : [
  //       {
  //         id : uuidv4(),
  //        name :  "NextJS"
  //       },
  //       {
  //         id : uuidv4(),
  //         name :  "Farmar Motion"
  //        },
  //        {
  //         id : uuidv4(),
  //         name :  "Firebase"
  //        }
  //     ]
  //   },
  //   {
  //     id : uuidv4(),
  //     title : "Hinterland - Real Estate Site Redesign",
  //     targetLink : "/",
  //     media : "/portfolio1.jpg",
  //     mediaClassName : "h-72",
  //     pogramName : [
  //       {
  //         id : uuidv4(),
  //        name :  "NextJS"
  //       },
  //       {
  //         id : uuidv4(),
  //         name :  "Farmar Motion"
  //        },
  //        {
  //         id : uuidv4(),
  //         name :  "Firebase"
  //        }
  //     ]
  //   },
  //   {
  //     id : uuidv4(),
  //     title : "Hinterland - Real Estate Site Redesign",
  //     targetLink : "/",
  //     media : "/portfolio1.jpg",
  //     mediaClassName : "h-72",
  //     pogramName : [
  //       {
  //         id : uuidv4(),
  //        name :  "NextJS"
  //       },
  //       {
  //         id : uuidv4(),
  //         name :  "Farmar Motion"
  //        },
  //        {
  //         id : uuidv4(),
  //         name :  "Sanity"
  //        }
  //     ]
  //   }
  // ]
 
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}}  id="portfolio" className="section-padding">
             <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><CgMenuGridR className="text-lg text-secoundary/75" /> <span className="text-sm">PORTFOLIO</span></motion.span>
             <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
            Featured <span className="text-secoundary">Projects</span>
            </motion.h1>

            <div  className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                 
                 {portfolioSectionData.map((item) => (
                    
                     <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className={`group  cursor-pointer ${item.className && "lg:col-span-2"}`} key={item._id}>
                   <Link href={item.targetLink} target="_blank">
                  <div className="relative">
                  <div className="absolute bottom-3 left-5 flex items-center space-x-2">
                    {item.programName.map((program, index) => (
                     <span key={index} className="bg-primary text-white group-hover:bg-white group-hover:text-[#222] font-medium px-3 py-2 rounded-full text-sm transition-all duration-75 ease-in">{program}</span>
                    ))}
                    
                  </div>
                  <Image src={item.media}  alt='portfolio' width={550} height={550} className={`w-full rounded-3xl ${item.imageHeight && "h-72"}`}/>
                  </div>
                  <p className="text-xl group-hover:underline text-white my-5  underline-offset-8">{item.title}</p>
                  </Link>
                 </motion.div>
                    
                 ))}

                
            </div>
           
           
        </motion.section>
  )
}

export default Portfolio