import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import {
  Link as Links,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [shadowNave, setShadowNave] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolls = window.scrollY;
      if (scrolls) {
        setShowMenu(false);
      }
      if (scrolls > 10) {
        setShadowNave(true);
      } else {
        setShadowNave(false);
      }
    });
  }, []);



  return (
    <header
      className={`bg-primary/50 transition-all duration-300 ease-in ${
        shadowNave && " shadow-3xl shadow-secoundary !bg-primary/100"
      } ${router.pathname !== "/" && "!bg-primary/100"}`}
    >
      <nav className="container flex items-center justify-between h-[60px] w-full">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/coding.png"
            alt="shahjalalk"
            width={100}
            height={100}
            className="w-14"
          />
          <h3 className="uppercase text-white text-2xl font-bold">
            Shahjalal<span className="text-secoundary">K</span>
          </h3>
        </Link>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, staggerChildren: 0.08 }}
          className="hidden lg:flex items-center space-x-5 capitalize font-medium text-lg text-white"
        >
          <li>
            {router.pathname !== "/" ? (
              <Link href="/#home">Home</Link>
            ) : (
              <Links
                activeClass="active"
                className="navLink"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Links>
            )}
          </li>
          <li>
            {router.pathname !== "/" ? (
              <Link href="/#about" className="navLink ">
                About
              </Link>
            ) : (
              <Links
                className="navLink"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#skills" className="navLink">
                Skills
              </Link>
            ) : (
              <Links
                className="navLink"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#services" className={`navLink ${router.pathname === "/clickable-email-signature" && "active"}`}>
                Services
              </Link>
            ) : (
              <Links
                className="navLink"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Services
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#portfolio" className="navLink ">
                Portfolio
              </Link>
            ) : (
              <Links
                className="navLink"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Portfolio
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#contact" className="navLink ">
                Contact
              </Link>
            ) : (
              <Links
                className="navLink"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Links>
            )}
          </li>
          {user?.email === "shahjalalkhan895@gmail.com" && 
             <>
              <li>
              <Link href="/studio" className="navLink ">
                   Studio
                  </Link>
              </li>
              <li>
              <Link href="/admin" className="navLink ">
                   Message
                  </Link>
              </li>
             
              <li>
              <Link href="/subscribe" className="navLink ">
                   Subscribe
                  </Link>
              </li>

              <button onClick={() => signOut(auth)} className="navLink ">
                   Logout
                  </button>
             </>
          }
          
        </motion.ul>
        <Link
          href="/"
          className="hidden lg:inline-flex px-7 py-2.5 button font-bold"
        >
          {" "}
          <span>Get Started</span>
          <i></i>
        </Link>
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
          <li>
            {router.pathname !== "/" ? (
              <Link href="/#home" className="menuNavLink">
                Home
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Links>
            )}
          </li>
          <li>
            {router.pathname !== "/" ? (
              <Link href="/#about" className="menuNavLink">
                About
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#services" className={`menuNavLink ${router.pathname === "/clickable-email-signature" && " active"}`}>
                Services
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Services
              </Links>
            )}
          </li>
          <li>
            {router.pathname !== "/" ? (
              <Link href="/#skills" className="menuNavLink">
                Skills
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#portfolio" className="menuNavLink ">
                Portfolio
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Portfolio
              </Links>
            )}
          </li>

          <li>
            {router.pathname !== "/" ? (
              <Link href="/#contact" className="menuNavLink ">
                Contact
              </Link>
            ) : (
              <Links
                className="menuNavLink"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Links>
            )}
          </li>
          {user?.email === "shahjalalkhan895@gmail.com" && 
          <>

          <li>
          <Link href="/studio" className="menuNavLink ">
                Studio
              </Link>
          </li>
          
          <li>
          <Link href="/admin" className="menuNavLink ">
                Message
              </Link>
          </li>

          <li>
          <Link href="/subscribe" className="menuNavLink ">
                Subscribe
              </Link>
          </li>

          <button onClick={() => signOut(auth)} className="navLink ">
                   Logout
                  </button>
          </>
          
          }
          

          <li>
            {" "}
            <Link
              href="https://www.fiverr.com/shahjalalk"
              target="_blank"
              className="px-7 py-2.5 button font-bold block text-center"
            >
              {" "}
              <span>Get Started</span>
              <i></i>
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
