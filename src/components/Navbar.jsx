import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { FaMicroblog } from "react-icons/fa";
import "./Navbar.css"
import { useEffect, useState } from "react";

export const Navbar = () => {
  // toggle theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

  const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  // toggle icon dark and light
  const [Icon, setIcon] = useState(false)
  const toggleIcon = () => Icon ? setIcon(false) : setIcon(true)


  // go back
  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid container">
          <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>

          <div className="navbar-nav ms-auto shadow bg-white rounded p-1 gap-2">

            <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

            <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

            <NavLink to="/search"><BiSearch size={38} className="navBtn Search" /></NavLink>

            <NavLink to="/blog"><FaMicroblog size={36} className="navBtn" /></NavLink>

            {
              Icon
                ?
                <HiSun size={38} className="navBtn HiSun" onClick={function () { toggleTheme(); toggleIcon() }} />
                :
                <HiMoon size={38} className="navBtn HiMoon" onClick={function () { toggleTheme(); toggleIcon() }} />
            }

            <span onClick={() => navigate(-1)} className="navBtn"><IoCaretBackCircle size={38} className="navBtn" /></span>
          </div>
        </div>
      </nav>
    </>
  )
}
