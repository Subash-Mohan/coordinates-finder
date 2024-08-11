const NotFoundPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <div className="flex flex-row text-8xl font-mono gap-2">
        <div className="flex flex-row gap-1 ">
          <h1 className="text-[hsl(var(--blue))] shadow-[4px_4px_0px_0px_#000000]">
            4
          </h1>
          <h1 className="text-[hsl(var(--lightorange))] shadow-[4px_4px_0px_0px_#000000]">
            0
          </h1>
          <h1 className="text-[hsl(var(--purple))] shadow-[4px_4px_0px_0px_#000000]">
            4
          </h1>
        </div>
        <h1>Not Found..</h1>
      </div>
      <p className="font-bold font-mono">
        Please click Home button on Navigation bar
      </p>
    </div>
  );
};

export default NotFoundPage;
