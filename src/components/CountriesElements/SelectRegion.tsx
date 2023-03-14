import React from "react";

interface Props {
  selectRegion: string;
  setSelectRegion: React.Dispatch<React.SetStateAction<string>>;
}

const SelectRegion = ({ selectRegion, setSelectRegion }: Props) => {
  return (
    <select
      value={selectRegion}
      onChange={(e) => setSelectRegion(e.target.value)}
    >
      <option value=""> All </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectRegion;
