import { Link } from "react-router-dom"
import SubjectCard from "../../components/SubjectCard";

export const Home = () => {

  return (
    <>
      <section className="home">
        <div className="d-block d-sm-none">
          <img src="/img/waveThree.svg" alt="" />
        </div>
        <div className="sectionOne flex-1 container">
          <div className="sectionOneAppendOne user-select-none  " data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
            <h1>Knowty</h1>
            <p>Somos un equipo de estudiantes con el fin de aportar a los alumnos. Es hora de adentrarse en las fauces del conocimiento. ¡Sé autodidacta con Knowty!</p>
          </div>
          <img src="/img/homeImg.svg" alt="" />
        </div>
      </section>

      <section className="home-2">
        <div className="sectionTwo container" >
          <div className="sectionTwoText " data-aos="fade-down" data-aos-duration="1400" data-aos-once="true">
            <div className="flex-1">
              <div className="text-sectionTwo ownShadow">
                <h2>Nuestra meta</h2>
                <p>
                  Ayudar a los estudiantes en su proceso acádemico y desarrollo personal; proporcionando un espacio virtual en el que podrán repasar lecciones, adelantarse a nuevas y analizar temáticas desde otras perspectivas.
                  <br /><br />

                  El proyecto no posee fines de lucro, aunque, si deseas contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 659 8031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block" >
                <div className="d-flex">
                  <SubjectCard path="estadistica" img="estadistica" title="Estadística" />

                  <SubjectCard path="cinematica" img="fisica" title="Física" settingOne="ps-3" />
                </div>

                <div className="d-flex">
                  <SubjectCard path="recta" img="geometria" title="Geometría" settingTwo="mt-3" />

                  <SubjectCard path="ingles" img="english" title="Inglés" settingOne="ps-3" settingTwo="mt-3" />
                </div>

                <div className="d-flex">
                  <SubjectCard path="quimica_1" img="quimica" title="Química" settingTwo="mt-3" />

                  <SubjectCard path="sociales_1" img="sociales" title="Sociales" settingOne="ps-3" settingTwo="mt-3" />
                </div>

                <SubjectCard path="trigonometria_2" img="trigonometria" title="Trigonometría" settingTwo="mt-3 subjectLinkTrigonometria" />
              </div>
            </div>

            <div className="subjects d-block d-sm-none ">
              <SubjectCard path="estadistica" img="estadistica" title="Estadística" />

              <SubjectCard path="fisica-menu" img="fisica" title="Física" settingTwo="mt-3" />

              <SubjectCard path="geometria-menu" img="geometria" title="Geometría" settingTwo="mt-3" />

              <SubjectCard path="ingles" img="english" title="Inglés" settingTwo="mt-3" />

              <SubjectCard path="quimica-menu" img="quimica" title="Química" settingTwo="mt-3" />

              <SubjectCard path="sociales-menu" img="sociales" title="Sociales" settingTwo="mt-3" />

              <SubjectCard path="trigonometria-menu" img="trigonometria" title="Trigonometría" settingTwo="mt-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
