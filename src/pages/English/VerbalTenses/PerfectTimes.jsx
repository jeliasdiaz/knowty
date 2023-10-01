import { SectionTitle, TopWave } from "../../../components"

export const PerfectTimes = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Presente perfecto" />

            <h1 className="englishSubtitle">Usos</h1>
            <div className="englishCardContainer" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <div className="englishCard ownShadow">
                    <h5>Hablar de acciones o situaciones que han ocurrido en un período de tiempo que incluye el pasado y que tienen relevancia en el presente</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I have finished my homeworkk</small>
                        <br />
                        <small className="ms-3">(He terminado mi tarea)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Estructuras</h1>
            <div className="englishCardContainer">
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones afirmativas</h4>
                    <h5>S + Have + P.P. + C</h5>
                    <small>Debes tener en cuenta que para la tercera personal del singular se usa has en vez de have.</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">They have tried to convince her</small>
                        <br />
                        <small className="ms-3">(Ellos han intentado convencerla) </small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones negativas</h4>
                    <h5>S + Have + not + P.P. + C</h5>
                    <small>Have/has y el not pueden contraerse de la forma Haven't/Hasn't</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I do not/don't play soccer</small>
                        <br />
                        <small className="ms-3">Yo no juego fútbol</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones interrogativas</h4>
                    <h5>Have + S + P.P. + C + ?</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Have we ever gone to the pool together?</small>
                        <br />
                        <small className="ms-3">(Hemos alguna vez ido a la piscina juntos?)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Pasado y futuro perfecto</h1>
            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Son las versiones en pasado y futuro del presente perfecto. Para identificar cuál es el tiempo perfecto que se está utilizando se debe de ver en qué tiempo se encuentra el verbo to have, ya sea en presente (have, has), pasado (had) o futuro (Will have). <br />
                        Siguen las mismas estructuras en afirmativo, negativo e interrogativo.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">They had tried to pass the math exam </small>
                        <br />
                        <small className="ms-3">(Ellos habían intentado pasar el examen de matemáticas)</small>
                        <br />
                        <br />
                        <small className="ms-3">In about four hours he will have finished the homework</small>
                        <br />
                        <small className="ms-3">(En alrededor de cuatro horas el habrá termino el compromiso)</small>
                    </p>
                </div>
            </div>
        </div>
    )
}
