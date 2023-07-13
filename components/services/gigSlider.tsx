import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    slideRef : any
}

const GigSlider = ({slideRef}: Props) => {
    
  return (
    <Swiper
        slidesPerView={1}
        loop={true}
        ref={slideRef as any}
        >
          <SwiperSlide>
            <Image src="/signature-1.jpg"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>

          <SwiperSlide>
          <div style={{ padding: "56.24% 0 0 0", position: "relative" }}>
  <iframe
    src="https://player.vimeo.com/video/843646912?badge=0&autopause=0&player_id=0&app_id=58479"
    frameBorder={0}
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen={true}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
    title="video"
  />
</div>
          </SwiperSlide>
          

          <SwiperSlide>
            <Image src="/signature-2.jpg"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/signature-4.webp"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/signature-3.webp"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/signature-5.webp"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/signature-6.webp"  alt="signature" width={750} height={750} className=" z-10"/>
          </SwiperSlide>


          
        </Swiper>
  )
}

export default GigSlider