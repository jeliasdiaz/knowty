import { Link } from "react-router-dom"
const Sociales = () => {
    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Movimientos armados</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination  pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/sociales_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_2" className="text-decoration-none page-link">D. ecómicas</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales" className="text-decoration-none page-link">M. armados</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_4" className="text-decoration-none page-link">M. sociales</Link></li>
                </ul>
            </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h2>FARC (Fuerzas armadas revolucionarias de Colombia)</h2>
                    <p>
                        <b>Filosofía:</b> Marxista - Leninista <br /> <br />

                        <b>Origen:</b> Surgen durante el periodo de "la violencia", luego del asesinato de Gaitán <br /><br />

                        <b>Motivaciones:</b> Representar a la población campesina ante el manejo de las tierras en manos de pocos. Es menester aclarar que, las FARC se originan como grupos de campesinos en contra del estado. <br /> <br />

                        <b>Contexto internacional:</b> Guerra fría, a partir de esta, cuba adopta ciertos ideales. Surge la revolución cubana, de la cual Gaitán adopta ideales marxistas a favor de los campesinos; luego de ser asesinado, las FARC adoptan esta ideología. <br /> <br />
                    </p>
                    <b>A tener en cuenta:</b>
                    <ul>
                        <li>Obtenían el poder mediante la lucha guerrillera </li>
                        <li>Posteriormente, tergiversan sus ideales debido a que en un principio se involucran en "negocios" como el narcotráfico para cumplir sus cometidos. Sin embargo, se envuelven en secuestros, lavados de dinero, etc.</li>
                    </ul>
                    <b>Extras</b>
                    <ul>
                        <li>Alias Timochenko es quien participa en los acuerdos de paz en 2016</li>
                        <li>El fundador de las FARC es alias Tirofijo. Actualmente alias Timochenko está en la comandancia.</li>
                    </ul>
                    <b>Líderes:</b>
                        <ul>
                            <li>Manuel Marulanda (Tiro fijo)</li>
                            <li>Alfonso Cano</li>
                            <li>Timochenko</li>
                        </ul>
                    <hr />
                </div>

                <div>
                    <h2>ELN (Ejercito de liberación nacional)</h2>
                    <p>
                        <b>Fundador:</b> Fabio Vásquez Castaño <br />
                        <b>Máximo pensador:</b> Camilo Torres <br />
                        <b>Base teórica:</b> Revolución cubana <br />
                    </p>
                    <b>Líderes:</b>
                    <ul>
                        <li>Fabio Vásquez</li>
                        <li>El cura Pérez (Manuel Pérez)</li>
                        <li>Gabino (Nicolás Rodrigues)</li>
                        <li>Antonio García</li>
                    </ul>
                    <b>A tener en cuenta:</b> <br />
                    <ul>
                        <li>Proviene de estudiantes universitarios, reconocidos por su buena preparación académica. Esta es su diferencia con las FARC, debido a que esta última, surge de grupos de campesinos.</li>
                        <li>Lograron poner en jaque a muchas multinacionales</li>
                    </ul>
                    <b>Extras</b>
                    <ul>
                        <li>Coce = Comando central, se encarga de las decisiones políticas, económicas y demás.</li>
                        <li>Teología de la liberación = Como los católicos Jesuitas buscaron cambiar las condiciones de vida de las personas.</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>EPL (Ejercito popular de liberación)</h2>
                    <p>
                        <b>Fundación:</b> 1967 <br />
                        <b>Contexto internacional:</b> Guerra fría <br />
                        <b>Filosofía:</b> Marxista - Leninista <br />
                    </p>
                    <b>Objetivos:</b>
                    <ul>
                        <li>Establecer un estado socialista</li>
                        <li>Derrocar el estado</li>
                        <li>Defender el territorio</li>
                    </ul>
                    <b>Líderes:</b>
                    <ul>
                        <li>Pedro Vásquez Rondón</li>
                        <li>Libardo Mora Toro</li>
                        <li>Oscar William Calvo</li>
                        <li>Ernesto Rojas Ocampo</li>
                        <li>Bernardo Gutierrez</li>
                    </ul>
                    <b>A tener en cuenta:</b>
                    <ul>
                        <li>Obtenían el poder mediante las armas</li>
                        <li>Fuerte apoyo del sindicalismo, este último busca defender los derechos de los trabajadores de industrias</li>
                        <li>En 1991 se firman acuerdos de paz con el presidente César Gaviria. No obstante, parte de la guerrilla no se acoge a estos acuerdos de paz</li>
                    </ul>
                    <b>Extras:</b>
                    <ul>
                        <li>Lideres sobresalientes a nivel nacional</li>
                        <li>Sus integrantes son de origen caribeño</li>
                        <li>Operaron en lugares como La Guajira, Córdoba, Sucre y Magdalena</li>
                        <li>Tercera guerrilla más numerosa</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>M-19 (Movimiento 19 de abril)</h2>
                    <p>
                        <b>Fundación:</b> 1974 <br />
                        <b>Objetivo:</b> instaurar una democracia socialista<br />
                    </p>
                    <b>Líderes:</b>
                    <ul>
                        <li>Jaime Bateman (máximo comandante)</li>
                        <li>Iván Marino Ospina (lideró los acuerdos de Corinto)</li>
                        <li>Álvaro Fayad (nombra al M-19, dirige la toma del palacio de justicia)</li>
                        <li>Antonio García</li>
                        <li>Carlos Pizarro (lideró los diálogos de paz)</li>
                    </ul>
                    <b>A tener en cuenta:</b>
                    <ul>
                        <li>Conformado por personas que pertenecían a las FARC</li>
                        <li>Tuvieron apoyo de estudiantes y sindicalistas</li>
                        <li>Copiaron la idea al EPL de la constituyente</li>
                        <li>Se enfocaron en las zonas urbanas debido a que se percatan que en las zonas rurales el estado no presta atención</li>
                    </ul>

                    <b>Actos emblemáticos</b>
                    <ul>
                        <li>Toma del palacio de justicia</li>
                        <li>Robo de la espada de bolivar</li>
                        <li>Robo de armas del cantón norte</li>
                        <li>Toma de la embajada de república dominicana. De hecho, Estados Unidos les da dinero por liberar a los embajadores.</li>
                    </ul>

                </div>

            </div>
        </div >
    )
}

export default Sociales