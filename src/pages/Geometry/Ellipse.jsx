import Latex from "react-latex"
import { GeometryNav } from "./GeometryNav"

const Ellipse = () => {
    
    const elipseOne = `$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$`
    const elipseTwo = `$$ LR = \\frac{2 * b^2}{a}$$`
    const elipseThree = `$$e = \\frac{c}{a}$$`
    const elipseFour = `$$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$$`
    const elipseFive = `$$\\frac{2*3^2}{5} = 3.6$$`
    const elipseSix = `$$\\frac{(x-h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1$$`

    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Elipse</h1>
            </div>
            
            <GeometryNav/>

            <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h2>Ecuación de la elipse con vértice en (0, 0)</h2>
                    <Latex>{elipseOne}</Latex>
                    <p>
                        a = distancia del centro al vértice del eje mayor <br />
                        b = distancia del centro al vértice del eje menor <br />
                        c = distancia del centro al vértice de uno de los focos
                    </p>

                    <Latex>{elipseTwo}</Latex><br />
                    <img src="/img/excentricidadElipse.svg" alt="" />
                    <Latex>{elipseThree}</Latex>

                    <p>Ejemplo</p>
                    <p>
                    <Latex>{elipseFour}</Latex>
                        a = 5 <br />
                        b = 3 <br />
                        c = √5² - 3² = 4
                    </p>
                    <p>LR (lado recto) =</p>
                    <Latex>{elipseFive}</Latex>

                    <hr />
                </div>
                <div>
                    <h2>Ecuación de la elipse con vértice en (h, k)</h2>
                    <Latex>{elipseSix}</Latex>
                </div>
            </div>
        </div>
    )
}

export default Ellipse