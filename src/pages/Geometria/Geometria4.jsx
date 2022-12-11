import { Link } from "react-router-dom"
import Latex from "react-latex"

const Geometria1 = () => {
    
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
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/geometria_1" className="text-decoration-none page-link">Recta</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria_2" className="text-decoration-none page-link">Circunferencia</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria" className="text-decoration-none page-link">Parábola</Link></li>

                    <li className="page-item shadow-lg"><Link to="/geometria_4" className="text-decoration-none page-link">Elipse</Link></li>
                </ul>
            </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="zoom-in" data-aos-duration="900">
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

export default Geometria1