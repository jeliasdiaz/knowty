import { Link } from "react-router-dom"

export const Geometria = () => {

    
    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Parábola</h1>
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
                    <h2>Ecuación de la parábola con vértice en (0,0)</h2>
                    <h5>Eje de simetría X:</h5>
                    <p>
                        y<sup>2</sup> = 4Px <br />
                    </p>

                    <p>Si P (distancia focal) es negativa la parábola se inclina a la izquierda. <br />

                        Si P es positiva la parábola se inclina a la derecha. </p>

                    <h5>Eje de simetría Y:</h5>
                    <p>Si P (distancia focal) es negativa la parábola se inclina hacia abajo. <br />

                        Si P es positiva la parábola se inclina hacia arriba. </p>
                        <p>
                        x<sup>2</sup> = 4Py <br />
                    </p>
                    <hr />
                </div>
                <div>
                    <h2>Ecuación de la parábola con vértice en (h, k)</h2>
                    <h5>Paralela al eje x</h5>
                    <p>
                        (y - k)<sup>2</sup> = 4P(x - h) <br />
                        v = (h, k)
                    </p>
                    <h6>Ejemplo</h6>
                    <p>(y - 2)<sup>2</sup> = -12(x + 3) <br /> v = (-3,2)</p>
                    <img src="/img/geometriaParabola-1.png" alt="" className="geometriaImgOne" />
                    <br /> <br />
                    <h5>Paralela al eje y</h5>
                    <p>
                        (x- h)<sup>2</sup> = 4P(y - k) <br />
                        v = (h, k) <br />
                        F = (P + h, k)
                    </p>
                    <h6>Ejemplo</h6>
                    <p>(x + 4)<sup>2</sup> = 8(y - 2) <br /> v = (-4,2) <br /> F = (h, p + k)</p>
                    <img src="/img/geometriaParabola-2.png" alt="" className="geometriaImgOne" /><br /> <br />

                    <button className="btn btn-secondary"><a href="https://youtu.be/QIzI_7OZ6y0" className="text-decoration-none text-white">Profundizar</a></button>
                </div>
            </div>
        </div>
    )
}
