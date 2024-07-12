import React, { useState } from "react";
import search from "../../../assets/icons/search.png";

const Search = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className={`w-full md:w-fit flex items-center px-5 mb-10 rounded-xl bg-white ${
        isClicked ? "border-green-500" : "border-red-500"
      }`}
      onClick={handleClick}
    >
      <img src={search} alt="" className="w-6 h-6 bg-cover" />
      <input
        type="text"
        className="rounded-xl p-2.5 w-full md:w-80"
        placeholder="Procurar aluno"
        style={{ outline: "none" }}
      />
    </div>
  );
};

export default Search;
