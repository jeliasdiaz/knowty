import { Link } from "react-router-dom"
const Latex = require("react-latex")

const Quimica = () => {
    const escalasConversionOne = "$$°C + 273$$"
    const escalasConversionTwo = "$$°k \\ - \\ 273$$"
    const escalasConversionThree = "$$1.8(°C) + 32$$"
    const escalasConversionFour = "$$\\frac{°F \\ - \\ 32}{1.8}$$"
    const escalasConversionFive = "$$\\frac{°F \\ - \\ 32}{1.8  \\ + \\ 273}$$"
    const escalasConversionSix = "$$1.8(°k - 273) + 32$$"


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
                    <div >
                        <h2>Historia de la química</h2>
                        <h4>Prehistórico(Era primitiva [500 a.c])</h4>
                        <ul>
                            <li>Descubrimiento y dominación del fuego, siendo la primera reacción química de la humanidad</li>
                            <li>En China se crea la seda artificial, papel, pólvora, porcelana y pintura</li>
                            <li>En Egipto se usan técnicas de embalsamiento, momificación y se crea el vidrio</li>
                            <li>En Egipto se usan técnicas de embalsamiento, momificación y se crea el vidrio</li>
                        </ul>

                        <h4>Griego(500-300 a.c)</h4>
                        <ul>
                            <li>Empédocles afirmaba que el universo se encuentra conformado por 4 elementos principales, fuego, agua, aire y tierra</li>
                            <li>Leucipo y Demócrito postulan la teoría atómica griega que dice: “Toda la materia esta formada por átomos eternos, indestructibles, indivisibles, pero diferentes en tamaño forma y peso”</li>
                        </ul>

                        <h4>Alquimia (300-1500 d.c)</h4>
                        <ul>
                            <li>Se inicia en Egipto y Mesopotamia</li>
                            <li>Se descubre el arsénico, antimonio, bismuto</li>
                            <li>Una de sus principales características es la búsqueda de la piedra filosofal, la cual al ser frotada con un metal, este se convertiría en oro. Y curaría cualquier enfermedad</li>
                        </ul>

                        <h4>Iatroquímica ("Química médica" [1500-1660 d.c])</h4>
                        <ul>
                            <li>Paracelso afirma que el objetivo fundamental de la química es el de obtener drogas para el tratamiento de enfermedades</li>
                        </ul>

                        <h4>Flogisto(1660 d.c – 1770 d.c)</h4>
                        <ul>
                            <li>George Stahl afirma que el flogisto (sustancia del fuego) se encontraba en todas las sustancias combustibles y producía una perdida cuando se oxidaban y una ganancia cuando se reducían (desmentido)</li>
                        </ul>

                        <h4>Moderno (1770 D.C- actualidad)</h4>
                        <ul>
                            <li>Moderno (1770 D.C- actualidad)</li>
                            <li>Descubrimiento de la ley de la conservación de la materia.</li>
                            <li>John Dalton retoma la teoría atómica</li>
                        </ul>
                        <hr />
                    </div>

                    <div>
                        <h2>Escalas de conversión</h2>
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
                        <hr />
                    </div>

                    <div>
                        <h2>Propiedades de la materia</h2>
                        <h4>Generales</h4>
                        <p><b>Masa:</b> cantidad de materia que contiene un cuerpo</p>

                        <p><b>Peso:</b> fuerza que ejerce la gravedad ante la materia</p>

                        <p><b>Volumen:</b> espacio que ocupa un cuerpo</p>

                        <p><b>Incercia:</b> característica que impide a la materia moverse sin intervención de una fuerza externa</p>

                        <p><b>Impenetrabilidad:</b> consisten en que un cuerpo no puede ocupar el espacio de otro cuerpo al mismo tiempo</p>

                        <p><b>Porosidad:</b> espacio que existe entre las particulas</p>

                        <h4>Específicas</h4>
                        <p><b>Punto de fusión:</b> es la temperatura a la que una sustancia sólida se funde, pasando al estado líquido</p>

                        <p><b>Punto de ebullición:</b> es la temperatura que un líquido debe alcanzar para pasar al estado gaseoso</p>

                        <p><b>Densidad:</b> es la relación entre la masa y el volumen de un cuerpo. Es elevada en la mayoría de solidos, baja en los líquidos y, aún menor en los gases</p>

                        <h6>Conductividad</h6>
                        <p><b>Térmica:</b> capacidad de un material para transferir calor.</p>
                        <p><b>Eléctrica:</b> capacidad de un material de conducir corriente eléctrica. Por ejemplo los metales</p>

                        <p><b>Dilatación:</b> cambio de dimensiones que presenta la materia en diferentes estados al variar la temperatura con una presión constante</p>

                        <p><b>Ductilidad:</b> capacidad de un material de dejarse deformar hasta convertirse en hilos</p>

                        <p><b>Maleabilidad:</b> capacidad de ciertos materiales de convertirse en láminas</p>

                        <p><b>Dureza:</b> capacidad de resistencia de un material a ser rayado</p>

                        <p><b>Solubilidad:</b> propiedad que posee una sustancia para disolverse en otra sustancia</p>

                        <p><b>Elasticidad:</b> capacidad de un objeto a deformarse al ser sometido a una fuerza y volver a recuperar su forma original</p>

                        <p><b>Tenacidad:</b> resistencia de un material a romperse por efecto de una fuerza</p>
                        <hr />
                    </div>

                    <div>
                        <h2>Mecanismos de separación de mezclas</h2>
                        <h4>Evaporación - Homogénea</h4>
                        <p>Método físico que permite separar un sólido de un líquido en una mezcla homogénea. Se basa en que el punto de fusión del sólido es mayor al punto de ebullición del líquido. Ej: Separar la sal del agua de mar</p>

                        <h4>Cristalización - Homogénea</h4>
                        <p>Método utilizado para separar una mezcla de un sólido en un líquido. La mezcla se calienta para evaporar parte del disolvente. Ej: Separar el azúcar del agua en una disolución azucarada</p>

                        <h4>Destilación - Homogénea</h4>
                        <p>Método que consiste en la separación de dos o más líquidos miscibles(que se pueden mezclar) con diferentes puntos de ebullición, primero por medio de la evaporación  y posteriormente por la condensación de las sustancias. A través de esta operación se separan principalmente mezclas homogéneas de líquidos Separa mezclas homogéneas de líquidos</p>

                        <h4>Cromatografía - Homogénea, Heterogénea</h4>
                        <p>Este método depende de la distribución de los componentes de la mezcla entre dos fases inmiscibles. Una fase móvil, llamada activa, transporta las sustancias que se separaron y que progresa en relación con otra, denominada fase estacionaria. Ej: Separación de pigmentos vegetales en un papel</p>

                        <h4>Sedimentación - Heterogénea</h4>
                        <p>Es una operación basada en la diferencia de densidades de los componentes de la mezcla, que permite separar mezclas heterogéneas de un solido en un liquido mediante reposo o precipitación. Tratamiento de aguas residuales</p>

                        <h4>Decantación - Heterogénea</h4>
                        <p>Separa dos líquidos con diferentes densidades o una mezcla constituida por un solido insoluble en un liquido. Se basa en la diferencia de densidades. Ej: Separación de los sedimentos del vidrio</p>

                        <h4>Filtración - Heterogénea</h4>
                        <p>Se trata de una operación que permite separar mezclas heterogéneas de un sólido insoluble en un liquido. Se hace pasar a través de un papel filtro, el sólido permanece en la superficie del papel, mientras que el otro componente pasará. Ej: Filtración del café molido del café</p>

                        <h4>Centrifugación - Heterogénea</h4>
                        <p>Consiste en la separación de materiales de diferentes densidades que se componen una mezcla. Para lo cual, la mezcla se coloca dentro de un aparato llamado centrifuga que tiene el movimiento de rotación constante y rápido, lo cual hace que las partículas con mayor densidad vayan al fondo y las más livianas queden en la parte superior</p>

                        <h4>Imantación - Heterogénea</h4>
                        <p>Separar con un imán los componentes de una mezcla de un material magnético de otro que no lo es</p>

                        <h4>Tamización - Heterogénea</h4>
                        <p>Método de separar mezclas con componentes solidos con diferentes tamaños, que pasan por un tamiz</p>

                        <h4>Electroforesis - Homogénea</h4>
                        <p>Técnica de separación de mezclas basada en la carga eléctrica de las sustancias presentes en una mezcla. Consiste en colocar la mezcla y hacer pasar una corriente eléctrica, de tal forma que las sustancias con carga positiva se mueven hacia el polo negativo, mientras las sustancias cargadas negativamente se mueven al polo positivo. Es fundamental para el análisis de muestras biológicas, la cual sirve para separar proteínas y ácidos nucleicos, etc.</p>

                        <h4>Sublimación - Heterogénea</h4>
                        <p>Paso de un solido a gas sin pasar por el estado liquido. Se usa la sublimación para separa mezclas de compuestos orgánicos, donde alguno de los compuestos puede sublimar. Ej: Por ejemplo, en una mezcla de arena y yodo se puede separar el yodo calentándolo. Este pasa al estado gaseoso subiendo y cuando pasa por una superficie fría vuelve a solidificarse</p>
                        <hr />
                    </div>

                    <div>
                        <h2>Modelos atómicos</h2>
                        <img src="/img/modelosAtomicos.svg" alt="" className="w-75" />

                        <h4>Modelo atómico de Dalton</h4>
                        <ul>
                            <li>Plantea la idea de un átomo macizo, asimismo es quien rescata las ideas de demócrito (átomos son indivisibles)</li>
                            <li>Los átomos son partículas indivisibles, de los cuales se componen los elementos</li>
                            <li>Los átomos de un mismo elemento son iguales y viceversa</li>
                            <li>Los compuestos surgen al combina átomos de dos o más elementos</li>
                        </ul>
                        <h6>Postuló lo siguiente:</h6>
                        <ul>
                            <li>La materia está constituida por minúsculas partículas indivisibles llamadas átomos.</li>
                            <li>Cada elemento está constituido por átomos idénticos entre sí y con iguales propiedades. Los átomos de un elemento difieren de los de otros</li>
                            <li>Al unirse dos o más átomos de distintos elementos, lo hacen en proporciones determinadas y sencillas, creando así los compuestos, formados por moléculas. Las moléculas de un determinado compuesto son idénticas entre sí</li>
                            <li>Durante una reacción química los átomos se intercambian, más no sufren transformación alguna, ni se crean o destruyen en el proceso</li>
                        </ul>

                        <h4>Modelo atómico de Thomson</h4>
                        <ul>
                            <li>Según su modelo atómico, el átomo está formado por electrones de carga negativa incrustados en una esfera de carga positiva, como en un “pudin de pasas”</li>
                            <li>Los electrones se encuentran repartidos de forma uniforme por todo el átomo</li>
                            <li>El átomo es neutro, las cargas positivas se compensan con las negativas y viceversa</li>
                            <li>Descubrió el electrón</li>
                            <li>Este modelo no era estático, sino que los electrones podían cambiar su posición en la esfera siempre y cuando las cargas fueran compensadas</li>
                            <li>Para llegar a estas conclusiones Thomson realizó varios experimientos, uno de estos, consistió en utilizar tubos de rayos catódicos al vacio. El rayo se detecta al pintar el extremo del tubo correspondiente al ánodo con fósforo, posterior al impacto del rayo, el fósforo produce una chispa y así es detectado, lo que realizó fue lanzar partículas alfa (núcleos de helio) contra una lámina de oro, observando que la mayoría de partículas atravesaban la lámina como si nada y otras pocas rebotaban. A partir de esto, dedujo que si las partículas alfa atraviesan el oro es porque los átomos deben tener mucho espacio vacío y, algunas al rebotar es porque deben estar chocando con esa parte del átomo que lleva carga positiva, siendo comparativamente más pequeña
                            </li>
                        </ul>

                        <h4>Modelo atómico de Rutherford</h4>
                        <ul>
                            <li>El átomo en sí, es espacio vacío</li>
                            <li>En el núcleo se concentra la masa y la carga positiva del átomo</li>
                            <li>Los electrones con carga negativa, giran alrededor del núcleo en trayectorias circulares a las que denominó órbitas</li>
                        </ul>

                        <h4>Modelo atómico de Bohr</h4>
                        <ul>
                            <li>Los electrones orbitan el núcleo en órbitas que tienen un tamaño y energía establecidos. Estos niveles se designan por letras o números</li>
                            <li>Los electrones con carga negativa, giran alrededor del núcleo en órbitas circulares</li>
                            <li>La energía se absorbe o se emite cuando un electrón se mueve de una órbita a otra</li>
                            <li>Los niveles de energía tienen diferentes números de electrones</li>
                            <li>La energía de la órbita está relacionada con su tamaño. La energía más baja se encuentra en la órbita más pequeña. Es decir, entre más lejos esté el nivel de energía del núcleo, mayor será la energía que tiene</li>
                        </ul>
                        <h4>Modelo atómico de Schrödinger</h4>
                        <p>Para entender este modelo es necesario añadir que, entre el mundo cuántico y el mundo que experimentamos normalmente, existe una gran diferencia, la <b>indeterminación.</b> Por esta razón, los átomos no poseen un lugar fijo. De ahí que la forma correcta de ver a un electrón girando no es mediante una esfera que sigue un camino, sino, a través de nubes de probabilidad (orbitales), puesto que la posición de los electrones dentro el átomo es indefinida gracias a la indeterminación. Estas nubes indican las zonas donde sería más probable encontrar un electrón si tratáramos de forzarlo a estar allí, debido a que estos, nuevamente por la indeterminación, están y no están en ese lugar.</p>

                        <p>Dicho de otro modo, los electrones se comportan como ondas de probabilidad, cuya posición es difusa, siendo los orbitales los lugares más probables para hallar un electrón.</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Quimica