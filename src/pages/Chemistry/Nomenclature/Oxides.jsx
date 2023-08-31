import { nomenclatureItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../components'

export const Oxides = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Óxidos" />
            <ContentsTable items={nomenclatureItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Óxidos basicos</h3>
                <p>Son aquellos que contienen oxígeno y un metal. De hecho, también se les conoce como óxidos metálicos. Ejemplos: dióxido de calcio (CaO), óxido de hierro (III) (Fe<sub>2</sub>O<sub>3</sub>), óxido de magnesio (MgO), etc.</p>
                <h5>Fórmula</h5>
                <p>
                    M<sub>2</sub>O<sub>x</sub>
                    <br />
                    M = Símbolo del metal <br />
                    2 = Número de oxidación el oxígeno <br />
                    O = Oxígeno <br />
                    x = Número de oxidación del metal
                </p>

                <h3>Óxidos ácidos </h3>
                <p>
                    Son aquellos que contienen oxígeno y un no metal. También conocidos como óxidos no metálicos. Ejemplos: ácido sulfúrico (SO2), ácido nítrico (NO2), etc.
                </p>
                <h5>Fórmula</h5>
                <p>
                    (NoM)<sub>2</sub>O<sub>x</sub>
                    <br />
                    NoM = Símbolo del no metal <br />
                    2 = Número de oxidación el oxígeno <br />
                    O = Oxígeno <br />
                    x = Número de oxidación del no metal
                </p>
                <h3>Resumen óxidos</h3>
                <p>Por ejemplo, si tenemos el óxido de fósforo  (V), lo escribimos de atrás hacia adelante. Es decir, <u>óxido</u> O, <u>fósforo</u> P <u>(V)</u> O<sub>5</sub>. El resultado sería:
                    <br />
                    P<sub>2</sub>O<sub>5</sub>. <br /> <br />
                </p>
            </div>
        </div>
    )
}
