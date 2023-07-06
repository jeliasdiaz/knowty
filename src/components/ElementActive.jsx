import { useContext, useEffect, useState } from "react"
import { periodicContext } from "../context/PeriodicElementContext"


export const ElementActive = () => {
  const { periodicProperties } = useContext(periodicContext)
  const { number, name, symbol, summary, atomicMass, electronegativity } = periodicProperties
  const imagePath = `img/periodicTableImg/${periodicProperties.name}.png`;
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    const checkImageExists = () => {
      const img = new Image();
      img.onload = () => setImageExists(true);
      img.onerror = () => setImageExists(false);
      img.src = imagePath;
    };

    checkImageExists();
  }, [imagePath]);

  return (
    <div className="elementActive" >
      <div className="w-75 p-5">
        {
          imageExists
            ? <img src={imagePath} alt={name} /> 
            : <h5>{symbol}</h5>
        }
        <small className="number">{number}</small>

        <small className="numberTwo">{atomicMass}</small>

        <small className="electronegativity">{electronegativity}</small>

        {
          imageExists
            ? <small className="name"><b>{symbol}</b> {name}</small>
            : <small className="name">{name}</small>
        }
      </div>
      <summary style={{ fontSize: "10px", listStyle: "none", cursor: "default" }}>{summary}</summary>
    </div>
  )
}
