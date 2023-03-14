import { useParams } from "react-router-dom";
import { useGetCountryByIdQuery } from "../../services/countriesSlice";
//components
import CountryDetails from "./CountryDetails";
import Loader from "../Layout/Loader";

const Country = () => {
  const { code } = useParams();

  const {
    data: countryDetails,
    isFetching,
    isError,
    error,
  } = useGetCountryByIdQuery(code!);
  // "Non-null assertion operator" (!), to tell TypeScript that code is always defined.

  if (isError) {
    return <p>Error:{(error as any).message}</p>;
  }
  return (
    <div className="min-h-screen w-full">
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          {countryDetails?.map((country) => (
            <CountryDetails key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Country;
