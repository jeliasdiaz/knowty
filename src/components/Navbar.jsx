import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
/* import { MdOutlineFileDownload } from "react-icons/md"; */
import "./Navbar.css"
import { useEffect, useState } from "react";
import NavIcon from "./NavIcon";
import { motion } from "framer-motion";

export const Navbar = () => {

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

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
  const location = useLocation()


  return (

    <>
      <motion.nav className="navbar navbar-expand-lg fixed-top actions" 
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        transition={{  delay: 0.1, opacity: { duration: 0.2 } }}>
        <div className="container-fluid container">
          <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>

          <div className="navbar-nav ownShadow rounded p-1">
            <div className="d-none d-sm-flex gap-1">
              <NavIcon path="/info" icon={<MdInfo size={38} className="navBtn" />} tooltipContent="Información" tooltipId="Informacion" />

              <NavIcon path="/" icon={<AiFillHome size={38} className="navBtn" />} tooltipContent="Inicio" tooltipId="inicio" />

              <NavIcon path="/busqueda" icon={<BiSearch size={38} className="navBtn Search" />} tooltipContent="Buscar" tooltipId="buscar" />

              <NavIcon path="/blog" icon={<FaLightbulb size={36} className="navBtn" />} tooltipContent="Ideas" tooltipId="ideas" />

            </div>

            <div className="d-flex d-sm-none gap-1">
              <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

              <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

              <NavLink to="/busqueda"><BiSearch size={38} className="navBtn Search" /></NavLink>

              <NavLink to="/blog"><FaLightbulb size={36} className="navBtn" /></NavLink>
            </div>

            {
              Icon
                ?
                <HiSun size={38} className="navBtn HiSun" onClick={function () { toggleTheme(); toggleIcon() }} />
                :
                <HiMoon size={38} className="navBtn HiMoon" onClick={function () { toggleTheme(); toggleIcon() }} />
            }

            {
              location.pathname === "/" ? '' : <span onClick={() => navigate(-1)} className="navBtn"><IoCaretBackCircle size={38}  /></span>
            }
          </div>
        </div>
      </motion.nav>
    </>
  )
}
