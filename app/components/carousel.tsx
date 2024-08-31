"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carousel w-full h-[700px] mb-[50px] relative ">
      <button className="">
        <FaArrowRight />
      </button>
      <div className="items-holder flex flex-nowrap overflow-x-hidden overflow-y-hidden overscroll-none">
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
      </div>
      <button>
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default Carousel;
