import { Link } from "react-router-dom";

type cardProps = {
  children?: React.ReactNode;
  hoverText: string;
  color?: string;
  toLink: string;
};

const Card = ({ children, hoverText, color, toLink }: cardProps) => {
  return (
    <Link
      className="h-[200px] md:h-[250px] max-w-screen-md aspect-[1/1.414]  border-2 border-solid  border-black flex justify-center items-center rounded-tr-xl cursor-grab flex-col shadow-[5px_5px_0px_0px_#000000] "
      style={{ backgroundColor: color }}
      tabIndex={0} // Makes the div focusable
      role="button" // Makes the div accessible
      onClick={() => {
        console.log("Card clicked");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          console.log("Card clicked");
        }
      }}
      to={toLink}
    >
      {children}
      <p className="text-center mt-2 text-sm font-bold">{hoverText}</p>
    </Link>
  );
};
export default Card;
