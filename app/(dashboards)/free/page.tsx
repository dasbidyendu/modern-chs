"use client";

import FreeCard from "@/app/components/freecard";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col flex-1">
      <div className="flex-1 grid py-[50px] px-[180px]  grid-cols-2 place-content-evenly">
        <div className="w-[600px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link href={"/"} className="text-[#a10634] text-3xl font-normal">
              BLOOD BANK
            </Link>
            <p className="text-[20px] font-light text-black">
              locate blood bank near you
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={380}
              height={380}
              src={"/blood-bank.png"}
            ></Image>{" "}
          </div>
        </div>
        <div className="w-[600px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link href={"/"} className="text-[#111a47] text-3xl font-normal">
              OXYGEN AVAILABILITY
            </Link>
            <p className="text-[20px] font-light text-black">
              locate oxygen availability in nearby hospitals
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={380}
              height={380}
              src={"/blood-bank.png"}
            ></Image>{" "}
          </div>
        </div>
        <div className="w-[600px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link href={"/"} className="text-[#a10634] text-3xl font-normal">
              BLOOD BANK
            </Link>
            <p className="text-[20px] font-light text-black">
              locate blood bank near you
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={380}
              height={380}
              src={"/blood-bank.png"}
            ></Image>{" "}
          </div>
        </div>
        <div className="w-[600px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link href={"/"} className="text-[#a10634] text-3xl font-normal">
              BLOOD BANK
            </Link>
            <p className="text-[20px] font-light text-black">
              locate blood bank near you
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={380}
              height={380}
              src={"/blood-bank.png"}
            ></Image>{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-full flex h-fit "></div>
      </div>
    </div>
  );
};

export default page;
