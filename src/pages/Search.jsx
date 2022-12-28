import React, { useState } from "react";
import data from "./materias.json";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord);
    const newFilter = data.filter(value => value.name.toLowerCase().startsWith(searchWord.toLowerCase()));
    setFilteredData(searchWord ? newFilter : []);
  };

  /* const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  }; */

  return (
    <div className="search">
      <img src="/img/waveThree.svg" alt="" />
      <div className="searchInputs">
        <div>
          <input type="text" placeholder="Buscar asignatura" value={searchTerm} onChange={handleFilter} />
        </div>

        {/* <div className="searchIcon">
                    {filteredData.length === 0 ? <FaSearch size={35}/> : <IoClose id="clearBtn" onClick={clearInput} size={35} />}
                </div> */}
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map(value => (
            <Link to={value.url} className="text-decoration-none">
              <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                <img src={value.img} alt="" className="CardImg pe-3"/>
                {value.name}
                </div>
              </Link>

          ))}
        </div>
      )}
    </div>
  );
}

export default Search;


/* function Search() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Buscar asignatura"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <IoClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className="dataItem" href={value.url} target="_blank">
                <p>{value.name} </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search; */