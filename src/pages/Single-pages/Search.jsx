import { useCallback, useEffect, useRef } from "react";
import { useIsVisible, useSearch } from "../../hooks/";
import { TopWave, NoResultCard, ResultCard } from "../../components/";
import data from "../../data/materias.json";
import "../../css/Search.css";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

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
  
  const navigate = useNavigate()
  const onSubmit = (e) =>{
    e.preventDefault()
    
    const matchingCard = data.find(card => card.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === searchTerm)

    if (matchingCard) {
      navigate(matchingCard.url)
    }
  }
  useEffect(() => {
    onVisible()
  }, [onVisible])

  return (
    <div className="search" ref={pageRef}>
      <TopWave />
      <div className="searchInputs" data-aos="fade-up" data-aos-duration="1000">
        {
          isVisible
          && <form onSubmit={onSubmit} className="inputForm">
            <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleFilter} ref={inputRef} className="input" />
            <div className="searchIcon">
          {
            searchTerm.length === 0
              ? <BiSearch size={35} />
              : <IoClose id="clearBtn" onClick={clearInput} size={35} />
          }
        </div>
          </form>
        }
        
      </div>

      {
        searchTerm === ""
          ? <p style={{ color: "gray" }} data-aos="fade-up" data-aos-duration="800">Escribe algo para buscar</p>

          : filteredData.length !== 0

            ? (
              <div className="dataResult">
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
