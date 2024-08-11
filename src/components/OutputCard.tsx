import type { OutputCardProps } from "../lib/type";

const OutputCard = (props: OutputCardProps) => {
  return (
    <div className="bg-[hsl(var(--lightorange))] w-full h-full shadow-[5px_5px_0px_0px_#000000]">
      <div className="sticky top-0 p-4 w-full  h-full rounded-md shadow-md">
        <div className=" p-2  m-1">
          <h3 className="font-bold mb-2">Raw Cursor Position</h3>
          <input
            type="text"
            readOnly
            value={`X: ${props.coordinates.x}`}
            className="w-full p-2 border-2 border-black cursor-default"
          />
          <input
            type="text"
            readOnly
            value={`Y: ${props.coordinates.y}`}
            className="w-full p-2 border-2 border-black cursor-default mt-2"
          />
        </div>
        <div className=" p-2 m-1">
          <h3 className="font-bold mb-2">Normalized Position (0-1)</h3>
          <input
            type="text"
            readOnly
            value={`X: ${props.coordinatesBy1.x}, Y: ${props.coordinatesBy1.y}`}
            className="w-full p-2 border-2 border-black cursor-default"
          />
        </div>
        <div className=" p-2 m-1">
          <h3 className="font-bold mb-2">Normalized Position (0-10)</h3>
          <input
            type="text"
            readOnly
            value={`X: ${props.coordinatesBy10.x}, Y: ${props.coordinatesBy10.y}`}
            className="w-full p-2 border-2 border-black cursor-default"
          />
        </div>
      </div>
    </div>
  );
};

export default OutputCard;
