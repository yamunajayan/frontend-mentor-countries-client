import searchIconDark from "../../assets/images/search-icon-dark.svg";
import searchIconWhite from "../../assets/images/search-icon-light.svg";
import { useAppSelector } from "../../redux/hook";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(searchTerm); // do search
      navigate(`/country/${encodeURIComponent(searchTerm)}`);
    }
  };

  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`${
        darkMode ? "dark-mode-container" : "light-mode-container"
      } flex items-center justify-start py-[16px] px-[32px] mt-[24px] w-full max-w-[480px] h-[48px] gap-[10px] rounded-[5px] md:mt-[0]`}
    >
      <img
        src={darkMode ? searchIconWhite : searchIconDark}
        alt="search icon image"
        className="w-[16px] h-[16px]"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className={`text-[12px] font-[400] outline-none  ${
          darkMode ? "placeholder-[#FFFFFF]" : "placeholder-[#C4C4C4]"
        }`}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default SearchBox;
