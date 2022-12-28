import { Link } from "react-router-dom"
export const SocialMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="fisicaSubjectMenu">
          <Link to="/sociales_1" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">I periodo</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/doctrinas-economicas" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3 " data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">D. económicas</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/movimientos-armados" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. armados</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/movimientos-sociales" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-4 ps-2">M. sociales</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
