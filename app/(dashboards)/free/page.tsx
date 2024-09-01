"use client";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col flex-1 py-[50px]">
      <div className="flex-1 grid py-[50px] px-[180px]  grid-cols-2 place-content-evenly place-items-center">
        <div className="w-[600px] h-[300px] shadow-md rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link
              href={"/blood-bank"}
              className="text-[#a10634] text-3xl font-normal"
            >
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
        <div className="w-[600px] h-[300px] rounded-2xl shadow-md bg-gradient-to-br from-[#0e2dd14e] to-[#d35dfd4e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link
              href={"/find-oxygen"}
              className="text-[#111a47] text-3xl font-normal"
            >
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
              src={"/oxygen.png"}
            ></Image>{" "}
          </div>
        </div>
        <div className="w-[600px] h-[300px] rounded-2xl shadow-md bg-gradient-to-br from-[#0e2dd14e] to-[#5dfd634e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link
              href={"/find-pharmacies"}
              className="text-[#111a47] text-3xl font-normal"
            >
              NEAREST PHARMACY AND MEDICAL
            </Link>
            <p className="text-[20px] font-light text-black">
              locate nearest pharmacy and medical centers for emergency
              situations
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={380}
              height={380}
              src={"/locate-pharma.png"}
            ></Image>{" "}
          </div>
        </div>
        <div className="w-[600px] h-[300px] rounded-2xl shadow-md bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
          <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
            <Link
              href={"https://www.apollopharmacy.in/"}
              className="text-[#111a47] text-3xl font-normal"
            >
              E-PHARMACY
            </Link>
            <p className="text-[20px] font-light text-black">
              order medicine from your home and get instant delivery
            </p>
          </div>
          <div className="flex flex-1 items-end justify-center">
            {" "}
            <Image
              alt=""
              width={430}
              height={430}
              src={"/epharmacy.png"}
            ></Image>{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-3/4 rounded-2xl h-fit bg-[#314bd24e] py-[30px]">
          <div className="w-full flex h-fit justify-center font-normal text-black items-center text-[20px] ">
            COMPLAINT SYSTEM
          </div>
          <div className="flex justify-between px-[190px] font-normal text-black text-[20px] ">
            <Link href={""} className="hover:text-white transition-all">
              Check Hospital's Rating
            </Link>
            <Link href={""} className="hover:text-white transition-all">
              Rate a hospital
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
