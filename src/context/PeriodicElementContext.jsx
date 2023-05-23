import { createContext, useState } from "react"

export const periodicContext = createContext()

export const PeriodicElementContext = ({ children }) => {
  const [periodicProperties, setperiodicProperties] = useState({
    name: "Hydrogen",
    number: 1,
    summary: "El hidrógeno es un elemento químico de símbolo químico H y número atómico 1. Con un peso atómico de 1,00794 u, el hidrógeno es el elemento más ligero de la tabla periódica. Su forma monatómica (H) es la sustancia química más abundante en el Universo, constituyendo aproximadamente el 75% de toda la masa bariónica.",
    symbol: "H",
    atomicMass: 1.008,
    electronegativity: 2.20,
  })
  const onPeriodicProperties = (name, number, summary, symbol, atomicMass, electronegativity) => {
    setperiodicProperties({ name, number, summary, symbol, atomicMass, electronegativity })

  }

  const [activeCategory, setActiveCategory] = useState({
    "noble gas": true,
    "alkaline earth metal": true,
    "nonmetal": true,
    "alkali metal": true,
    "transition metal": true,
    "post-transition metal": true,
    "lanthanide": true,
    "metalloid": true,
  })

  const onActiveCategory = (category) => {
    setActiveCategory({ [category]: true })
  }

  const value = { periodicProperties, onPeriodicProperties, activeCategory, onActiveCategory, setActiveCategory}

  return (
    <periodicContext.Provider value={value}>
      {children}
    </periodicContext.Provider>
  )
}
