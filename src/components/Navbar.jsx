import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiMoon } from "react-icons/hi2";
import "./Navbar.css"
import { useEffect, useState } from "react";

export const Navbar = () => {

  const [IsHoverBack, setIsHoverBack] = useState(false)
  const [IsHoverTheme, setIsHoverTheme] = useState(false)
  const handleMouseOverBack = () => setIsHoverBack(true);
  const handleMouseOutBack = () => setIsHoverBack(false);
  const handleMouseOverTheme = () => setIsHoverTheme(true);
  const handleMouseOutTheme = () => setIsHoverTheme(false);

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || ''
  );
  const toggleTheme = () => {
    if (theme === '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid container">
          <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>

          <div className="navbar-nav ms-auto shadow bg-white rounded p-1 gap-1">

            <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

            <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

            <NavLink to="/search"><BiSearch size={38} className="navBtn" /></NavLink>

            <HiMoon size={38} className={IsHoverTheme ? 'backHoverColor d-none d-sm-block' : 'd-none d-sm-block text-dark'} onClick={toggleTheme} onMouseOver={handleMouseOverTheme}
              onMouseOut={handleMouseOutTheme} />
              
            <a href="javascript:history.back()" className={IsHoverBack ? 'backHoverColor d-none d-sm-block' : ' d-none d-sm-block'}
              onMouseOver={handleMouseOverBack}
              onMouseOut={handleMouseOutBack}><IoCaretBackCircle size={38} className="navBtn" /></a>

            <HiMoon size={38} className="navBtn d-block d-sm-none text-dark" onClick={toggleTheme} />

            <a href="javascript:history.back()" className="d-block d-sm-none"><IoCaretBackCircle size={38} className="navBtn" /></a>
          </div>
        </div>
      </nav>
    </>
  )
}
