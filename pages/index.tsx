import Hero from '@/components/hero'
import Meta from '@/meta/meta'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Meta title='Home' /> 
      <div className="backgroundIntro relative py-5 w-ful h-full">
        
      
       <Hero /> 




        <video  autoPlay loop muted playsInline className="w-full -z-20 object-cover absolute top-0 left-0  h-full " >
  <source src="video3.mp4" type="video/mp4" /> 
</video>
    </div>    
    </div>
  )
}

export default Home