import { createContext, useState } from "react"

export const periodicContext = createContext()

export const PeriodicElementContext = ({ children }) => {
  const [periodicProperties, setperiodicProperties] = useState({
    name: "Hydrogen",
    number: "1",
    summary: "El hidrógeno es un elemento químico de símbolo químico H y número atómico 1. Con un peso atómico de 1,00794 u, el hidrógeno es el elemento más ligero de la tabla periódica. Su forma monatómica (H) es la sustancia química más abundante en el Universo, constituyendo aproximadamente el 75% de toda la masa bariónica.",
    symbol: "H",
    atomicMass: "Masa atómica",
    electronegativity: "Electronegatividad",
    electron_configuration: "1s1"
  })
  const onPeriodicProperties = (name, number, summary, symbol, atomicMass, electronegativity, electron_configuration) => {
    setperiodicProperties({ name, number, summary, symbol, atomicMass, electronegativity, electron_configuration})

  }

  const [activeCategory, setActiveCategory] = useState({
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

  const onActiveCategory = (category) => {
    setActiveCategory({ [category]: true })
  }

  const value = { periodicProperties, onPeriodicProperties, activeCategory, onActiveCategory, setActiveCategory }

  return (
    <periodicContext.Provider value={value}>
      {children}
    </periodicContext.Provider>
  )
}
