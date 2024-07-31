import type React from "react";
import { useState } from "react";
import "./home.css";

const Home = () => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const [coordinatesBy1, setCoordinatesBy1] = useState({ x: 0, y: 0 });
	const [coordinatesBy10, setCoordinatesBy10] = useState({ x: 0, y: 0 });

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const normalizedXBy1 = ((x / rect.width) * 1).toFixed(2);
		const normalizedYBy1 = ((y / rect.height) * 1).toFixed(2);
		const normalizedXBy10 = ((x / rect.width) * 10).toFixed(2);
		const normalizedYBy10 = ((y / rect.height) * 10).toFixed(2);
		setCoordinates({ x, y });
		setCoordinatesBy1({
			x: Number.parseFloat(normalizedXBy1),
			y: Number.parseFloat(normalizedYBy1),
		});
		setCoordinatesBy10({
			x: Number.parseFloat(normalizedXBy10),
			y: Number.parseFloat(normalizedYBy10),
		});
	};
	return (
		<div className=" h-full mx-auto bg-white">
			<div className="flex flex-row flex-wrap py-4 h-full">
				<aside className="w-full sm:w-1/3 md:w-1/4 px-2 h-full ">
					<div className="sticky top-0 p-4 w-full bg-slate-200 h-full rounded-md shadow-md">
						<div className="bg-white p-2 rounded-md shadow m-1">
							<h3 className="font-bold mb-2">Raw Cursor Position</h3>
							<input
								type="text"
								readOnly
								value={`X: ${coordinates.x}, Y: ${coordinates.y}`}
								className="w-full p-2 border rounded border-gray-300"
							/>
						</div>
						<div className="bg-white p-2 rounded shadow m-1">
							<h3 className="font-bold mb-2">Normalized Position (0-1)</h3>
							<input
								type="text"
								readOnly
								value={`X: ${coordinatesBy1.x}, Y: ${coordinatesBy1.y}`}
								className="w-full p-2 border rounded border-gray-300"
							/>
						</div>
						<div className="bg-white p-2 rounded shadow m-1">
							<h3 className="font-bold mb-2">Normalized Position (0-10)</h3>
							<input
								type="text"
								readOnly
								value={`X: ${coordinatesBy10.x}, Y: ${coordinatesBy10.y}`}
								className="w-full p-2 border rounded border-gray-300"
							/>
						</div>
					</div>
				</aside>
				<main className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 bg-slate-200 flex justify-center items-center rounded-md shadow-lg">
					<div
						className="h-[600px] max-w-screen-md aspect-[1/1.414] bg-white border-2 border-dashed border-gray-400 flex justify-center items-center"
						onMouseMove={handleMouseMove}
					>
						<p className="text-center text-gray-500 mt-2">
							Move your cursor here
						</p>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
