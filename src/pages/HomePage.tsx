import AdvertisementCard from "../components/AdvertisementCard";
import SelectionCard from "../components/SelectionCard";

const HomePage = () => {
  return (
    <div className="flex flex-row h-full pt-14">
      <div className="w-[20%]  p-2 hidden md:block">
        <AdvertisementCard />
      </div>
      <div className="flex-1 flex justify-center p-2 items-center ">
        <SelectionCard />
      </div>
      <div className="w-[20%]  p-2 hidden md:block">
        <AdvertisementCard />
      </div>
    </div>
  );
};

export default HomePage;
