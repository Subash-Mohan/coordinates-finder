import "./App.css";
import Navbar from "./components/Navbar";
import SelectionCard from "./components/SelectionCard";

function App() {
	return (
		<div className="h-screen flex flex-col justify-around">
			<Navbar />
			<SelectionCard />
		</div>
	);
}

export default App;
