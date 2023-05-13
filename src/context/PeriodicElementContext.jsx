import { createContext, useState } from "react"

export const periodicContext = createContext()

export const PeriodicElementContext = ({children}) => {
    const [periodicProperties, setperiodicProperties] = useState({
        name: "",
        number: 1,
        summary: "",
        symbol: "",
    })

    const onPeriodicProperties = (name, number, summary, symbol) => {
        setperiodicProperties({name, number, summary, symbol})
    }
    const value = {periodicProperties, onPeriodicProperties}
  return (
    <periodicContext.Provider value={value}>
        {children}
    </periodicContext.Provider>
  )
}
