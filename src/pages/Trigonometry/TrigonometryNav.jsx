import { Link } from "react-router-dom";

export const TrigonometryNav = () => {
    return (
        <>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block" data-aos-once="true">
                <ul className="pagination  pagination-md justify-content-center">
                    <li className="page-item ownShadow-lg"><Link to="/trigonometria_2" className="text-decoration-none page-link">II periodo</Link></li>

                    <li className="page-item ownShadow-lg"><Link to="/trigonometria" className="text-decoration-none page-link" >III periodo</Link></li>

                    <li className="page-item ownShadow-lg"><Link to="/trigonometria-practica" className="text-decoration-none page-link">Practica</Link></li>
                </ul>
            </nav>
        </>
    )
}
