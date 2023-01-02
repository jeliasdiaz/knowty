import { Link } from "react-router-dom"

export const GeometryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="mobileSubjectMenu">
          <Link to="/recta" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Recta</h2>
            </div>
          </Link>

          <Link to="/circunferencia" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3 " data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Circunferencia</h2>
            </div>
          </Link>

          <Link to="/parabola" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Parábola</h2>
            </div>
          </Link>

          <Link to="/elipse" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Elipse</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
