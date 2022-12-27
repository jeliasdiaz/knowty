import Latex from "react-latex"
import { GeometryNav } from "./GeometryNav"
import { SectionTitle } from "../SectionTitle";

const Circumference = () => {

    const canonicaCircunferencia = `$$r = \\sqrt{(x - h)^2 + (y - k)^2}$$`
    const generalCircunferencia = `$$r = \\sqrt{(x - c_1)^2 + (y - c_2)^2}$$`

    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Circunferencia"/>
            
            <GeometryNav/>

            <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h2>Ecación canónica de la circunferencia con centro (h, k)</h2>
                    <Latex>{canonicaCircunferencia}</Latex><br /><br />
                    
                    <h2>Ecuación general de la circunferencia</h2>
                    <Latex>{generalCircunferencia}</Latex>
                </div>
            </div>
        </div>
    )
}

export default Circumference