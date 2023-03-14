import { configureStore } from "@reduxjs/toolkit";
import { countriesApiSlice } from "../services/countriesSlice";
import { loadFavorites } from "../store/favoritesSlice";
//slices
import favoritesReducer from "../store/favoritesSlice";
import themeReducer from "../store/themeSlice";

export type RootState = {
  [countriesApiSlice.reducerPath]: ReturnType<typeof countriesApiSlice.reducer>;
  favorites: ReturnType<typeof favoritesReducer>;
  theme: ReturnType<typeof themeReducer>;
};

export const store = configureStore({
  reducer: {
    [countriesApiSlice.reducerPath]: countriesApiSlice.reducer,
    favorites: favoritesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApiSlice.middleware),
  devTools: true,
});

const favorites = localStorage.getItem("favorites");
if (favorites) {
  store.dispatch(loadFavorites());
}
