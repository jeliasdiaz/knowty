import { useCallback, useEffect, useRef, useState } from "react";
import data from "../materias.json";
import "./Search.css";
import { TopWave, NoResultCard, ResultCard } from "../../components/";
import { useIsVisible } from "../../hooks/useIsVisible";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export const Search = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //* Filter the words that entered in the search input and search for them on the data
  const handleFilter = (event) => {
    const searchWord = event.target.value; // Collects the written input
    setSearchTerm(searchWord);
    const newFilter = data.filter(value => value.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(searchWord.toLowerCase())); // Inside the data it will look for a name that begins with what is written in the input.
    setFilteredData(searchWord ? newFilter : []);
  };

  //* Clear the search input
  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };


  //* Detect if the user is on the page and select the search input
  const pageRef = useRef()
  const inputRef = useRef()
  const isVisible = useIsVisible(pageRef)

  const onVisible = useCallback(async () => {
    isVisible && inputRef.current.select()
  }, [isVisible])

  useEffect(() => {
    onVisible()
  }, [onVisible])

  return (
    <div className="search" ref={pageRef}>
      <TopWave />
      <div className="searchInputs" data-aos="fade-up" data-aos-duration="1000">
        {
          isVisible &&
          <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleFilter} ref={inputRef} />
        }
        <div className="searchIcon">
          {
            searchTerm.length === 0
              ? <BiSearch size={35} />
              : <IoClose id="clearBtn" onClick={clearInput} size={35} />
          }
        </div>
      </div>

      {
        searchTerm === ""
          ? <h6 style={{ color: "gray" }} data-aos="fade-up" data-aos-duration="800">Por favor escribe algo para buscar</h6>

          : filteredData.length !== 0

            ? (
              <div className="dataResult" data-aos="fade-up" data-aos-duration="500">
                {
                  filteredData.slice(0, 5).map(({ url, name, img }) => (
                    <ResultCard url={url} img={img} name={name} key={name} />
                  ))
                }
              </div>
            )

            : <NoResultCard />
      }

    </div>
  );
}
