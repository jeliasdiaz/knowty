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
            <p>De estudiantes, para estudiantes. Es hora de adentrarse en las fauces del conocimiento. ¡Sé autodidacta con Knowty!</p>
          </div>
          <img src="/img/homeImg.svg" alt="home" className="user-select-none" />
        </div>
      </section>

      <section className="home-2">
        <div className="sectionTwo container" >
          <div className="sectionTwoText ">
            <div className="flexHome">
              <div className="text-sectionTwo ownShadow" data-aos="fade-down" data-aos-duration="1400" data-aos-once="true">
                <h2>Nuestra meta</h2>
                <p>
                  Ayudar a los estudiantes en su proceso acádemico y desarrollo personal; proporcionando un espacio virtual en el que podrán repasar lecciones, adelantarse a nuevas y analizar temáticas desde otras perspectivas.
                  <br /><br />

                  El proyecto no posee fines de lucro, aunque, si deseas contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 659 8031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block">
                <div className="d-flex gap-3">
                  <SubjectCard path="/estadistica" img="estadistica" title="Estadística" />

                  <SubjectCard path="/cinematica" img="fisica" title="Física" />
                </div>

                <div className="d-flex gap-3 mt-3">
                  <SubjectCard path="/recta" img="geometria" title="Geometría"  />

                  <SubjectCard path="/ingles" img="english" title="Inglés"  />
                </div>

                <div className="d-flex gap-3 mt-3">
                  <SubjectCard path="/quimica_1" img="quimica" title="Química" />

                  <SubjectCard path="/sociales_1" img="sociales" title="Sociales" />
                </div>

                <SubjectCard path="/trigonometria_2" img="trigonometria" title="Trigonometría" marginTop="mt-3 subjectLinkTrigonometria" />
              </div>
            </div>

            <div className="subjects d-block d-sm-none">
              <SubjectCard path="/estadistica" img="estadistica" title="Estadística" />

              <SubjectCard path="/fisica-menu" img="fisica" title="Física" marginTop="mt-3" />

              <SubjectCard path="/geometria-menu" img="geometria" title="Geometría" marginTop="mt-3" />

              <SubjectCard path="/ingles" img="english" title="Inglés" marginTop="mt-3" />

              <SubjectCard path="/quimica-menu" img="quimica" title="Química" marginTop="mt-3" />

              <SubjectCard path="/sociales-menu" img="sociales" title="Sociales" marginTop="mt-3" />

              <SubjectCard path="/trigonometria-menu" img="trigonometria" title="Trigonometría" marginTop="mt-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
