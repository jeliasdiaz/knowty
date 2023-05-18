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
    const [activeCategory, setActiveCategory] = useState({
      "noble gas":  true,
  "alkaline earth metal": true,
  "nonmetal": true,
  "alkali metal": true,
  "transition metal": true,
  "post-transition metal": true,
  "lanthanide": true,
  "metalloid": true,
    })
    const onActiveCategory = (category) => {
      setActiveCategory({[category]: !activeCategory[category]})

    }
    const value = {periodicProperties, onPeriodicProperties, activeCategory, onActiveCategory}
  return (
    <periodicContext.Provider value={value}>
        {children}
    </periodicContext.Provider>
  )
}
