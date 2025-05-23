import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/countriesSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import CountryCard from "../CountryCard/CountryCard";

const CountryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector((state: RootState) => state.countries);

  const { regionList, list, loading, error } = useSelector(
    (state: RootState) => state.countries
  );

  const countriesToShow = regionList.length > 0 ? regionList : list;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <article>
      <ul className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-between gap-[16px] md:gap-[40px]">
        {countriesToShow.map((country) => {
          return (
            <div key={country.name}>
              <CountryCard country={country} />
            </div>
          );
        })}
      </ul>
    </article>
  );
};

export default CountryList;
