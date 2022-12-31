import { Link } from "react-router-dom"
export const TrigonometryMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
        <img src="/img/waveThree.svg" alt="" />
        <div className="fisicaSubjectMenu">
          <Link to="/trigonometria_2" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3 " data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-3 ps-2">II periodo</h2>
            </div>
          </Link>

          <Link to="/trigonometria" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="fade-up" data-aos-duration="1000">
              <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2" />
              <h2 className="pt-3 ps-2">III periodo</h2>
            </div>
          </Link>

        </div>
      </section>
    </>
  )
}
