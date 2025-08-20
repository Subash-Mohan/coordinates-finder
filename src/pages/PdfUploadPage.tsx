import { useMemo, useState, useEffect } from "react";
import AdvertisementCard from "../components/AdvertisementCard";
import OutputCard from "../components/OutputCard";
import MobileOutputCard from "../components/MobileOutputCard";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.js?url";

const PdfUploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [coordinatesBy1, setCoordinatesBy1] = useState({ x: 0, y: 0 });
  const [coordinatesBy10, setCoordinatesBy10] = useState({ x: 0, y: 0 });
  const defaultLayoutPluginInstance = useMemo(
    () => defaultLayoutPlugin(),
    []
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    const viewer = target.closest(".rpv-core__viewer") as HTMLElement | null;
    if (!viewer) {
      return;
    }
    const rect = viewer.getBoundingClientRect();
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
    setFileUrl(null);
  }, [file]);

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
      <div className="flex-1 flex flex-col justify-center p-2 items-center gap-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        {fileUrl ? (
          <div
            className="relative h-[450px] md:h-[600px] max-w-screen-md aspect-[1/1.414] bg-white border-2 border-solid border-black shadow-[5px_5px_0px_0px_#000000] rounded-md overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <Worker workerUrl={workerUrl}>
              <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[450px] md:h-[600px] max-w-screen-md aspect-[1/1.414] bg-white border-2 border-solid border-black shadow-[5px_5px_0px_0px_#000000] rounded-md">
            <p className="text-center text-black font-bold">
              Upload a PDF to begin
            </p>
          </div>
        )}
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

export default PdfUploadPage;
