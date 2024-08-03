import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky right-0 left-0 top-0 py-4 bg-white backdrop-blur-lg z-[100]">
			<div className="flex flex-col ">
				<div className="flex flex-row items-center justify-between px-6">
					<aside className="flex items-center">
						<h1 className="text-black text-lg font-bold">Position Tracer</h1>
					</aside>
					<button
						className="block md:hidden text-black"
						onClick={() => setIsOpen(!isOpen)}
						type="button"
					>
						☰
					</button>
					<ul className="hidden md:block">
						<li className="inline-block text-black text-sm font-semibold px-4 py-2 hover:bg-[hsl(var(--primary))] hover:text-white rounded-lg">
							Home
						</li>
						<li className="inline-block text-black text-sm font-semibold px-4 py-2 hover:bg-[hsl(var(--primary))] hover:text-white rounded-lg">
							Blog
						</li>
					</ul>
				</div>
				<ul
					className={`flex ${isOpen ? "max-h-screen py-3" : "max-h-0"} transition-all duration-300 overflow-hidden flex-col  md:hidden items-center`}
				>
					<li className="text-black text-sm font-semibold py-2 hover:bg-[hsl(var(--primary))] hover:text-white w-full flex justify-center">
						Home
					</li>
					<li className="text-black text-sm font-semibold py-2 hover:bg-[hsl(var(--primary))] hover:text-white w-full flex justify-center">
						Blog
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
