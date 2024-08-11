import type { OutputCardProps } from "../lib/type";

const MobileOutputCard = (props: OutputCardProps) => {
  return (
    <div className="bg-[hsl(var(--lightorange))] w-full h-full shadow-[5px_5px_0px_0px_#000000] flex flex-row gap-2 text-sm">
      <div className="h-full w-2/6 p-2">
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
      <div className="h-full w-2/6 p-2">
        <h3 className="font-bold mb-2">Normalized Position (0-1)</h3>
        <input
          type="text"
          readOnly
          value={`X: ${props.coordinatesBy1.x}, Y: ${props.coordinatesBy1.y}`}
          className="w-full p-2 border-2 border-black cursor-default"
        />
      </div>
      <div className="h-full w-2/6 p-2">
        <h3 className="font-bold mb-2">Normalized Position (0-10)</h3>
        <input
          type="text"
          readOnly
          value={`X: ${props.coordinatesBy10.x}, Y: ${props.coordinatesBy10.y}`}
          className="w-full p-2 border-2 border-black cursor-default"
        />
      </div>
    </div>
  );
};

export default MobileOutputCard;
