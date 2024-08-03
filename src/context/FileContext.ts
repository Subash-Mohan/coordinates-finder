import React from "react";

type FileContextType = {
	isenabled: boolean;
	setEnabled: (enabled: boolean) => void;
};
const FileContext = React.createContext<FileContextType>({
	isenabled: false,
	setEnabled: () => {},
});

export default FileContext;
