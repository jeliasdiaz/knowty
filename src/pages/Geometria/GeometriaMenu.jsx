import { Link } from "react-router-dom"
export const GeometriaMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="fisicaSubjectMenu">
          <Link to="/geometria_1" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Recta</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/geometria_2" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Circunferencia</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/geometria" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Parábola</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/geometria_4" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
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
