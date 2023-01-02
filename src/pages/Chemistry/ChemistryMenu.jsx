import { Link } from "react-router-dom"
export const ChemistryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
      <img src="/img/waveThree.svg" alt="" />
        <div className="mobileSubjectMenu">
          <Link to="/quimica_1" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">I periodo</h2>
            </div>
          </Link>

          <Link to="/quimica_2" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3 " data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">II periodo</h2>
            </div>
          </Link>

          <Link to="/quimica" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">III periodo</h2>
            </div>
          </Link>

          <Link to="/quimica_4" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">IV periodo</h2>
            </div>
          </Link>


        </div>
      </section>
    </>
  )
}
