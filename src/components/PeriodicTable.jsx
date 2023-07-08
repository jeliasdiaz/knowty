import data from "../data/PeriodicTableJSON.json";
import "../css/PeriodicTable.css";
import { useContext, useEffect, useRef, useState } from "react";
import { PeriodicElement } from "./PeriodicElement";
import { ElementActive } from "./ElementActive";
import { periodicContext } from "../context/PeriodicElementContext";

const colorMap = {
  "gas noble": "#FFBC42",
  "metal alcalinotérreo": "#759fff",
  "no metal": "#52ee61",
  "metal alcalino": "#8F2D56",
  "metal de transición": "#fd8572",
  "metal post-transición": "#218380",
  "lantánido": "#4AABAF",
  "metaloide": "#3aefb6",
  "actínido": "#F535AA",
}

const colorNames = {
  "Gas noble": "#FFBC42",
  "Metal alcalinotérreo": "#759fff",
  "No metal": "#52ee61",
  "Metal alcalino": "#8F2D56",
  "Metal de transición": "#fd8572",
  "Metal post-transición": "#218380",
  "Lantánido": "#4AABAF",
  "Metaloide": "#3aefb6",
  "Actínido": "#F535AA",
}

const PeriodicTable = () => {
  const [colorSquare, setColorSquare] = useState([]);
  const claves = Object.values(colorNames);
  const colors = Object.keys(colorNames)
  const colorActive = Object.keys(colorMap)

  useEffect(() => {
    const tempArr = claves.map((clave) => clave);
    setColorSquare(tempArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const { onActiveCategory, setActiveCategory } = useContext(periodicContext)

  const categoryRef = useRef(null);

  const clearActiveCategory = () => {
    setActiveCategory({
      "gas noble": true,
      "metal alcalinotérreo": true,
      "no metal": true,
      "metal alcalino": true,
      "metal de transición": true,
      "metal post-transición": true,
      "lantánido": true,
      "metaloide": true,
      "actínido": true,
    })
  }

  return (
    <div ref={categoryRef}>
      <div className="kindElements">
        {colorSquare.map((color, index) => (
          <span
            key={index}
            style={{
              width: '50px',
              height: '30px',
              backgroundColor: color,
              borderRadius: '2px',
              cursor: "pointer"
            }}
            onClick={() => onActiveCategory(colorActive[index])}
          >
            <small>{colors[index]}</small>
          </span>
        ))}
        <span
          style={{
            width: '50px',
            height: '30px',
            backgroundColor: "#2b7ea1",
            borderRadius: '2px',
            cursor: "pointer"
          }}
          onClick={clearActiveCategory}
        >
          <small>Todos</small>
        </span>
      </div>
      <div className="periodicTable">
        <ElementActive />

        {
          data.elements.map((element) => {

            return (
              <PeriodicElement
                element={element}
                key={element.number}
                colorMap={colorMap}
              />
            );
          })
        }


      </div>
    </div>
  );
};

export default PeriodicTable;