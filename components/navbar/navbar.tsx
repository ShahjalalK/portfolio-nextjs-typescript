import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import {
  Link as Links,
  animateScroll as scroll,
} from "react-scroll";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import SearchBar from "./searchBar";
import NavbarMini from "./navbarMini";
import SearchResult from "./searchResult";



type Props = {};

const Navbar = (props: Props) => {
  const [showadmin, setShowAdmin] = useState(false)

  
  const [shadowNave, setShadowNave] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolls = window.scrollY;
      
      if (scrolls > 10) {
        setShadowNave(true);
      } else {
        setShadowNave(false);
      }
    });
  }, []);


  const NavbarData = [
    {
      name : "Home",
      path : "/#home",
      scrollPath : "home",
      activeClass : "active"
    },
    {
      name : "About",
      path : "/#about",
      scrollPath : "about",     
      activeClass : ""
    },
    {
      name : "Skills",
      path : "/#skills",
      scrollPath : "skills",     
      activeClass : ""
    },
    {
      name : "Services",
      path : "/#services",
      scrollPath : "services",     
      activeClass : ""
    },
    {
      name : "Portfolio",
      path : "/#portfolio",
      scrollPath : "portfolio",     
      activeClass : ""
    },
    {
      name : "Contact",
      path : "/#contact",
      scrollPath : "contact",     
      activeClass : ""
    }
  ]
  


  const fadeInAnimationVariants = {
    initial : {
      opacity : 0,
    },
    animate: (index : number ) => (
      {
        opacity : 1,
        transition : {
          delay : 0.09 * index,
          duration : 0.5
        }
      }
    )
  }
  



  return (
    <header
      className={`bg-primary/50 transition-all duration-300 ease-in border-b border-white/20 z-50 ${
        shadowNave && " shadow-3xl shadow-secoundary !bg-primary/100"
      } ${router.pathname !== "/" && "!bg-primary/100"}`}
    >
      <nav className="container flex flex-grow items-center space-x-10 py-3 lg:py-0 ">
        <motion.div initial={{y : -300, opacity : 0}} animate={{y : 0, opacity : 1}} transition={{duration : 1}} className="flex flex-grow lg:flex-grow-0 ">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/coding.png"
            alt="shahjalalk"
            width={100}
            height={100}
            className="w-10"
          />
          <h3 className="text-white text-3xl font-light tracking-[1px] font-Lobster">
            Shahjalal<span className="text-secoundary">K</span>
          </h3>
        </Link>
        </motion.div>
        <motion.ul
         
          className="hidden lg:flex items-center capitalize font-medium text-lg text-white whitespace-nowrap"
        >

          {NavbarData.map((item, index) => (
              <motion.li variants={fadeInAnimationVariants} initial="initial" animate="animate" custom={index} key={index}>
              {router.pathname !== "/" ? (
                <Link href={item.path} className="navLink border-l h-[60px] border-white/30 px-5 flex justify-center items-center shadow-chackBoxShadow"> <span>{item.name}</span></Link>
              ) : (
                <Links
                  activeClass={item.activeClass}
                  className="navLink border-l h-[60px] border-white/30 px-5 flex justify-center items-center shadow-chackBoxShadow"
                  to={item.scrollPath}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                 {item.name}
                </Links>
              )}
            </motion.li>
          ))}
          
         
          
          {user?.email === "shahjalalkhan895@gmail.com" && 
             <>
             <li className={`flex items-center space-x-0 border-l h-[60px] border-white/30 px-5 ${showadmin ? "navLink active" : "navLink"}`} onClick={() => setShowAdmin(!showadmin)}>
              <span>Admin</span>
             {showadmin ? <BiCaretUp /> : <BiCaretDown />} 
            </li>
              <motion.div initial={{right : 0, width : 0}} animate={{right : showadmin ? 50 : 0, width : showadmin ? "400px" : 0}} transition={{duration : 0.5, delayChildren: 0.5}} className="fixed right-10 w-[400px] top-[80px] flex flex-col space-y-2">
              <Link href="/studio"className={` hover:text-secoundary/75 shadow-md  px-2 py-1 bg-primary rounded-md text-white/70 ${router.pathname == "/studio/desk" && "!text-secoundary/75"}`} onClick={() => setShowAdmin(false)}>
                   Studio
                  </Link>
                  <Link href="/message" className={` hover:text-secoundary/75 shadow-md  px-2 py-1 bg-primary rounded-md text-white/70 ${router.pathname == "/message" && "!text-secoundary/75"}`} onClick={() => setShowAdmin(false)}>
                   Message
                  </Link>
             
                  <Link href="/subscribe" className={` hover:text-secoundary/75 shadow-md  px-2 py-1 bg-primary rounded-md text-white/70 ${router.pathname == "/subscribe" && "!text-secoundary/75"}`} onClick={() => setShowAdmin(false)}>
                   Subscribe
                  </Link>

                  <Link href="/usertraking" className={` hover:text-secoundary/75 shadow-md  px-2 py-1 bg-primary rounded-md text-white/70 ${router.pathname == "/usertraking" && "!text-secoundary/75"}`} onClick={() => setShowAdmin(false)}>
                   User Traking
                  </Link>

              <button onClick={() => signOut(auth)} className=" hover:text-secoundary/75 shadow-md  px-2 py-1 bg-primary rounded-md text-white/70">
                   Logout
                  </button>
              </motion.div>
             </>
          }
           
        </motion.ul>

        <SearchBar />
        <SearchResult />
        
        {/* <Link
          href="https://www.fiverr.com/shahjalalk"
          target="_blank"
          className="hidden lg:inline-flex px-7 py-2.5 button font-bold"
        >
          {" "}
          <span>Get Started</span>
          <i></i>
        </Link> */}
        
          <NavbarMini NavbarData={NavbarData} />

      </nav>
    </header>
  );
};

export default Navbar;
