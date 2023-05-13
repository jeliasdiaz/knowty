import { useContext } from "react"
import { periodicContext } from "../context/PeriodicElementContext"

export const ElementActive = () => {
  const { periodicProperties } = useContext(periodicContext)
  return (
    <div className="elementActive">
      <div className="w-75 p-5">
        <strong>{periodicProperties.symbol}</strong>
        <small className="number">{periodicProperties.number}</small>
        <small className="numberTwo">{periodicProperties.atomicMass}</small>
        <small className="electronegativity">{periodicProperties.electronegativity}</small>
        <small className="name">{periodicProperties.name}</small>
      </div>
      <summary style={{ fontSize: "10px", listStyle: "none", cursor: "default" }}>{periodicProperties.summary}</summary>
    </div>
  )
}
