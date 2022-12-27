import { NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import "./Navbar.css"
import { useState } from "react";

export const Navbar = () => {

    const [IsHover, setIsHover] = useState(false)
    const handleMouseOver = () => {
        setIsHover(true);
    };
    const handleMouseOut = () => {
        setIsHover(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid container">
                    <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>


                    <div className="navbar-nav ms-auto shadow bg-white rounded p-1 gap-1">

                        <NavLink to="/info"><MdInfo size={38} id="MdInfo" /></NavLink>

                        <NavLink to="/"><RiHomeFill size={38} id="RiHomeFill" /></NavLink>

                        <a href="javascript:history.back()" className={IsHover ? 'backHoverColor' : ''}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}><IoCaretBackCircle size={38} id="IoCaretBackCircle" /></a>
                    </div>
                </div>
            </nav>
        </>
    )
}
