import ThreeDotIcon from "../icons/ThreeDotIcon";

const AdvertisementCard = () => {
  return (
    <div className="bg-white w-full h-full shadow-[5px_5px_0px_0px_#000000]">
      <div className="bg-[hsl(var(--purple))] h-5 flex flex-col justify-center pl-2">
        <ThreeDotIcon />
      </div>
    </div>
  );
};

export default AdvertisementCard;
