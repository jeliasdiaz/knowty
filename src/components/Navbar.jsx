import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Navbar.css"
import { useEffect, useState } from "react";
import NavIcon from "./NavIcon";

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
  const location = useLocation()

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  
  return (

    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid container">
          <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>

          <div className="navbar-nav ownShadow rounded p-1">
            <div className="d-none d-sm-flex gap-1">
              <NavIcon path="/info" icon={<MdInfo size={38} className="navBtn" />} tooltipContent="Información" tooltipId="Informacion" />

              <NavIcon path="/" icon={<AiFillHome size={38} className="navBtn" />} tooltipContent="Inicio" tooltipId="inicio" />

              <NavIcon path="/buscar" icon={<BiSearch size={38} className="navBtn Search" />} tooltipContent="Buscar" tooltipId="buscar" />

              <NavIcon path="/blog" icon={<FaLightbulb size={36} className="navBtn" />} tooltipContent="Ideas" tooltipId="ideas" />

            </div>

            <div className="d-flex d-sm-none gap-1">
              <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

              <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

              <NavLink to="/buscar"><BiSearch size={38} className="navBtn Search" /></NavLink>

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
              location.pathname === "/" ? '' : <span onClick={() => navigate(-1)} className="navBtn"><IoCaretBackCircle size={38} data-aos="fade-left" data-aos-duration="600" /></span>
            }

            {
              isReadyForInstall && <MdOutlineFileDownload onClick={downloadApp}/>
              }
          </div>
        </div>
      </nav>
    </>
  )
}
