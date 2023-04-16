import { CollapseInformation, SectionTitle, TopWave } from '../../components'

export const LifeAndCells = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Vida y células" />
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h3>¿Qué es la vida?</h3>
                    <p>
                        La vida es un fenómeno muy complejo y fascinante, que ha sido objeto de estudio y reflexión durante siglos. Definir lo que es la vida es una tarea difícil, ya que involucra muchos aspectos y características que deben ser considerados.
                        <br /><br />
                        En términos generales, se puede decir que la vida se refiere a la capacidad de un ser para realizar ciertas funciones vitales, como la reproducción, el crecimiento, la nutrición, la respuesta a estímulos y la adaptación al medio ambiente. Sin embargo, para afirmar que un organismo posee vida, se deben cumplir tres requisitos esenciales: la presencia de células (o una sola célula en el caso de organismos unicelulares), el autosostenimiento y la capacidad de autorreplicación.
                        <br /><br />
                        Es de añadir que los virus al no cumplir con los tres requisitos fundamentales para la vida, no se considera estén vivos, a pesar de poseer material genético, ya sea ADN o ARN. De igual forma, todos los individuos siempre tenderán a el estado máximo de equilibrio, conocido como Homeostasis.
                    </p>
                </div>
                <hr />

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
                </CollapseInformation>
            </div>
        </div>
    )
}
