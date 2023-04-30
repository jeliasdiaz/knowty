import { SectionTitle, TopWave } from "../../components"

export const SimpleFuture = () => {

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Simple Future" />

            <h1 className="englishSubtitle">Usos con "will"</h1>
            <div className="englishCardContainer" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <div className="englishCard ownShadow">
                    <h5>Referirnos a cosas que creemos pero de las que no estamos seguros al 100%. Es decir, predicciones.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">It will snow this weekend</small>
                        <br />
                        <small className="ms-3">(Nevará este fin de semana)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Decisiones o ideas espontáneas.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I will pick you up tomorrow.</small>
                        <br />
                        <small className="ms-3">(Te recogeré mañana)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Proponer, ofrecerse o invitar a realizar algo.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Will you marry me?</small>
                        <br />
                        <small className="ms-3">(¿Te casarás conmigo?)</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h5>Firme decisión de hacer algo.</h5>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">I will do these homeworks tonight.</small>
                        <br />
                        <small className="ms-3">(Haré las tareas esta noche)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Estructuras con "will"</h1>
            <div className="englishCardContainer">
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones afirmativas</h4>
                    <h5>S + Will + V + C</h5>
                    <small>"Will" es un verbo modal para el futuro. Después de un verbo modal siempre va un verbo en su forma base.</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">She will come to the country next year.</small>
                        <br />
                        <small className="ms-3">Ella vendrá al país el próximo año.</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones negativas</h4>
                    <h5>S + Will + not + V + C</h5>
                    <small>El verbo debe estar su forma base.</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">They won't cook this week.</small>
                        <br />
                        <small className="ms-3">Ellos no cocinarán esta semana.</small>
                    </p>
                </div>
                <div className="englishCardStructure ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Oraciones interrogativas</h4>
                    <small>Acciones</small>
                    <h5>Will + S + V + C + ?</h5>
                    <br />
                    <small>Estados</small>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">Will he play in the next match?</small>
                        <br />
                        <small className="ms-3">¿Jugará en el próximo partido?</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Nota</h1>
            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <p>Para leer el futuro simple con "will" en ingles, lo leemos como el futuro en indicativo.</p>
                    <p className="mt-3">
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3">You'll work (tú trabajarás)</small>
                        <br />
                        <small className="ms-3">He'll work (él trabajará)</small>
                        <br />
                        <small className="ms-3">We'll work (nosotros trabajaremos)</small>
                        <br />
                        <small className="ms-3">You'll work (vosotros trabajareis)</small>
                    </p>
                </div>
            </div>

            <h1 className="englishSubtitle mt-3">Usos con "going to"</h1>

        </div>
    )
}
