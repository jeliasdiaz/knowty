import SubjectCard from "../../components/SubjectCard";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react";

export const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="home">
        <div className="d-block d-sm-none">
          <img src="/img/waveThree.svg" alt="" />
        </div>
        <div className="sectionOne flex-1 container">
          <motion.div className="sectionOneAppendOne user-select-none "
            initial={{ opacity: 0}}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            animate={{ opacity: 1, y: [-50, 0] }}
          >
            <h1>Knowty</h1>
            <p>De estudiantes, para estudiantes. Es hora de adentrarse en las fauces del conocimiento. ¡Sé autodidacta con Knowty!</p>
          </motion.div>
          <img src="/img/homeImg.svg" alt="home" className="user-select-none" />
        </div>
      </section>

      <section className="home-2">
        <div className="sectionTwo container" >
          <div className="sectionTwoText">
            <div className="flexHome">
              <div className="text-sectionTwo ownShadow" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
              }}>
                <h2>Nuestra meta</h2>
                <p>
                  Ayudar a los estudiantes en su proceso acádemico y desarrollo personal; proporcionando un espacio virtual en el que podrán repasar lecciones, adelantarse a nuevas y analizar temáticas desde otras perspectivas.
                  <br /><br />

                  El proyecto no posee fines de lucro, aunque, si deseas contribuir al crecimiento del mismo, puedes enviar el aporte al Nequi: 310 659 8031.
                </p>
              </div>

              <div className="subjectsContainer d-none d-sm-block" ref={ref}>
                <div className="d-flex gap-3">
                  <SubjectCard path="/estadistica" img="estadistica" title="Estadística" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }} />

                  <SubjectCard path="/cinematica" img="fisica" title="Física" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />
                </div>

                <div className="d-flex gap-3 mt-3">
                  <SubjectCard path="/recta" img="geometria" title="Geometría" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />

                  <SubjectCard path="/ingles" img="english" title="Inglés" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />
                </div>

                <div className="d-flex gap-3 mt-3">
                  <SubjectCard path="/quimica_1" img="quimica" title="Química" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />

                  <SubjectCard path="/sociales_1" img="sociales" title="Sociales" animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />
                </div>

                <SubjectCard path="/trigonometria_2" img="trigonometria" title="Trigonometría" marginTop="mt-3 subjectLinkTrigonometria " animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}  />
              </div>
            </div>

            <div className="subjects d-block d-sm-none">
              <SubjectCard path="/estadistica" img="estadistica" title="Estadística" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/fisica-menu" img="fisica" title="Física" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/geometria-menu" img="geometria" title="Geometría" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/ingles" img="english" title="Inglés" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/quimica-menu" img="quimica" title="Química" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/sociales-menu" img="sociales" title="Sociales" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />

              <SubjectCard path="/trigonometria-menu" img="trigonometria" title="Trigonometría" marginTop="mt-3" 
              animation={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
                  }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
