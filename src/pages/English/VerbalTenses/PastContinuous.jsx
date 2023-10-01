import Latex from "react-latex"
import { SectionTitle, TopWave } from "../../../components"

export const PastContinuous = () => {
    const ARROW = `$$\\rightarrow$$`

  return (
    <div className="homeCard">
            <TopWave />
            <SectionTitle title="Past continuous" />

            <h1 className="englishSubtitle">Usos</h1>
            <div className="englishCardContainer" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <div className="englishCard ownShadow">
                    <h5>Para describir una acción que estaba ocurriendo pero se detuvo. Además, "be" se utiliza como "was" o "were".</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">He was running in the street when he received a call from his mom.</small>
                        <br />
                        <small className="ms-3">(El estaba corriendo por la calle cuando recibió una llamada de su madre.)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Estructura</h1>
            <div className="englishCardContainer">
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones afirmativas</h4>
                    <h5>S + To be + V-ing + C</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I was running in the field</small>
                        <br />
                        <small className="ms-3">Estaba corriendo en el campo</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones negativas</h4>
                    <h5>S + To be + not + V-ing + C</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I was not running in the field.</small>
                        <br />
                        <small className="ms-3">No estaba corriendo en el campo</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones interrogativas</h4>
                    <h5>To be + S + V-ing + C</h5>
                    <br />
                    <small>Estados</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Was I running in the field?</small>
                        <br />
                        <small className="ms-3">¿Estaba corriendo en el campo?</small>
                    </p>
                </div>
            </div>



            <h1 className="englishSubtitle mt-3">Reglas</h1>
            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Aquellos verbos que finalizan con una "e" que no se pronuncia, esta será reemplazada con "ing".</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Tak<u>e</u> <Latex>{ARROW}</Latex> Tak<u>ing</u></small>
                        <br />
                        <small className="ms-3">Dat<u>e</u> <Latex>{ARROW}</Latex> Dat<u>ing</u></small>
                    </p>
                </div>

                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Si el verbo es corto o la última sílaba está acentuada y termina en consonante, se duplica la última consonante y se agrega "ing".</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Run <Latex>{ARROW}</Latex> Running</small>
                        <br />
                        <small className="ms-3">Set <Latex>{ARROW}</Latex> Setting</small>
                    </p>
                </div>

                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Si el verbo termina en "ie", se cambia esta terminación por -y y se añade "ing".</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Lie <Latex>{ARROW}</Latex> Lying</small>
                        <br />
                        <small className="ms-3">Die <Latex>{ARROW}</Latex> Dying</small>
                    </p>
                </div>
            </div>

        </div>
  )
}
