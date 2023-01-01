import { Link } from "react-router-dom"
export const PhysicMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="mobileSubjectMenu">
          <Link to="/cinematica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Cinemática</h2>
            </div>
          </Link>

          <Link to="/dinamica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2 " data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Dinámica</h2>
            </div>
          </Link>

          <Link to="/movimientocircular" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. circular</h2>
            </div>
          </Link>

          <Link to="/energia" className="link-secondary text-decoration-none text-dark ">
            <div className="subjectLink d-flex shadow mt-2" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Energía</h2>
            </div>
          </Link>

          <Link to="/mecanica-fluidos" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. fluidos</h2>
            </div>
          </Link>

          <Link to="/fisica-practica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-2" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">Practica</h2>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
