import { Link } from "react-router-dom"
export const FisicaMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="fisicaSubjectMenu">
          <Link to="/cinematica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Cinemática</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/dinamica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2 " data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Dinámica</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/movimientocircular" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. circular</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/energia" className="link-secondary text-decoration-none text-dark ">
            <div className="subjectLink d-flex shadow mt-2" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Energía</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/mecanica-fluidos" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. fluidos</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/fisica-practica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Practica</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
