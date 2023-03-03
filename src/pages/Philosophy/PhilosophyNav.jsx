import { Link } from "react-router-dom"
export const PhilosophyNav = () => {
    return (
        <>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block" data-aos-once="true">
                <ul className="pagination pagination-md justify-content-center ownShadow">
                    <li className="page-item"><Link to="/introduccion-filosofia" className="text-decoration-none page-link">Introducción</Link></li>
                </ul>
            </nav>
        </>
    )
}
