import { useContext, useEffect, useState } from "react"
import { periodicContext } from "../context/PeriodicElementContext"


export const ElementActive = () => {
  const { periodicProperties } = useContext(periodicContext)

  const imagePath = `img/periodicTableImg/${periodicProperties.name}.png`;
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const checkImageExists = () => {

        if (imagePath) {
          setImageExists(true);
        } else {
          setImageExists(false)
        }
    }

    checkImageExists();
  }, [imageExists, imagePath]);

  return (
    <div className="elementActive" >
      <div className="w-75 p-5">
        {
          imageExists
            ? <img src={imagePath} alt="" />
            : <h4>{periodicProperties.symbol}</h4>

        }
        <small className="number">{periodicProperties.number}</small>
        <small className="numberTwo">{periodicProperties.atomicMass}</small>
        <small className="electronegativity">{periodicProperties.electronegativity}</small>
        <small className="name"><b>{periodicProperties.symbol}</b> {periodicProperties.name}</small>
      </div>
      <summary style={{ fontSize: "10px", listStyle: "none", cursor: "default" }}>{periodicProperties.summary}</summary>
    </div>
  )
}
