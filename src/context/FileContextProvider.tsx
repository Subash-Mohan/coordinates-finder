import type React from "react";
import { useState } from "react";
import FileContext from "./FileContext";

type FileContextProviderProps = {
	children: React.ReactNode;
};

const FileContextProvider = ({ children }: FileContextProviderProps) => {
	const [isenabled, setEnabled] = useState(false);

	return (
		<FileContext.Provider value={{ isenabled, setEnabled }}>
			{children}
		</FileContext.Provider>
	);
};

export default FileContextProvider;
