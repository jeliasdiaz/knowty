import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";

export const Home = () => {

  return (
    <>
      <section className="home">
        <div className="d-block d-sm-none">
          <img src="/img/waveThree.svg" alt="" />
        </div>
        <div className="sectionOne flex-1 container">
          <div className="sectionOneAppendOne user-select-none" data-aos="zoom-in" data-aos-duration="900">
            <h1>Knowty</h1>
            <p>Somos un equipo de estudiantes con el fin de aportar a los alumnos. Es hora de adentrarse en las fauces del conocimiento. ¡Sé autodidacta con Knowty!</p>
          </div>
          <div>
            <img src="/img/homeImg.svg" alt="" className="w-75 " />
          </div>
        </div>
{/*         <div>
          <img src="/img/waveOne.svg" alt="" className="waveOne" />
        </div> */}
      </section>

      <section className="home-2">
        <div className="sectionTwo container" >
          <div className="sectionTwoText justify-content-around" data-aos="fade-down" data-aos-duration="1400">
            <div className="flex-1">
              <div className="text-sectionTwo">
                <h2>Nuestra meta</h2>
                <p>
                  Promover el aprendizaje y fácil acceso a contenido de carácter educativo. Además, exponer el conocimiento desde varias perspectivas. <Link to="/info" className="text-decoration-none text-white text-decoration-underline">Más información.</Link>
                  <br /><br />

                  El proyecto no posee fines de lucro, sin embargo, si deseas contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 6598031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block" >
                <div className="d-flex">
                  <Link to="/estadistica" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/estadisticaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Estadística</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>

                  <Link to="/cinematica" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Física</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>
                </div>

                <div className="d-flex">
                  <Link to="/recta" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className="ps-2">Geometría</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>

                  <Link to="/ingles" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/englishIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Inglés</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>
                </div>

                <div className="d-flex">
                  <Link to="/quimica_1" className="text-decoration-none text-black">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Química</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>
                  <Link to="/sociales_1" className="text-decoration-none text-black ps-3">
                    <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="1400">
                      <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2 " />
                      <h4 className=" ps-2">Sociales</h4>
                      <BiChevronRight size={45} className="BiChevronRight"/>
                    </div>
                  </Link>
                </div>

                <Link to="/trigonometria_2" className="text-decoration-none text-black">
                  <div className="subjectLink d-flex shadow mt-3 subjectLinkTrigonometria" data-aos="zoom-in-down" data-aos-duration="1400">
                    <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2 " />
                    <h4 className="ps-2">Trigonometría</h4>
                    <BiChevronRight size={45} className="BiChevronRight"/>
                  </div>
                </Link>
              </div>
            </div>

            <div className="subjects d-block d-sm-none ">
              <Link to="/estadistica" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/estadisticaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-3 ps-2">Estadística</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-2"/>
                </div>
              </Link>

              <Link to="/fisica-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3 " data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/fisicaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Física</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-3"/>
                </div>
              </Link>

              <Link to="/geometria-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/geometriaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Geometría</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-3"/>
                </div>
              </Link>

              <Link to="/ingles" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/englishIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-3 ps-2">Inglés</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-2"/>
                </div>
              </Link>

              <Link to="/quimica-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Química</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-3"/>
                </div>
              </Link>

              <Link to="/sociales-menu" className="text-decoration-none text-dark">
                <div className="subjectLink d-flex shadow mt-3" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/socialesIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Sociales</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-3"/>
                </div>
              </Link>

              <Link to="/trigonometria-menu" className="text-decoration-none text-dark ">
                <div className="subjectLink d-flex shadow mt-3 subjectLinkTrigonometria" data-aos="zoom-in-down" data-aos-duration="900">
                  <img src="/img/trigonometriaIcon.png" alt="" className="w-25 pe-2" />
                  <h2 className="pt-4 ps-2">Trigonometría</h2>
                  <BiChevronRight size={45} className="BiChevronRight mt-3"/>
                </div>
              </Link>
            </div>

          </div>
        </div>
{/*         <div className="waveTwo">
          <img src="/img/waveTwo.svg" alt="" />
        </div> */}
      </section>
    </>
  )
}
