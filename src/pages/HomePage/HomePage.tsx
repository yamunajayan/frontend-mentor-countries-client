import CountryList from "../../components/CountryList/CountryList";
import Filter from "../../components/Filter/Filter";
import SearchBox from "../../components/SearchBox/SearchBox";
const HomePage = () => {
  return (
    <article className="flex flex-col px-[16px] max-w-[1240px] mx-auto ">
      <div className="md:flex md:justify-between md:items-center">
        <SearchBox />
        <Filter />
      </div>

      <CountryList />
    </article>
  );
};

export default HomePage;
