import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {RiMenu2Line} from 'react-icons/ri'
import { Link as Links, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

type Props = {}

const Navbar = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="bg-primary/50">
        <nav className="container flex items-center justify-between h-[60px] w-full">
            <Link href="/" className="flex items-center space-x-1">
                
                <Image src="/coding.png" alt='shahjalalk' width={100} height={100} className="w-14" />
                <h3 className="uppercase text-white text-2xl font-bold">Shahjalal<span className="text-secoundary">K</span></h3>
               
            </Link>
            <ul className="hidden md:flex items-center space-x-5 uppercase font-medium text-lg text-white">
                <li>
                    <Links activeClass="active" href="#home" to="home" spy={true} smooth={true} duration={500} className='navLink'>Home</Links>
                   
                </li>
                <li><Links activeClass="active" to="about" spy={true} smooth={true} duration={500} href="#about" className='navLink '>About</Links></li>
                    <li><Links activeClass="active" href="#services" to="services" spy={true} smooth={true} duration={500} className='navLink '>Services</Links></li>
                    <li><Links activeClass="active" href="#contact" to="contact" spy={true} smooth={true} duration={500} className='navLink '>Contact</Links></li>
            </ul>
            <Link href="/" className="hidden md:inline-flex px-7 py-2.5 button font-bold"> <span>Get Started</span><i></i></Link>
            <div onClick={() => setShowMenu(!showMenu) } className='block md:hidden'>
                <RiMenu2Line  className="text-3xl text-white cursor-pointer" />
            </div>
            <div className={`${showMenu ? "block" : "hidden"} dropdown_menu`}>
            <li>
                    <Links activeClass="active" href="#home" to="home" spy={true} smooth={true} duration={500} className='navLink'>Home</Links>
                   
                </li>
                <li><Links activeClass="active" to="about" spy={true} smooth={true} duration={500} href="#about" className='navLink'>About</Links></li>
                    <li><Links activeClass="active" href="#services" to="services" spy={true} smooth={true} duration={500} className='navLink '>Services</Links></li>
                    <li><Links activeClass="active" href="#contact" to="contact" spy={true} smooth={true} duration={500} className='navLink '>Contact</Links></li>
                    <li> <Link href="/" className="px-7 py-2.5 button font-bold"> <span>Get Started</span><i></i></Link></li>
            </div>
        </nav>
    </header>
  )
}

export default Navbar