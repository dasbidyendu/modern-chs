import Image from "next/image";

interface AuthCardProps {
  content: string;
  buttonContent: string;
}

const AuthSideCard = ({ content, buttonContent }: AuthCardProps) => {
  return (
    <div className="w-1/4 as-card rounded-[30px] flex flex-col justify-center items-center gap-[20px] h-2/3 bg-[#314bd2]">
      <Image width={400} height={200} src={"/sign-up-ill.png"} alt=""></Image>
      <h1 className="text-white text-2xl">{content}</h1>
      <button className="text-blue-600 bg-white rounded-md w-1/3 px-4 py-2 hover:shadow-md hover:shadow-gray-400 sha ">
        {buttonContent}
      </button>
    </div>
  );
};

export default AuthSideCard;
