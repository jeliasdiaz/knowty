import Latex from "react-latex"
import { GeometryNav } from "./GeometryNav"
import { SectionTitle } from "../../components/SectionTitle";

const Straight = () => {

    const distanciaPuntos = `$$d(P, Q) =  \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$`
    const distanciaPuntosEjemplo = `$$d(P, Q) = \\sqrt{(-2 - 4)^2 + (-1 - 6)^2 } = \\sqrt{85} = 9.21$$`
    const puntoMedio = `$$(\\frac{x_1 \\ + \\ x_2}{2}, (\\frac{y_1 \\ + \\ y_2}{2})$$`
    const puntoMedioEjemplo = `$$(\\frac{4 \\ + \\  (-2)}{2}, (\\frac{6 \\ + \\ (-2)}{2}) = (1, 2)$$`
    const inclinacionPendiente = `$$m = (\\frac{y_2 \\ - \\ y_1} {x_2 \\ - \\ x_1})$$`
    const ecuacionRecta = `$$y = mx \\ + \\ b$$`
    const ecuacionGeneralRecta = `$$A_x \\ + \\ B_y \\ + \\ C = 0$$`

    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Recta"/>
            
            <GeometryNav/>

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

export default Straight