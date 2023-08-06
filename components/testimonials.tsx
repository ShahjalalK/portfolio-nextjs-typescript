import React, {useRef, useState} from "react";
import { motion } from "framer-motion";
import { BiMessageDetail } from "react-icons/bi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { AiFillCaretRight, AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { testimonialSectionType } from "@/atom/santyType";
import { BsChevronDoubleRight } from "react-icons/bs";




type Props = {
  testiMonailSectionData : testimonialSectionType[]
};

const Testimonials = (testiMonailSectionData: Props) => {
  const slideRef = useRef<any>()

  const prevSlide = () => {
   slideRef.current.swiper.slidePrev()
  }

  const nextSlide = () => {
    slideRef.current.swiper.slideNext()
   }

  
  return (
    <Swiper
      
       slidesPerView={1}
       spaceBetween={5}
      //  pagination={{
      //   type: 'fraction',
      //   el : '.swiper-paginations'
      // }}
       navigation={false}
      
       loop={true}
      
        modules={[Pagination, Navigation]}
        className="mt-10 font-Roboto relative "
        ref={slideRef as any}
        
        
      >
        <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}}  className=" absolute top-0 md:right-0 z-10 hidden md:flex items-center space-x-2 ">
          <button onClick={prevSlide} className="text-2xl text-white/50 hover:text-secoundary/80 border border-white/50 hover:border-secoundary/80 w-9 h-9 flex justify-center items-center rounded-full"><AiOutlineLeft /></button>
          {/* <span className="swiper-paginations text-sm !text-white/30 font-normal !inline-flex [&>*:first-child]:!text-white/75 "></span> */}
          <button onClick={nextSlide} className="text-2xl text-white/50 hover:text-secoundary/80 border border-white/50 hover:border-secoundary/80 w-9 h-9 flex justify-center items-center rounded-full"><AiOutlineRight /></button>
        </motion.div>
        

       {testiMonailSectionData.testiMonailSectionData.map((item) => (
          <SwiperSlide key={item._id} >
          <div className="flex flex-col space-y-2 pt-11">
          <div className="border border-white/30 p-10 rounded ">
         <div className="flex flex-col space-y-1 lg:flex-row items-center justify-between">
         <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="flex items-center space-x-3">
              <Image src={item.clientImage} alt="testimonial" width={50} height={50} className=" rounded-full border object-cover"/>
              <div className="flex flex-col space-y-1">
                <h3 className="text-white text-lg">{item.name}</h3>
                <p className="text-white/75 text-xs">{item.title} of <span className=" text-secoundary">{item.companyName}</span></p>
              </div>
            </motion.div>
          <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-2xl text-[#ffe234] flex items-start justify-between">
                      
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              
            </motion.div>
         </div>
            <motion.div initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 0.3, delay : 0.5}} className="text-xl text-white py-5 lg:py-10 flex flex-col space-y-1 md:flex-row items-start flex-grow space-x-1 ml-10">
             <div> <FaQuoteRight className="text-4xl text-white/30" /></div>
              <p className=" flex-grow text-base text-white/90"> {item.review}</p>
           
            </motion.div>
            
            
            
          </div>
          
          </div>
      </SwiperSlide>
       ))}


        

        
       
      </Swiper>
  );
};


export default Testimonials;
