import React from 'react'
import {motion} from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'

type Props = {}
import { useRecoilState, useResetRecoilState } from 'recoil';
import { contactState, contactType } from '@/atom/contactState';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const Contact = (props: Props) => {
   
    const [contact, setContact] = useRecoilState<contactType>(contactState)
    const resetContact = useResetRecoilState(contactState)

    const submitHandler  = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.href = `mailto:shahjalalkhan895@gmail.com?subject=${contact.subject}&body=Hi, my name is ${contact.name}. ${contact.message}`
        resetContact()
    }

  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="contact" className="section-padding">
             <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><HiOutlineMail className="text-lg text-secoundary/75" /> <span className="text-sm">CONTACT</span></motion.span>
             <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
             Let's Work  <span className="text-secoundary">Together!</span>
            </motion.h1>

            <form onSubmit={submitHandler} className="mt-10 flex flex-col space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-5 md:space-y-0 md:space-x-5">
                
                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">FULL NAME<span className="text-[red] text-lg">*</span></label>
                <input type="text" value={contact.name} onChange={(e) => setContact((prev) => ({...prev, name : e.target.value}))} name='name' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Your Full Name' required />
                </motion.div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">Email<span className="text-[red] text-lg">*</span></label>
                <input type="email" value={contact.email} onChange={(e) => setContact((prev) => ({...prev, email : e.target.value}))} name='email' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Your Email Address' required />
                </motion.div>
                </div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">SUBJECT<span className="text-[red] text-lg">*</span></label>
                <input type="text" value={contact.subject} onChange={(e) => setContact((prev) => ({...prev, subject : e.target.value}))} name='subject' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Subject Your Message' required />
                </motion.div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">Message</label>
                <textarea value={contact.message} onChange={(e) => setContact((prev) => ({...prev, message : e.target.value}))} name='message' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary h-52 " placeholder='Type Message' ></textarea>
                </motion.div>
                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}>
                <button type='submit'  className=" button uppercase px-5  py-2 text-white inline-flex"><span>Send Message</span> <i></i> </button>
                </motion.div>
            </form>

            </motion.section>
  )
}

export default Contact