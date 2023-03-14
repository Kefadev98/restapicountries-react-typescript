import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice";
import { RootState } from "../../app/store";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.isDarkMode);
  const favorites = useSelector(
    (state: RootState) => state.favorites.countries
  );

  const handleChangeMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header>
      <div className="mx-4 md:mx-10">
        <button onClick={handleChangeMode}>
          {theme ? <BsMoonFill /> : <BsSunFill />}
        </button>
      </div>
      <div className="mx-4 md:mx-10">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/favorites">
          <button>
            Favorites
            <small className="bg-white text-black m-1 px-2 py-1 rounded-full">
              {favorites.length}
            </small>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
