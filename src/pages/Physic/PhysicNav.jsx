import { Link } from "react-router-dom"
export const PhysicNav = () => {
    return (
        <>
            <nav className="nav-3 d-none d-sm-block" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true">
                <ul className="pagination pagination-md justify-content-center mt-5 ownShadow">

                    <li className="page-item" ><Link to="/cinematica" className="text-decoration-none page-link">Cinemática</Link></li>

                    <li className="page-item"><Link to="/dinamica" className="text-decoration-none page-link">Dinámica</Link></li>

                    <li className="page-item"><Link to="/movimientocircular" className="text-decoration-none page-link">M. circular</Link></li>

                    <li className="page-item"><Link to="/energia" className="text-decoration-none page-link">Energía</Link></li>

                    <li className="page-item"><Link to="/mecanica-fluidos" className="text-decoration-none page-link">Fluidos</Link></li>

                    <li className="page-item"><Link to="/fisica-practica" className="text-decoration-none page-link">Practica</Link></li>
                </ul>
            </nav>
        </>
    )
}
