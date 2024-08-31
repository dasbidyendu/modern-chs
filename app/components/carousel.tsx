"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="mb-[50px]"
    >
      <SwiperSlide>
        <div className="w-dvw h-[800px] overflow-hidden  flex justify-center items-center item-a "></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-dvw h-[800px] overflow-hidden  flex justify-center items-center item-a "></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-dvw h-[800px]  overflow-hidden flex justify-center items-center item-a "></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-dvw h-[800px] overflow-hidden   flex justify-center items-center item-a "></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
