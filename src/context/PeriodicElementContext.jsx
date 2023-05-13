import { createContext, useState } from "react"

export const periodicContext = createContext()

export const PeriodicElementContext = ({children}) => {
    const [periodicProperties, setperiodicProperties] = useState({
        name: "",
        number: 0,
        summary: "",
        symbol: "",
        atomicMass: 0,
        electronegativity: 0,
    })

    const onPeriodicProperties = (name, number, summary, symbol, atomicMass, electronegativity) => {
        setperiodicProperties({name, number, summary, symbol, atomicMass, electronegativity})
    }
    const value = {periodicProperties, onPeriodicProperties}
  return (
    <periodicContext.Provider value={value}>
        {children}
    </periodicContext.Provider>
  )
}
