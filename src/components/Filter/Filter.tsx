import dropDownIconBlack from "../../assets/images/dropdown-black.svg";
import dropDownIconWhite from "../../assets/images/dropdown-white.svg";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };
  return (
    <section
      className={`${
        darkMode ? "dark-mode-container" : "light-mode-container"
      } relative flex items-center justify-between rounded-[5px] px-[32px] py-[16px] mt-[40px] mb-[32px] w-[196px] md:mt[48px]`}
    >
      <p className="font-[400] text-[12px] leading-[20px]">{selectedRegion}</p>
      <button onClick={handleToggle} className="">
        <img
          src={darkMode ? dropDownIconWhite : dropDownIconBlack}
          alt="Filter Icon"
          className="w-[16px] h-[16px]"
        />
      </button>

      {isOpen && (
        <ul
          className={`${
            darkMode ? "dark-mode-container" : "light-mode-container"
          } absolute top-14 left-0 bg-white dark:bg-[#2b3945] shadow-lg rounded-[5px] z-10 w-full py-[16px]`}
        >
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => handleSelect(region)}
              className="px-[32px] py-[4px] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3c4a57] text-[12px] font-[400] leading-[16px]"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filter;
