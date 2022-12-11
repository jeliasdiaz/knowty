import Latex from "react-latex"
import { Link } from "react-router-dom"
const Geometria1 = () => {

    const canonicaCircunferencia = `$$r = \\sqrt{(x - h)^2 + (y - k)^2}$$`
    const generalCircunferencia = `$$r = \\sqrt{(x - c_1)^2 + (y - c_2)^2}$$`

    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Circunferencia</h1>
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
                    <h2>Ecación canónica de la circunferencia con centro (h, k)</h2>
                    <Latex>{canonicaCircunferencia}</Latex><br /><br />
                    
                    <h2>Ecuación general de la circunferencia</h2>
                    <Latex>{generalCircunferencia}</Latex>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Geometria1