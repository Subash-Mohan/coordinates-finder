import { useContext, useEffect } from "react";
import FileContext from "../context/FileContext";
const SideBar = () => {
	const { isenabled } = useContext(FileContext);
	useEffect(() => {
		console.log("Enabled: ", isenabled);
	}, [isenabled]);

	return (
		<div
			className={`${isenabled ? "w-1/4" : "w-0"} h-screen bg-white transition-all duration-300 pt-10`}
		>
			<h1 className="text-black text-lg font-bold text-center">Sidebar</h1>
		</div>
	);
};

export default SideBar;
