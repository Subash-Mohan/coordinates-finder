import UploadIcon from "../icons/UploadIcon";
import Card from "./Card";

const SelectionCard = () => {
	return (
		<div className="flex flex-col w-[80%] md:w-[60%] m-auto md:p-8 justify-center items-center ">
			<p className="md:text-2xl font-semibold bg-red-200 w-full text-center">
				Choose a Blank Canvas or Upload a PDF to see your cursor's exact
				coordinates as you move through the document.
			</p>
			<div className="flex flex-row w-full gap-10 mt-10 justify-center">
				<Card hoverText="Blank Canvas" />
				<Card hoverText="Upload">
					<UploadIcon />
				</Card>
			</div>
		</div>
	);
};

export default SelectionCard;
