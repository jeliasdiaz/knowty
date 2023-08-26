import { SubjectCard, TopWave } from "../../components/";

export const Home = () => {
  return (
    <>
      <section className="home">
        <TopWave />

        <div className="sectionOne flex-1 container">
          <div className="sectionOneAppendOne user-select-none" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
            <h1>Knowty</h1>
            <p>De estudiantes, para estudiantes. Es hora de adentrarse en las fauces del conocimiento. ¡Sé autodidacta con Knowty!</p>
          </div>
          <img src="/img/homeImgTwo.png" alt="home" className="user-select-none" />
        </div>
      </section>

      <section className="home-2">
        <div className="sectionTwo container">
          <div className="sectionTwoText">
            <div className="flexHome">
              <div className="text-sectionTwo ownShadow" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">
                <h2>Nuestra meta</h2>
                <p>
                  Ayudar a los estudiantes en su proceso acádemico y desarrollo personal; proporcionando un espacio virtual en el que podrán repasar lecciones, adelantarse a nuevas y analizar temáticas desde otras perspectivas.
                  <br /><br />

                  El proyecto no posee fines de lucro, aunque, si deseas contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 659 8031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block">
                <div className="d-flex gap-3">
                  <SubjectCard path="/biologia-menu" img="biologia" title="Biología" animationDelay={600} />

                  <SubjectCard path="/filosofia-menu" img="filosofia" title="Filosofía" animationDelay={800} />

                </div>

                <div className="d-flex gap-3 mt-3">

                  <SubjectCard path="/fisica-menu" img="fisica" title="Física" animationDelay={800} />
                  <SubjectCard path="/ingles-menu" img="english" title="Inglés" animationDelay={1000} />

                </div>

                <div className="d-flex gap-3 mt-3">
                  <SubjectCard path="/quimica-menu" img="quimica" title="Química" animationDelay={1200} />

                  <SubjectCard path="/matematicas-menu" img="matematicas" title="Matemáticas" animationDelay={1200} marginTop="mathCard"/>
                </div>

                <div className="d-flex gap-3 mt-3">

                  <SubjectCard path="/sociales-menu" img="sociales" title="Sociales" animationDelay={1200} />
                  <SubjectCard path="/tools" img="tools" title="Tools" animationDelay={1400} />
                </div>
              </div>
            </div>

            <div className="subjects d-block d-sm-none">
              <SubjectCard path="/biologia-menu" img="biologia" title="Biología" animationDelay={500} />

              <SubjectCard path="/estadistica" img="estadistica" title="Estadística" animationDelay={600} />

              <SubjectCard path="/filosofia-menu" img="filosofia" title="Filosofía" animationDelay={700} />

              <SubjectCard path="/fisica-menu" img="fisica" title="Física" marginTop="mt-3" animationDelay={800} />

              <SubjectCard path="/geometria-menu" img="geometria" title="Geometría" marginTop="mt-3" animationDelay={900} />

              <SubjectCard path="/ingles-menu" img="english" title="Inglés" marginTop="mt-3" animationDelay={1000} />

              <SubjectCard path="/quimica-menu" img="quimica" title="Química" marginTop="mt-3" animationDelay={1100} />

              <SubjectCard path="/sociales-menu" img="sociales" title="Sociales" marginTop="mt-3" animationDelay={1200} />

              <SubjectCard path="/tools" img="tools" title="Tools" animationDelay={1300} />

              <SubjectCard path="/trigonometria-menu" img="trigonometria" title="Trigonometría" marginTop="mt-3 mathCard" animationDelay={1400} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
