import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useToggleNavbar, useToggleTheme } from "../hooks/";
import { NavIcon } from "./NavIcon";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { BsFillLightbulbFill } from "react-icons/bs";

export const Navbar = () => {

  // Toggle navbar
  const { visible } = useToggleNavbar()

  // toggle theme
  const { theme, toggleTheme } = useToggleTheme()

  // toggle icon dark and light
  const [Icon, setIcon] = useState(false)
  const toggleIcon = () => theme === 'dark' ? setIcon(false) : setIcon(true)


  // go back
  const navigate = useNavigate()
  const location = useLocation()

  return (

    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${visible ? "down" : " up"}`}>
        <div className="container-fluid container">
          <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/knowty.png" alt="" className="navbar-brand" /></NavLink>

          <div className="navbar-nav ownShadow rounded p-1">
            <div className="d-none d-sm-flex gap-1">
              <NavIcon path="/info" icon={<MdInfo size={38} className="navBtn" />} tooltipContent="Información" tooltipId="Informacion" />

              <NavIcon path="/" icon={<AiFillHome size={38} className="navBtn" />} tooltipContent="Inicio" tooltipId="inicio" />

              <NavIcon path="/busqueda" icon={<BiSearch size={38} className="navBtn Search" />} tooltipContent="Buscar" tooltipId="buscar" />

              <NavIcon path="/blog" icon={<BsFillLightbulbFill size={36} className="navBtn" />} tooltipContent="Consejos" tooltipId="consejos" />

            </div>

            <div className="d-flex d-sm-none gap-1">
              <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

              <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

              <NavLink to="/busqueda"><BiSearch size={38} className="navBtn Search" /></NavLink>

              <NavLink to="/blog"><BsFillLightbulbFill size={36} className="navBtn" /></NavLink>
            </div>

            {
              Icon
                ?
                <HiSun size={38} className="navBtn HiSun" onClick={function () { toggleTheme(); toggleIcon() }} />
                :
                <HiMoon size={38} className="navBtn HiMoon" onClick={function () { toggleTheme(); toggleIcon() }} />
            }

            {
              location.pathname === "/" ? '' : <span onClick={() => navigate(-1)} className="navBtn"><IoCaretBackCircle size={38} data-aos="fade-left" data-aos-duration="600" /></span>
            }
          </div>
        </div>
      </nav>
    </>
  )
}
