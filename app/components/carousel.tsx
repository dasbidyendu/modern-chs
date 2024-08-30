"use client";

import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carousel w-full h-[700px] mb-[50px] flex flex-nowrap overflow-x-scroll overscroll-none">
      <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
      <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
      <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
      <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
    </div>
  );
};

export default Carousel;
