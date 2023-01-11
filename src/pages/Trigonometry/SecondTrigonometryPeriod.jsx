import Latex from "react-latex"
import { TrigonometryNav } from "./TrigonometryNav"
import { SectionTitle } from "../../components/SectionTitle";
import CollapseTitle from "../../components/CollapseTitle";
import MoreBtn from "../../components/MoreBtn";
import TopWave from "../../components/TopWave";

export const SecondTrigonometryPeriod = () => {

    const pitagorasOne = `$$c^2 = a^2 + b^2$$`
    const pitagorasTwo = `$$c = \\sqrt{a^2 + b^2}$$`
    const pitagorasThree = `$$\\sqrt{c^2 - b^2 = a}$$`

    const seno = `$$\\large \\frac{\\textsf{Cateto \\ opuesto}}{ \\textsf{Hipotenusa}}$$`
    const coseno = `$$\\large  \\frac{\\textsf{Cateto \\ adyacente}}{\\textsf{Hipotenusa}}$$`
    const tan = `$$\\large  \\frac{\\textsf{Cateto \\ opuesto}}{\\textsf{Cateto \\ adyacente}}$$`
    const cotan = `$$\\large  \\frac{\\textsf{Cateto \\ adyacente}}{\\textsf{Cateto \\ opuesto}}$$`
    const sec = `$$\\large  \\frac{\\textsf{Hipotenusa}}{\\textsf{Cateto \\ adyacente}}$$`
    const cosec = `$$\\large  \\frac{\\textsf{Hipotenusa}}{\\textsf{Cateto \\ opuesto}}$$`

    const sen30 = `$$ \\frac{1}{2}$$`
    const cos30 = `$$ \\frac{\\sqrt{3}}{2}$$`
    const tan30 = `$$ \\frac{\\sqrt{3}}{3}$$`
    const cot30 = `$$ \\sqrt{3}$$`
    const sec30 = `$$ \\frac{2 \\sqrt{3}}{3}$$`
    const cosec30 = `$$2$$`

    const sen45 = `$$ \\frac{\\sqrt{2}}{2}$$`
    const cos45 = `$$ \\frac{\\sqrt{2}}{2}$$`
    const tan45 = `$$ 1$$`
    const cot45 = `$$ 1$$`
    const sec45 = `$$ \\sqrt{2}$$`
    const cosec45 = `$$ \\sqrt{2}$$`

    const sen60 = `$$ \\frac{\\sqrt{3}}{2}$$`
    const cos60 = `$$ \\frac{1}{2}$$`
    const tan60 = `$$ \\sqrt{3}$$`
    const cot60 = `$$ \\frac{\\sqrt{3}}{3}$$`
    const sec60 = `$$ 2$$`
    const cosec60 = `$$\\frac{2 \\sqrt{3}}{3}$$`

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Trigonometría" />

            <TrigonometryNav />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <CollapseTitle name="Clasificación de triángulos" id="#clasificacionTriangulos" />
                        <div className="collapse" id="clasificacionTriangulos">
                            <h2>Clasificación de triángulos</h2>
                            <img src="/img/trianguloEquilatero.svg" alt="Triangulo equilatero" className="w-25 rounded-3" />
                            <p><b>Equilatero:</b> todos sus lados poseen la misma medida.</p>

                            <img src="/img/trianguloIsoceles.svg" alt="Triangulo isoceles" className="w-25 rounded-3" />
                            <p><b>Isóceles:</b> Dos de sus lados poseen la misma medida.</p>

                            <img src="/img/trianguloEscaleno.svg" alt="Triangulo escaleno" className="w-25 rounded-3" />
                            <p><b>Escaleno:</b> La medida de todos sus lados es diferente.</p>

                            <img src="/img/trianguloAcutangulo.svg" alt="Triangulo acutangulo" className="w-25 rounded-3" />
                            <p><b>Acutángulo:</b> Todos sus ángulos internos son agudos(menores a 90°) </p>

                            <img src="/img/trianguloObtuso.svg" alt="Triangulo obtuso" className="w-25 rounded-3" />
                            <p><b>Obtusángulo:</b> Posee un ángulo obtuso (mayor a 90° y menor a 180°)</p>

                            <img src="/img/trianguloRectangulo.svg" alt="Triangulo rectangulo" className="w-25 rounded-3" />
                            <p><b>Rectángulo:</b> Posee un ángulo recto (90°)</p>

                            <h3>Nota</h3>
                            <ul>
                                <li>La sumatoria de los ángulos internos de un triángulo es 180°</li>
                                <li>El ángulo de mayor longitud se opone al ángulo de mayor valor y viceversa.</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <CollapseTitle name="Teorema de Pitágoras" id="#teoremaPitagoras" />
                        <div className="collapse" id="teoremaPitagoras">
                            <p>Establece que en cualquier triángulo rectángulo la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa. De igual forma, Es usado en triángulos rectángulos con el objetivo de hallar la medida de un cateto o hipotenusa. Para ello, debemos conocer la medida de dos de sus lados.</p>
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
                    </div>
                    <hr />
                    <div>
                        <CollapseTitle name="Razones trigonométricas" id="#razonesTrigonometricas" />
                        <div className="collapse" id="razonesTrigonometricas">
                            <p>Son la base de la trigonometría. Ante todo, una razón consiste en la relación de dos valores. Teniendo esto en cuenta, las razones trigonométricas no son más que relaciones entre los valores de las longitudes de los lados de un triángulo rectángulo. Las 6 razones trigonométricas son las siguientes:</p>

                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <Latex>{seno}</Latex><br /><br />
                                        <Latex>{coseno}</Latex><br /><br />
                                        <Latex>{tan}</Latex><br /><br />
                                    </div>
                                    <div className="col-6">
                                        <Latex>{cotan}</Latex><br /><br />
                                        <Latex>{sec}</Latex><br /><br />
                                        <Latex>{cosec}</Latex><br /><br />
                                    </div>
                                </div>
                            </div>

                            <MoreBtn url="https://youtu.be/wSw1CzVtuQk?list=PLVkfzhBCZCW172VWuZUrqztV_nTLTazk0" />
                            <br /><br />
                            <h3>Razones trigonométricas para ángulos notables</h3>
                            <table className="table table-bordered table-hover text-end">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">30°</th>
                                        <th scope="col">45°</th>
                                        <th scope="col">60°</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-start">Sen</th>
                                        <td><Latex>{sen30}</Latex></td>
                                        <td><Latex>{sen45}</Latex></td>
                                        <td><Latex>{sen60}</Latex></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-start">Cos</th>
                                        <td><Latex>{cos30}</Latex></td>
                                        <td><Latex>{cos45}</Latex></td>
                                        <td><Latex>{cos60}</Latex></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-start">Tan</th>
                                        <td><Latex>{tan30}</Latex></td>
                                        <td><Latex>{tan45}</Latex></td>
                                        <td><Latex>{tan60}</Latex></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-start">Cot</th>
                                        <td><Latex>{cot30}</Latex></td>
                                        <td><Latex>{cot45}</Latex></td>
                                        <td><Latex>{cot60}</Latex></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-start">Sec</th>
                                        <td><Latex>{sec30}</Latex></td>
                                        <td><Latex>{sec45}</Latex></td>
                                        <td><Latex>{sec60}</Latex></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-start">Cosec</th>
                                        <td><Latex>{cosec30}</Latex></td>
                                        <td><Latex>{cosec45}</Latex></td>
                                        <td><Latex>{cosec60}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
