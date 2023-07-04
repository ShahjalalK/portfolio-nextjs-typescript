import React from 'react'
import ProfileCard from './profileCard'

import Home from './home'
import About from './about'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="container z-50 py-20  items-start grid grid-cols-1 md:grid-cols-3 gap-5">
         <div className="col-span-1 md:sticky top-[100px]">
            <ProfileCard />
        </div>
       

        <div className="col-span-1 md:col-span-2 md:ml-16">
             <Home />
             <About />
        </div>
       
    </div>
  )
}

export default Hero