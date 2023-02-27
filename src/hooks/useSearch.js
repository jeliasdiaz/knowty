import { useState } from "react";

export const useSearch = (data) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //* Filter the words that entered in the search input and search for them on the data
  const handleFilter = (event) => {
    const searchWord = event.target.value; // Collects the written input
    setSearchTerm(searchWord);
    const newFilter = data.filter((value) =>
      value.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .startsWith(searchWord.toLowerCase())
    ); // Inside the data it will look for a name that begins with what is written in the input.
    setFilteredData(searchWord ? newFilter : []);
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
