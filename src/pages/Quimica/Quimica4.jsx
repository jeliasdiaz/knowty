import { Link } from "react-router-dom"

const Quimica = () => {
    return (
        <div className="homeQuimica" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Química</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/quimica_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica_2" className="text-decoration-none page-link">II periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica" className="text-decoration-none page-link">III periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/quimica_4" className="text-decoration-none page-link">IV periodo</Link></li>
                </ul>
            </nav>
            <div className="cardQuimica mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <div>
                        <h2>Reactivo límite y en exceso</h2>
                        <p>El reactivo límite consiste en aquella sustancia que limita   la reacción, mientras que el reactivo en exceso es aquel restante al límite. Por ejemplo, queremos hacer perros calientes, tenemos 10 salchichas y 14 panes. Si queremos armar la máxima cantidad de perros (10) notaremos que nos sobran cuatro panes, por lo tanto el reactivo límite son las salchichas, puesto que limitan la cantidad de perros que podemos hacer, mientras que el reactivo en exceso corresponde a los panes, debido a que se presentan en mayor cantidad, es decir, sobran.</p>

                        <button className="btn btn-secondary"><a href="https://youtu.be/B-d5vKJBx-E?t=60" className="text-decoration-none text-white">Profundizar</a></button> <br /><br />

                        <h3>Practica</h3>
                        <p>Con base a la siguiente ecuación, halla el reactivo límite y en exceso. Teniendo 10.5 gr de P y 22.27 gr O2</p>
                        <img src="/img/reactivoLimiteEjercicio.svg" alt="" className="quimicaEcuacion2" />
                        <br /><br />
                        <p>
                            <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" aria-expanded="false" href="#reactivo" >
                                Solución
                            </button>
                        </p>
                        <div className="collapse" id="reactivo">
                            <img src="/img/reactivoLimiteEjercicioSolucion.svg" alt="" className="quimicaEcuacion" />
                        </div>
                        <hr />
                    </div>

                    <div>
                        <h2>Pureza de un reactivo</h2>
                        <p>
                            Muchos de los reactivos presentes en reacciones químicas, contienen impurezas. Estas últimas son sustancias que no reaccionarán en una reacción. Por ende las sustancias puras son aquellas que si se presentan o reaccionan en una reacción concreta. La pureza de un reactivo se puede calcular mediante la siguiente ecuación:
                            <br />
                            <img src="/img/purezaEcuacionSimplificada.svg" alt="" /><br />
                            <img src="/img/purezaEcuacion.svg" alt="" className="quimicaEcuacion" />

                            <br /><br />
                            Por otra parte, la pureza también es definida como cantidad de sustancia que se ha determinado que existe en una muestra dada de tal sustancia. Esto es, si tenemos cafeína al 80% quiere decir que hay 80 gramos de cafeína de 100 gramos, por lo tanto los otros 20 gramos corresponden a las impurezas.

                        </p>
                        <button className="btn btn-secondary"><a href="https://youtu.be/B-d5vKJBx-E?t=259" className="text-decoration-none text-white">Profundizar</a></button><br /><br />

                        <h3>Practica</h3>
                        <p>Halla la pureza del fósforo y oxígeno diatómico</p>
                        <img src="/img/reactivoLimiteEjercicio.svg" alt="" className="quimicaEcuacion2" />
                        <p>
                            12 gr de P <br />
                            87.5% <br />
                            <br />
                            27 gr de O2 <br />
                            82.5% <br />
                        </p>

                        <p>
                            <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" aria-expanded="false" href="#pureza">
                                Solución
                            </button>
                        </p>
                        <div className="collapse" id="pureza">
                            <img src="/img/purezaEjercicioSolucion.svg" alt="" className="quimicaEcuacion" />
                        </div>
                        <hr />
                    </div>

                    <div>
                        <h2>Rendimiento</h2>
                        <p>En primera instancia, las reacciones que se llevan a cabo, no siempre tienen un 100% de efiencia. Esto se debe a la producción de reacciones secundarias, de modo que el reactivo límite no se transforma completamente en productos.
                            <br /><br />
                            Por ende, el rendimiento de una reacción se comprende como la cantidad de producto obtenible al darse una reacción completamente.
                            <br /><br />
                            Existen dos tipos: <br />
                            <b>Rendimiento real:</b> Es la cantidad que se obtiene realmente mediante la experimentación. Es de añadir que generalmente es menor que el rendimiento teórico.<br /><br />
                            <b>Rendimiento teórico:</b> Es la cantidad máxima de producto que se podría obtener con la cantidad de reactivo límite dada. Dicho de otro modo, es lo máximo que podemos obtener.
                            <br />
                        </p>
                        <p>Su ecuación es la siguiente:</p>
                        <img src="/img/rendimiento.svg" alt="" />
                        <p>
                            % Ef = Porcentaje de rendimiento <br />
                            PR = Producto real <br />
                            Pf = Producto teórico
                        </p>
                        <p>
                            Ejemplo: <br />
                            Teniendo en cuenta la siguiente ecuación: <br />
                            <img src="/img/rendimientoEjemplo.svg" alt="" /><br />
                            Si se producen 64gr de CO2, ¿cuál es el porcentaje de rendimiento de la reacción? <br />
                            <img src="/img/rendimientoEjemploSolucion.svg" alt="" />
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2>Leyes de los gases</h2>
                        <p>El estado gaseoso, se caracteriza por   la poca fuerza de atracción entre las moléculas; provocando que los cuerpos de dicho estado no posean forma ni volumen definido. Por esta razón, los gases se expanden hasta ocupar el volumen del recipiente que los contiene. Teniendo esto claro, se deriva el concepto de gas ideal, este constiste en un gas teórico caracterizado por el movimiento aleatorio de las partículas dentro de ellos. Dicho tipo de gas, se comporta de forma ideal cuando está a temperatura alta y baja presión. De esta manera, las leyes de los gases expuestas a continuación, solo aplican en este tipo de gases.</p>

                        <h4>Ley de Boyle</h4>
                        <p>Postula que en un gas a mayor presión, menor es el volumen. Dicho de otro modo, la relación es inversamente proporcional a temperatura constante. Dicha ley se evidencia por ejemplo en una jeringa que esté sellada, a medida que presionamos el émbolo, el volumen disminuye y la presión aumenta. Su gráfica y ecuación son las siguientes:</p>
                        <img src="/img/leyBoyle.svg" alt="" className="w-50" />
                        <img src="/img/leyBoyleFormula.svg" alt="" className="w-25" />

                        <h4>Ley de Charles</h4>
                        <p>Postula que en los gases, el volumen es directamente proporcional a la temperatura a presión constante. Por ejemplo, al llenar un globo con aire caliente, su volumen se expandirá. Su gráfica y ecuación son las siguientes:</p>
                        <img src="/img/leyCharles.svg" alt="" className="w-50" />
                        <img src="/img/leyCharlesFormula.svg" alt="" className="w-25" />

                        <h4>Ley de Gay-Lussac</h4>
                        <p>Postula que en los gases, la presión es directamente proporcional a la temperatura a volumen constante. Por ejemplo, tenemos la olla a presión, al calentarla y estar sellada, provoca que la presión dentro de esta aumente. Su gráfica y ecuación son las siguientes:</p>
                        <img src="/img/leyGayLussac.svg" alt="" className="w-50" />
                        <img src="/img/leyGayLussacFormula.svg" alt="" className="w-25" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Quimica