import { Link } from "react-router-dom";
import { CountriesTypes } from "../../types/CountriesTypes";

interface Props {
  favorite: CountriesTypes;
  handleRemoveFromFavorites: (country: string) => void;
}

const FavoriteCountriesList = ({
  favorite,
  handleRemoveFromFavorites,
}: Props) => {
  return (
    <article className="w-80 h-auto m-10 rounded-md shadow-xl overflow-hidden bg-white hover:translate-y-[-5px] transition duration-200">
      <Link to={`/country/${favorite.cca3}`}>
        <img src={favorite.flags.png} alt="/" className="w-full h-44" />
        <div className="m-4 leading-7">
          <h3 className="text-xl font-bold my-4">{favorite.name.common}</h3>
          <p>
            <span className="font-bold">Population:</span> {favorite.population}
          </p>
          <p>
            <span className="font-bold">Region:</span> {favorite.region}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {favorite.capital}
          </p>
        </div>
      </Link>
      <button
        className="w-11/12 m-3"
        onClick={() => handleRemoveFromFavorites(favorite.cca3)}
      >
        Remove from Favorites
      </button>
    </article>
  );
};

export default FavoriteCountriesList;
