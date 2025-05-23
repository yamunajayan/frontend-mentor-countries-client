import { useAppSelector } from "../../redux/hook";
import type { Country } from "../../types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }: { country: Country }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <section
      className={`${
        darkMode ? "dark-mode-container" : "light-mode-container"
      }  w-[264px] h-[336px] mb-[16px] rounded`}
    >
      <Link to={`/country/${country.name}`} state={{ country }}>
        <img
          src={country.flags.png}
          alt="Country Flag"
          className="w-full h-[160px]"
        />
        <div className="p-6">
          <h2 className="font-[700] text-[18px] leading-[26px] pb-4">
            {country.name}
          </h2>
          <p className="font-[600] text-[14px] leading-[16px] pb-2">
            Population: {country.population.toLocaleString()}
          </p>
          <p className="font-[600] text-[14px] leading-[16px] pb-2">
            Region: {country.region}
          </p>
          <p className="font-[600] text-[14px] leading-[16px]">
            Capital: {country.capital}
          </p>
        </div>
      </Link>
    </section>
  );
};
export default CountryCard;
