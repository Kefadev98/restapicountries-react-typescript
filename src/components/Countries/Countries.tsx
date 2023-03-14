import { useState, useMemo } from "react";
//types
import { CountriesTypes } from "../../types/CountriesTypes";
//hooks
import {
  useGetCountriesQuery,
  useGetCountriesByNameQuery,
  useGetCountriesByRegionQuery,
} from "../../services/countriesSlice";
//components
import CountriesList from "./CountriesList";
import SearchCountries from "../CountriesElements/SearchCountries";
import SelectRegion from "../CountriesElements/SelectRegion";
import Loader from "../Layout/Loader";
import Pagination from "./Pagination";

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectRegion, setSelectRegion] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 24;

  /*
    In this case, first argument is represent some text search,
    skip represent values for searchTerm and selectRegion states...
    !!- double negation return boolean true if selectRegion exists and is different from null, undefined or empty string
  */

  const { data: allCountries, isFetching: isFetchingAll } =
    useGetCountriesQuery("", {
      skip: searchTerm !== "" || !!selectRegion,
    });

  const { data: countriesByName, isFetching: isFetchingByName } =
    useGetCountriesByNameQuery(searchTerm, {
      skip: searchTerm === "" || !!selectRegion,
    });

  const { data: countriesByRegion, isFetching: isFetchingByRegion } =
    useGetCountriesByRegionQuery(selectRegion, {
      skip: !selectRegion,
    });

  const countries = useMemo(() => {
    let results = searchTerm ? countriesByName : allCountries;
    if (selectRegion) {
      results =
        countriesByRegion ??
        results?.filter(
          (country) =>
            country.region.toLowerCase() === selectRegion.toLowerCase()
        );
    }
    if (searchTerm && selectRegion) {
      results = results?.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return results;
  }, [
    searchTerm,
    selectRegion,
    allCountries,
    countriesByName,
    countriesByRegion,
  ]);

  //Pagination system
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const currentCountries = countries?.slice(firstIndex, lastIndex);

  //Paginate function
  const handlePaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center">
        <SearchCountries
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <SelectRegion
          selectRegion={selectRegion}
          setSelectRegion={setSelectRegion}
        />
      </div>
      <div>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries?.length}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
        />
        {isFetchingAll || isFetchingByName || isFetchingByRegion ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-center items-center">
            {currentCountries?.map((country: CountriesTypes) => (
              <CountriesList key={country.cca3} country={country} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Countries;
