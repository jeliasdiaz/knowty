import { Link } from "react-router-dom"

export const GeometryNav = () => {
  return (
    <>
      <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
        <ul className="pagination pagination-md justify-content-center">
          <li className="page-item shadow-lg"><Link to="/geometria_1" className="text-decoration-none page-link">Recta</Link></li>

          <li className="page-item shadow-lg"><Link to="/geometria_2" className="text-decoration-none page-link">Circunferencia</Link></li>

          <li className="page-item shadow-lg"><Link to="/geometria" className="text-decoration-none page-link">Parábola</Link></li>

          <li className="page-item shadow-lg"><Link to="/geometria_4" className="text-decoration-none page-link">Elipse</Link></li>
        </ul>
      </nav>
    </>
  )
}
