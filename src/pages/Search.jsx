import React, { useState } from "react";
import data from "./materias.json";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import TopWave from "../components/TopWave";

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
      <motion.div className="searchInputs" initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.6 }}
        animate={{ opacity: 1, scale: [0.7, 1] }}>
        <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <BiSearch size={35} /> : <IoClose id="clearBtn" onClick={clearInput} size={35} />}
        </div>

      </motion.div>
      {filteredData.length !== 0 && (
        <motion.div className="dataResult" 
        initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.2 }}
        animate={{ opacity: 1, y: [50, 0] }}
        >
          {filteredData.slice(0, 5).map(value => (
            <Link to={value.url} className="text-decoration-none" key={value.name}>
              <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                <img src={value.img} alt="" className="CardImg pe-3" />
                {value.name}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Search;