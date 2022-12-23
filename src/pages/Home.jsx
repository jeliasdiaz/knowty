import { NavLink, Link } from "react-router-dom"
export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="d-block d-sm-none">
          <img src="/img/waveThree.svg" alt="" />
        </div>
        <div className="sectionOne flex-1 container">
          <div className="sectionOneAppendOne " data-aos="zoom-in" data-aos-duration="900">
            <h1>Knowty</h1>
            <p>Somos un grupo de estudiantes que te brindarán nuevas perspectivas de la existencia ¡Adéntrate a una nueva realidad!</p>
          </div>
          <div>
            <img src="/img/homeImg.svg" alt="" className="w-75" />
          </div>
        </div>
        <div>
          <img src="/img/waveOne.svg" alt="" className="waveOne" />
        </div>
      </section>

      <section className="home-2" id="sectionTwo">
        <div className="sectionTwo container" >
          <div className="sectionTwoText justify-content-around" data-aos="fade-down" data-aos-duration="1400">
            <div className="flex-1">
              <div className="text-sectionTwo">
                <h2 id="sectionTwoTitle">Nuestra meta</h2>
                <p>
                  Promover el aprendizaje y fácil acceso a contenido de carácter educativo. Además, exponer el conocimiento desde varias perspectivas. <Link to="/info" className="text-decoration-none text-white text-decoration-underline">Más información.</Link>
                  <br /><br />

                  El proyecto no posee fines de lucro, sin embargo, si se desea contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 6598031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block" >
                <div className="d-flex">
                  <Link to="/estadistica" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/estadisticaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Estadística</h4>
                      <i className='bx bx-chevron-right bx-lg '></i>
                    </div>
                  </Link>

                  <Link to="/cinematica" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Física</h4>
                      <i className='bx bx-chevron-right bx-lg '></i>
                    </div>
                  </Link>
                </div>

                <div className="d-flex">
                  <Link to="/geometria_1" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Geometría</h4>
                      <i className='bx bx-chevron-right bx-lg '></i>
                    </div>
                  </Link>

                  <Link to="/ingles" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/englishIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Inglés</h4>
                      <i className='bx bx-chevron-right bx-lg '></i>
                    </div>
                  </Link>
                </div>

                <div className="d-flex">
                  <Link to="/quimica_1" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Química</h4>
                      <i className='bx bx-chevron-right bx-lg '></i>
                    </div>
                  </Link>
                  <Link to="/sociales_1" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Sociales</h4>
                      <i className='bx bx-chevron-right bx-lg'></i>
                    </div>
                  </Link>
                </div>

                <Link to="/trigonometria_2" className="text-decoration-none text-black">
                  <div className="subjectLink d-flex shadow mt-3 subjectLinkTrigonometria" data-aos="zoom-in-down" data-aos-duration="1400">
                    <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2 " />
                    <h4 className="ps-2">Trigonometría</h4>
                    <i className='bx bx-chevron-right bx-lg'></i>
                  </div>
                </Link>
              </div>
            </div>

            <div className="subjects d-block d-sm-none ">
              <NavLink to="/estadistica" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/estadisticaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-3 ps-2">Estadística</h2>
                  <i className='bx bx-chevron-right bx-lg pt-2'></i>
                </div>
              </NavLink>

              <NavLink to="/fisica-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Física</h2>
                  <i className='bx bx-chevron-right bx-lg pt-3'></i>
                </div>
              </NavLink>

              <NavLink to="/geometria-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Geometría</h2>
                  <i className='bx bx-chevron-right bx-lg pt-3'></i>
                </div>
              </NavLink>

              <NavLink to="/ingles" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/englishIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-3 ps-2">Inglés</h2>
                  <i className='bx bx-chevron-right bx-lg pt-2'></i>
                </div>
              </NavLink>

              <NavLink to="/quimica-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Química</h2>
                  <i className='bx bx-chevron-right bx-lg pt-3'></i>
                </div>
              </NavLink>

              <NavLink to="/sociales-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Sociales</h2>
                  <i className='bx bx-chevron-right bx-lg pt-3'></i>
                </div>
              </NavLink>

              <NavLink to="/trigonometria-menu" className="text-decoration-none text-dark ">
                <div className="subjectLink d-flex shadow mt-3 subjectLinkTrigonometria" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Trigonometría</h2>
                  <i className='bx bx-chevron-right bx-lg pt-3'></i>
                </div>
              </NavLink>
            </div>

          </div>
        </div>
        <div className="waveTwo">
          <img src="/img/waveTwo.svg" alt="" />
        </div>
      </section>
    </>
  )
}
