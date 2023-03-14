import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesTypes } from "../types/CountriesTypes";

export interface FavoritesState {
  countries: CountriesTypes[];
}

const initialState: FavoritesState = {
  countries: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<CountriesTypes>) => {
      const { cca3 } = action.payload;
      if (!state.countries.find((country) => country.cca3 === cca3)) {
        state.countries.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.countries));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.cca3 !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.countries));
    },
    loadFavorites: (state) => {
      const favorites = localStorage.getItem("favorites");
      if (favorites) {
        state.countries = JSON.parse(favorites);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, loadFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.countries;

export default favoritesSlice.reducer;
