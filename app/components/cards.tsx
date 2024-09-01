const Cards = () => {
  return (
    <div className="flex items-center justify-center gap-[50px] bg-[#dddbfb] mb-0 cards">
      <div className="h-[350px] w-[300px] bg-[#2940b2] rounded-[50px] flex flex-col card justify-start py-12 border border-[#2d2c52] items-center px-8 gap-[20px] text-left text-white">
        <h1 className="cursor-default text-left w-full text-xl">BLOOD BANK</h1>
        <p className="text-sm">
          Find blood banks near you with ease! Our user-friendly app allows you
          to quickly search for blood banks in your area, filter results by
          blood group, and view their contact information and operating hours.
          Never be caught unprepared in a medical emergency again
        </p>
      </div>
      <div className="h-[350px] w-[300px] bg-[#2940b2] rounded-[50px] flex flex-col card justify-start py-12 border border-[#2d2c52] items-center px-8 gap-[20px] text-left text-white">
        <h1 className="cursor-default text-left w-full text-xl">OXYGEN</h1>
        <p className="text-sm">
          oxygen supply updates, allowing users to quickly check the
          availability of oxygen at nearby hospitals and dispensaries.
        </p>
      </div>
      <div className="h-[350px] w-[300px] bg-[#2940b2] rounded-[50px] flex flex-col card justify-start py-12 border border-[#2d2c52] items-center px-8 gap-[20px] text-left text-white">
        <h1 className="cursor-default text-left w-full text-xl">HOSPITAL</h1>
        <p className="text-sm">
          Discover detailed service offerings from nearby hospitals, including
          specialized treatments and medical procedures.
        </p>
      </div>
      <div className="h-[350px] w-[300px] bg-[#2940b2] rounded-[50px] flex flex-col card justify-start py-12 border border-[#2d2c52] items-center px-8 gap-[20px] text-left text-white">
        <h1 className="cursor-default text-left w-full text-xl">PHARMACY</h1>
        <p className="text-sm">
          dispensary locator, users can find local dispensaries, check
          medication availability, and access key operational details
        </p>
      </div>
    </div>
  );
};

export default Cards;
