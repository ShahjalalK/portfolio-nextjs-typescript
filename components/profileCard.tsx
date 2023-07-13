import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTwitter, BsGithub, BsFacebook} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const ProfileCard = (props: Props) => {
  return (
    <div className="border border-white/75 rounded-2xl p-5 ">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl text-white font-bold">Shahjalal</h1>
            <p className="text-white text-sm"><span className="text-secoundary">
            <Typewriter
            words={['Web Designer', 'Web Developer']}
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
            
          />
              </span> 
              </p>
        </div>
        <Image src="/profile2.webp" alt='me' width={350} height={350} className=" rounded-3xl my-5 mx-auto w-60" />
        <div className="text-white mt-5 justify-center flex flex-col text-center text-xl">
            <h3 className="text-sm text-white/75"><Link href="mailto:shahjalalkhan895@gmail.com" className="">shahjalalkhan895@gmail.com</Link></h3>
            <h2 className="text-xl">Kushtia, Dhaka, Bangladesh</h2>
        </div>
        <div className="mt-5 flex justify-center items-center space-x-3">
           
                <Link  href="https://www.linkedin.com/in/shahjalal-khan" target="_blank" className="inline-block border border-white/75 text-white/75 hover:border-secoundary hover:text-secoundary hover:shadow-3xl rounded-full p-3">
                
                <FaLinkedinIn className="text-xl  " /></Link>

                <Link href="https://twitter.com/shahjalalk1" target="_blank" className="inline-block border border-white/75 text-white/75 hover:border-secoundary hover:text-secoundary hover:shadow-3xl rounded-full p-3">
                
                <BsTwitter className="text-xl " /></Link>

                <Link href="https://github.com/ShahjalalK" target="_blank" className="inline-block border border-white/75 text-white/75 hover:border-secoundary hover:text-secoundary hover:shadow-3xl rounded-full p-3">
                
                <BsGithub className="text-xl " /></Link>

                <Link href="https://www.facebook.com/shahajalalkhan.shahajalalkhan" target="_blank" className="inline-block border border-white/75 text-white/75 hover:border-secoundary hover:text-secoundary hover:shadow-3xl rounded-full p-3">
                
                <BsFacebook className="text-xl " /></Link>
        </div>
        <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className=" button w-full flex justify-center text-white py-3 mt-5"><span className="flex items-center space-x-2"><HiOutlineMail className="text-white text-2xl" /> <span> Hire Me</span></span><i></i></Link>
    </div>
  )
}

export default ProfileCard