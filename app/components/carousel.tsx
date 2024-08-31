"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickRight = () => {};
  const handleClickLeft = () => {};

  return (
    <div className="carousel w-full h-[700px] mb-[50px] relative ">
      <button
        className="absolute top-0 right-0 translate-x-[-20px] translate-y-[350px]"
        onClick={handleClickRight}
      >
        <FaArrowRight color="white" size={30} />
      </button>
      <div className="items-holder flex flex-nowrap overflow-x-hidden overflow-y-hidden overscroll-none">
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
        <div className="item item-a w-dvw h-[700px] flex justify-center items-center"></div>
      </div>
      <button
        className="absolute top-0 left-0 translate-x-[20px] translate-y-[350px]"
        onClick={handleClickLeft}
      >
        <FaArrowLeft color="white" size={30} />
      </button>
    </div>
  );
};

export default Carousel;
