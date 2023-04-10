import { useCallback, useEffect, useRef } from "react";
import { useIsVisible, useSearch } from "../../hooks/";
import { TopWave, NoResultCard, ResultCard } from "../../components/";
import data from "../materias.json";
import "./Search.css";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export const Search = () => {
  //* Search functionality
  const { searchTerm, filteredData, handleFilter, clearInput } = useSearch(data)

  //* Detect if the user is on the page and select the search input
  const pageRef = useRef()
  const inputRef = useRef()
  const isVisible = useIsVisible(pageRef)

  const onVisible = useCallback(async () => {
    isVisible && inputRef.current.focus()
  }, [isVisible])

  useEffect(() => {
    onVisible()
  }, [onVisible])

  return (
    <div className="search" ref={pageRef}>
      <TopWave />
      <div className="searchInputs" data-aos="fade-up" data-aos-duration="1000">
        {
          isVisible
          && <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleFilter} ref={inputRef} className="input" />
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
                  filteredData.slice(0, 5).map( data => (
                    <ResultCard {...data} key={data.name} />
                  ))
                }
              </div>
            )

            : <NoResultCard />
      }

    </div>
  );
}
