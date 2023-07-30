import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {MdOutlineHistoryEdu} from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid';
import { frontEndSkillsSectionType } from '@/atom/santyType';

type Props = {
  frontEndSkillSectionData : frontEndSkillsSectionType[]
}

type Startar = {
  start : number;
  end : number
}

const SkillInfoDevelopment = [
  {
    id: uuidv4(),
    name : "NodeJS",
    parsent : 75, 
      
    skillColor : "#e40de0"

  },

  {
    id: uuidv4(),
    name : "Prisma",
    parsent : 55,
         
    skillColor : "#7027c3"

  },

  {
    id: uuidv4(),
    name : "socket.io",
    parsent : 65, 
        
    skillColor : "#fa6a00"

  }
  
 
]

const SkillInfoDesign = [
  {
    id: uuidv4(),
    name : "Html",
    parsent : 95,
    skillColor : "#fee800"
  },
  {
    id: uuidv4(),
    name : "CSS",
    parsent : 72,
    skillColor : "#ff00be"
  },
  {
    id: uuidv4(),
    name : "Javascript",
    parsent : 60,
    skillColor : "#06ccff"
  },
  {
    id: uuidv4(),
    name : "ReactJS",
    parsent : 65,
    skillColor : "#04fc43"
  },
  {
    id: uuidv4(),
    name : "NextJS",
    parsent : 75,
    skillColor : "#f46528"
  },
  {
    id: uuidv4(),
    name : "Firebase",
    parsent : 88,
    skillColor : "#75b005"
  },
  {
    id: uuidv4(),
    name : "Farmar Motion",
    parsent : 68,
    skillColor : "#ed020b"
  },
  {
    id: uuidv4(),
    name : "Sanity",
    parsent : 95,
    skillColor : "#7c144d"
  },
  {
    id: uuidv4(),
    name : "WIX",
    parsent : 89,
    skillColor : "#5416b4"
  }
]

const Skills = ({frontEndSkillSectionData}: Props) => {
    
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="skills" className="section-padding">
    <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><MdOutlineHistoryEdu className="text-lg text-secoundary/75" /> <span className="text-sm">MY SKILLS</span></motion.span>
    <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
    My <span className="text-secoundary">Advantages</span>
   </motion.h1>
  
    <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-2 md:gap-4">
      {frontEndSkillSectionData.map((item) => (
           <div className="skill-container" key={item._id}>
           <div className="card">
             
             <motion.div initial={{strokeDashoffset : "calc(440 - (440 * 0 / 100))"}} whileInView={{strokeDashoffset : `calc(440 - (440 * ${item.parsent} / 100))`}} transition={{duration : 1}} className="percent" style={{['--num' as any]: item.parsent, ['--clr' as any]: `${item.colorCode.hex}`}}>

               <motion.div initial={{transform : "rotate(calc(3.6deg * 0))"}} whileInView={{transform : `rotate(calc(3.6deg * ${item.parsent}))`}} transition={{duration : 1}} className="dot"></motion.div>
               <svg>
                 <circle cx="70" cy="70" r="70"></circle>
                 <circle cx="70" cy="70" r="70"></circle>
               </svg>
               <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5, delay : 1}} className="skill-number">
                 <h2>{item.parsent}<span>%</span></h2>
                 <p>{item.skillName}</p>
               </motion.div>
             </motion.div>
           </div>
           <div className="card"></div>
           <div className="card"></div>
       
          </div>
      ))}
   
   
    </div>

  <div className="grid grid-cols-1 gap-5">
  <div className="Skills">
    <div className="skills-bar px-5 py-5">
      {SkillInfoDevelopment.slice(0, 3).map((item) => (

        <div className="bar" key={item.id}>
        <div className="info">
          <span>{item.name}</span>
        </div>
        <motion.div className={`progress-line`} style={{['--parsent' as any]: item.parsent, ['--clr2' as any]: `${item.skillColor}`, }}><motion.span initial={{width : 0}} whileInView={{width : `${item.parsent}%`, content : `${item.parsent}%`}}  transition={{duration : 1.5}} className={` ${item.name === "socket.io" ? "socket" : item.name} `} ></motion.span></motion.div>

        </div>

      ))}
      

            
    
      
      
    </div>
   </div>
   
   
  </div>
  
  
</motion.section>
  )
}

export default Skills