import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonialSectionType } from '@/atom/santyType';
import { Autoplay} from 'swiper/modules';
import ReviewSlider from './reviewSlider';

type Props = {
    testiMonailSectionData : testimonialSectionType[]
}

const ReviewClient = ({testiMonailSectionData}: Props) => {
  const slideRef = useRef<any>()

  return (
    <Swiper 
    centeredSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }} 
    loop={true}
    modules={[Autoplay]}
    ref={slideRef as any}
    >
         {testiMonailSectionData.map((item) => (
          <SwiperSlide key={item._id}>
              <ReviewSlider item={item} slideRef={slideRef}/>
          </SwiperSlide>
          
         ) )}

         
        
                 
      </Swiper>
         
  )
}

export default ReviewClient