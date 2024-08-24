import UploadIcon from "../icons/UploadIcon";
import Card from "./Card";

const SelectionCard = () => {
  return (
    <div className="flex flex-col w-[80%]  m-auto md:p-8 justify-center items-center ">
      <div className="bg-white mb-10">
        <p className="md:text-3xl text-xl font-bold  w-full text-center -mb-10">
          Choose a Blank Canvas or Upload a PDF to see your cursor's exact
          coordinates as you move through the document.
        </p>
      </div>

      <div className=" flex flex-row w-full gap-10 mt-10 justify-center">
        <Card
          hoverText="Blank"
          color="hsl(var(--yellow))"
          toLink="blank-canvas"
        />
        <Card hoverText="Upload" color="hsl(var(--lightorange))" toLink="/">
          <UploadIcon />
        </Card>
        <div className="absolute top-[10%] -left-[6%] md:top-[78%] md:left-[68%] -z-10 lg:left-[59%] lg:top-[72%] ">
          <svg
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>square vector</title>
            <path
              d="M33.6375 33.6375H71.1375M33.6375 33.6375V71.1375M33.6375 33.6375V2M33.6375 33.6375H2M71.1375 33.6375V71.1375M71.1375 33.6375V2M71.1375 33.6375H102.775M71.1375 71.1375H33.6375M71.1375 71.1375H102.775M71.1375 71.1375V102.775M33.6375 71.1375V102.775M33.6375 71.1375H2"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
