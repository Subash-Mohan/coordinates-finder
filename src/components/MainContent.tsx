import { useContext } from "react";
import FileContext from "../context/FileContext";
import SelectionCard from "./SelectionCard";
import SideBar from "./SideBar";
import Canvas from "./Canvas";

const MainContent = () => {
	const { isenabled } = useContext(FileContext);
	return (
		<div className="flex flex-row">
			<SideBar />
			{isenabled ? <Canvas /> : <SelectionCard />}
		</div>
	);
};

export default MainContent;
