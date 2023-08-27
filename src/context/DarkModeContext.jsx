import { createContext, useState } from "react"

export const darkModeContext = createContext()

export const DarkModeContext = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    const value = {isDarkMode, handleDarkMode}
  return (
    <darkModeContext.Provider value={value}>
        {children}
    </darkModeContext.Provider>
  )
}
