import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import TopWave from "../../components/TopWave"

export const ChemistryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
      <TopWave />
        <div className="mobileSubjectMenu">
          <Link to="/quimica_1" className="link-secondary text-decoration-none text-dark">
            <motion.div className="subjectLink d-flex ownShadow" initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.2 }}
        animate={{ opacity: 1, y: [100, 0] }}>
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">I periodo</h2>
            </motion.div>
          </Link>

          <Link to="/quimica_2" className="link-secondary text-decoration-none text-dark">
            <motion.div className="subjectLink d-flex ownShadow mt-3 " initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.2 }}
        animate={{ opacity: 1, y: [100, 0] }}>
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">II periodo</h2>
            </motion.div>
          </Link>

          <Link to="/quimica" className="link-secondary text-decoration-none text-dark">
            <motion.div className="subjectLink d-flex ownShadow mt-3" initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.2 }}
        animate={{ opacity: 1, y: [100, 0] }}>
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">III periodo</h2>
            </motion.div>
          </Link>

          <Link to="/quimica_4" className="link-secondary text-decoration-none text-dark">
            <motion.div className="subjectLink d-flex ownShadow mt-3" initial={{ opacity: 0}}
        transition={{ ease: "easeIn", duration: 0.2 }}
        animate={{ opacity: 1, y: [100, 0] }}>
              <img src="/img/quimicaIcon.png" alt="" className="w-25 pe-2"/>
              <h2 className="pt-4 ps-2">IV periodo</h2>
            </motion.div>
          </Link>


        </div>
      </section>
    </>
  )
}
