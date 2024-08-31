import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center navbar">
      <div className="h-fit w-full py-2 bg-[#314BD2] flex items-center justify-between px-[50px] ">
        <div className="h-[40px] w-[40px] bg-white"></div>
        <div className="flex justify-evenly items-center text-white w-fit gap-[70px] px-[20px] mr-[100px]">
          <Link href={"/login"} className="text-xl font-light cursor-pointer ">
            LOGIN
          </Link>
          <Link
            href={"/register"}
            className="text-xl font-light cursor-pointer "
          >
            SIGNUP
          </Link>
          <Link href={"/"} className="text-xl font-light cursor-pointer ">
            PREMIUM
          </Link>
          <button className="e-button rounded-full px-6 py-2 text-xl">
            EMERGENCY
          </button>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-[#dddbfb] w-full h-fit py-4 text-xl font-normal">
        <Link href={"/login"} className="link">
          BLOOD BANK
        </Link>
        <Link href={"/login"} className="link">
          NEARBY HOSPITAL
        </Link>
        <Link href={"/login"} className="link">
          OXYGEN AVAILABILITY
        </Link>
        <Link href={"/login"} className="link">
          PHARMACY
        </Link>
        <Link href={"/login"} className="link">
          ONLINE DOCTOR APPOINTMENT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
