import Latex from "react-latex"
import { TrigonometryNav } from "./TrigonometryNav"

export const ThirdTrigonometryPeriod = () => {

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
        <div className="background">
            <img src="/img/waveThree.svg" alt="" />
            <div className="homeTrigonometria">
                <div className="textIntroducion shadow-lg">
                    <h1>Trigonometría</h1>
                </div>
                
                <TrigonometryNav/>

                <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                    <div>
                        <h2>Angulos coterminales</h2>
                        <p>Para conocer si dos o más ángulos son coterminales, se debe sumar o restar 360° al ángulo que poseemos</p>
                        <hr />
                    </div>

                    <div>
                        <h2>Razones trigonométricas en la circunferencia unitaria</h2>
                        <code>Sen a = y <br /> cos a = x <br /> tan a = y/x <br /> cot a = x/y <br /> sec a = 1/x <br /> cosec a = 1/y</code>
                        <hr />
                        <h2>Razones trigonométricas en la circunferencia</h2>
                        <code> r = √x^2 + y^2<br /> Sen a = y/r <br /> cos a = x/r <br /> tan a = y/x <br /> cot a = x/y <br /> sec a = r/x <br /> cosec a = r/y</code>
                        <hr />
                    </div>

                    <div>
                        <h2>Ángulos de referencia</h2>
                        <p>Para calcular un ángulo de referencia (θ) en el segundo cuadrante tenemos la siguiente fórmula: θ = 180° - a <br /> <br />

                            Para calcularlo en el tercer cuadrante: θ = a - 180° <br /> <br />

                            Para calcularlo en el cuarto cuadrante: θ = 360° - a
                        </p>
                        <hr />
                    </div>

                    <div>
                        <h3>Extra</h3>
                        <p>Un ángulo está en posición normal si su vértice coincide con el origen del plano cartesiano (0,0) y su lado inicial está en el eje positivo de las abscisas (x)</p>
                        <hr />
                    </div>

                    <div>
                        <h2>Teorema del seno y coseno</h2>
                        <p>Para comprender el teorema del seno y coseno, es menester aclarar que para resolver triángulos rectángulos, debías hacer uso de las razones trigonométricas. En este caso, mediante la ley del seno y coseno, podrás resolver triángulos diferentes a los rectángulos.</p>

                        <h2>Ley del seno</h2>
                        <p>
                            La usamos cuando, en un triángulo, nos dan una pareja y un lado cualquiera. Dicho de otro modo, cuando poseemos el valor de un ángulo y su lado opuesto. <br /> <br /> De igual forma, hacemos uso de esta ley al poseer el valor dos lados y un ángulo opuesto a ellos.

                            Por ejemplo: <br />
                            <img src="/img/leySenoEjemplo.svg" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma:
                            <br /><br />
                            <Latex>{leySenoOne}</Latex><br /><br />
                            Despejando la incognita <b>x</b> queda de la siguiente forma: <br /><br />
                            <Latex>{leySenoTwo}</Latex><br /><Latex>{leySenoThree}</Latex><br /><br />

                            El otro caso radica en tener el valor de dos lados y un ángulo opuesto a ellos. <br />
                            Por ejemplo: <br />
                            <img src="/img/leySenoEjemplo4.svg" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma: <br />
                            <Latex>{leySenoFour}</Latex><br /><br />
                            Despejando para hallar el ángulo, queda de la siguiente forma: <br />
                            <Latex>{leySenoFive}</Latex><br /><br />
                            Usamos arcoseno (sen <sup>-1</sup>) para "cancelar" el seno al lado de theta, de forma que el resultado es: <br />
                            <Latex>{leySenoSix}</Latex><br /><Latex>{leySenoSeven}</Latex><br /><br />

                            <button className="btn btn-secondary"><a href="https://youtu.be/8T45M-Kv88I" className="text-decoration-none text-white">Profundizar</a></button> <br /> <br />
                        </p>
                        <h2>Ley del coseno</h2>
                        <p>
                            La usamos cuando en un triángulo conocemos dos lados y el ángulo formado entre ellos. De igual forma, hacemos uso de esta ley al poseer el valor de todos los lados.
                            Por ejemplo: <br />
                            <img src="/img/leyCosenoEjemplo.svg" alt="" className="w-50" /> <br />
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
                            <img src="/img/leyCosenoEjemplo2.svg" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma: <br />
                            <Latex>{leyCosenoFive}</Latex><br /><br />
                            <Latex>{leyCosenoSix}</Latex><br /><br />
                            <Latex>{leyCosenoSeven}</Latex><br /><br />
                            <Latex>{leyCosenoEight}</Latex><br />
                
                            
                            <br /><br />

                            <button className="btn btn-secondary"><a href="https://youtu.be/BALWWfhnvVc" className="text-decoration-none text-white">Profundizar</a></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
