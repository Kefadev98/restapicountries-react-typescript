import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Internal imports
import Header from "./components/Layout/Header";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import FavoriteCountries from "./components/Favorites/FavoriteCountries";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state: any) => state.theme.isDarkMode);

  return (
    <div className={theme ? "dark" : ""}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:code" element={<Country />} />
          <Route path="/favorites" element={<FavoriteCountries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
