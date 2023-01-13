import { ChemistryNav } from "./ChemistryNav"
import { SectionTitle } from "../../components/SectionTitle";
import CollapseTitle from "../../components/CollapseTitle";
import TopWave from "../../components/TopWave";

const SecondChemistryPeriod = () => {
    return (
        <div className="homeCard" id="geometria">
            <TopWave />
            <SectionTitle title="Química" />

            <ChemistryNav />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div >
                        <CollapseTitle name="Generalidades" id="#generalidades" />
                        <div className="collapse" id="generalidades">
                            <h5>Posición en la tabla periódica con base a la configuración electrónica</h5>
                            <img src="/img/configElectronica.svg" alt="Configuración electrónica" className="w-50 rounded-3" /><br />
                            <p> Terminación: <br /> <i>d</i> o <i>f</i>, pertenece al grupo <i>b</i> <br /> <i>s</i> o <i>p</i>, pertenece al grupo <i>a</i> <br /> (Si varía el número de neutrones, es un isótopo)</p>
                            <h4>Radio atómico</h4>
                            <ul>
                                <li>Distancia entre el núcleo del átomo y su orbital más extremo, lo que permite calcular el tamaño del átomo.</li>
                                <li>Aumenta de derecha a izquierda y arriba hacia abajo en la tabla periódica.</li>
                            </ul>

                            <h4>Afinidad electrónica</h4>
                            <ul>
                                <li>Aumenta de derecha a izquierda y arriba hacia abajo.</li>
                                <li>Aumenta de izquierda a derecha y de abajo hacia arriba en la tabla periódica.</li>
                            </ul>

                            <h4>Energía de ionización</h4>
                            <ul>
                                <li>Energía necesaria para separar un electrón del átomo.</li>
                                <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica.</li>
                            </ul>

                            <h4>Electronegatividad</h4>
                            <ul>
                                <li>Capacidad de un átomo para atraer electrones.</li>
                                <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica.</li>
                            </ul>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Familia de elementos" id="#familiaElementos" />
                        <div className="collapse" id="familiaElementos">
                            <h4>Alcalinos</h4>
                            <ul>
                                <li>Son blandos.</li>
                                <li>Brillantes.</li>
                                <li>Puntos de fusión bajos.</li>
                                <li>Se combinan fácilmente con oxígeno.</li>
                                <li>Propensos a perder más de un electrón de valencia.</li>
                            </ul>

                            <h4>Alcalino férreos</h4>
                            <ul>
                                <li>Poseen dos electrones en su nivel más externo.</li>
                                <li>Densidad, punto de fusión y ebullición mayores a los metales alcalinos.</li>
                                <li>Muy reactivos.</li>
                                <li>Se oxidan rápidamente con el aire para formar óxidos e hidróxidos.</li>
                            </ul>

                            <h4>Térreos</h4>
                            <ul>
                                <li>Se oxidan rápidamente con el aire para formar óxidos e hidróxidos.</li>
                            </ul>

                            <h4>Familia del carbono</h4>
                            <ul>
                                <li>Propiedades diferentes según su ubicación en el grupo.</li>
                                <li>Elementos estables y poco reactivos.</li>
                                <li>Elementos tienden a formar compuestos covalentes.</li>
                            </ul>

                            <h4>Familia del nitrógeno</h4>
                            <ul>
                                <li>5 electrones de valencia, tendencia a formar enlaces covalentes.</li>
                                <li>Valencia o estado de oxidación de -3.</li>
                            </ul>

                            <h4>Anfígenos</h4>
                            <ul>
                                <li>No reaccionan al agua.</li>
                                <li>Con el oxígeno componen dióxido que con agua originan oxácidos.</li>
                                <li>Reaccionan con el ácido nítrico concentrado, excepto el oxígeno.</li>
                            </ul>

                            <h4>Halógenos</h4>
                            <ul>
                                <li>7 electrones de valencia en su capa externa.</li>
                                <li>Elevada electronegatividad y alta reactividad.</li>
                                <li>Todos los elementos poseen al menos valencia de -1.</li>
                                <li>Energías de ionización altas.</li>
                            </ul>

                            <h4>Gases nobles</h4>
                            <ul>
                                <li>Poca o nula electronegatividad química.</li>
                                <li>Desprovistos de color, olor y sabor.</li>
                                <li>Puntos de ebullición muy próximos y muy bajos.</li>
                            </ul>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Enlaces químicos" id="#enlacesQuimicos" />
                        <div className="collapse" id="enlacesQuimicos">
                            <img src="/img/enlacesQuimicos.svg" alt="Enlaces químicos" className="estequiometriaImg rounded-3" />
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Compuestos iónicos" id="#compuestosIonicos" />
                        <div className="collapse" id="compuestosIonicos">
                            <ul>
                                <li>Forman sales sólidas.</li>
                                <li>Forman redes cristalinas. Por tanto, son sólidos a temperatura ambiente.</li>
                                <li>La forma del cristal es cúbica, rómbica o hexagonal.</li>
                                <li>Pueden ser duros o frágiles.</li>
                                <li>Puntos de fusión y ebullición altos.</li>
                                <li>Solubles en disolventes polares como el agua.</li>
                                <li>En estado sólido no conducen la corriente eléctrica, pero, fundidos o disueltos en agua conducen la corriente eléctrica. Debido a que los iones se separan y pueden moverse de forma independiente.</li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <CollapseTitle name="Compuestos covalentes" id="#compuestosCovalentes" />
                            <div className="collapse" id="compuestosCovalentes">
                                <ul>
                                    <li>Sólidos, líquidos y gaseosos.</li>
                                    <li>Son en su mayoría compuestos orgánicos.</li>
                                    <li>Puntos de fusión y ebullición relativamente bajos.</li>
                                    <li>Son soluciones acuosas y en su mayoría no conducen la corriente eléctrica.</li>
                                    <li>Sus reacciones son muy lentos, generalmente necesitan catalizadores (sustancia que acelera una reacción química).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SecondChemistryPeriod