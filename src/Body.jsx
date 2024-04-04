import { useState } from "react";

const Body = () => {
  const [quotes, setQuotes] = useState("View Random Quotes here");

  const getQuotes = () => {
    setQuotes("Generating...");
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((content) => setQuotes(content.content))
      .catch((err) => {
        console.error("Error fetching quotes:", err);
        setQuotes("Failed to get Quotes");
      });
  };
  return (
    <>
      <main className=" flex flex-col justify-center h-screen items-center">
        <p className="font-bold text-xl">Random Quotes are displayed here </p>
        <button className="bg-gray-100 border border-gray-300 py-7 px-20 shadow-lg  rounded-lg mt-5 mb-5 cursor-default">
          <p>{quotes} </p>
        </button>

        <button
          className="bg-blue-300 rounded-xl py-2 px-5 font-bold"
          onClick={getQuotes}
        >
          Click me
        </button>
      </main>
    </>
  );
};

export default Body;
