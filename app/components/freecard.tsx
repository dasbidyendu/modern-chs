interface FreeCardProps {
  title: string;
  description: string;
  illustrationUrl: string;
  style: React.CSSProperties;
}

const FreeCard = (props: FreeCardProps) => {
  return (
    <div className="w-[40%] h-1/3 flex justify-center items-center">
      <div className="flex flex-col gap-[50px]"></div>
      <div className="flex flex-col justify-end items-center"></div>
    </div>
  );
};

export default FreeCard;
