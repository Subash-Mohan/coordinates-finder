import { useContext } from "react";
import FileContext from "../context/FileContext";
type cardProps = {
	children?: React.ReactNode;
	hoverText: string;
};

const Card = ({ children, hoverText }: cardProps) => {
	const { setEnabled } = useContext(FileContext);

	return (
		<div
			className="group h-[200px] md:h-[250px] max-w-screen-md aspect-[1/1.414] bg-white border-2 border-dashed border-[hsl(var(--primary))] md:border-gray-400 flex justify-center items-center rounded-tr-xl hover:border-[hsl(var(--primary))] cursor-grab flex-col"
			tabIndex={0} // Makes the div focusable
			role="button" // Makes the div accessible
			onClick={() => {
				console.log("Card clicked");
				setEnabled(true);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					console.log("Card clicked");
					setEnabled(true);
				}
			}}
		>
			{children}
			<p className="text-center text-[hsl(var(--primary))] md:text-gray-500 mt-2 text-sm group-hover:text-[hsl(var(--primary))]">
				{hoverText}
			</p>
		</div>
	);
};
export default Card;
