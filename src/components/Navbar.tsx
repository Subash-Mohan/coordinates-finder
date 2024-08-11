import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CancelIcon from "../icons/CancelIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let pathname = window.location.pathname;
  pathname = pathname === "/blank-canvas" ? "/" : pathname;

  const getNavItemClass = (route: string) => {
    return pathname === route
      ? "inline-block text-black text-sm font-bold px-7 py-2 bg-[hsl(var(--blue))] border-solid border-2 border-black shadow-[4px_4px_0px_0px_#000000] cursor-pointer"
      : "inline-block text-black text-sm font-bold px-7 py-2 hover:bg-[hsl(var(--blue))] hover:border-solid hover:border-2 hover:border-black hover:shadow-[4px_4px_0px_0px_#000000] cursor-pointer";
  };
  const getMobNavItemClass = (route: string) => {
    return pathname === route
      ? "text-black text-sm font-bold py-2 border-solid border-2 bg-[hsl(var(--blue))] border-black shadow-[4px_4px_0px_0px_#000000]  w-full flex justify-center "
      : "text-black text-sm font-bold py-2 hover:border-solid hover:border-2 hover:bg-[hsl(var(--blue))] hover:border-black hover:shadow-[4px_4px_0px_0px_#000000]  w-full flex justify-center ";
  };
  const handleRedirect = (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent
  ) => {
    e.preventDefault();
    const route = (e.target as HTMLElement).getAttribute("data-route");
    console.log(route);
    window.location.href = route || "/";
  };

  return (
    <nav className="fixed right-0 left-0 top-0 p-4 z-[100] ">
      <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-between px-6">
          <aside className="flex items-center">
            <h1 className="text-black text-lg font-bold">Position Tracer</h1>
          </aside>
          <button
            className="block md:hidden text-black "
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {isOpen ? <CancelIcon /> : <MenuIcon />}
          </button>
          <ul className="hidden md:block md:-m-2">
            <li
              className={getNavItemClass("/")}
              onClick={handleRedirect}
              onKeyDown={handleRedirect}
              data-route="/"
            >
              Home
            </li>
            <li className={getNavItemClass("/blog")} data-route="/blog">
              Blog
            </li>
          </ul>
        </div>
        <ul
          className={`flex ${
            isOpen ? "max-h-screen py-3" : "max-h-0"
          } transition-all duration-300 overflow-hidden flex-col  md:hidden items-center bg-white shadow-[4px_4px_0px_0px_#000000]`}
        >
          <li
            className={getMobNavItemClass("/")}
            onClick={handleRedirect}
            onKeyDown={handleRedirect}
            data-route="/"
          >
            Home
          </li>
          <li className={getMobNavItemClass("/blog")} data-route="/blog">
            Blog
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
