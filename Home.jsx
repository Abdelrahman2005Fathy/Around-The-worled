import useFetchData from "../useFetchData";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import ShowMessage from "../components/ShowMessage";
import CountryList from "../components/CountryList";
const Home = () => {
  const {
    countriesList,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  } = useFetchData();
  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message={"Loading countries data...!"} />}
      {!isError && !isLoading && (
        <>
          <div className="m-5 flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={countriesList}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={countriesList}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};
export default Home;
