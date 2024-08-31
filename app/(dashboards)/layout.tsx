"use client";

import Sidebar from "../components/sidebar";
import React from "react";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-dvw h-dvh flex items-center justify-start">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-start text-white font-bold text-3xl text-center md:text-4xl lg:text-7xl">
          <Sidebar />
          {children}
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
