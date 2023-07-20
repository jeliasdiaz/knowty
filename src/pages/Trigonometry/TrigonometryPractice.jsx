import { SectionTitle, TopWave } from "../../components/";
import Latex from "react-latex"
import { PitagorasPractice } from "./Practice/PitagorasPractice";

export const TrigonometryPractice = () => {
    const pitagorasExFirstOne = `$$a^2 + b^2 = c^2
    $$`
    const pitagorasExFirstTwo = `$$c^2 - b^2 = a^2$$`
    const pitagorasExFirstThree = `$$(2.5m^2) - (0.5m^2) = a^2$$`
    const pitagorasExFirstFour = `$$(6.25m) - (0.25m) = a^2$$`
    const pitagorasExFirstFive = `$$6m = a^2$$`
    const pitagorasExFirstSix = `$$a= \\sqrt{6m}$$`
    const pitagorasExFirstSeven = `$$a= 2.4m$$`

    const pitagorasExSecondOne = `$$a^2 + b^2 = c^2
    $$`
    const pitagorasExSecondTwo = `$$c^2 - b^2 = a^2$$`
    const pitagorasExSecondThree = `$$(4cm^2) - (2.5cm^2) = a^2$$`
    const pitagorasExSecondFour = `$$(16cm) - (6.25m) = a^2$$`
    const pitagorasExSecondFive = `$$9.75cm = a^2$$`
    const pitagorasExSecondSix = `$$a= \\sqrt{9.75cm}$$`
    const pitagorasExSecondSeven = `$$a = 3.12cm
    $$`

    const pitagorasExThirdOne = `$$a^2 + b^2 = c^2$$`
    const pitagorasExThirdTwo = `$$(5cm^2) + (6cm^2) = c^2$$`
    const pitagorasExThirdThree = `$$(25cm) + (36cm) = c^2$$`
    const pitagorasExThirdFour = `$$61cm = c^2$$`
    
    const pitagorasExThirdFive = `$$c= \\sqrt{61cm}
    $$`
    const pitagorasExThirdSix = `$$c= 7.81cm$$`

    const razonesTrigonometricasExFirstOne = `$$Sen θ =  \\large \\frac{opuesto}{hipotenusa}$$`
    const razonesTrigonometricasExFirstTwo = `$$Sen 28º = \\large \\frac{x}{36m}$$`
    const razonesTrigonometricasExFirstThree = `$$x = Sen 28º \\ \\cdot \\ 36m$$`
    const razonesTrigonometricasExFirstFour = `$$x= 16.9m$$`

    const razonesTrigonometricasExSecondOne = `$$Tan θ = \\large \\frac{opuesto}{adyacente}$$`
    const razonesTrigonometricasExSecondTwo = `$$Tan θ = \\large \\frac{4cm}{3cm}
    $$`
    const razonesTrigonometricasExSecondThree = `$$θ = Tan^{-1} (\\frac{4cm}{3cm})
    $$`
    const razonesTrigonometricasExSecondFour = `$$θ = 53.13º$$`
    const razonesTrigonometricasExSecondFive = `$$Tan^{-1}  $$`

    const leySenoOne = `$$\\large \\frac{a}{Senθ} = \\frac{b}{Senθ}
    $$`
    const leySenoTwo = `$$\\large  \\frac{16m}{Sen 110} = \\frac{5m}{Senθ}$$`
    const leySenoThree = `$$Sen θ = \\frac{Sen 110}{16m} \\ \\cdot \\ 5m $$`
    const leySenoFour = `$$Sen θ = 0.29$$`
    const leySenoFive = `$$θ = Sen^{-1} (0.29)$$`
    const leySenoSix = `$$θ= 16.85º$$`

    const leyCosenoOne = `$$x^2 = a^2 + b^2 - 2ab \\ \\cdot \\ cos(θ)$$`
    const leyCosenoTwo = `$$x^2 = 8^2 + 20^2 - 2 \\ \\cdot \\ 8 \\ \\cdot \\ 20 \\ \\cdot \\ cos(30°)$$`
    const leyCosenoThree = `$$\\sqrt{x} = \\sqrt{8^2 + 20^2 - 2 \\ \\cdot \\ 8 \\ \\cdot \\ 20 \\ \\cdot \\ cos(30°)}$$`
    const leyCosenoFour = `$$x = 13.67m$$`

    return (
        <div className='homeCard'>
            <TopWave />
            <SectionTitle title="Practica" />

            <PitagorasPractice />
            
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700">
                <div >
                    <div className="section">
                        <div>
                            <h3>Teorema de pitágoras</h3>
                            <h5>N°1</h5>
                            <p>Calcular la altura que podríamos alcanzar con una escalera de 2.5 metros apoyada sobre la pared, si la parte inferior la situamos a 50 centímetros de ésta.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#pitagorasExFirst">
                                    Solución
                                </button>
                            </p>
                            
                            <div className="collapse" id="pitagorasExFirst">
                                <p>El primer paso es interpretar de manera correcta la situación y hacerse una imagen mental y deberías obtener algo como esto:</p>

                                <img src="/img/pitagorasTwo.svg" alt="Teorema pitagoras" className='rounded-3 revealing-image'/>

                                <p>En segundo lugar, notamos que una de las medidas se encuentra en centímetros y la otra en metros. Debido a esto, debemos convertirlas a una misma unidad, en este caso a metros. </p>

                                <img src="/img/pitagorasOne.svg" alt="Teorema pitagoras" className='rounded-3 revealing-image'/>

                                <p>Recordemos que la suma de los catetos al cuadrado es igual al cuadrado de la hipotenusa, en este caso desconocemos uno de los catetos, por lo que debemos alterar la ecuación.</p>

                                <p>La ecuación pasará de <Latex>{pitagorasExFirstOne}</Latex> <b>a:</b> <Latex>{pitagorasExFirstTwo}</Latex></p>

                                <p>Para hallar el cateto faltante, reemplazamos</p>  
                                <Latex>{pitagorasExFirstThree}</Latex><br />

                                <Latex>{pitagorasExFirstFour}</Latex><br />
                                <Latex>{pitagorasExFirstFive}</Latex><br />
                                <Latex>{pitagorasExFirstSix}</Latex><br />
                                <Latex>{pitagorasExFirstSeven}</Latex>
                            </div><br /><br />

                            <h5>N°2</h5>
                            <p>Si la hipotenusa de un triángulo rectángulo mide 4cm y uno de sus lados mide 2.5cm, ¿cuánto mide el otro cateto?</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#pitagorasExSecond">
                                    Solución
                                </button>
                            </p>
                            
                            <div className="collapse" id="pitagorasExSecond">
                                <p>Iniciamos graficando la situación</p>

                                <img src="/img/pitagorasThree.svg" alt="Teorema pitagoras" className='rounded-3 revealing-image'/>

                                <p>Ambas distancias al estar en la misma unidad, provoca que no sea necesario convertirlas a otra. Por otro lado, aplicamos el mismo procedimiento del ejercicio anterior.</p>

                                <p>La ecuación pasará de <Latex>{pitagorasExSecondOne}</Latex> <b>a:</b> <Latex>{pitagorasExSecondTwo}</Latex></p>

                                <p>Reemplazamos</p>  
                                <Latex>{pitagorasExSecondThree}</Latex><br />

                                <Latex>{pitagorasExSecondFour}</Latex><br />
                                <Latex>{pitagorasExSecondFive}</Latex><br />
                                <Latex>{pitagorasExSecondSix}</Latex><br />
                                <Latex>{pitagorasExSecondSeven}</Latex>
                            </div><br /><br />

                            <h5>N°3</h5>
                            <p>Calcule la hipotenusa de un triángulo rectángulo si las medidas de sus catetos son: 5cm y 6cm</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#pitagorasExThird">
                                    Solución
                                </button>
                            </p>
                            
                            <div className="collapse" id="pitagorasExThird">
                                <p>Iniciamos graficando la situación</p>

                                <img src="/img/pitagorasFour.svg" alt="Teorema pitagoras" className='rounded-3 revealing-image'/>

                                <p>Ambas distancias al estar en la misma unidad, provoca que no sea necesario convertirlas a otra. En este caso, aplica la fórmula original.</p>

                                <Latex>{pitagorasExThirdOne}</Latex>

                                <p>Reemplazamos</p>  
                                <Latex>{pitagorasExThirdTwo}</Latex><br />
                                <Latex>{pitagorasExThirdThree}</Latex><br />
                                <Latex>{pitagorasExThirdFour}</Latex><br />
                                <Latex>{pitagorasExThirdFive}</Latex><br />
                                <Latex>{pitagorasExThirdSix}</Latex>
                            </div>
                        </div>


                        <hr className="my-4"/>
                        <div>
                            <h3>Razones trigonométricas</h3>
                            <h5>N°1</h5>
                            <img src="/img/razonesTrigonometricasOne.svg" alt="Razones trigonométricas" className='rounded-3 revealing-image'/>

                            <p>
                                <button className="btn btn-secondary mt-3" type="button" data-bs-toggle="collapse" href="#razonesTrigonometricasOne">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="razonesTrigonometricasOne">
                                <p>Al encontrarnos ante un triángulo de este tipo, debemos analizar cuál razón trigonométrica podemos usar. Una vez realizado este paso, percibiremos que solo nos proporcionan el valor de la hipotenusa y el ángulo opuesto al cateto desconocido.</p>
                                <p>El método más directo y fácil es usar aquella razón trigonométrica que involucre cateto opuesto e hipotenusa, es decir, la razón Seno</p>
                                <p>Planteamos la igualdad</p>
                                <Latex>{razonesTrigonometricasExFirstOne}</Latex><br /><br />
                                <p>Reemplazamos</p>
                                <Latex>{razonesTrigonometricasExFirstTwo}</Latex><br /><br />
                                <p>Despejamos la <i>x</i></p>
                                <Latex>{razonesTrigonometricasExFirstThree}</Latex><br /><br />
                                <p>Resultado</p>
                                <Latex>{razonesTrigonometricasExFirstFour}</Latex>
                            </div><br /><br />

                            <h5>N°2</h5>
                            <img src="/img/razonesTrigonometricasTwo.svg" alt="Razones trigonométricas"  className='rounded-3'/>

                            <p>
                                <button className="btn btn-secondary mt-3" type="button" data-bs-toggle="collapse" href="#razonesTrigonometricasTwo">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="razonesTrigonometricasTwo">
                                <p>Nos piden hallar el ángulo theta, por lo que primero debemos indentificar la razón trigonométrica adecuada. En este caso la más apropiada es la razón Tangente, en vista que abarca el catet cateto opuesto y adyacente al ángulo.</p>

                                <p>Planteamos la igualdad</p>
                                <Latex>{razonesTrigonometricasExSecondOne}</Latex><br /><br />
                                <p>Reemplazamos</p>
                                <Latex>{razonesTrigonometricasExSecondTwo}</Latex><br /><br />
                                <p>Para despejar el ángulo, debemos usar la función inversa a la tangente, esta es, arcotangente o <Latex>{razonesTrigonometricasExSecondFive}</Latex>.</p>
                                <Latex>{razonesTrigonometricasExSecondThree}</Latex><br /><br />
                                <p>Resultado</p>
                                <Latex>{razonesTrigonometricasExSecondFour}</Latex>
                            </div>
                        </div>

                        <hr className="my-4"/>
                        <div>
                            <h3>Ley del seno</h3>
                            <img src="/img/leySenoPractice.svg" alt="Ley del seno practica" className='rounded-3 w-80 revealing-image' /><br /><br />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#leySeno">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="leySeno">
                                <p>Recordemos</p>
                                <Latex>{leySenoOne}</Latex><br /><br />
                                <p>Reemplazamos</p>
                                <Latex>{leySenoTwo}</Latex><br /><br />
                                <p>Despejamos el Seno del ángulo</p>
                                <Latex>{leySenoThree}</Latex><br /><br />
                                <p>Lo cual da como resultado:</p>
                                <Latex>{leySenoFour}</Latex><br /><br />
                                <p>Despejamos el ángulo</p>
                                <Latex>{leySenoFive}</Latex><br /><br />
                                <p>Resultado</p>
                                <Latex>{leySenoSix}</Latex>
                            </div>  

                        </div>

                        <hr className="my-4"/>
                        <div>
                            <h3>Ley del coseno</h3>
                            <img src="/img/leyCosenoPractica.svg" alt="Ley del coseno practica" className='rounded-3 mb-3 revealing-image' />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#leycoseno">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="leycoseno">
                                <p>Aplicamos la siguiente ecuación</p>
                                <Latex>{leyCosenoOne}</Latex><br /><br />
                                <p>Reemplazamos</p>
                                <Latex>{leyCosenoTwo}</Latex><br /><br />
                                <Latex>{leyCosenoThree}</Latex><br /><br />
                                <Latex>{leyCosenoFour}</Latex><br /><br />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
