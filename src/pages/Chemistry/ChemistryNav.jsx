import { Link } from "react-router-dom"
export const ChemistryNav = () => {
    return (
        <>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/quimica_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica_2" className="text-decoration-none page-link">II periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica" className="text-decoration-none page-link">III periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica_4" className="text-decoration-none page-link">IV periodo</Link></li>
                </ul>
            </nav>
        </>
    )
}
