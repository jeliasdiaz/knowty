import { Link } from "react-router-dom";

export const SocialNav = () => {
    return (
        <>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination  pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/sociales_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_2" className="text-decoration-none page-link">D. ecómicas</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales" className="text-decoration-none page-link">M. armados</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_4" className="text-decoration-none page-link">M. sociales</Link></li>
                </ul>
            </nav>
        </>
    )
}
