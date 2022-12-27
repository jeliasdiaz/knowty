import { ChemistryNav } from "./ChemistryNav"
import { SectionTitle } from "../SectionTitle";

const SecondChemistryPeriod = () => {
    return (
        <div className="homeQuimica" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Química"/>
            
            <ChemistryNav/>

            <div className="cardQuimica mb-5 shadow" data-aos="fade-up" data-aos-duration="700">

                <div>
                    <div >
                        <h2>Generalidades</h2>
                        <h5>Posición en la tabla periódica con base a la configuración electrónica</h5>
                        <img src="/img/configElectronica.svg" alt="" className="w-25" /><br />
                        <p> Terminación: <br /> <i>d</i> o <i>f</i>, pertenece al grupo <i>b</i> <br /> <i>s</i> o <i>p</i>, pertenece al grupo <i>a</i> <br /> (Si varía el número de neutrones, es un isótopo)</p>
                        <h4>Radio atómico</h4>
                        <ul>
                            <li>Distancia entre el núcleo del átomo y su orbital más extremo, lo que permite calcular el tamaño del átomo</li>
                            <li>Aumenta de derecha a izquierda y arriba hacia abajo en la tabla periódica.</li>
                        </ul>

                        <h4>Afinidad electrónica</h4>
                        <ul>
                            <li>Aumenta de derecha a izquierda y arriba hacia abajo.</li>
                            <li>Aumenta de izquierda a derecha y de abajo hacia arriba en la tabla periódica</li>
                        </ul>

                        <h4>Energía de ionización</h4>
                        <ul>
                            <li>Energía necesaria para separar un electrón del átomo</li>
                            <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica</li>
                        </ul>

                        <h4>Electronegatividad</h4>
                        <ul>
                            <li>Capacidad de un átomo para atraer electrones</li>
                            <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica</li>
                        </ul>
                        <hr />
                    </div>

                    <div>
                        <h2>Familia de elementos</h2>
                        <h4>Alcalinos</h4>
                        <ul>
                            <li>Son blandos</li>
                            <li>Brillantes</li>
                            <li>Puntos de fusión bajos</li>
                            <li>Se combinan fácilmente con oxígeno</li>
                            <li>Propensos a perder más de un electrón de valencia</li>
                        </ul>

                        <h4>Alcalino férreos</h4>
                        <ul>
                            <li>Poseen dos electrones en su nivel más externo</li>
                            <li>Densidad, punto de fusión y ebullición mayores a los metales alcalinos</li>
                            <li>Muy reactivos</li>
                            <li>Se oxidan rápidamente con el aire para formar óxidos e hidróxidos</li>
                        </ul>

                        <h4>Térreos</h4>
                        <ul>
                            <li>Se oxidan rápidamente con el aire para formar óxidos e hidróxidos</li>
                        </ul>

                        <h4>Familia del carbono</h4>
                        <ul>
                            <li>Propiedades diferentes según su ubicación en el grupo.</li>
                            <li>Elementos estables y poco reactivos</li>
                            <li>Elementos tienden a formar compuestos covalentes</li>
                        </ul>

                        <h4>Familia del nitrógeno</h4>
                        <ul>
                            <li>5 electrones de valencia, tendencia a formar enlaces covalentes</li>
                            <li>Valencia o estado de oxidación de -3</li>
                        </ul>

                        <h4>Anfígenos</h4>
                        <ul>
                            <li>No reaccionan al agua</li>
                            <li>Con el oxígeno componen dióxido que con agua originan oxácidos</li>
                            <li>Reaccionan con el ácido nítrico concentrado, excepto el oxígeno</li>
                        </ul>

                        <h4>Halógenos</h4>
                        <ul>
                            <li>7 electrones de valencia en su capa externa</li>
                            <li>Elevada electronegatividad y alta reactividad</li>
                            <li>Todos los elementos poseen al menos valencia de -1</li>
                            <li>Energías de ionización altas</li>
                        </ul>

                        <h4>Gases nobles</h4>
                        <ul>
                            <li>Poca o nula electronegatividad química</li>
                            <li>Desprovistos de color, olor y sabor</li>
                            <li>Puntos de ebullición muy próximos y muy bajos</li>
                        </ul>
                        <hr />
                    </div>

                    <div>
                        <img src="/img/enlacesQuimicos.png" alt="" className="w-75" />
                        <hr />
                    </div>

                    <div>
                        <h2>Compuestos iónicos</h2>
                        <ul>
                            <li>Forman sales sólidas</li>
                            <li>No forman moléculas sino redes cristalinas. Por tanto, son sólidos a temperatura ambiente</li>
                            <li>La forma de cristal es cúbica, rómbica o hexagonal</li>
                            <li>Pueden ser duros o frágiles</li>
                            <li>Puntos de fusión y ebullición altos</li>
                            <li>Solubles en disolventes polares como el agua</li>
                            <li>En estado sólido no conducen la corriente eléctrica, pero fundidos o disueltos en agua conducen la corriente eléctrica, debido a que los iones se separan y pueden moverse de forma independiente</li>
                        </ul>

                        <h2>Compuestos covalentes</h2>
                        <ul>
                            <li>Sólidos, líquidos y gaseosos</li>
                            <li>Son en su mayoría compuestos orgánicos</li>
                            <li>Puntos de fusión y ebullición relativamente bajos</li>
                            <li>Son soluciones acuosas y en su mayoría no conducen la corriente eléctrica</li>
                            <li>Sus reacciones son muy lentos, generalmente necesitan catalizadores</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default SecondChemistryPeriod