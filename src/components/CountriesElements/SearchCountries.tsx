import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCountries = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <input
      name="country"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event?.target.value)}
    />
  );
};

export default SearchCountries;
