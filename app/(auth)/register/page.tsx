"use client";

import AuthSideCard from "@/app/components/auth-side-card";
import axios from "axios";
import { NextApiResponse } from "next";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const data = { email: email, userName: userName, password: password };

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/register", data);
    } catch (err: any) {}
  };

  return (
    <div className="h-dvh w-dvw bg-transparent flex justify-center items-center  ">
      <form
        className="w-1/3 h-1/2 flex flex-col gap-[10px] justify-center "
        onSubmit={handleRegister}
      >
        <legend className="text-[#0000007e]">mail id</legend>
        <input
          className="w-2/3 h-[30px] outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="text"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <legend className="text-[#0000007e]">name</legend>
        <input
          className="w-2/3 h-[30px] outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="text"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <legend className="text-[#0000007e]">password</legend>
        <input
          className="w-2/3 h-[30px] outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <legend className="text-[#0000007e]">confirm password</legend>
        <input
          className="w-2/3 h-[30px] outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="password"
        ></input>

        <div className="flex gap-[5px]">
          <input type="checkbox"></input>
          <p className="text-[#0000007e]">i'm not a robot</p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <button
            type="submit"
            className="w-1/2 bg-white hover:shadow-md transition-all text-blue-600 rounded-md py-2"
          >
            sign up
          </button>
        </div>
      </form>
      <AuthSideCard
        content="Already have an account?"
        buttonContent="sign in"
      />
    </div>
  );
};

export default page;
