import { GeometryNav } from "./GeometryNav"
import { SectionTitle } from "../../components/SectionTitle";
import MoreBtn from "../../components/MoreBtn";

export const Parable = () => {


    return (
        <div className="homeCard" id="geometria">
            <img src="/img/waveThree.svg" alt="Ola" />
            <SectionTitle title="Parábola"/>
            
            <GeometryNav/>

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h3>Ecuación de la parábola con vértice en (0,0)</h3>
                    <h5>Eje de simetría X:</h5>
                    <p>
                        y<sup>2</sup> = 4Px <br />
                    </p>

                    <p>Si P (distancia focal) es negativa, la parábola se inclina a la izquierda. <br />

                    Si P es positiva, la parábola se inclina a la derecha. </p>

                    <h5>Eje de simetría Y:</h5>
                    <p>Si P (distancia focal) es negativa, la parábola se inclina hacia abajo. <br />

                    Si P es positiva, la parábola se inclina hacia arriba. </p>
                    <p>
                        x<sup>2</sup> = 4Py <br />
                    </p>
                    <hr />
                </div>
                <div>
                    <h3>Ecuación de la parábola con vértice en (h, k)</h3>
                    <h5>Paralela al eje x</h5>
                    <p>
                        (y - k)<sup>2</sup> = 4P(x - h) <br />
                        v = (h, k)
                    </p>
                    <h6>Ejemplo</h6>
                    <p>(y - 2)<sup>2</sup> = -12(x + 3) <br /> v = (-3,2)</p>
                    <img src="/img/geometriaParabola-1.png" alt="Parabola uno" className="w-75 rounded-3" />
                    <br /> <br />
                    <h5>Paralela al eje y</h5>
                    <p>
                        (x- h)<sup>2</sup> = 4P(y - k) <br />
                        v = (h, k) <br />
                        F = (P + h, k)
                    </p>
                    <h6>Ejemplo</h6>
                    <p>(x + 4)<sup>2</sup> = 8(y - 2) <br /> v = (-4,2) <br /> F = (h, p + k)</p>
                    <img src="/img/geometriaParabola-2.png" alt="Parabola dos" className="w-75 rounded-3" /><br /> <br />

                    <MoreBtn url="https://youtu.be/QIzI_7OZ6y0" /> 
                </div>
            </div>
        </div>
    )
}
