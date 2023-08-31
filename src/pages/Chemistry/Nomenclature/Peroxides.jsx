import { nomenclatureItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Peroxides = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Peróxidos" />
            <ContentsTable items={nomenclatureItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <p>Son compuestos altamente reactivos y pueden descomponerse fácilmente, liberando oxígeno. Están formados a partir de la unión de dos átomos de oxígeno (O<sub>2</sub>) en una molécula.</p>
              <h5>Formula</h5>
              <p>
                A<sub>2</sub>(O<sub>2</sub>)<sub>n</sub>
                <br />
                n = Estado de oxidación del metal
              </p>
              <h5>Ejemplos</h5>
              <p>
                Peróxido de calcio = CaO<sub>2</sub>
                <br />
                Peróxido de aluminio = Al<sub>2</sub>(O<sub>2</sub>)<sub>3</sub> <br /> <br />
              </p>
            </div>
        </div>
    )
}
