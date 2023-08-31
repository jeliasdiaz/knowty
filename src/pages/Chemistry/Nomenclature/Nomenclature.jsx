import { nomenclatureItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Nomenclature = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Nomenclaturas" />
            <ContentsTable items={nomenclatureItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Stock</h3>
                <p>Se usa el tipo de compuesto y luego el nombre del elemento, acompañado con su valencia expresada en números romanos.</p>
                <h5>Ejemplos</h5>
                <p>
                    Óxido de cloro (III) = Cl<sub>2</sub>O<sub>3</sub>
                    <br />
                    Hidróxido de cromo (III) = Cr(OH)<sub>3</sub>
                    <br />
                    Peróxido de hidrogeno (I) = H<sub>2</sub> O<sub>2</sub>
                </p>
                <h3>Sistemática</h3>
                <p>Se usa un prefijo griego: mono, di, tri, tetra, penta, hexa o hepta.</p>
                <h5>Ejemplos</h5>
                <p>
                    <u>Di</u>óxido de carbono = CO<sub>2</sub>
                    <br />
                    <u>Tri</u>hidróxido de aluminio = Al(OH)<sub>3</sub>
                    <br />
                    Peróxido de <u>di</u>sodio = Na<sub>2</sub>O<sub>2</sub>
                </p>
                <h3>Tradicional</h3>
                <p>Utiliza las terminaciones -ico (Mayor) -oso (Menor), -per-ico (+ Mayor), hipo-oso (- Menor) para indicar la valencia del elemento. Es de añadir, que los elementos que poseen un solo nivel de valencia, su terminación es -ico. El sufijo depende del número de oxidación que tenga el elemento y del número de oxidación que actúa en la fórmula.</p>
                <h5>Ejemplos</h5>
                <p>
                    Óxido hipobromoso = Br<sub>2</sub>O
                    <br />
                    Óxido bromoso = Br<sub>2</sub>O<sub>3</sub>
                    <br />
                    Hidróxido férrico = Fe(OH)<sub>3</sub>
                    <br />
                    Óxido perclórico = Cl<sub>2</sub>O<sub>7</sub>
                </p>
            </div>
        </div>
    )
}
