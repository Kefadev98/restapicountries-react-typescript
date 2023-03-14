import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountriesTypes } from "../types/CountriesTypes";
import { CountryTypes } from "../types/CountryTypes";

const BASE_URL = "https://restcountries.com/v3.1";

export const countriesApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Countries"],
  endpoints: (builder) => ({
    getCountries: builder.query<CountriesTypes[], string>({
      query: () => "/all",
      providesTags: ["Countries"],
    }),
    getCountryById: builder.query<CountryTypes[], string>({
      query: (code) => `/alpha/${code}`,
    }),
    getCountriesByName: builder.query<CountriesTypes[], string>({
      query: (name) => `/name/${name}`,
    }),
    getCountriesByRegion: builder.query<CountriesTypes[], string>({
      query: (region) => `/region/${region}`,
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryByIdQuery,
  useGetCountriesByNameQuery,
  useGetCountriesByRegionQuery,
} = countriesApiSlice;
