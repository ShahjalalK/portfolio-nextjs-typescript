import { testimonialSectionType } from '@/atom/santyType'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import "swiper/css";

type Props = {
  item : testimonialSectionType,
  slideRef : any
}

const ReviewSlider = ({item, slideRef}: Props) => {
  
  return (
    <div className="border border-white/30 p-3 rounded cursor-grab ">
     
     
         <div className="flex flex-col space-y-1 lg:flex-row md:items-center justify-between">
         <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex items-center space-x-3">
         <Image src={item.clientImage} alt="testimonial" width={50} height={50} className=" rounded-full border border-primary/50 object-cover"/>
              <div className="flex flex-col space-y-0">
                <h3 className="text-primary text-lg">{item.name}</h3>
                <p className="text-primary/75 text-xs">{item.title} of <span className=" text-secoundary">{item.companyName}</span></p>
              </div>
            </motion.div>
          <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-2xl text-secoundary/70 flex items-start md:justify-between">
                      
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              
            </motion.div>
         </div>
            <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-xl text-primary pt-5 grid grid-cols-12 ml-2 ">
             <div className="col-span-1 flex items-start justify-end lg:-mt-2"> <Image src="/speaker.gif" width={100} height={100} alt='sp' className="w-full lg:w-10" /> </div>
              <p className=" flex-grow text-base text-primary/90 col-span-11"> 
              {item.review}
               </p>


              
            </motion.div>
            
            
            
          </div>
  )
}

export default ReviewSlider