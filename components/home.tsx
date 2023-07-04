import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'

type Props = {}

const Home = (props: Props) => {
  return (
    
        <section id="home" className="h-screen pt-32 snap-mandatory snap-y snap-center overflow-y-auto">
             <span className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><AiOutlineHome className="text-lg" /> <span className="text-sm">INTRODUCE</span></span>
            <h1 className="text-5xl font-medium  text-white leading-[70px]">Say Hi from Drake, Webflow Designer and Developer</h1>
            <p className="text-white/80 mt-5 md:mr-32 leading-[32px]">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
        </section>
  )
}

export default Home