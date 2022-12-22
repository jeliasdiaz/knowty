import Latex from "react-latex"
import { Link } from "react-router-dom"

const Geometria1 = () => {

    const distanciaPuntos = `$$d(P, Q) =  \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$`
    const distanciaPuntosEjemplo = `$$d(P, Q) = \\sqrt{(-2 - 4)^2 + (-1 - 6)^2 } = \\sqrt{85} = 9.21$$`
    const puntoMedio = `$$(\\frac{x_1 + x_2}{2}, (\\frac{y_1 + y_2}{2})$$`
    const puntoMedioEjemplo = `$$(\\frac{4 +  (-2)}{2}, (\\frac{6 + (-2)}{2}) = (1, 2)$$`
    const inclinacionPendiente = `$$m = (\\frac{y_2 - y_1} {x_2 - x_1})$$`
    const ecuacionRecta = `$$y = mx  + b$$`
    const ecuacionGeneralRecta = `$$A_x + B_y + C = 0$$`

    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Recta</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/geometria_1" className="text-decoration-none page-link">Recta</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria_2" className="text-decoration-none page-link">Circunferencia</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria" className="text-decoration-none page-link">Parábola</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria_4" className="text-decoration-none page-link">Elipse</Link></li>
                </ul>
            </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h2>Distancia entre dos puntos</h2>
                    <p>Está determinada mediante la expresión:</p>
                    <Latex>{distanciaPuntos}</Latex><br /> <br />
                    <p>Ejemplo: Halla la distancia entre los puntos A(4, 6) y B(-2, -1)</p>
                    <Latex>{distanciaPuntosEjemplo}</Latex>
                    <hr />
                </div>

                <div>
                    <h2>Punto medio de un segmento</h2>
                    <Latex>{puntoMedio}</Latex><br /> <br />
                    <p>Ejemplo, halle el punto medio entre los puntos  A(4, 6) y B(-2, -2)</p>
                    <Latex>{puntoMedioEjemplo}</Latex>
                    <hr />
                </div>

                <div>
                    <h2>Inclinación y pendiente</h2>
                    <Latex>{inclinacionPendiente}</Latex>
                    <hr />
                </div>

                <div>
                    <h2>Ecuación de la recta</h2>
                    <Latex>{ecuacionRecta}</Latex>
                    <hr />
                </div>

                <div>
                    <h2>Ecuación general de la recta</h2>
                    <Latex>{ecuacionGeneralRecta}</Latex>
                </div>
            </div>
        </div>
    )
}

export default Geometria1