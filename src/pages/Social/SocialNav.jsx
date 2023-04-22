import { Link } from "react-router-dom";

export const SocialNav = () => {
    return (
        <>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block" data-aos-once="true">
                <ul className="pagination  pagination-md justify-content-center ownShadow">
                    <li className="page-item"><Link to="/sociales_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item"><Link to="/doctrinas-economicas" className="text-decoration-none page-link">I. ecónomicas</Link></li>

                    <li className="page-item"><Link to="/movimientos-armados" className="text-decoration-none page-link">M. armados</Link></li>

                    <li className="page-item"><Link to="/movimientos-sociales" className="text-decoration-none page-link">M. sociales</Link></li>

                    <li className="page-item"><Link to="/sociales-extra" className="text-decoration-none page-link">Extra</Link></li>
                </ul>
            </nav>
        </>
    )
}
