import Latex from "react-latex"
import { TrigonometryNav } from "./TrigonometryNav"
import { SectionTitle } from "../../components/SectionTitle";
import CollapseTitle from "../../components/CollapseTitle";
import MoreBtn from "../../components/MoreBtn";
import TopWave from "../../components/TopWave";

export const ThirdTrigonometryPeriod = () => {

    const senUnitaria = `$$\\textsf{Sen}(\\theta) = y$$`
    const cosUnitaria = `$$\\textsf{Cos}(\\theta) = x$$`
    const tanUnitaria = `$$\\textsf{Tan}(\\theta) = \\frac{y}{x}$$`
    const cotUnitaria = `$$\\textsf{Cot}(\\theta) = \\frac{x}{y}$$`
    const secUnitaria = `$$\\textsf{Sec}(\\theta) = \\frac{1}{x}$$`
    const cosecUnitaria = `$$\\textsf{Cosec}(\\theta) = \\frac{1}{y}$$`

    const radioCircunferencia = `$$\\textsf{r} =\\sqrt{x^2 \\ + \\ y^2}$$`
    const senCircunferencia = `$$\\textsf{Sen}(\\theta) = \\frac{y}{r}$$`
    const cosCircunferencia = `$$\\textsf{Cos}(\\theta) = \\frac{x}{r}$$`
    const tanCircunferencia = `$$\\textsf{Tan}(\\theta) = \\frac{y}{x}$$`
    const cotCircunferencia = `$$\\textsf{Cot}(\\theta) = \\frac{x}{y}$$`
    const secCircunferencia = `$$\\textsf{Sec}(\\theta) = \\frac{r}{x}$$`
    const cosecCircunferencia = `$$\\textsf{Cosec}(\\theta) = \\frac{r}{y}$$`

    const leySenoOne = `$$\\large \\frac{20}{sen(80)} = \\frac{x}{sen(40)}$$`
    const leySenoTwo = `$$\\large \\frac{20 \\ \\cdot \\ sen(40)}{sen(80)}$$`
    const leySenoThree = `$$x = 13.05$$`
    const leySenoFour = `$$\\large \\frac{sen(80)}{30} =  \\frac{sen(θ)}{15}$$`
    const leySenoFive = `$$arcsin \\large (\\frac{sen(80) \\ \\cdot \\ 15}{30}) = \\small sen(θ)$$`
    const leySenoSix = `$$\\large \\frac{sen(80) \\ \\cdot \\ 15}{30} =  θ$$`
    const leySenoSeven = `$$θ = 29.49°$$`

    const leyCosenoOne = `$$x^2 = a^2 + b^2  - 2ab \\ \\cdot \\ cos(θ)$$`
    const leyCosenoTwo = `$$x^2 = 10^2 + 5^2 - 2 \\ \\cdot \\ 10 \\ \\cdot \\ 5 \\ \\cdot \\ cos(75°)$$`
    const leyCosenoThree = `$$\\sqrt{x} = \\sqrt{10^2 + 5^2 - 2 \\ \\cdot \\ 10 \\ \\cdot \\ 5 \\ \\cdot \\ cos(75°)}$$`
    const leyCosenoFour = `$$x = 9.95$$`
    const leyCosenoFive = `$$\\large \\frac{a^2  \\ + \\ b^2 \\ - \\ c^2}{- 2bc}$$`
    const leyCosenoSix = `$$arccos \\large (\\frac{20^2 \\ + \\ 10^2  \\ - \\ 18^2}{2 \\ \\cdot \\ 20 \\ \\cdot \\ 10}) = \\normalsize cos(θ)$$`
    const leyCosenoSeven = `$$\\large \\frac{20^2 \\ + \\ 10^2 \\ - \\ 18^2}{2 \\ \\cdot \\ 20 \\ \\cdot \\ 10} = θ$$`
    const leyCosenoEight = `$$63.89 = θ$$`

    return (
        <div className="homeCard">
            <TopWave />
            <div className="homeTrigonometria">
                <SectionTitle title="Trigonometría" />

                <TrigonometryNav />

                <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                    <div>
                        <h3>Angulos coterminales</h3>
                        <p>Son ángulos que comienzan y terminan en el mismo lugar en un círculo. Por ejemplo, un ángulo de 30 grados y otro de 390 grados son lo mismo, puesto que ambos comienzan y terminan en el mismo punto.</p>
                        <hr />
                    </div>

                    <div>
                        <h3>Razones trigonométricas en la circunferencia unitaria</h3>
                        <p><Latex>{senUnitaria}</Latex></p>
                        <p><Latex>{cosUnitaria}</Latex></p>
                        <p><Latex>{tanUnitaria}</Latex></p>
                        <p><Latex>{cotUnitaria}</Latex></p>
                        <p><Latex>{secUnitaria}</Latex></p>
                        <p><Latex>{cosecUnitaria}</Latex> </p>
                        <hr />
                        <h3>Razones trigonométricas en la circunferencia</h3>
                        <p><Latex>{radioCircunferencia}</Latex></p>
                        <p><Latex>{senCircunferencia}</Latex></p>
                        <p><Latex>{cosCircunferencia}</Latex></p>
                        <p><Latex>{tanCircunferencia}</Latex></p>
                        <p><Latex>{cotCircunferencia}</Latex></p>
                        <p><Latex>{secCircunferencia}</Latex></p>
                        <p><Latex>{cosecCircunferencia}</Latex></p>
                        <hr />
                    </div>

                    <div>
                        <h3>Ángulos de referencia</h3>
                        <p>
                            Forma de conocer la posición de un ángulo en un plano cartesiano. <br /> <br />

                            Para calcular un ángulo de referencia (θ) en el segundo cuadrante tenemos la siguiente fórmula: θ = 180° - a <br /> <br />

                            Para calcularlo en el tercer cuadrante: θ = a - 180° <br /> <br />

                            Para calcularlo en el cuarto cuadrante: θ = 360° - a
                        </p><br />

                        <h5>Extra</h5>
                        <p>Un ángulo está en posición normal si su vértice coincide con el origen del plano cartesiano (0,0) y su lado inicial está en el eje positivo de las abscisas (x)</p>
                        <hr />
                    </div>



                    <div>
                        <h3>Teorema del seno y coseno</h3>
                        <p>Son un conjunto de relaciones que se utilizan para calcular ángulos y lados de un triángulo, especialmente útiles para triángulos que no son rectángulos. Con el teorema del seno y coseno se pueden calcular los lados de un triángulo rectángulo si se conoce un lado y algún ángulo. De igual forma, se pueden calcular los ángulos si se conocen los tres lados del triángulo.</p>

                        <CollapseTitle name="Ley del seno" id="#LeySeno" />
                        <div className="collapse" id="LeySeno">
                            <p>
                                La usamos cuando en un triángulo nos dan una pareja y un lado cualquiera. Dicho de otro modo, cuando poseemos el valor de un ángulo y su lado opuesto. <br /> <br /> De igual forma, hacemos uso de esta ley al poseer el valor dos lados y un ángulo opuesto a ellos.

                                Por ejemplo: <br />
                                <img src="/img/leySenoEjemplo.svg" alt="Ley del seno ejemplo" className="w-50 rounded-3" /><br />
                                Definimos las razones de la siguiente forma:
                                <br /><br />
                                <Latex>{leySenoOne}</Latex><br /><br />
                                Despejando la incognita <b>x</b> queda de la siguiente forma: <br /><br />
                                <Latex>{leySenoTwo}</Latex><br /><Latex>{leySenoThree}</Latex><br /><br />

                                El otro caso radica en tener el valor de dos lados y un ángulo opuesto a ellos. <br />
                                Por ejemplo: <br />
                                <img src="/img/leySenoEjemplo4.svg" alt="" className="w-50 rounded-3" /><br />
                                Definimos las razones de la siguiente forma: <br />
                                <Latex>{leySenoFour}</Latex><br /><br />
                                Despejando para hallar el ángulo, queda de la siguiente forma: <br />
                                <Latex>{leySenoFive}</Latex><br /><br />
                                Usamos arcoseno (sen <sup>-1</sup>) para "cancelar" el seno al lado de theta, de forma que el resultado es: <br />
                                <Latex>{leySenoSix}</Latex><br /><Latex>{leySenoSeven}</Latex><br /><br />

                                <MoreBtn url="https://youtu.be/8T45M-Kv88I" />
                            </p>
                        </div>
                        <hr />

                        <CollapseTitle name="Ley del coseno" id="#LeyCoseno" />
                        <div className="collapse" id="LeyCoseno">
                            <p>
                                La usamos cuando en un triángulo conocemos dos lados y el ángulo formado entre ellos. De igual forma, hacemos uso de esta ley al poseer el valor de todos los lados.
                                Por ejemplo: <br />
                                <img src="/img/leyCosenoEjemplo.svg" alt="Ley del coseno ejemplo uno" className="w-50 rounded-3" /> <br />
                                Definimos las razones de la siguiente forma:
                                <br />
                                <Latex>{leyCosenoOne}</Latex><br />
                                <Latex>{leyCosenoTwo}</Latex><br />
                                <Latex>{leyCosenoThree}</Latex><br />
                                <Latex>{leyCosenoFour}</Latex><br /><br />
                                Aplicamos raiz cuadrada a ambos lados para eliminar la potencia que posee la x.
                                <br /><br />
                                Otra posibilidad, radica en tener el valor de todos los lados.
                                Por ejemplo: <br />
                                <img src="/img/leyCosenoEjemplo2.svg" alt="Ley del coseno ejemplo dos" className="w-50 rounded-3" /><br />
                                Definimos las razones de la siguiente forma: <br />
                                <Latex>{leyCosenoFive}</Latex><br /><br />
                                <Latex>{leyCosenoSix}</Latex><br /><br />
                                <Latex>{leyCosenoSeven}</Latex><br /><br />
                                <Latex>{leyCosenoEight}</Latex><br />

                            </p>
                            <MoreBtn url="https://youtu.be/BALWWfhnvVc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
