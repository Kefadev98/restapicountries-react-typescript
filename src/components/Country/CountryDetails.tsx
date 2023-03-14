import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//types
import { CountryTypes } from "../../types/CountryTypes";
//assets
import googleMaps from "../../assets/googlemaps.png";
//components
import BorderCountries from "./BorderCountries";

interface Props {
  country: CountryTypes;
}

const CountryDetails = ({ country }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <article className="w-11/12 md:w-8/12 flex flex-wrap justify-evenly items-center mt-20 bg-white shadow-lg">
        <div className="w-[400px] m-4 flex flex-col justify-center items-center">
          <div className="w-full my-2 flex justify-between items-center">
            <Link to="/">
              <button className="w-20 flex justify-around items-center">
                <BsArrowLeft />
                Back
              </button>
            </Link>
            <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
              <img
                src={googleMaps}
                alt="googlemaps"
                className="w-14 h-14 hover:scale-105 ease-in duration-200"
              />
            </a>
          </div>
          <img
            src={country.flags.png}
            alt="/"
            className="w-[400px] h-auto mb-20 border-solid border-2"
          />
        </div>

        <div className="w-11/12 p-4 sm:w-[500px] m-4">
          <h2 className="text-4xl font-bold my-4">{country?.name?.common}</h2>

          <div className="w-11/12 sm:w-[450px] flex flex-wrap justify-between">
            <div className="leading-9">
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
              <p>
                <span>Top Level Domain:</span> {country.tld}
              </p>
            </div>
            <div className="leading-9">
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
            </div>
          </div>
          <div className="my-4 flex flex-wrap items-center">
            <h3 className="font-bold text-lg">Borders:</h3>
            {country?.borders?.map((border, index) => (
              <BorderCountries key={index} border={border} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountryDetails;
