import { useMemo, useState } from "react";
import AdvertisementCard from "../components/AdvertisementCard";
import OutputCard from "../components/OutputCard";
import MobileOutputCard from "../components/MobileOutputCard";

const BlankCanvasPage = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [coordinatesBy1, setCoordinatesBy1] = useState({ x: 0, y: 0 });
  const [coordinatesBy10, setCoordinatesBy10] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const normalizedXBy1 = ((x / rect.width) * 1).toFixed(2);
    const normalizedYBy1 = ((y / rect.height) * 1).toFixed(2);
    const normalizedXBy10 = ((x / rect.width) * 10).toFixed(2);
    const normalizedYBy10 = ((y / rect.height) * 10).toFixed(2);
    setCoordinates({ x, y });
    setCoordinatesBy1({
      x: Number.parseFloat(normalizedXBy1),
      y: Number.parseFloat(normalizedYBy1),
    });
    setCoordinatesBy10({
      x: Number.parseFloat(normalizedXBy10),
      y: Number.parseFloat(normalizedYBy10),
    });
  };

  const advertisementCard = useMemo(() => <AdvertisementCard />, []);
  return (
    <div className="flex flex-col md:flex-row h-full pt-14">
      <div className="w-72 p-2 hidden md:block">
        <OutputCard
          coordinates={coordinates}
          coordinatesBy1={coordinatesBy1}
          coordinatesBy10={coordinatesBy10}
        />
      </div>
      <div className="flex-1 flex justify-center p-2 items-center ">
        <div
          className=" h-[450px] md:h-[600px] max-w-screen-md aspect-[1/1.414] bg-white border-2 border-solid border-black flex justify-center items-center"
          onMouseMove={handleMouseMove}
        >
          <p className="text-center text-black font-bold mt-2">
            Move your cursor here
          </p>
        </div>
      </div>
      <div className="w-[20%]  p-2 hidden md:block">{advertisementCard}</div>
      <div className=" md:hidden p-2">
        <MobileOutputCard
          coordinates={coordinates}
          coordinatesBy1={coordinatesBy1}
          coordinatesBy10={coordinatesBy10}
        />
      </div>
    </div>
  );
};

export default BlankCanvasPage;
