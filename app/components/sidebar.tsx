import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-[80px] sidebar flex flex-col pt-[40px] gap-[70px] justify-start items-center h-dvh ">
      <FaRegUserCircle size={40} color="#0000005e" />
      <Link href={"/"}>
        <GrHomeRounded size={35} color="#0000005e" />
      </Link>
      <Link href={"/login"}>
        <MdOutlineLogout
          size={45}
          color="#0000005e"
          className="hover:cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
