import Latex from "react-latex"
import { SectionTitle, TopWave } from '../../components'

export const PastSimple = () => {
    const ARROW = `$$\\rightarrow$$`

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Past Simple" />

            <h1 className="englishSubtitle">Usos</h1>
            <div className="englishCardContainer" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <div className="englishCard ownShadow">
                    <h5>Describir acciones que ocurrieron y ya han sido completadas.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She walked to the park yesterday</small>
                        <br />
                        <small className="ms-3">(Ella caminó al parque ayer)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Describir acciones que se repetían en el pasado.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She always played basketball on weekends</small>
                        <br />
                        <small className="ms-3">(Ella siempre jugaba baloncesto los fines  de semana)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Hablar sobre experiencias pasadas en la vida de una persona.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I visited Paris when I was a child</small>
                        <br />
                        <small className="ms-3">(Visité París cuando era niño)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Narrar una serie de eventos que tuvieron lugar en el pasado.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">He arrived at the airport, checked in, and boarded the plane</small>
                        <br />
                        <small className="ms-3">(Él llegó al aeropuerto, hizo el check-in y abordó el avión)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Estructuras</h1>
            <div className="englishCardContainer">
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones afirmativas</h4>
                    <h5>S + V + C</h5>
                    <small>Al verbo se le agrega ed, ied o d. Si son regulares, de no ser así, debes memorizar su forma irregular.</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I went to the clothing store</small>
                        <br />
                        <small className="ms-3">Fuí a la tienda de ropa</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones negativas</h4>
                    <h5>S + did + not + V + C</h5>
                    <small>El verbo debe estar su forma base.</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I did not go to school</small>
                        <br />
                        <small className="ms-3">No fui a la escuela</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones interrogativas</h4>
                    <small>Acciones</small>
                    <h5>Did + S + V + C + ?</h5>
                    <br />
                    <small>Estados</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Did Mary do the dishes?</small>
                        <br />
                        <small className="ms-3">¿Mary lavó los platos?</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Reglas</h1>
            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Se agrega -ed- a los verbos en forma base para formar el pasado simple.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I start<span className="fw-semibold">ed</span> to do exercise when I was 10 years old.</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Se agrega -d- a los verbos en forma base para formar el pasado simple cuando terminan en -e-.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She close<span className="fw-semibold">d</span> the store yesterday</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Se cambia la -Y- por -i- en el pasado simple cuando la -Yes antecedida por una consonante.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Study <Latex>{ARROW}</Latex> Stud<span className="fw-semibold">ied</span></small>
                    </p>
                    <p>
                        Cuando la -Y- es antecedida por una vocal, simplemente se agrega -ed-.
                    </p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Play <Latex>{ARROW}</Latex> Play<span className="fw-semibold">ed</span></small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Nota</h1>
            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Para describir estados utilizamos la misma estructura del presente simple, usamos el verbo to be como was o were.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She was a teacher</small> 
                        <br />
                        <small className="ms-3">She wasn't a teacher</small>
                        <br />
                        <small className="ms-3">Was she a teacher?</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Es importante no confundir el participio pasado con el pasado simple, dado que el pasado simple es un tiempo, mientras que el participio pasado es una forma verbal. A pesar de que los verbos REGULARES llevan -ed- al final en los dos, son diferentes.</p>
                </div>
            </div>

        </div>
    )
}
