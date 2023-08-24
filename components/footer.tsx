import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { firestore } from "@/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { LineWave, ThreeDots } from "react-loader-spinner";
import SubscribeApi from "@/firebaseApi/subscribeApi";

type Props = {};
const SocialInfo = [
  {
    footerLink : "https://www.fiverr.com/shahjalalk",
    footerName : "Privacy Policy"
    
  },
  {
    footerLink : "https://www.fiverr.com/shahjalalk",
    footerName : "Cookies"
    
  },
  {
    footerLink : "https://www.fiverr.com/shahjalalk",
    footerName : "Terms & Conditions"
    
  },
  {
    footerLink : "https://www.fiverr.com/shahjalalk",
    footerName : "Contact Us"
    
  }
]

const Footer = (props: Props) => {


  const [email, setEmail] = useState<string>("")
  const [subscribeEmails, setSubscribeEmails] = useState("")
  const [success, setSucess] = useState("")
  const [loading, setLoading] = useState(false)

  const {postSubscribe} = SubscribeApi()
 
  useEffect(() => {
    const clearText = setTimeout(() => {
      setSucess("")
    }, 5000)

    return () => clearTimeout(clearText)

  }, [success])

  

   const subscribeEmail = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!email) return

    postSubscribe(setLoading,
      subscribeEmails,
      email,
      setEmail,
      setSucess,
      setSubscribeEmails,
      )
   

      
      
    }

 
  return (
    <footer className="bg-primary ">
      <div className=" relative flex flex-col space-y-10 justify-center py-10 md:py-32 overflow-hidden">
      <Image
          src="/Pattern.png"
          className="absolute -top-20 -left-20 z-10 select-none"
          width={300}
          height={300}
          alt="pattern"
        />

        <Image
          src="/Pattern.png"
          className="absolute -bottom-20 -right-20 z-10 select-none"
          width={300}
          height={300}
          alt="pattern"
        />

        <motion.div initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} className="flex flex-col space-y-2 z-20">
          <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-white text-xl md:text-3xl text-center capitalize">
          Subscribe to our newsletter!
          </motion.h1>
          <motion.p initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-center text-white/75 text-lg">
          Subscribe to our newsletter to receive exclusive offers, the latest news, and updates.
          </motion.p>
        </motion.div>
        <motion.form onSubmit={subscribeEmail} initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="z-10" autoComplete="off">
        <div className=" text-white/75 bg-[transparent] md:max-w-md mx-auto relative">
            <input            
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              autoComplete="off"
            
              className=" flex-grow w-full bg-[transparent] py-3 px-4 focus:rounded-full border border-white/75 focus:outline-none !rounded-full focus:bg-[transparent] overflow-hidden pr-[7.8rem] focus:border-secoundary/60 text-secoundary/90 " required
              
            />
            <button
              type="submit"
              className="bg-secoundary text-white/80 hover:text-secoundary  hover:bg-white font-bold transition-all duration-300 rounded-full px-4 py-2 absolute right-2 top-[50%] -translate-y-[50%] "
            >
              Subscribe
            </button>
          </div>
          <div className="md:max-w-md mx-auto mt-2 flex flex-col items-center">
            {loading ?
          <ThreeDots 
  height="30"
  width="50"
  color="#fff"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}  
  
/>
      :
      <> 
      {success && <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5}} className="text-sm text-secoundary text-center">{success}</motion.p>} 
      </>
       
        }
          </div>
          
        </motion.form>
       
      </div>
     <div className="z-20">
     <hr />
     </div>
      <div className="container py-5 z-20 flex flex-col lg:flex-row space-y-2 md:space-y-0 md:items-center md:justify-between order-first">
          <p className="text-white/75 text-sm">ShahjalalK <span>{new Date().getFullYear()}</span> - ALL rights reserved</p>
          <div className="flex flex-col lg:flex-row items-start md:items-center md:space-x-5">
            {SocialInfo.map((item, index) => (
               <Link key={index} href={item.footerLink} target="_blank" className="text-white/75 hover:text-secoundary text-sm"> {item.footerName}  </Link>
            ))}
           
           
          </div>

      </div>
      
    </footer>
  );
};

export default Footer;
