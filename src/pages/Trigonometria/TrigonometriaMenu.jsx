import { NavLink } from "react-router-dom"
export const TrigonometriaMenu = () => {
  return (
    <>
      <section className="fisicaMenu">
        <div className="fisicaSubjectMenu">
          <NavLink to="/trigonometria_2" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-3 ps-2">II periodo</h2>
              <i className='bx bx-chevron-right bx-lg pt-2'></i>
            </div>
          </NavLink>

          <NavLink to="/trigonometria" className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
              <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-3 ps-2">III periodo</h2>
              <i className='bx bx-chevron-right bx-lg pt-2'></i>
            </div>
          </NavLink>

        </div>
      </section>
    </>
  )
}
