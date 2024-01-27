"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    push(`/Prediction/${inputValue}`);
  }

  return (
    <div className="border bg-gray-200 h-screen flex  items-center justify-center p-3">
      <div className="border shadow-md rounded-md bg-white p-3">
        <div className="mb-4 flex flex-col justify-center items-center">
          <h1>Enter your Name</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="  flex flex-col justify-center items-center"
        >
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            placeholder="Type your name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-blue-400 w-full p-1 text-white font-bold rounded-sm m-1 " type="submit">
            Predict
          </button>
        </form>
      </div>
    </div>
  );
}
