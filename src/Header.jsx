const Header = () => {
  return (
    <>
      <header className="bg-slate-100 flex  items-center justify-between p-5 absolute top-0 w-full">
        <button className="bg-blue-300 rounded-xl font-bold py-2 px-5 cursor-auto	">
          Anjali
        </button>
        <p className="font-bold text-xl ">Random Quotes</p>
        <button className=" bg-blue-300 rounded-xl py-2 px-5 font-bold cursor-auto">
          Made with Love
        </button>
      </header>
    </>
  );
};

export default Header;
