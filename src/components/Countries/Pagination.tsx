import React from "react";

interface Props {
  countriesPerPage: number;
  currentPage: number;
  totalCountries: number | undefined;
  handlePaginate: (pageNumber: number) => void;
}

const Pagination = ({
  countriesPerPage,
  currentPage,
  totalCountries,
  handlePaginate,
}: Props) => {
  //We check if totalCountries = undefined, pageNumbers will set to empty array, to avoid errors
  const pageNumbers = totalCountries
    ? Array.from(
        { length: Math.ceil(totalCountries / countriesPerPage) },
        (_, i) => i + 1
      )
    : [];
  return (
    <div className="m-4 flex justify-center items-center">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? "bg-orange-800" : ""}
            onClick={() => handlePaginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
