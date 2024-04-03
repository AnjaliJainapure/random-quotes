const Body = () => {
  return (
    <>
      <main className=" flex flex-col justify-center h-screen items-center">
        <p className="font-bold text-xl">Random Quotes are displayed here </p>
        <button className="bg-gray-100 border border-gray-300 py-7 px-20 shadow-lg  rounded-lg mt-5 mb-5">
          Quotes found here..
        </button>
        <button className="bg-blue-300 rounded-xl py-2 px-5 font-bold ">
          Click me
        </button>
      </main>
    </>
  );
};

export default Body;
