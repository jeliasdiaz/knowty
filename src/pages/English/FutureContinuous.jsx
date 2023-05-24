import { SectionTitle, TopWave } from "../../components"

export const FutureContinuous = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Future Continuous" />

            <h1 className="englishSubtitle">Usos</h1>
            <div className="englishCardContainer" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <div className="englishCard ownShadow">
                    <h5>Exponer un evento futuro que ocurrirá en un momento determinado.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">In an hour I will be playing videogames with my friends.</small>
                        <br />
                        <small className="ms-3">(En una hora estaré jugando videjuegos con mis amigos)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Expresar acciones que iniciaron y seguirán desarrollandose a futuro.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">He will be training for two more hours</small>
                        <br />
                        <small className="ms-3">(El estará entrenando por dos horas más)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Preguntar sobre un evento que podría ocurrir a futuro.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Will she be doing the homework with you after the meeting?</small>
                        <br />
                        <small className="ms-3">(¿Ella estará haciendo las tareas contigo después de la reunión?)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Estructura</h1>
            <div className="englishCardContainer">
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones afirmativas</h4>
                    <h5>S + Will +To be + V-ing + C</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She will be running in the field.</small>
                        <br />
                        <small className="ms-3">Ella estará corriendo en el campo</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones negativas</h4>
                    <h5>S + Will + not + To be + V-ing + C</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She won't be running in the field</small>
                        <br />
                        <small className="ms-3">Ella no estará corriendo en el campo</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones interrogativas</h4>
                    <h5>Will + S + To be + V-ing + C</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Will she be running in the field?</small>
                        <br />
                        <small className="ms-3">¿Estará ella corriendo en el campo?</small>
                    </p>
                </div>
            </div>

        </div>
    )
}
