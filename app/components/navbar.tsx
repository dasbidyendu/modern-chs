import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-fit w-full py-4 bg-[#314BD2] flex items-center justify-between px-[50px] ">
        <div className="h-[40px] w-[40px] bg-white"></div>
        <div className="flex justify-evenly items-center text-white w-fit gap-[70px] px-[20px] mr-[100px]">
          <h1 className="text-xl font-light cursor-pointer ">LOGIN</h1>
          <h1 className="text-xl font-light cursor-pointer ">SIGNUP</h1>
          <h1 className="text-xl font-light cursor-pointer ">PREMIUM</h1>
          <button className="e-button rounded-full px-6 py-2 text-xl">
            EMERGENCY
          </button>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-[#dddbfb] w-full h-fit py-4 text-xl font-normal">
        <Link href={"/"} className="link">
          BLOOD BANK
        </Link>
        <Link href={"/"} className="link">
          NEARBY HOSPITAL
        </Link>
        <Link href={"/"} className="link">
          OXYGEN AVAILABILITY
        </Link>
        <Link href={"/"} className="link">
          PHARMACY
        </Link>
        <Link href={"/"} className="link">
          ONLINE DOCTOR APPOINTMENT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
