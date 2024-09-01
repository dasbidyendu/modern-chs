"use client";

import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Navbar from "./components/navbar";
import MidSection from "./components/mid-section";
import Cards from "./components/cards";

const content = [
  {
    title: "Instant Blood Bank Locator",
    description:
      "Quickly find nearby blood banks with up-to-date information on available blood types.",

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Oxygen Availability",
    description:
      "Access real-time oxygen supply information from nearby hospitals and dispensaries, ensuring immediate response during emergencies Dispensary Services: Locate local dispensaries, check medication availability, and view operating hours.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Dispensary Services",
    description:
      "Locate local dispensaries, check medication availability, and view operating hours.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Complaint Management System File and Track Complaint",
    description:
      "Users can file healthcare-related complaints directly through the platform, and monitor the resolution process in real time. Efficient Issue Resolution: A dedicated system ensures that complaints are addressed promptly, enhancing patient satisfaction and trust.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-[#DDDBFB] w-dvw h-dvh pt-[0px]">
      <Navbar />
      <MidSection />
      <Cards />
      <StickyScroll content={content} />
      <footer className="footer bg-blue-600 text-gray-200 text-[20px] p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer ">
            Locate Blood Banks
          </a>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer ">
            Locate Medicals and Pharmacies
          </a>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer ">
            Schedule Doctor Appointments
          </a>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer ">
            E-Pharmacy
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer  ">
            About us
          </a>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer  ">
            Contact
          </a>
          <a className=" text-gray-200 hover:text-white hover:cursor-pointer  ">
            Jobs
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className=" text-gray-400 hover:text-white hover:cursor-pointer  ">
            Terms of use
          </a>
          <a className=" text-gray-400 hover:text-white hover:cursor-pointer  ">
            Privacy policy
          </a>
          <a className=" text-gray-400 hover:text-white hover:cursor-pointer  ">
            Cookie policy
          </a>
        </nav>
      </footer>
    </div>
  );
}
