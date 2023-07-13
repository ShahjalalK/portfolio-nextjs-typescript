import Image from "next/image";
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { serviceType } from "@/atom/serviceType";

type Props = {
  
  allServiceData : serviceType[]
  
}

const MoreServices = ({allServiceData}: Props) => {

    const slideRef = useRef<any>()

    const prevSlide = () => {
     slideRef.current.swiper.slidePrev()
    }
  
    const nextSlide = () => {
      slideRef.current.swiper.slideNext()
     }
  return (
    <div className="my-16 container">
         <h1 className="text-xl mb-5">More services by <span className="text-secoundary mb-10">Shahjalal Khan</span></h1>
        <div className=" relative">
        <Swiper        
        
        breakpoints={{          
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        
        ref={slideRef as any}
        >

          {
            allServiceData.map((service, index) => (
              <SwiperSlide key={index}>
              <Link href={service.name} className="group" >
              <Image src={service.media}  alt="signature" width={750} height={750} className=" z-10 rounded-xl border border-primary/25"/>
               <div className="flex items-center justify-between my-3">
               <div className="flex items-center space-x-1">
                 <Image src="/profile2.webp" width={50} height={50} className="w-7 h-7 rounded-full object-cover" alt="me" />
                 <h3 className=" font-bold text-sm text-primary">Shahjalalk</h3>
               </div>
               <span className="text-sm pr-3 font-bold text-primary">Lavel 1</span>
               </div>
               <p className=" line-clamp-2 md:text-sm group-hover:underline">{service.title}</p>
              </Link>
             </SwiperSlide>
            ))
          }
          

          


          

         

         
        </Swiper>

        <div className=" absolute top-[50%] -translate-y-[50%] z-20 flex items-center justify-between w-full">
            <button onClick={prevSlide} className="text-2xl bg-white rounded-full p-2 shadow-2xl shadow-primary/80 text-[#222] hover:text-secoundary transition-all duration-300 md:-ml-5"><AiOutlineLeft /></button>
            <button onClick={nextSlide} className="text-2xl bg-white rounded-full p-2 shadow-2xl shadow-primary/80 text-[#222] hover:text-secoundary transition-all duration-300 md:-mr-5"><AiOutlineRight /></button>
          </div>
        </div>
    </div>
  )
}

export default MoreServices