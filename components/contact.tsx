import React from 'react'
import {motion} from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'

type Props = {}
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:shahjalalkhan895@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <motion.section initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} id="contact" className="section-padding">
             <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"><HiOutlineMail className="text-lg text-secoundary/75" /> <span className="text-sm">CONTACT</span></motion.span>
             <motion.h1 initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="sub-title" >
             Let's Work  <span className="text-secoundary">Together!</span>
            </motion.h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-5 md:space-y-0 md:space-x-5">
                
                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">FULL NAME<span className="text-[red] text-lg">*</span></label>
                <input type="text" {...register('name')} name='name' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Your Full Name' />
                </motion.div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">Email<span className="text-[red] text-lg">*</span></label>
                <input type="email" {...register('email')} name='email' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Your Email Address' />
                </motion.div>
                </div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">SUBJECT<span className="text-[red] text-lg">*</span></label>
                <input type="text" {...register('subject')} name='subject' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary " placeholder='Subject Your Message' />
                </motion.div>

                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex flex-col space-y-1 flex-grow">
                    <label htmlFor="fullName" className="text-sm text-secoundary/50">Message</label>
                <textarea {...register('message')} name='message' className="border border-white rounded-lg flex-grow bg-[transparent] p-1 text-secoundary h-52 " placeholder='Type Message' ></textarea>
                </motion.div>
                <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}>
                <button type='submit'  className=" button uppercase px-5  py-2 text-white inline-flex"><span>Send Message</span> <i></i> </button>
                </motion.div>
            </form>

            </motion.section>
  )
}

export default Contact