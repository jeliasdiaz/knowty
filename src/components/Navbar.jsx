import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid container">
                    <NavLink to="/" className="text-decoration-none bg-transparent"><img src="/img/logo.svg" alt="" className="navbar-brand ms-2" /></NavLink>

                    
                    <div className="navbar-nav ms-auto shadow bg-white rounded p-1">
                        
                        <NavLink to="/info" className="text-decoration-none"><i className='bx bxs-info-circle bx-md ms-1' ></i></NavLink>

                        <NavLink to="/" className="text-decoration-none"><i className='bx bxs-home-alt-2 bx-md ms-1' ></i></NavLink>

                        <a href="javascript:history.back()"><i className='bx bxs-left-arrow-circle bx-md mx-2'></i></a>

                        <i className='bx bxs-category-alt bx-md d-none d-sm-block me-1 text-black' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>

                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end text-black" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <img src="/img/logo.svg" alt=""  id="offcanvasRightLabel" className="w-25 me-auto"/>
                    <i className='bx bx-x bx-lg text-black ms-auto' data-bs-dismiss="offcanvas" aria-label="Close"></i>
                </div>
                <div className="offcanvas-body text-center">
                    <NavLink to="/estadistica" className="text-decoration-none btn shadow btnOffcanvasOne dropdown-item text-center"><h4>Estadística</h4></NavLink>
                    <hr className="w-75"/>
                    <NavLink to="/cinematica" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Física</h4></NavLink>
                    <hr  className="w-75"/>
                    <NavLink to="/geometria_1" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Geometría</h4></NavLink>
                    <hr  className="w-75"/>
                    <NavLink to="/ingles" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Inglés</h4></NavLink>
                    <hr  className="w-75"/>
                    <NavLink to="/quimica_1" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Química</h4></NavLink>
                    <hr  className="w-75"/>
                    <NavLink to="/sociales_1" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Sociales</h4></NavLink>
                    <hr  className="w-75"/>
                    <NavLink to="/trigonometria_2" className="text-decoration-none btn btnOffcanvas shadow dropdown-item"><h4>Trigonometría</h4></NavLink>
                    <hr  className="w-75"/>
                </div>
            </div>
        </>
    )
}
