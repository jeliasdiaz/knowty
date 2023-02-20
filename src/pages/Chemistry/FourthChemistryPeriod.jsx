import Latex from "react-latex"
import { ChemistryNav } from "./ChemistryNav"
import { SectionTitle, CollapseTitle, MoreBtn,TopWave } from "../../components/";

export const FourthChemistryPeriod = () => {

    const purezaReactivo = `$$SP = \\large \\frac{SI \\ \\cdot \\ \\%P}{100}$$`
    const sustanciaPura = `$$\\small Sustancia pura = \\large \\frac{Sustancia \\ impura \\ \\cdot \\ Porcentaje \\ de \\ pureza}{100}$$`

    const rendimiento = `$$\\% E_f  = \\frac{P_r}{P_t} \\ \\cdot \\ 100$$`

    const ecuacionOne = `$$2C_2H_2 + 5O_2 \\Rightarrow  4\\text{CO}_2 + 2H_2O$$`
    const ecuacionTwo = `$$\\large \\frac{64gr \\ \\text{CO}_2}{176gr \\ \\text{CO}_2}  \\ \\cdot \\ \\small 100 \\% = \\small 35.36 \\%$$`
    return (
        <div className="homeCard" id="geometria">
            <TopWave />
            <SectionTitle title="Química" />

            <ChemistryNav />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <CollapseTitle name="Reactivo límite y en exceso" id="#reactivoLimiteExceso" />
                        <div className="collapse" id="reactivoLimiteExceso" >
                            <p>
                                Un reactivo límite es una sustancia que limita la cantidad de producto que se puede formar en una reacción. Mientras que el reactivo en exceso es aquel que restante después de que se ha alcanzado el límite. <br /> <br />

                                Un ejemplo sencillo es el de hacer perros calientes. Si tenemos 10 salchichas y 14 panes, la cantidad máxima de perros calientes que podemos hacer es 10 (igual al número de salchichas). De manera que los panes sobrantes son el reactivo en exceso y las salchichas son el reactivo límite.


                            </p>

                            <MoreBtn url="https://youtu.be/B-d5vKJBx-E" />

                            <h3>Practica</h3>
                            <p>Con base a la siguiente ecuación, halla el reactivo límite y en exceso. Teniendo 10.5 gr de P y 22.27 gr O2</p>
                            <img src="/img/reactivoLimiteEjercicio.svg" alt="Reactivo limite ejercicio" className="eightyPercentImg rounded-3" />
                            <br /><br />
                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" aria-expanded="false" href="#reactivo" >
                                    Solución
                                </button>
                            </p>
                            <div className="collapse" id="reactivo">
                                <img src="/img/reactivoLimiteEjercicioSolucion.svg" alt="Reactivo limite solución" className="eightyPercentImg rounded-3" />
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Pureza de un reactivo" id="#purezaReactivo" />
                        <div className="collapse" id="purezaReactivo">
                            <p>
                                Muchos de los reactivos presentes en reacciones químicas, contienen impurezas. Estas últimas son sustancias que no reaccionarán en una reacción. Por ende, las sustancias puras son aquellas que si se presentan o reaccionan en una reacción concreta. La pureza de un reactivo se puede calcular mediante la siguiente ecuación:
                                <br /><br />
                            </p>
                            <p><Latex>{purezaReactivo}</Latex></p>
                            <p><Latex>{sustanciaPura}</Latex></p>
                            <p>
                                Por otra parte, la pureza también se refiere a la cantidad de una sustancia específica que existe en una muestra dada. Es de añadir que la pureza se expresa como porcentaje. Esto es, si una muestra de cafeína tiene una pureza del 80%, significa que hay 80 gramos de cafeína y 20 gramos de impurezas en 100 gramos de la muestra.
                            </p>
                            <MoreBtn url="https://youtu.be/B-d5vKJBx-E" />

                            <h3>Practica</h3>
                            <p>Halla la pureza del fósforo y oxígeno diatómico</p>
                            <img src="/img/reactivoLimiteEjercicio.svg" alt="" className="eightyPercentImg rounded-3" />
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
                                <img src="/img/purezaEjercicioSolucion.svg" alt="" className="eightyPercentImg rounded-3" />
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Rendimiento" id="#rendimiento" />
                        <div className="collapse" id="rendimiento">
                            <p>
                                Las reacciones que se llevan a cabo, no siempre tienen un 100% de eficiencia. Esto se debe a la producción de reacciones secundarias, de modo que el reactivo límite no se transforma completamente en productos.
                                <br /><br />
                                Por ende, el rendimiento de una reacción es la cantidad de producto obtenible al darse una reacción completamente. Existen dos tipos.
                                <br /><br />
                                <b>Rendimiento real:</b> Es la cantidad que se obtiene realmente mediante la experimentación. Generalmente es menor que el rendimiento teórico.<br /><br />
                                <b>Rendimiento teórico:</b> Es la cantidad máxima de producto que se podría obtener con la cantidad de reactivo límite dado. Es decir, es lo máximo que podemos obtener.
                                <br />
                            </p>
                            <p>Su ecuación es la siguiente:</p>
                            <p><Latex>{rendimiento}</Latex></p>
                            <p>
                                % Ef = Porcentaje de rendimiento <br />
                                PR = Producto real <br />
                                Pf = Producto teórico
                            </p>
                            <p>
                                Ejemplo: <br />
                                Teniendo en cuenta la siguiente ecuación: <br />
                            </p>
                            <p><Latex>{ecuacionOne}</Latex></p>
                            <p>
                                Si se producen 64gr de CO2, ¿cuál es el porcentaje de rendimiento de la reacción? <br />
                            </p>
                            <p><Latex>{ecuacionTwo}</Latex></p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <CollapseTitle name="Leyes de los gases" id="#leyesGases" />
                        <div className="collapse" id="leyesGases">
                            <p>
                                El estado gaseoso se caracteriza por la poca fuerza de atracción entre las moléculas; provocando que los cuerpos de dicho estado no posean forma ni volumen definido. Por esta razón, los gases se expanden hasta ocupar el volumen del recipiente que los contiene. <br /> <br />

                                Teniendo esto claro, se deriva el concepto de gas ideal, este consiste en un gas teórico caracterizado por el movimiento aleatorio de las partículas dentro de ellos. Dicho tipo de gas, se comporta de forma ideal cuando está a temperaturas altas y bajas presiones. De esta manera, las leyes de los gases expuestas a continuación, solo aplican en este tipo de gases.</p>

                            <h4>Ley de Boyle</h4>
                            <p>Postula que en un gas a mayor presión, menor es el volumen. Dicho de otro modo, la relación es inversamente proporcional a temperatura constante. Dicha ley se evidencia, por ejemplo, en una jeringa que esté sellada. A medida que presionemos el émbolo, el volumen disminuye y la presión aumenta. Su gráfica y ecuación son las siguientes:</p>
                            <img src="/img/leyBoyle.svg" alt="" className="w-50 rounded-3" />
                            <img src="/img/leyBoyleFormula.svg" alt="" className="w-25 rounded-3" />

                            <h4>Ley de Charles</h4>
                            <p>Postula que en los gases, el volumen es directamente proporcional a la temperatura a presión constante. Por ejemplo, al llenar un globo con aire caliente, su volumen se expandirá. Su gráfica y ecuación son las siguientes:</p>
                            <img src="/img/leyCharles.svg" alt="" className="w-50 rounded-3" />
                            <img src="/img/leyCharlesFormula.svg" alt="" className="w-25 rounded-3" />

                            <h4>Ley de Gay-Lussac</h4>
                            <p>Postula que en los gases, la presión es directamente proporcional a la temperatura a volumen constante. Por ejemplo, tenemos la olla a presión, al calentarla y estar sellada, provoca que la presión dentro de esta aumente. Su gráfica y ecuación son las siguientes:</p>
                            <img src="/img/leyGayLussac.svg" alt="" className="w-50 rounded-3" />
                            <img src="/img/leyGayLussacFormula.svg" alt="" className="w-25 rounded-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
