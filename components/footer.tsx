import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; 
type Props = {};

const Footer = (props: Props) => {
  return (
    <motion.footer initial={{y : "100%"}} whileInView={{y : 0}} transition={{duration : 0.5, delay : 0.3}} viewport={{once : true}} className="bg-primary ">
      <div className=" relative flex flex-col space-y-10 justify-center py-10 md:py-32 overflow-hidden">
      <Image
          src="/Pattern.png"
          className="absolute -top-20 -left-20 z-10"
          width={300}
          height={300}
          alt="pattern"
        />

        <Image
          src="/Pattern.png"
          className="absolute -bottom-20 -right-20 z-10"
          width={300}
          height={300}
          alt="pattern"
        />

        <motion.div initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} className="flex flex-col space-y-2 z-20">
          <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white text-xl md:text-3xl text-center">
            Don’t Miss Out, Join Now For Early Access
          </motion.h1>
          <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-center text-white/75 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </motion.p>
        </motion.div>
        <motion.form initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="z-10">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-white/75 text-white/75 p-4 bg-[transparent] flex-grow focus:!rounded-none"
            />
            <button
              type="submit"
              className="bg-secoundary text-white p-4 hover:text-secoundary hover:bg-white font-bold transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </motion.form>
      </div>
     <div className="z-20">
     <hr />
     </div>
      <div className="container py-5 z-20 flex flex-col lg:flex-row space-y-2 md:space-y-0 md:items-center md:justify-between order-first">
          <p className="text-white/75 text-sm">ShahjalalK 2023- ALL rights reserved</p>
          <div className="flex flex-col lg:flex-row items-start md:items-center md:space-x-5">
            <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-white/75 hover:text-secoundary text-sm">Privacy Policy</Link>
            <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-white/75 hover:text-secoundary text-sm"> Cookies </Link>
            <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-white/75 hover:text-secoundary text-sm"> Terms & Conditions</Link>
            <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-white/75 hover:text-secoundary text-sm"> Contact Us</Link>
          </div>

      </div>
      
    </motion.footer>
  );
};

export default Footer;
