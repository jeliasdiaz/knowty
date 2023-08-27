import { useContext, useEffect, useState } from "react";
import { darkModeContext } from "../context/DarkModeContext";


export const useToggleTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
    const {handleDarkMode} = useContext(darkModeContext)

    const toggleTheme = () => {
      if(theme === ''){
        setTheme('dark')
        handleDarkMode()
      } else {
        setTheme('')
        handleDarkMode()
      }
    }

    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);

  return {
    theme,
    toggleTheme
  }
}
