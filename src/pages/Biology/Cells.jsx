import { CollapseInformation, SectionTitle, Tooltip, TopWave } from '../../components'

export const Cells = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Células" />
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>La célula</h3>
                <p>
                    Es el nombre dado por Robert Hooke a la unidad básica de la vida, mientras observó en el microscopio de una lámina de corcho, pequeñas celdas/cavidades que tenían forma similar a las celdas de un panal de abejas. Con el paso del tiempo, el concepto de célula fue evolucionando, describiendo características de esta. Entre las cuales tenemos la capacidad autosostenerse, presencia de una membrana plasmática, reproducirse mediante procesos de división celular, etc.
                    <br /><br />
                    A partir de esto, los seres vivos pueden clasificarse según la cantidad de células que poseen, ya sea unicelular (una célula) o pluricelular (dos o más células). Sin embargo, ambos tipos caracterizados por poseer en su interior organelos especializados en cumplir funciones específicas para el correcto funcionamiento de la célula. Aunque los organelos no sean los mismos para todos los tipos de célula existentes, Eucariotas y Procariotas.
                </p>
                <br />
                <CollapseInformation name="Células eucariotas" id="eucariota">
                    <p>
                        Las células eucariotas son células que tienen un núcleo definido y separado del resto de la célula por una membrana nuclear. Además del núcleo, estas células también tienen otros orgánelos celulares, como mitocondrias, retículo endoplásmico, aparato de Golgi y lisosomas, que realizan diversas funciones en la célula. Estas células se encuentran en organismos multicelulares, como plantas, animales y hongos. A menudo son más grandes y complejas que las células procariotas, que carecen de un núcleo definido y otros orgánulos celulares.

                    </p>
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Células procariotas" id="procariota">
                    <p>
                        Son células simples y pequeñas que carecen de núcleo y de orgánelos rodeados de membrana. A diferencia de las células eucariotas, encuentradas en plantas, animales, hongos y otros organismos complejos, las células procariotas son típicamente unicelulares y se encuentran en bacterias y arqueas.
                        <br />
                        <br />
                        Además, poseen una estructura celular básica, que incluye una membrana plasmática que rodea el citoplasma, donde se encuentran los ribosomas y el material genético en forma de una molécula circular de ADN. Es de añadir algunas células procariotas pueden tener estructuras adicionales, como flagelos para el movimiento y pili para la adhesión.
                        <br />
                        <br />
                        Al no tener núcleo definido, su material genético no está contenido dentro de un núcleo separado. En cambio, el material genético está contenido dentro de la región citoplasmática conocida como nucleoide.
                    </p>
                </CollapseInformation>

                <hr />

                <CollapseInformation name="Organelos celulares" id="organelos">
                    <CollapseInformation name="Mitocondria" id="mitocondria">
                        <p>
                            Son orgánelos celulares presentes en células eucariotas que se encargan de producir la mayor parte de la energía que necesita la célula a través del proceso de respiración celular. Están formadas por dos membranas (una externa y otra interna) y contienen su propio material genético, el ADN mitocondrial. Las mitocondrias se encuentran en casi todas las células eucariotas, incluyendo células musculares y neuronas, y se heredan exclusivamente de la madre en la mayoría de los organismos.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Retículo endoplásmico" id="reticuloEndoplasmico">
                        <p>
                            El retículo endoplásmico puede ser liso o rugoso dependiendo de la presencia de ribosomas unidos a su superficie. El RE liso se encarga de la síntesis de lípidos y de la detoxificación celular, mientras que el RE rugoso se encarga de la síntesis de proteínas que serán secretadas o insertadas en la membrana celular.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Aparato de Golgi" id="aparatoGolgi">
                        <p>
                            Es un organelo celular presente en las células eucariotas que se encarga de la modificación, clasificación, empaquetamiento y distribución de proteínas y lípidos que han sido sintetizados en el retículo endoplásmico. También se encarga de la síntesis de carbohidratos complejos.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Lisosomas" id="lisosomas">
                        <p>
                            Organelos compuestos por enzimas digestivas capaces de degradar diversos materiales celulares, como proteínas, lípidos, carbohidratos, etc. Se encargan de la digestión y reciclaje de sustancias celulares, así como eliminar materiales externos a la célula que han sido fagocitados
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Ribosomas" id="Ribosomas">
                        <p>
                            Son organelos presentes en todas las células, encargados de la síntesis de proteínas. Están compuestos por ARN ribosomal y proteínas. Generalmente se encuentran libres en el citoplassma o unidos a un retículo endoplasmático rugoso. Durante la síntesis de proteínas, los ribosomas leen la información genética del ADN y la traducen en una secuencia de aminoácidos para formar la proteína correspondiente.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Centrosomas" id="centrosomas">
                        <p>
                            Están compuestos por dos centriolos y una matriz pericentriolar/centrosfera que rodea al citoplasma. Los centrosomas son importantes para la organización de los microtúbulos, que son los componentes del citoesqueleto que se encargan del mantenimiento de la forma celular, el transporte intracelular y la división celular.
                            <br />
                            <br />
                            Los centriolos, que son cilindros formados por microtúbulos, se encuentran ubicados perpendicularmente entre sí dentro del centrosoma. La matriz pericentriolar es una red de proteínas que rodea a los centriolos y se encarga de la nucleación y organización de los microtúbulos.
                        </p>
                    </CollapseInformation>
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Ciclo celular" id="cicloCelular">
                    <p>
                        Desde pequeños, se nos enseñó muy bien algo que conocemos como ciclo de vida, aquel en el que se nace, crece, reproduce y muere. Un ciclo general para los seres vivos. De esta manera, la célula como unidad fundamental de la vida, también posee un ciclo de vida, aunque diferente al ya mencionado. Este ciclo por el que pasan las células es llamado Ciclo Celular y este tiene el objetivo de mantener el correcto funcionamiento y estructuración de tejidos mediante la generación de nuevas células que puedan suplir el funcionamiento de sus compañeras ya inertes, así como la producción de gametos.
                        <br />
                        <br />
                        El Ciclo Celular se divide en dos fases, la interfase y la división celular (Fase M). En la cual, la interfase se divide en tres fases más, Fase G1 (GAP1), Fase S (Síntesis) y Fase G2 (GAP2).
                        <br />
                        <br />
                         En la <b>Fase G1</b>, la célula aumenta su tamaño debido a la generación de más orgánulos y alta producción de proteínas, es en esta fase que la célula puede desviarse de su ciclo normal y entrar en un estado llamado <b>G0</b> temporal (Como las células madre, linfocitos o los hepatocitos del hígado) o permanentemente (Como las neuronas), en el que cualquier célula que funcione de forma anormal regresará a este estado de reposo, disminuyendo así la probabilidad de que una célula se vuelva cancerosa. 
                        <br /><br />
                        Por otra parte, este estado de G0 también es conocido como quiescencia, el cual no debe confundirse con el estado de senescencia a la que ingresa una célula una vez detectado que su ADN se encuentra dañado por causas como la vejez, de esta manera impendiendo su replicación del error. En caso de ser dañino o simplemente estar en un grave estado, la célula procede a realizar la muerte celular programada (Apoptosis), en caso de que estas células dañadas no hagan la apoptosis y continúen con su ciclo celular, se replicarán causando cáncer y tumores. 
                        <br />
                        <br />
                        Una vez superada la fase G1, la célula entra en la <b>fase S</b> en la cual se sintetizan proteínas nucleares y realiza el proceso de replicación para duplicar su material genético, de esta forma pasan de tener veintitrés pares de cromosomas simples (Una cromátida) a veintitrés pares de cromosomas de doble estructura (Dos cromátidas unidas por un centrómero), en esta fase también se duplican los centrosomas.
                        <br />
                        <br />
                        Por último, en la <b>fase G2</b> vuelve a aumentar su tamaño y síntesis de proteínas. Además, preparándose para la división, se ensamblan las estructuras necesarias para esta. Así, los cromosomas en el núcleo que se encuentran en forma de cromatina, empiezan a enrollarse y condensarse tomando la forma a la que estamos habituados a ver en imágenes, permitiendo así su fácil desplazamiento y a que más adelante se dé la correcta división de material genético. Los dos pares de centriolos se posicionan de forma <Tooltip text={<span>perpendicular</span>} content={<span>Que forma ángulo recto con otra <br /> línea o con otro plano</span>} id="perpendicular" /> al otro.
                    </p>
                </CollapseInformation>
            </div>
        </div>
    )
}
