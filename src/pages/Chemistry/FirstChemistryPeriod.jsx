import { SectionTitle, CollapseInformation, TopWave, Tooltip } from "../../components/";

import Latex from "react-latex"
export const FirstChemistryPeriod = () => {
    const escalasConversionOne = "$$°C + 273$$"
    const escalasConversionTwo = "$$°k \\ - \\ 273$$"
    const escalasConversionThree = "$$1.8(°C) + 32$$"
    const escalasConversionFour = "$$\\frac{5}{9} (°F - 32)$$"
    const escalasConversionFive = "$$\\large\\frac{°F \\ - \\ 32}{1.8  \\ + \\ 273}$$"
    const escalasConversionSix = "$$1.8(°k - 273) + 32$$"

    return (
        <div className="homeCard" id="geometria">
            <TopWave />
            <SectionTitle title="Química" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <CollapseInformation name="Historia de la química" id="historiaDeLaQuimica">
                            <h4>Prehistórico (Era primitiva [500 a.c])</h4>
                            <ul>
                                <li>Descubrimiento y dominación del fuego, siendo la primera reacción química de la humanidad.</li>
                                <li>En China se crea la seda artificial, papel, pólvora, porcelana y pintura.</li>
                                <li>En Egipto se usan técnicas de embalsamiento, momificación y se crea el vidrio.</li>
                            </ul>

                            <h4>Griego (500 - 300 a.c)</h4>
                            <ul>
                                <li>Empédocles afirma que el universo se encuentra conformado por 4 elementos principales, fuego, agua, aire y tierra.</li>
                                <li>Leucipo y Demócrito postulan la teoría atómica griega: “Toda la materia está formada por  <Tooltip content={<span>Unidad básica de la materia. <br /> Compuestos por electrones, <br /> protones y neutrones.</span>} text={<span className="ps-2">átomos</span>} id="átomos" /> eternos, indestructibles, indivisibles, pero diferentes en tamaño, forma y peso”.</li>
                            </ul>

                            <h4>Alquimia (300 - 1500 d.c)</h4>
                            <ul>
                                <li>Búsqueda de la piedra filosofal, la cual al ser frotada con un metal, este se convertiría en oro. Además, sería capaz de curar cualquier enfermedad.</li>
                                <li>Se inicia en Egipto y Mesopotamia.</li>
                                <li>Se descubre el arsénico, antimonio, bismuto.</li>
                            </ul>

                            <h4>Iatroquímica ("Química médica" [1500 - 1660 d.c])</h4>
                            <ul>
                                <li>Paracelso afirma que el objetivo fundamental de la química es el de obtener drogas para el tratamiento de enfermedades.</li>
                            </ul>

                            <h4>Flogisto (1660 - 1770 d.c)</h4>
                            <ul>
                                <li>Georg Stahl afirma que el flogisto (sustancia del fuego) se encontraba en todas las sustancias combustibles y, producía una perdida  de flogisto cuando se oxidaban y una ganancia de flogisto cuando se reducían (desmentido).</li>
                            </ul>

                            <h4>Moderno (1770 d.c - actualidad)</h4>
                            <ul>
                                <li>Descubrimiento de la ley de la conservación de la materia.</li>
                                <li>John Dalton retoma la teoría atómica.</li>
                            </ul>
                        </CollapseInformation>
                        <hr />
                    </div>

                    <div>
                        <CollapseInformation name="Conversión de temperatura" id="escalasDeConversion">
                            <table className="table table-bordered">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Conversión</th>
                                        <th scope="col">Ecuación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Celsius a Kelvin</td>
                                        <td><Latex>{escalasConversionOne}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Kelvin a Celsius</td>
                                        <td><Latex>{escalasConversionTwo}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Celsius a Fahrenheit</td>
                                        <td><Latex>{escalasConversionThree}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Fahrenheit a Celsius</td>
                                        <td><Latex>{escalasConversionFour}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Fahrenheit a Kelvin</td>
                                        <td><Latex>{escalasConversionFive}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Kelvin a Fahrenheit</td>
                                        <td><Latex>{escalasConversionSix}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                        </CollapseInformation>
                        <hr />
                    </div>

                    <div>
                        <CollapseInformation name="Propiedades de la materia" id="propiedadesMateria">
                            <h4>Generales</h4>
                            <div>
                                <p>
                                    <span className="fw-semibold">Masa:</span> cantidad de materia que contiene un cuerpo. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Peso:</span> fuerza que ejerce la gravedad ante la materia.  <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Volumen:</span> espacio que ocupa un cuerpo. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Inercia:</span> característica que impide a la materia moverse sin intervención de una fuerza externa. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Impenetrabilidad:</span> consiste en que un cuerpo no puede ocupar el espacio de otro cuerpo al mismo tiempo. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Porosidad:</span> espacio que existe entre las partículas. <br /><br />
                                </p>
                            </div>
                            <div>
                                <h4>Específicas</h4>
                                <p>
                                    <span className="fw-semibold">Punto de fusión:</span> es la temperatura a la que una sustancia sólida se funde, pasando al estado líquido. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Punto de ebullición:</span> es la temperatura que un líquido debe alcanzar para pasar al estado gaseoso. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Densidad:</span> relación entre la masa y el volumen de un cuerpo. Es elevada en la mayoría de sólidos, baja en los líquidos y, aún menor en los gases. <br /><br />
                                </p>

                                <h6>Conductividad</h6>
                                <p>
                                    <span className="fw-semibold">Térmica:</span> capacidad de un material para transferir calor. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Eléctrica:</span> capacidad de un material de conducir corriente eléctrica. Por ejemplo, los metales. <br /> <br />
                                </p>

                                <p>
                                    <span className="fw-semibold">Dilatación:</span> cambio de dimensiones que presenta la materia en diferentes estados al variar la temperatura con una presión constante. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Ductilidad:</span> capacidad de un material de dejarse deformar hasta convertirse en hilos. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Maleabilidad:</span> capacidad de ciertos materiales de convertirse en láminas. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Dureza:</span> capacidad de resistencia de un material a ser rayado. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Solubilidad:</span> propiedad que posee una sustancia para disolverse en otra sustancia. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Elasticidad:</span> capacidad de un objeto a deformarse al ser sometido a una fuerza y volver a recuperar su forma original. <br />
                                </p>
                                <p>
                                    <span className="fw-semibold">Tenacidad:</span> resistencia de un material a romperse por efecto de una fuerza. <br />
                                </p>
                            </div>
                        </CollapseInformation>
                        <hr />
                    </div>

                    <div>
                        <CollapseInformation name="Separación de mezclas" id="separacionMezclas">
                            <h4>Evaporación</h4>
                            <p>Método físico que permite separar un sólido de un líquido en una mezcla. Se basa en que el punto de fusión del sólido es mayor al punto de ebullición del líquido. Por ejemplo, separar la sal del agua de mar.</p>

                            <h4>Cristalización</h4>
                            <p>Método utilizado para separar un sólidos disueltos en líquidos. La mezcla se calienta para evaporar parte del disolvente. Por ejemplo, separar el azúcar del agua en una disolución azucarada.</p>

                            <h4>Destilación</h4>
                            <p>Método que consiste en la separación de dos o más líquidos miscibles (que se pueden mezclar) con diferentes puntos de ebullición, primero por medio de la evaporación  y posteriormente por la condensación de las sustancias.</p>

                            <h4>Cromatografía</h4>
                            <p>Este método depende de la distribución de los componentes de la mezcla entre dos fases inmiscibles. Una fase móvil, llamada activa, transporta las sustancias que se separaron y que progresa en relación con otra, denominada fase estacionaria. Por ejemplo, la separación de pigmentos vegetales en un papel.</p>

                            <h4>Sedimentación</h4>
                            <p>Es una operación basada en la diferencia de densidades de los componentes de la mezcla, que permite separar mezclas heterogéneas de un sólido en un líquido mediante reposo o precipitación. Por ejemplo, los tratamientos de aguas residuales.</p>

                            <h4>Decantación</h4>
                            <p>Separa dos líquidos con diferentes densidades o una mezcla constituida por un sólido insoluble en un líquido. Se basa en la diferencia de densidades. Por ejemplo, la separación de los sedimentos del vidrio.</p>

                            <h4>Filtración</h4>
                            <p>Se trata de una operación que permite separar mezclas heterogéneas de un sólido insoluble en un líquido. Para llevar a cabo el proceso, se hace pasar la mezcla a través de un papel filtro, en el que el sólido permanecerá en la superficie del papel, mientras que el líquido pasará. Por ejemplo, colar un jugo.</p>

                            <h4>Centrifugación</h4>
                            <p>Consiste en la separación de materiales de diferentes densidades que se componen una mezcla. Para lo cual, la mezcla se coloca dentro de un aparato llamado centrifuga que tiene el movimiento de rotación constante y rápido, lo cual hace que las partículas con mayor densidad vayan al fondo y las más livianas queden en la parte superior.</p>

                            <h4>Imantación</h4>
                            <p>Reside en separar con un imán los componentes de una mezcla heterogénea, de un material magnético, de otro que no lo es.</p>

                            <h4>Tamización</h4>
                            <p>Método para separar mezclas con componentes sólidos de diferentes tamaños. Para llevar a cabo el proceso, se hace pasar la mezcla por un tamiz. Separando los cuerpos grandes de los pequeños.</p>

                            <h4>Electroforesis</h4>
                            <p>Técnica de separación de mezclas basada en la carga eléctrica de las sustancias presentes en una mezcla. Consiste en colocar la mezcla y hacer pasar una corriente eléctrica, de tal forma que las sustancias con carga positiva se mueven hacia el polo negativo, mientras las sustancias cargadas negativamente se mueven al polo positivo. Es fundamental para el análisis de muestras biológicas, la cual sirve para separar proteínas y ácidos nucleicos, etc.</p>

                            <h4>Sublimación</h4>
                            <p>Paso de un sólido a gas sin pasar por el estado líquido. Se usa la sublimación para separar mezclas de compuestos orgánicos, donde alguno de los compuestos puede sublimar. Por ejemplo, en una mezcla de arena y yodo se puede separar el yodo calentándolo. Este pasa al estado gaseoso subiendo y cuando pasa por una superficie fría vuelve a solidificarse.</p>
                        </CollapseInformation>
                        <hr />
                    </div>

                    <div>
                        <CollapseInformation name="Modelos atómicos" id="modelosAtomicos">
                            <img src="/img/modelosAtomicos.svg" alt="Modelos atómicos" className="w-80 rounded-3" />
                            <h4 className="pt-4">Aportes de Leucipo y  Demócrito</h4>
                            <p>Leucipo consideró que hay cierto punto en el que la materia no puede divirse más, mediante el experimento de cortar un objeto en rebanadas, hasta llegar al punto que no pudiera ser cortada.</p>
                            <hr />
                            <h4 className="pt-4">Modelo atómico de Dalton</h4>
                            <ul>
                                <li>Plantea la idea de un átomo macizo. Es quien rescata las ideas de Demócrito (átomos son indivisibles).</li>
                                <li>Los átomos de un mismo elemento son iguales y viceversa.</li>
                                <li>Los compuestos surgen al combinar átomos de dos o más elementos.</li>
                            </ul>
                            <h6>Postulados</h6>
                            <ul>
                                <li>La materia está constituida por minúsculas partículas indivisibles llamadas átomos.</li>
                                <li>Cada elemento está constituido por átomos idénticos entre sí y con  propiedades iguales. Los átomos de un elemento difieren de los de otros.</li>
                                <li>Al unirse dos o más átomos de distintos elementos, lo hacen en proporciones determinadas y sencillas, creando así los compuestos formados por moléculas. Las moléculas de un determinado compuesto son idénticas entre sí.</li>
                                <li>Durante una reacción química los átomos se intercambian, más no sufren transformación alguna, ni se crean o destruyen en el proceso.</li>
                            </ul>
                            <hr />
                            <h4>Modelo atómico de Thomson</h4>
                            <ul>
                                <li>Según su modelo atómico, el átomo está formado por electrones de carga negativa incrustados en una esfera de carga positiva, como en un “pudin de pasas”.</li>
                                <li>Los electrones se encuentran repartidos de forma uniforme por todo el átomo.</li>
                                <li>El átomo es neutro, las cargas positivas se compensan con las negativas y viceversa.</li>
                                <li>Descubrió el electrón.</li>
                                <li>Este modelo no era estático, sino que los electrones podían cambiar su posición en la esfera siempre y cuando las cargas fueran compensadas.</li>
                            </ul>
                            <p>
                                Para llegar a estas conclusiones, Thomson realizó varios experimentos, uno de estos, consistió en utilizar tubos de rayos catódicos al vacío. El rayo se detecta al pintar el extremo del tubo correspondiente al ánodo con fósforo, posterior al impacto del rayo. El fósforo produce una chispa y así es detectado, lo que realizó fue lanzar partículas alfa (núcleos de helio) contra una lámina de oro, observando que la mayoría de partículas atravesaban la lámina como si nada y otras pocas rebotaban. <br /> <br />

                                A partir de esto, dedujo que si las partículas alfa atraviesan el oro, es porque los átomos deben tener mucho espacio vacío y, cuando algunas de estas partículas rebotan, se debe a que están chocando con esa parte del átomo que lleva carga positiva, siendo comparativamente más pequeña.</p>

                            <hr />
                            <h4>Modelo atómico de Rutherford</h4>
                            <ul>
                                <li>El átomo en sí, es espacio vacío.</li>
                                <li>En el núcleo se concentra la masa y la carga positiva del átomo.</li>
                                <li>Los electrones con carga negativa, giran alrededor del núcleo en trayectorias circulares a las que denominó órbitas.</li>
                            </ul>
                            <p>
                                Para ello, replicó el experimento realizado por Thompson. Notó que la mayoría de las partículas alfa pasaban a través de la lámina de oro, procediendo así que los átomos son en gran medida espacio vacío. De igual forma, se percató de que algunas partículas alfa se desviaban ligeramente, implicando que debían existir interacciones con otras partículas de carga positiva. Mientras que otras rebotaron contra hacia la fuente. <br /> <br />

                                Ante esto, consideró que los electrones negativos equilibraban la carga nuclear positiva, y que viajaban en órbitas circulares alrededor del núcleo.
                            </p>
                            <hr />
                            <h4>Modelo atómico de Bohr</h4>
                            <ul>
                                <li>Los electrones orbitan el núcleo en órbitas que tienen un tamaño y energía establecidos. Estos niveles se designan por letras o números.</li>
                                <li>Los electrones con carga negativa, giran alrededor del núcleo en órbitas circulares.</li>
                                <li>La energía se absorbe o se emite cuando un electrón se mueve de una órbita a otra.</li>
                                <li>Los niveles de energía tienen diferentes números de electrones.</li>
                                <li>La energía de la órbita está relacionada con su tamaño. La energía más baja se encuentra en la órbita más pequeña. Es decir, entre más lejos esté el nivel de energía del núcleo, mayor será la energía que tiene.</li>
                            </ul>
                            <hr />
                            <h4>Modelo atómico de Sommerfeld</h4>
                            <p>
                                Postuló que dentro de los mismos niveles de energía se encuentran subniveles de energía. También que los electrones se encuentran girando en órbitas eliptícas, y definió el número atómico Azimutal o secundario.   
                             
                            </p>
                            <h4>Modelo atómico de Schrödinger</h4>
                            <p>
                                Entre el mundo cuántico y el mundo que experimentamos normalmente, existe una gran diferencia. La <span className="fw-semibold">indeterminación.</span> Por esta razón, los átomos no poseen un lugar fijo. De ahí que la forma correcta de ver a un electrón girando no es mediante una esfera que sigue un camino, sino, a través de nubes de probabilidad (orbitales), puesto que la posición de los electrones dentro el átomo es indefinida gracias a la indeterminación. <br /><br />

                                Estas nubes indican las zonas donde sería más probable encontrar un electrón <span className="fw-semibold">si</span> tratáramos de forzarlo a estar allí, debido a que estos (nuevamente por la indeterminación) están y no están en ese lugar.
                                <br />
                                <br />
                                Para llegar a estos postulados, Schrödinger consideró el principio de incertidumbre planteado por Heisenberg, que propone que no podemos conocer la posición y velocidad de las partículas subatómicas dentro de un átomo. Así como la dualidad onda-partícula presentada por Louis de Broglie, que expone que las partículas pueden comportarse como ondas y viceversa, de manera que ambas comparten propiedades entre sí.
                            </p>

                            <p>Dicho de otro modo, los electrones se comportan como ondas de probabilidad, cuya posición es incierta, siendo los orbitales los lugares más probables para hallar un electrón.</p>
                        </CollapseInformation>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FirstChemistryPeriod