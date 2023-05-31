import data from "../data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { useContext, useEffect, useRef, useState } from "react";
import { PeriodicElement } from "./PeriodicElement";
import { ElementActive } from "./ElementActive";
import { periodicContext } from "../context/PeriodicElementContext";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#759fff",
  "nonmetal": "#52ee61",
  "alkali metal": "#8F2D56",
  "transition metal": "#fd8572",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#3aefb6",
}

const colorNames = {
  "Noble gas": "#FFBC42",
  "Alkaline earth metal": "#759fff",
  "Nonmetal": "#52ee61",
  "Alkali metal": "#8F2D56",
  "Transition metal": "#fd8572",
  "Post-transition metal": "#218380",
  "Lanthanide": "#4AABAF",
  "Metalloid": "#3aefb6",
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
      "noble gas": true,
      "alkaline earth metal": true,
      "nonmetal": true,
      "alkali metal": true,
      "transition metal": true,
      "post-transition metal": true,
      "lanthanide": true,
      "metalloid": true,
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