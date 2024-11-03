import { Send } from "@mui/icons-material";
import React, { useState } from "react";

function UserInputs() {
  const [url, setUrl] = useState("");
  const [resultText, setResultText] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/Cbcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const { data } = await res.json();
    setResultText(data);
    setUrl("");
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Website security</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="url"
            value={url}
            onChange={handleUrlChange}
            required
            className="w-full mt-1 p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your the website Url"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200 justify-between"
        >
          Run Check
          <Send />
        </button>
      </form>

      {/* Display Result of Check*/}
      <div className="w-full py-3 mt-4 text-black font-semibold rounded-md transition duration-200 flex justify-center ">
        {resultText !== "" && (
          <p className="mt-2 text-white">Result: {resultText}</p>
        )}
      </div>
    </div>
  );
}

export default UserInputs;
