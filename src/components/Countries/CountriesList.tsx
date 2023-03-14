import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites } from "../../store/favoritesSlice";
//types
import { CountriesTypes } from "../../types/CountriesTypes";

interface Props {
  country: CountriesTypes;
}

const CountriesList = ({ country }: Props) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (country: CountriesTypes) => {
    dispatch(addToFavorites(country));
  };
  return (
    <article className="w-80 h-auto m-10 rounded-md shadow-xl overflow-hidden hover:translate-y-[-5px] transition duration-200">
      <Link to={`/country/${country.cca3}`}>
        <img src={country.flags.png} alt="/" className="w-full h-44" />
        <div className="m-4 leading-7">
          <h3 className="text-xl font-bold my-4">{country.name.common}</h3>
          <p>
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p>
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
        </div>
      </Link>
      <button
        className="w-11/12 m-3"
        onClick={() => handleAddToFavorites(country)}
      >
        Add to Favorites
      </button>
    </article>
  );
};

export default CountriesList;
