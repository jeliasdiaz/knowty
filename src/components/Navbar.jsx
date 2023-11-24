import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { useToggleNavbar, useToggleTheme } from "../hooks/";
import { NavIcon } from "./NavIcon";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { BsFillLightbulbFill } from "react-icons/bs";
import { titleContext } from "../context/TitleContextSubject";
import { IoArrowBack } from "react-icons/io5";
export const Navbar = () => {
  // Toggle navbar
  const { visible } = useToggleNavbar();

  // toggle theme
  const { theme, toggleTheme } = useToggleTheme();

  // toggle icon dark and light
  const [Icon, setIcon] = useState(false);
  const toggleIcon = () => (theme === "dark" ? setIcon(false) : setIcon(true));

  // go back
  const navigate = useNavigate();
  const location = useLocation();

  const { titleSubject, titleVisible } = useContext(titleContext);
  const excludedPaths = ["/", "/info", "/blog", "/icons", "/busqueda"];
  const showTitle =
    titleVisible &&
    !excludedPaths.includes(location.pathname) &&
    !location.pathname.endsWith("menu");

  // Transition page
  const transitionPage = (ev) => {
    ev.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/");
      });
    } else {
      navigate("/");
    }
  };

/*   const navigateBack = (ev) => {
    ev.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(-1)
      });
    } else {
      navigate(-1)
    }
  } */

  
  return (
    <>
      {showTitle && titleSubject.length > 0 ? (
        <small
          className={`titleSubject text-overflow ownShadow fixed-top brandLink`}
          data-aos="fade-down"
        >
          {titleSubject}
        </small>
      ) : (
        <NavLink
          to="/"
          className={`text-decoration-none bg-transparent brandLink fixed-top logo`}
          data-aos="fade-down"
          data-aos-delay="200"
          onClick={transitionPage}
        >
          <img src="/img/knowty.png" alt="" className="navbar-brand" />
        </NavLink>
      )}
      <div
        className={`navbar-nav ownShadow p-2 fixed-top ${
          visible ? "down" : " up"
        }`}
      >
        <div className="d-none d-sm-flex gap-1">
          <NavIcon
            path="/"
            icon={<AiFillHome size={40} className="navBtn" />}
            tooltipContent="Inicio"
            tooltipId="inicio"
          />

          <NavIcon
            path="/busqueda"
            icon={<BiSearch size={40} className="navBtn Search" />}
            tooltipContent="Buscar"
            tooltipId="buscar"
          />

          <NavIcon
            path="/blog"
            icon={<BsFillLightbulbFill size={38} className="navBtn" />}
            tooltipContent="Consejos"
            tooltipId="consejos"
          />
        </div>

        <div className="d-flex d-sm-none gap-1">
          <NavLink to="/">
            <AiFillHome size={40} className="navBtn" />
          </NavLink>

          <NavLink to="/busqueda">
            <BiSearch size={40} className="navBtn Search" />
          </NavLink>

          <NavLink to="/blog">
            <BsFillLightbulbFill size={38} className="navBtn" />
          </NavLink>
        </div>

        {Icon ? (
          <HiSun
            size={40}
            className="navBtn HiSun "
            onClick={function () {
              toggleTheme();
              toggleIcon();
            }}
          />
        ) : (
          <HiMoon
            size={40}
            className="navBtn HiMoon"
            onClick={function () {
              toggleTheme();
              toggleIcon();
            }}
          />
        )}

        {location.pathname === "/" ? (
          ""
        ) : (
          <span onClick={() => navigate(-1)} className="navBtn">
            <IoArrowBack
              size={40}
              data-aos="fade-left"
              data-aos-duration="600"
            />
          </span>
        )}
      </div>
    </>
  );
};
