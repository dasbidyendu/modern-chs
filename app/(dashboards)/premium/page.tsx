"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";

const page = () => {
  return (
    <div className=" overflow-y-scroll h-full flex-1 flex flex-col py-[50px] ">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col gap-[50px] py-[50px] px-[180px]">
          <div className="w-[600px] h-[300px] shadow-md rounded-2xl bg-gradient-to-br from-[#7270D84e] to-[#fd55924e] flex justify-center items-center">
            <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
              <Link href={"/"} className="text-[#a10634] text-3xl font-normal">
                BLOOD BANK
              </Link>
              <p className="text-[20px] font-light text-black">
                locate blood bank near you
              </p>
            </div>
            <div className="flex flex-1 items-end justify-center">
              <Image
                alt=""
                width={380}
                height={380}
                src={"/blood-bank.png"}
              ></Image>
            </div>
          </div>

          <div className="w-[600px] h-[300px] rounded-2xl shadow-md bg-gradient-to-br from-[#0e2dd14e] to-[#5dfd634e] flex justify-center items-center">
            <div className="flex flex-col w-[60%] text-left pl-6 pt-8 gap-4 text-wrap h-full ">
              <Link href={"/"} className="text-[#111a47] text-3xl font-normal">
                NEAREST PHARMACY AND MEDICAL
              </Link>
              <p className="text-[20px] font-light text-black">
                locate nearest pharmacy and medical centers for emergency
                situations
              </p>
            </div>
            <div className="flex flex-1 items-end justify-center">
              <Image
                alt=""
                width={380}
                height={380}
                src={"/locate-pharma.png"}
              ></Image>
            </div>
          </div>
          <div className="w-[600px] h-[80px] shadow-md rounded-2xl bg-[#4d64d66e] flex items-center justify-between px-8 hover:cursor-pointer">
            <h2 className="text-[25px] font-light text-gray-900 ">
              MEDICAL REPORTS
            </h2>
            <FiPlusCircle size={40} color="white" />
          </div>
          <div className="w-[600px] text-[25px] text-black font-light hover:shadow-md transition-all bg-[#425ad46e] rounded-2xl px-8 gap-[15px] h-fit py-10 flex flex-col items-start justify-center">
            <Link href={""} className="hover:text-gray-200  transition-all">
              HOSPITAL SCHEDULE
            </Link>
            <Link href={""} className="hover:text-gray-200  transition-all">
              DOCTOR'S SCHEDULE
            </Link>
            <Link href={""} className="hover:text-gray-200  transition-all">
              HOSPITAL BED VACANCY
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[600px] h-[650px] bg-gradient-to-b from-[#314bd27e] rounded-[30px] to-[#a985f67e] flex flex-col justify-start pt-[50px] items-center">
            <p className="text-[25px] text-gray-200 font-light">APPOINTMENTS</p>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-gray-200">
                    <th></th>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Date</th>
                    <th>Time Left</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover:bg-[#ffffff4a]">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                                      <td>Blue</td>
                                      <td>
                                      <span className="countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>:
  <span style={{"--value":24}}></span>:
  <span style={{"--value":${counter}}}></span>
</span>
                                      </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover:bg-[#ffffff4a]">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                                      <td>Purple</td>
                                      
                  </tr>
                  {/* row 3 */}
                  <tr className="hover:bg-[#ffffff4a]">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-3/4 rounded-2xl h-fit bg-[#314bd24e] py-[30px]">
          <div className="w-full flex h-fit justify-center font-normal text-black items-center text-[20px] ">
            COMPLAINT SYSTEM
          </div>
          <div className="flex justify-between px-[190px] font-normal text-black text-[20px] ">
            <Link
              href={"/login"}
              className="hover:text-gray-200 transition-all"
            >
              Check Hospital's Rating
            </Link>
            <Link
              href={"/login"}
              className="hover:text-gray-200 transition-all"
            >
              Rate a hospital
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
