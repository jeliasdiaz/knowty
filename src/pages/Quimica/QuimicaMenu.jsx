import { Link } from "react-router-dom"
export const QuimicaMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
      <img src="/img/waveThree.svg" alt="" />
        <div className="fisicaSubjectMenu">
          <Link to="/quimica_1" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">I periodo</h2>
              <i class='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/quimica_2" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">II periodo</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/quimica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">III periodo</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>

          <Link to="/quimica_4" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">IV periodo</h2>
              <i className='bx bx-chevron-right bx-lg pt-3'></i>
            </div>
          </Link>


        </div>
      </section>
    </>
  )
}
