import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid container">
                    <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand" /></NavLink>

                    
                    <div className="navbar-nav ms-auto shadow bg-white rounded p-1">
                        
                        <NavLink to="/info" className="text-decoration-none"><i className='bx bxs-info-circle bx-md ms-1' ></i></NavLink>

                        <NavLink to="/" className="text-decoration-none"><i className='bx bxs-home-alt-2 bx-md ms-1' ></i></NavLink>

                        <a href="javascript:history.back()"><i className='bx bxs-left-arrow-circle bx-md mx-2'></i></a>

                        

                    </div>
                </div>
            </nav>
        </>
    )
}
