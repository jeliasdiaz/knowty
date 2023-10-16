import { useState } from "react";
import PropTypes from "prop-types";

export const useSearch = (data) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //* Filter the words that entered in the search input and search for them on the data
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const searchWordClean = searchWord
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setSearchTerm(searchWord);

    const newFilter = data.filter((value) =>
      value.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .startsWith(searchWordClean),
    ); // Inside the data it will look for a name that begins with what is written in the input.
    setFilteredData(searchWordClean ? newFilter : []);
  };

  //* Clear the search input
  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };
  return {
    searchTerm,
    filteredData,
    handleFilter,
    clearInput,
  };
};

useSearch.propTypes = {
  data: PropTypes.object.isRequired,
};
