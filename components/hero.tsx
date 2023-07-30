import React from 'react'
import ProfileCard from './profileCard'

import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Services from './services'
import Skills from './skills'
import Contact from './contact'
import { aboutSectionType, frontEndSkillsSectionType, homeSectionType, portfolioSectionType, serviceSectionType, testimonialSectionType } from '@/atom/santyType'

type Props = {
  homeSectionData : homeSectionType[];
  aboutSectionData : aboutSectionType[];
  testiMonailSectionData : testimonialSectionType[];
  frontEndSkillSectionData : frontEndSkillsSectionType[];
  serviceSectionData : serviceSectionType[];
  portfolioSectionData : portfolioSectionType[]
}

const Hero = ({homeSectionData, aboutSectionData, testiMonailSectionData, frontEndSkillSectionData, serviceSectionData, portfolioSectionData}: Props) => {
  return (
    <div className="container z-50  items-start grid grid-cols-1 lg:grid-cols-3 gap-5">
         <div className="col-span-1 lg:sticky top-[100px] mt-24 lg:mt-0">
            <ProfileCard />
        </div>       

        <div className="col-span-1 lg:col-span-2 lg:mx-16 ">
             <Home homeSectionData={homeSectionData} />
             
             <About aboutSectionData={aboutSectionData} testiMonailSectionData={testiMonailSectionData}/>
             
             <Skills frontEndSkillSectionData={frontEndSkillSectionData} />
             <Services serviceSectionData={serviceSectionData} />
             <Portfolio portfolioSectionData={portfolioSectionData} />              
             <Contact />          
        </div>
       
    </div>
  )
}

export default Hero