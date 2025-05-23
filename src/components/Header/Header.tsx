import darkModeIcon from "../../assets/images/dark_mode_icon.svg";
import lightModeIcon from "../../assets/images/light_mode_icon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleDarkMode } from "../../redux/themeSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <header
      className={`${
        darkMode ? "dark-mode-container" : "light-mode-container"
      } px-4 py-[30px] `}
    >
      <div className="flex justify-between items-center max-w-[1240px] mx-auto md:px-[16px]">
        <div className="">
          <h1 className="font-[800] text-[14px] leading-[20px] md:text-[24px] md:leading-[24px]">
            Where in the world?
          </h1>
        </div>
        <button
          className="flex gap-[10px] items-center"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <img
            src={darkMode ? lightModeIcon : darkModeIcon}
            alt="dark Mode Icon"
            className="w-[12px] h-[12px] "
          />
          <p className="font-[600] text-[12px] leading-[100%] md:text-[16px] md:leading-[100%]">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </button>
      </div>
    </header>
  );
};
export default Header;
