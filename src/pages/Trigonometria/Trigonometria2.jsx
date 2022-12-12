import Latex from "react-latex"
import { Link } from "react-router-dom"

export const Trigonometria2 = () => {
    
    const pitagorasOne = `$$c^2 = a^2 + b^2$$`
    const pitagorasTwo = `$$c = \\sqrt{a^2 + b^2}$$`
    const pitagorasThree = `$$\\sqrt{c^2 - b^2 = a}$$`

    const seno = `$$\\frac{Cateto \\ opuesto}{Hipotenusa}$$`
    const coseno = `$$\\frac{Cateto \\ adyacente}{Hipotenusa}$$`
    const tan = `$$\\frac{Cateto \\ opuesto}{Cateto \\ adyacente}$$`
    const cotan = `$$\\frac{Cateto \\ adyacente}{Cateto \\ opuesto}$$`
    const sec = `$$\\frac{Hipotenusa}{Cateto \\ adyacente}$$`
    const cosec = `$$\\frac{Hipotenusa}{Cateto \\ opuesto}$$`

    return (
        <div className="homeTrigonometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Trigonometría</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                    <ul className="pagination  pagination-md justify-content-center">
                        <li className="page-item shadow-lg"><Link to="/trigonometria_2" className="text-decoration-none page-link">II periodo</Link></li>

                        <li className="page-item shadow-lg"><Link to="/trigonometria" className="text-decoration-none page-link" >III periodo</Link></li>
                        
                        <li className="page-item shadow-lg"><Link to="/trigonometria-practica" className="text-decoration-none page-link">Practica</Link></li>

                    </ul>
                </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="zoom-in" data-aos-duration="900">
                <div>
                    <div>
                        <div >
                            <h2>Clasificación de triángulos</h2>
                            <img src="/img/trianguloEquilatero.svg" alt="" className="w-25" />
                            <p><b>Equilatero:</b> todos sus lados poseen la misma medida.</p>

                            <img src="/img/trianguloIsoceles.svg" alt="" className="w-25" />
                            <p><b>Isóceles:</b> Dos de sus lados poseen la misma medida.</p>

                            <img src="/img/trianguloEscaleno.svg" alt="" className="w-25" />
                            <p><b>Escaleno:</b> La medida de todos sus lados es diferente.</p>

                            <img src="/img/trianguloAcutangulo.svg" alt="" className="w-25" />
                            <p><b>Acutángulo:</b> Todos sus ángulos internos son agudos(menores a 90°) </p>

                            <img src="/img/trianguloObtuso.svg" alt="" className="w-25" />
                            <p><b>Obtusángulo:</b> Posee un ángulo obtuso (mayor a 90° y menor a 180°</p>

                            <img src="/img/trianguloRectangulo.svg" alt="" className="w-25" />
                            <p><b>Rectángulo:</b> Posee un ángulo recto (90°)</p>

                            <h3>Nota</h3>
                            <ul>
                                <li>La sumatoria de los ángulos internos de un triángulo es 180°</li>
                                <li>El ángulo de mayor longitud se opone al ángulo de mayor valor y viceversa.</li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h2>Teorema de Pitágoras</h2>
                            <p>Establece que en cualquier triángulo rectángulo la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa. De igual forma, Es usado en triángulos reactángulos con el objetivo de hallar la medida de un cateto o hipotenusa. Para ello, debemos conocer la medida de dos de sus lados.</p>
                            <Latex>{pitagorasOne}</Latex>
                            <p>
                                c = hipotenusa (lado más largo) <br />
                                a = cateto <br />
                                b = cateto
                            </p>
                            <p>Por lo tanto, si queremos hallar <i>c</i>, la ecuación queda de la siguiente forma:</p>
                            <Latex>{pitagorasTwo}</Latex><br /><br />

                            <p>Aplicado a cualquier cateto reemplazando <i>a</i> por <i>b</i> y viceversa:</p>
                            <Latex>{pitagorasThree}</Latex>
                        </div>
                        <hr />
                        <div>
                            <h2>Razones trigonométricas</h2>
                            <p>Son la base de la trigonometría. En primer lugar, una razón consiste en la relación de dos valores. Teniendo esto en cuenta, las razones trigonométricas no son más que relaciones entre los valores de las longitudes de los lados de un triángulo rectángulo. Las 6 razones trigonométricas son las siguientes:</p>
                            
                            <Latex>{seno}</Latex><br /><br />
                            <Latex>{coseno}</Latex><br /><br />
                            <Latex>{tan}</Latex><br /><br />
                            <Latex>{cotan}</Latex><br /><br />
                            <Latex>{sec}</Latex><br /><br />
                            <Latex>{cosec}</Latex><br /><br />

                            <button className="btn btn-secondary"><a href="https://youtu.be/wSw1CzVtuQk?list=PLVkfzhBCZCW172VWuZUrqztV_nTLTazk0" className="text-decoration-none text-white">Profundizar</a></button><br /><br />
                            <br /><br />
                            <h3>Razones trigonométricas para ángulos notables</h3>
                            <img src="/img/razonesNotables.svg" alt="" className="quimicaEcuacion" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
