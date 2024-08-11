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

      <div className="flex flex-row w-full gap-10 mt-10 justify-center">
        <Card
          hoverText="Blank"
          color="hsl(var(--yellow))"
          toLink="blank-canvas"
        />
        <Card hoverText="Upload" color="hsl(var(--lightorange))" toLink="/">
          <UploadIcon />
        </Card>
      </div>
    </div>
  );
};

export default SelectionCard;
