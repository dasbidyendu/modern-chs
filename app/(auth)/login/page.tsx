"use client";

import AuthSideCard from "@/app/components/auth-side-card";
import { login } from "./actions";

const page = () => {
  return (
    <div className="h-dvh w-dvw bg-gradient-to-tr from-[rgb(113,127,255)] to-[rgb(221,219,251)] flex justify-center gap-[200px] items-center  ">
      <AuthSideCard
        href="register"
        content="Don't have an account ?"
        buttonContent="sign up"
      />
      <form className="w-1/3 h-1/2 flex flex-col gap-[10px] justify-center ">
        <label htmlFor="email" className="text-[#0000007e]">
          mail id
        </label>
        <input
          className="w-2/3  h-[30px] bg-white outline-none border-none px-2 rounded-[10px] focus:shadow-[#7a7ece9b] focus:shadow-md transition-all"
          id="email"
          name="email"
          type="email"
          required
        ></input>

        <label htmlFor="password" className="text-[#0000007e]">
          password
        </label>
        <input
          className="w-2/3 h-[30px] bg-white outline-none border-none px-2 rounded-[10px] fill-white focus:shadow-[#7a7eceab] focus:shadow-md transition-all"
          id="password"
          name="password"
          type="password"
          required
        ></input>

        <div className="flex gap-[5px]">
          <input type="checkbox"></input>
          <p className="text-[#0000007e]">i am not a robot</p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <button
            formAction={login}
            className="w-1/2 bg-white hover:shadow-md transition-all text-blue-600 rounded-md py-2"
          >
            sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
