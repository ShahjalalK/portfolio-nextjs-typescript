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
import Link from "next/link";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const clientData = [
  {
    id : 1,
    photo : "/testimonail-1.webp",
    name : "Anna David",
    title : "author, speaker of",
    company : "American publisher",
    content : "He does great work and is so nice to do business with!",
    links : "https://www.fiverr.com/shahjalalk"
  },
  {
    id : 2,
    photo : "/testimonail-2.webp",
    name : "patriciawinter",
    title : " Data-Driven Marketing of ",
    company : "Atlanticoin",
    content : "Excellent work and very good communication. I will surely order again. Thx dear friend",
    links : "https://www.fiverr.com/shahjalalk"
  },
  {
    id : 3,
    photo : "/testimonail-3.webp",
    name : "glighter",
    title : "Product Management of",
    company : "Invision App Inc",
    content : "Very professional, quick, and efficient. Shahjalalk knows very well his job. He is a proactive person and adds value to the project. It is very easy to communicate with him. I'll work again with him in the future, no doubt.",
    links : "https://www.fiverr.com/shahjalalk"
  },
  {
    id : 4,
    photo : "/testimonail-4.webp",
    name : "Rod Harrisre",
    title : "CEO of",
    company : "Rod Harris Real Estate",
    content : "Very professional. I highly recommend him.",
    links : "https://www.fiverr.com/shahjalalk"
  },
  {
    id : 5,
    photo : "/testimonial-5.jpg",
    name : "Kip Beelman",
    title : " photo grapher of",
    company : "beelmanaire LLc",
    content : "Super fast, super good.",
    links : "https://www.fiverr.com/shahjalalk"
  }
]


type Props = {};

const Testimonials = (props: Props) => {
  const slideRef = useRef<any>()

  const prevSlide = () => {
   slideRef.current.swiper.slidePrev()
  }

  const nextSlide = () => {
    slideRef.current.swiper.slideNext()
   }

  
  return (
    <motion.section
      id="home"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, staggerChildren: 0.08 }}
      className=" section-padding"
    >
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="rounded-full mb-10 border border-white/50 text-white/50 px-3 py-1 text-sm inline-flex items-center space-x-1"
      >
        <BiMessageDetail className="text-lg text-secoundary/75" />{" "}
        <span className="text-sm">TESTIMONIAL</span>
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="sub-title"
      >
        Trusted by <span className="text-secoundary">Hundered Clients</span>
      </motion.h1>

      <Swiper
      
       slidesPerView={1}
       spaceBetween={0}
      //  pagination={{
      //   type: 'fraction',
      //   el : '.swiper-paginations'
      // }}
       navigation={false}
       loop={true}
      
        modules={[Pagination, Navigation]}
        className="my-5"
        ref={slideRef as any}
        
      >
       {clientData.map((item, index) => (
          <SwiperSlide key={item.id} >
          <div className="border border-white/50 p-10 rounded-3xl">
            <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Image src={item.photo} alt="testimonial" width={50} height={50} className=" rounded-full border object-cover"/>
              <div className="flex flex-col space-y-1">
                <h3 className="text-white text-lg">{item.name}</h3>
                <p className="text-white/75 text-xs">{item.title} <span className=" text-secoundary">{item.company}</span></p>
              </div>
            </div>
            <div className="text-2xl hidden text-[#ffe234] md:flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            </div>
            <div className="text-xl text-white py-10">
              <p className=" line-clamp-2"> "{item.content}"</p>
           
            </div>
            <div className="flex items-center md:items-start justify-between flex-row md:flex-col">
            <Link href={item.links} target="_blank" className="uppercase text-white text-xs hover:underline">Project</Link>
            <div className="text-xl text-[#ffe234] flex md:hidden items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            </div>
            
          </div>
      </SwiperSlide>
       ))}


        

        <div  className="mt-10 flex items-center space-x-3 text-center flex-grow  justify-center md:justify-start ">
          <button onClick={prevSlide} className="text-2xl p-2  text-white hover:text-secoundary border rounded-full border-white/50 hover:border-secoundary"><AiOutlineLeft /></button>
          {/* <span className="swiper-paginations text-sm !text-white/30 font-normal !inline-flex [&>*:first-child]:!text-white/75 "></span> */}
          <button onClick={nextSlide} className="text-2xl p-2  text-white hover:text-secoundary border rounded-full border-white/50 hover:border-secoundary"><AiOutlineRight /></button>
        </div>
       
      </Swiper>
    </motion.section>
  );
};


export default Testimonials;
