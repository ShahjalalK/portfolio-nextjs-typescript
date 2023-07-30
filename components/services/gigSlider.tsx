import { GigsType } from "@/atom/santyType";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  slideRef: any;
  Media: GigsType[];
};

const GigSlider = ({ slideRef, Media }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      ref={slideRef as any}
      className=" max-h-[25rem] "
    >
      {Media.map((item) => (
        <SwiperSlide key={item._id}>
          {item.video && (
            <div style={{ padding: "56.24% 0 0 0", position: "relative" }}>
              <iframe
                src={item.video}
                frameBorder={0}                
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="video"
              />
            </div>
          )}
          {item.mediaImage && (
            <Image
              src={item.mediaImage}
              alt="signature"
              width={750}
              height={750}
              className=" w-full h-full object-contain z-10"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GigSlider;
