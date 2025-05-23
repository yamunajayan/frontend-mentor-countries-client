import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import backArrowBlack from "../../assets/images/arrows-back-black.svg";
import backArrowWhite from "../../assets/images/arrows-back-white.svg";
import type { Currency, Language } from "../../types";
const CountriesPage = () => {
  const location = useLocation();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const country = location.state?.country;
  console.log(country);
  return (
    <article className="flex flex-col items-start justify-start w-full max-w-[1240px] mx-auto px-[20px] md:px-[40px]">
      <Link to="/">
        <button
          className={`${
            darkMode ? "dark-mode-container" : "light-mode-container"
          } flex items-center gap-[10px] px-[20px] py-[8px] mb-[70px] mt-[40px] md:mt-[70px]`}
        >
          <img
            src={darkMode ? backArrowWhite : backArrowBlack}
            alt="Back arrow"
            className="w-full h-[20px]"
          />
          <span className="font-[300] text-[14px] leading-[20px]">Back</span>
        </button>
      </Link>
      <div className="flex flex-col items-start justify-start w-full md:flex-row md:justify-between">
        <section className="w-full">
          <img
            src={country.flags?.png}
            alt="Country Flag"
            className="w-full md:w-[560px] md-h[400px]"
          />
        </section>
        <section className="mt-[60px] md:max-w-[560px] md:mt-[40px]">
          <h2 className="font-[800] text-[22px] leading-[22px] mb-[30px]">
            {country.name}
          </h2>
          <div className="flex flex-col md:flex-row gap-[20px] ">
            <div className="flex flex-col text-[14px] leading-[32px] font-[400] md:w-[50%]">
              <p>
                <span className="font-[600]">Native Name : </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-[600]">Population : </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-[600]">Region : </span>
                {country.region}
              </p>
              <p>
                <span className="font-[600]">Capital : </span>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col text-[14px] leading-[32px] font-[400]">
              <p>
                <span className="font-[600]">Top Level Domain : </span>
                {country.topLevelDomain}
              </p>
              <p>
                <span className="font-[600]">Currencies:</span>
                {country.currencies?.map((currency: Currency) => (
                  <span key={currency.code} className="ml-[5px]">
                    {currency.name}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-[600]">Languages : </span>
                {country.languages?.map((language: Language) => (
                  <span key={language.iso639_1} className="ml-[5px]">
                    {language.name},
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col my-[40px] md:flex-row gap-[14px]">
            <p className="text-[16px] leading-[24px] font-[400]">
              Border Countries:
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {country.borders?.map((border: string) => (
                <span
                  key={border}
                  className={`${
                    darkMode ? "dark-mode-container" : "light-mode-container"
                  } px-[40px] py-[8px] text-[12px] leading-[12px] font-[300]`}
                >
                  {border}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default CountriesPage;
