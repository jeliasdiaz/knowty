import { Link } from "react-router-dom"

export const Trigonometria = () => {

    return (
        <div className="background">
            <img src="/img/waveThree.svg" alt="" />
            <div className="homeTrigonometria">
                <div className="textIntroducion shadow-lg">
                    <h1>Trigonometría</h1>
                </div>
                <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                    <ul className="pagination  pagination-md justify-content-center">
                        <li className="page-item shadow-lg"><Link to="/trigonometria_2" className="text-decoration-none page-link">II periodo</Link></li>

                        <li className="page-item shadow-lg"><Link to="/trigonometria" className="text-decoration-none page-link" >III periodo</Link></li>

                    </ul>
                </nav>
                <div className="cardTrigonometria mb-5 shadow" data-aos="zoom-in" data-aos-duration="900">
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
                        <h2>Teorema del y coseno</h2>
                        <p>Para comprender el teorema del seno y coseno, es menester aclarar que para resolver triángulos rectángulos, debías hacer uso de las razones trigonométricas. En este caso, mediante la ley del seno y coseno, podrás resolver triángulos diferentes a los rectángulos.</p>

                        <h2>Ley del seno</h2>
                        <p>
                            La usamos cuando en un triángulo, nos dan una pareja y un lado cualquiera. Dicho de otro modo, cuando poseemos el valor de un ángulo y su lado opuesto. <br /> <br /> De igual forma, hacemos uso de esta ley al poseer el valor dos lados y un ángulo opuesto a ellos.

                            Por ejemplo: <br />
                            <img src="/img/leySenoEjemplo.png" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma:
                            <br />
                            <img src="/img/leySenoEjemplo1.svg" alt="" /><br /><br />
                            Despejando la incognita <b>x</b> queda de la siguiente forma: <br />
                            <img src="/img/leySenoEjemplo2.svg" alt="" /><br /><br />

                            El otro caso radica en tener el valor de dos lados y un ángulo opuesto a ellos. <br />
                            Por ejemplo: <br />
                            <img src="/img/leySenoEjemplo4.png" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma: <br />
                            <img src="/img/leySenoEjemplo5.svg" alt="" /><br /><br />
                            Despejando para hallar el ángulo, queda de la siguiente forma: <br />
                            <img src="/img/leySenoEjemplo6.svg" alt="" /><br /><br />
                            Usamos arcoseno (sen <sup>-1</sup>) para "cancelar" el seno al lado de theta, de forma que el resultado es: <br />
                            <img src="/img/leySenoEjemplo7.svg" alt="" /><br /><br />

                            <button className="btn btn-secondary"><a href="https://youtu.be/8T45M-Kv88I" className="text-decoration-none text-white">Profundizar</a></button> <br /> <br />
                        </p>
                        <h2>Ley del coseno</h2>
                        <p>
                            La usamos cuando en un triángulo, conocemos dos lados y el ángulo formado entre ellos. De igual forma, hacemos uso de esta ley al poseer el valor de todos los lados.
                            Por ejemplo: <br />
                            <img src="/img/leyCosenoEjemplo.png" alt="" className="w-50" /> <br />
                            Definimos las razones de la siguiente forma:
                            <br />
                            <img src="/img/leyCosenoEjemplo1.svg" alt="" /><br /><br />
                            Aplicamos raiz cuadrada a ambos lados para eliminar la potencia que posee la x.
                            <br /><br />
                            El otro caso, radica en tener el valor de todos los lados. <br />
                            Por ejemplo: <br />
                            <img src="/img/leyCosenoEjemplo2.png" alt="" className="w-50" /><br />
                            Definimos las razones de la siguiente forma: <br />
                            <img src="/img/leyCosenoEjemplo3.svg" alt="" /><br /><br />

                            <button className="btn btn-secondary"><a href="https://youtu.be/BALWWfhnvVc" className="text-decoration-none text-white">Profundizar</a></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
