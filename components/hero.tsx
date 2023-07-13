import React from 'react'
import ProfileCard from './profileCard'

import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Services from './services'
import Skills from './skills'
import Testimonials from './testimonials'
import Contact from './contact'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="container z-50  items-start grid grid-cols-1 lg:grid-cols-3 gap-5">
         <div className="col-span-1 lg:sticky top-[100px] mt-24 lg:mt-0">
            <ProfileCard />
        </div>       

        <div className="col-span-1 lg:col-span-2 lg:mx-16 ">
             <Home />
             <About />
             <Skills />
             <Services />
             <Portfolio /> 
             <Testimonials />  
             <Contact />          
        </div>
       
    </div>
  )
}

export default Hero