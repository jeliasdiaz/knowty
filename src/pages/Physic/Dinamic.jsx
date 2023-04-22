import { SectionTitle, MoreBtn, TopWave } from "../../components/";

export const Dinamic = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Dinámica" />


            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h2>Análisis de fuerza</h2>
                    <ul>
                        <li>Análisis del sistema</li>
                        <li>Diagrama de cuerpo libre de las fuerzas</li>
                        <li>Establecer el sistema de referencia</li>
                    </ul>

                    <p>
                        <b>Condiciones de movimiento</b><br />
                        F = 0 (Equilibrio) <br />
                        F = m * a (Acelerado)
                    </p>

                    <div>
                        <MoreBtn url="https://youtu.be/F5s7LVa78xY" />

                    </div>
                </div>
                <hr />
                <div className="mt-3">
                    <h2>Torque</h2>
                    <ul>
                        <li>Análisis del sistema</li>
                        <li>Diagrama de cuerpo libre
                            <ol>
                                <li>Fuerzas</li>
                                <li>Brazos de palanca</li>
                            </ol>
                        </li>
                        <li>Establecer el sistema de referencia
                            <ul>
                                <li>Positivo → Giro antihorario</li>
                                <li>Negativo → Giro horario</li>
                            </ul>
                        </li>
                    </ul>
                    <p>

                        <b>Condiciones de movimiento</b><br />
                        T = 0 (Equilibrio) <br />
                        T = I * a (Acelerado)
                    </p>

                </div>


            </div>
        </div>
    )
}
