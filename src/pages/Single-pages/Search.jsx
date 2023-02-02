import React, { useState } from "react";
import data from "../materias.json";
import "./Search.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import TopWave from "../../components/TopWave";

function Search() {

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value; // Collects the written input
    setSearchTerm(searchWord);
    const newFilter = data.filter(value => value.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(searchWord.toLowerCase())); // Inside the data it will look for a name that begins with what is written in the input.
    setFilteredData(searchWord ? newFilter : []);
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };

  return (
    <div className="search" >
      <TopWave />
      <div className="searchInputs" data-aos="fade-up" data-aos-duration="1000">
        <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <BiSearch size={35} /> : <IoClose id="clearBtn" onClick={clearInput} size={35} />}
        </div>

      </div>
      {
        searchTerm === ""
          ?
          <h6 style={{ color: "gray" }} data-aos="fade-up" data-aos-duration="800">Por favor escribe algo para buscar</h6>
          :
          filteredData.length !== 0
            ?
            <div className="dataResult" data-aos="fade-up" data-aos-duration="500">
              {
                filteredData.slice(0, 5).map(value => (
                  <Link to={value.url} className="text-decoration-none" key={value.name}>
                    <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                      <img src={value.img} alt={value.name} className="CardImg pe-3" />
                      {value.name}
                    </div>
                  </Link>
                ))
              }
            </div>
            :
            <div className="dataResult" data-aos="fade-up" data-aos-duration="500">
              <Link to="/busqueda" className="text-decoration-none" key="Not found">
                <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                  <img src="/img/notFound.png" alt="Ningún resultado" className="CardImg pe-3" />
                  Ningún resultado
                </div>
              </Link>
            </div>
      }
    </div>
  );
}

export default Search;