import { Link } from "react-router-dom"

export const Dinamica = () => {
    return (
        <div className="dinamica-home">
            <img src="/img/waveThree.svg" alt="" />
            <h1 className="textIntroducion shadow-lg">Dinámica</h1>
            <nav className="nav-3 d-none d-sm-block" data-aos="zoom-in" data-aos-duration="800">
                <ul className="pagination pagination-md justify-content-center mt-5">

                    <li className="page-item shadow-lg "><Link to="/cinematica" className="text-decoration-none page-link">Cinemática</Link></li>

                    <li className="page-item shadow-lg "><Link to="/dinamica" className="text-decoration-none page-link">Dinámica</Link></li>

                    <li className="page-item shadow-lg "><Link to="/movimientocircular" className="text-decoration-none page-link">M. circular</Link></li>

                    <li className="page-item shadow-lg "><Link to="/energia" className="text-decoration-none page-link">Energía</Link></li>

                    <li className="page-item shadow-lg "><Link to="/mecanica-fluidos" className="text-decoration-none page-link">Fluidos</Link></li>

                    <li className="page-item shadow-lg"><Link to="/fisica-practica" className="text-decoration-none page-link">Practica</Link></li>
                </ul>
            </nav>
            <div className="fisica shadow" data-aos="fade-up" data-aos-duration="700">
                <div className="flex">
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

                        <div className="flex-1">
                            <button className="btn btn-secondary"><a href="https://youtu.be/F5s7LVa78xY" className="text-decoration-none text-white">Profundizar</a></button>

                        </div>
                    </div>

                    <div className="section">
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
        </div>
    )
}
