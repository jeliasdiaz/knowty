import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
// import { useEffect, useState } from "react";
import { PeriodicElement } from "./PeriodicElement";
import { ElementActive } from "./ElementActive";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
}

const PeriodicTable = () => {
  // const [colorSquare, setColorSquare] = useState([]);
  // const claves = Object.values(colorMap);

  // useEffect(() => {
  //   const tempArr = claves.map((clave) => clave);
  // setColorSquare(tempArr);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
    {/* <div className="kindElements">
    {
      colorSquare.map((color, index) => (
        <span key={index} style={{
          width: '50px',
          height: '30px',
          backgroundColor: color,
          borderRadius: '2px',
        }}></span>
      ))
    }
  </div> */}
    <div className="periodicTable">
      <ElementActive />
      
      {data.elements.map((element) => (
        <PeriodicElement element={element} key={element.number} colorMap={colorMap} />
      ))}
    </div></>
  );
};

export default PeriodicTable;