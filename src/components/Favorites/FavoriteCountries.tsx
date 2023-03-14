import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { removeFromFavorites } from "../../store/favoritesSlice";
//components
import FavoriteCountriesList from "./FavoriteCountriesList";

const FavoriteCountries = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.countries
  );

  const handleRemoveFromFavorites = (country: string) => {
    dispatch(removeFromFavorites(country));
  };

  return (
    <main className="min-h-screen w-full ">
      <div className="flex flex-wrap justify-center">
        {favorites.map((favorite) => (
          <FavoriteCountriesList
            key={favorite.cca3}
            favorite={favorite}
            handleRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </div>
    </main>
  );
};

export default FavoriteCountries;
