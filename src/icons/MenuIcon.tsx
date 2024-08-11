const MenuIcon = () => {
  return (
    <div className="border-2 border-solid border-black p-1 bg-[hsl(var(--blue))] shadow-[3px_3px_0px_0px_#000000]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 text-black font-bold"
      >
        <title>Menu Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
