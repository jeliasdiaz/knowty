import { createContext, useState } from "react";

export const darkModeContext = createContext();

export const DarkModeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || "",
  );
  const handleDarkMode = () => {
    if (isDarkMode === "") {
      setIsDarkMode("dark");
    } else {
      setIsDarkMode("");
    }
  };
  const value = { isDarkMode, handleDarkMode };
  return (
    <darkModeContext.Provider value={value}>
      {children}
    </darkModeContext.Provider>
  );
};
