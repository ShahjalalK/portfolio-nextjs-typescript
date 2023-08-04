import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu2Line } from 'react-icons/ri';
import {motion} from 'framer-motion'
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    Link as Links,
    animateScroll as scroll,
  } from "react-scroll";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase.config';
import { signOut } from 'firebase/auth';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';

type Props = {
    NavbarData : any
}



const NavbarMini = ({NavbarData}: Props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [showadmin, setShowAdmin] = useState(false)
    const router = useRouter()
    useEffect(() => {
        window.addEventListener("scroll", () => {
          const scrolls = window.scrollY;
          if (scrolls) {
            setShowMenu(false);
          }
          
        });
      }, []);

  return (
    <>
    <div className="block lg:hidden">
          {showMenu ? (
            <AiOutlineClose
              onClick={() => setShowMenu(false)}
              className="text-4xl rounded text-white cursor-pointer border border-secoundary p-1"
            />
          ) : (
            <RiMenu2Line
              onClick={() => setShowMenu(true)}
              className="text-4xl rounded text-white cursor-pointer border border-secoundary p-1"
            />
          )}
        </div>
        <motion.ul
          initial={{ x: "110%" }}
          animate={{ x: showMenu ? 0 : "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className={` absolute top-16 right-0 flex flex-col lg:hidden space-y-3 w-[70%] border border-secoundary `}
        >
            {NavbarData.map((item : any, index : number) => (
                <li key={index}>
                {router.pathname !== "/" ? (
                  <Link href={item.path} className="menuNavLink">{item.name}</Link>
                ) : (
                  <Links
                    className="menuNavLink"
                    activeClass={item.activeClass}
                    to={item.scrollPath}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                   {item.name}
                  </Links>
                )}
              </li>
            ))}
          
          

          
         

          

          
          {user?.email === "shahjalalkhan895@gmail.com" && 
          <>
          <li onClick={() => setShowAdmin(!showadmin)}>
            <p className="menuNavLink flex items-center flex-grow" ><span className="flex-grow">Admin</span> {showadmin ? <BiCaretUp className="text-lg" /> : <BiCaretDown className="text-lg" />}</p></li>
            
          <div className={`${showadmin ? "flex" : "hidden"} flex-col space-y-3 `}>
          <li>
          <Link href="/studio" className="menuNavLink">
                Studio
              </Link>
          </li>
          
          <li>
          <Link href="/message" className="menuNavLink">
                Message
              </Link>
          </li>

          <li>
          <Link href="/subscribe" className="menuNavLink">
                Subscribe
              </Link>
          </li>

          <li><button onClick={() => signOut(auth)} className="menuNavLink">
                   Logout
                  </button></li>
          </div>
          </>
          
          }

          
          

          <li className="bg-primary">
            
            <Link
              href="https://www.fiverr.com/shahjalalk"
              target="_blank"
              className="px-7 py-2.5 button font-bold block text-center"
            >
             
              <span>Get Started</span>
              <i></i>
            </Link>
          </li>
        </motion.ul>
    
    </>
  )
}

export default NavbarMini