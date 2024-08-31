import Sidebar from "@/app/components/sidebar";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";

const page = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <BackgroundGradientAnimation interactive={false}>
        <div className="flex justify-start items-center w-full h-full">
          <Sidebar />
          <div className="flex flex-1 justify-center items-center">
            <form className="w-2/3 h-[600px] flex flex-col items-center px-[100px] justify-center gap-[30px] rounded-3xl bg-gradient-to-b from-[#314bd26e] to-[#9747ff6e]">
              <div className="flex flex-col w-3/4 h-fit gap-[20px]">
                <label className="text-[25px]">Enter your location</label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-md h-fit border-none outline-none focus:shadow-md"
                  placeholder="Park Street , Bow Bazaar , Kolkata"
                ></input>
              </div>
              <div className="w-full h-fit flex justify-center items-center">
                <button className="bg-white rounded-xl h-fit w-fit px-8 py-2 hover:shadow-md">
                  Find
                </button>
              </div>
            </form>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default page;
