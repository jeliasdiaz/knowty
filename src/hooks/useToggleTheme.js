import { useEffect, useState } from "react";


export const useToggleTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')
  
    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);

  return {
    theme,
    toggleTheme
  }
}
