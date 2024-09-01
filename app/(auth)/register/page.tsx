"use client";

import AuthSideCard from "@/app/components/auth-side-card";
import { signup } from "../login/actions";

const page = () => {
  return (
    <div className="h-dvh w-dvw bg-transparent flex justify-center items-center bg-gradient-to-bl from-[rgb(113,127,255)] to-[rgb(221,219,251)] ">
      <form className="w-1/3 h-1/2 flex flex-col gap-[10px] justify-center ">
        <label htmlFor="email" className="text-[#0000007e]">
          mail id
        </label>
        <input
          className="w-2/3 h-[30px] bg-white outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          id="email"
          name="email"
          type="email"
          required
        ></input>
        <legend className="text-[#0000007e]">name</legend>
        <input
          className="w-2/3 h-[30px] outline-none bg-white border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="name"
          id="username"
          name="username"
          required
        ></input>
        <label htmlFor="password" className="text-[#0000007e]">
          password
        </label>
        <input
          className="w-2/3 h-[30px] outline-none bg-white border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          id="password"
          name="password"
          type="password"
          required
        ></input>
        <legend className="text-[#0000007e]">confirm password</legend>
        <input
          className="w-2/3 h-[30px] outline-none bg-white border-none px-2 rounded-[10px] focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          type="password"
        ></input>

        <div className="flex gap-[5px]">
          <input type="checkbox"></input>
          <p className="text-[#0000007e]">i am not a robot</p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <button
            type="submit"
            formAction={signup}
            className="w-1/2 bg-white hover:shadow-md transition-all text-blue-600 rounded-md py-2"
          >
            sign up
          </button>
        </div>
      </form>
      <AuthSideCard
        href="login"
        content="Already have an account?"
        buttonContent="sign in"
      />
    </div>
  );
};

export default page;
