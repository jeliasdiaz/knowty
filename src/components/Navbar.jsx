import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import "./Navbar.css"
import { useState } from "react";

export const Navbar = () => {

    const [IsHover, setIsHover] = useState(false)
    const handleMouseOver = () => setIsHover(true);
    const handleMouseOut = () => setIsHover(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid container">
                    <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>


                    <div className="navbar-nav ms-auto shadow bg-white rounded p-1 gap-1">

                        <NavLink to="/info"><MdInfo size={38} className="navBtn" /></NavLink>

                        <NavLink to="/"><AiFillHome size={38} className="navBtn" /></NavLink>

                        <a href="javascript:history.back()" className={IsHover ? 'backHoverColor d-none d-sm-block' : ' d-none d-sm-block'}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}><IoCaretBackCircle size={38} className="navBtn" /></a>

                        <a href="javascript:history.back()" className="d-block d-sm-none"><IoCaretBackCircle size={38} className="navBtn" /></a>

                        <NavLink to="/search"><BiSearch size={38} className="navBtn" /></NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
