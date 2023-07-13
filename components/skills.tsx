import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {MdOutlineHistoryEdu} from 'react-icons/md'

type Props = {
 
}

type Startar = {
  start : number;
  end : number
}

const Skill = [
  {
    name : "html",
    parsent : "100%",
    content : "content-['59%']"

  },
  {
    name : "CSS",
    parsent : "90%",
    content : "content-['59%']"
    
  },
  {
    name : "Javascript",
    parsent : "85%",
    content : "content-['59%']"
    
  },
  {
    name : "ReactJS",
    parsent : "80%",
    content : "content-['59%']"
    
  },
  {
    name : "NextJS",
    parsent : "88%",
    content : "content-['59%']"
    
  },
  {
    name : "Firebase",
    parsent : "95%",
    content : "content-['59%']"
    
  },
  {
    name : "Adobe XD",
    parsent : "90%",
    content : "content-['59%']"
    
  }
]

const Skills = (props: Props) => {
    
  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="skills" className="section-padding">
    <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><MdOutlineHistoryEdu className="text-lg text-secoundary/75" /> <span className="text-sm">MY SKILLS</span></motion.span>
    <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
    My <span className="text-secoundary">Advantages</span>
   </motion.h1>

   <div className="Skills">
    <div className="skills-bar px-5 py-10">
      {Skill.map((item, index) => (

        <div className="bar" key={index}>
        <div className="info">
          <span>{item.name}</span>
        </div>
        <motion.div className={`progress-line`}><motion.span initial={{width : 0}} whileInView={{width : item.parsent, content : item.parsent}} transition={{duration : 1.5}} className={` after:content-["${item.parsent}"]`}></motion.span></motion.div>

        </div>

      ))}
      

            
    
      
      
    </div>
   </div>
  
  
</motion.section>
  )
}

export default Skills