import Latex from "react-latex"
import { SectionTitle, TopWave } from "../../components";

export const AnglesAndProperties = () => {

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

    return (
        <div className="homeCard">
            <TopWave />
            <div className="homeTrigonometria">
                <SectionTitle title="Ángulos y sus propiedades" />


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
                </div>
            </div>
        </div>
    )
}
