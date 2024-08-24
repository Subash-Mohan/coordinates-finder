import AdvertisementCard from "../components/AdvertisementCard";
import SelectionCard from "../components/SelectionCard";

const HomePage = () => {
  return (
    <div className="flex flex-row h-full pt-14">
      <div className="w-[20%]  p-2 hidden md:block">
        <AdvertisementCard />
      </div>
      <div className="absolute sm:left-0 md:left-[20%] mdl:left-[22%]  md:top-[60%] top-[80%] -z-10">
        <svg
          width="120"
          height="111"
          viewBox="0 0 120 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>purple Vector</title>
          <path
            d="M22.199 107.012C-11.301 96.5117 57.699 -20.4883 54.699 14.5117C51.699 49.5117 111.199 9.01167 117.699 14.5116C124.199 20.0116 106.199 62.0116 88.699 83.0116C71.1991 104.012 55.699 117.512 22.199 107.012Z"
            fill="#967FEF"
          />
          <path
            d="M10.5 100.5C-23 90.0001 46 -26.9999 43 8.00008C40 43.0001 99.5 2.50007 106 8.00004C112.5 13.5 94.5 55.5 77 76.5C59.5 97.5 44 111 10.5 100.5Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="flex-1 flex justify-center p-2 items-center">
        <SelectionCard />
      </div>

      <div className="absolute right-0 top-[20%] sm:right-0 md:right-[15%] mdl:right-[18%]  md:top-[60%] -z-10">
        <svg
          width="108"
          height="144"
          viewBox="0 0 108 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Orange Vector</title>
          <path
            d="M24 129.9C-9.50005 119.4 43.0572 59.9999 47 14C50.9428 -31.9999 65.4606 63 71.9606 68.5C78.4606 74 120 108.9 102.5 129.9C85 150.9 57.5 140.4 24 129.9Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M8.46051 104.4C-25.0395 93.9004 51.9605 -15.0996 48.9605 19.9004C45.9605 54.9004 77.4606 60.9004 83.9606 66.4004C90.4606 71.9004 101.461 100.9 83.9606 121.9C66.4606 142.9 41.9605 114.9 8.46051 104.4Z"
            fill="#FFA384"
          />
        </svg>
      </div>
      <div className="w-[20%]  p-2 hidden md:block">
        <AdvertisementCard />
      </div>
    </div>
  );
};

export default HomePage;
