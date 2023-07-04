import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'

type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className="pt-32 h-screen snap-mandatory snap-y snap-center overscroll-y-auto">
    <span className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><AiOutlineUser className="text-lg" /> <span className="text-sm uppercase">About</span></span>
   <h1 className="text-5xl font-medium  text-white leading-[70px]">Every great design begin with
an even <span className="text-secoundary">better story</span></h1>
   <p className="text-white/80 mt-5 md:mr-32 leading-[32px]">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
</section>
  )
}

export default About