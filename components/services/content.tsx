import Image from "next/image";
import React, {useRef} from 'react'


// Import Swiper styles
import "swiper/css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import GigSlider from "./gigSlider";
import Description from "./description";
import Lavel from "./lavel";
import { MediaType } from "@/atom/serviceType";
import { GigsType, testimonialSectionType } from "@/atom/santyType";
import Testimonials from "../testimonials";
import ReviewClient from "./reviewClient";


type Props = {
  title: string,
  Media : GigsType[],
  description : any,
  testiMonailSectionData : testimonialSectionType[]
  
};

const Content = ({title, Media, description, testiMonailSectionData}: Props) => {
  

  const slideRef = useRef<any>()

  const prevSlide = () => {
   slideRef.current.swiper.slidePrev()
  }

  const nextSlide = () => {
    slideRef.current.swiper.slideNext()
   }

  return (
    <div className="md:col-span-2 md:mr-16">
      <h1 className="text-3xl font-bold text-info/90">
        {title}
      </h1>
      
<Lavel />


      <div className="my-5 md:w-[90%] relative border border-primary/20">
        <GigSlider slideRef={slideRef} Media={Media} />
        <div className=" absolute top-[50%] -translate-y-[50%] z-20 flex items-center justify-between w-full">
            <button onClick={prevSlide} className="text-2xl bg-white rounded-full p-2 shadow-2xl shadow-primary/80 text-[#222] hover:text-secoundary transition-all duration-300 md:-ml-5"><AiOutlineLeft /></button>
            <button onClick={nextSlide} className="text-2xl bg-white rounded-full p-2 shadow-2xl shadow-primary/80 text-[#222] hover:text-secoundary transition-all duration-300 md:-mr-5"><AiOutlineRight /></button>
          </div>
      </div>
      <div className="flex items-center flex-grow mb-5 md:w-[90%]">
          <h1 className=" flex-grow text-xl">What people loved about this seller</h1>
          <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-base cursor-pointer hover:underline">See all reviews</Link>
        </div>
      <div className="my-5 md:w-[90%] relative border border-primary/20">
        
      <ReviewClient testiMonailSectionData={testiMonailSectionData} />
      </div>

      <Description description={description} />

    </div>
  );
};

export default Content;
