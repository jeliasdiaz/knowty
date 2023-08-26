import Latex from "react-latex"
import { SectionTitle, TopWave } from "../../../components/";

export const Circumference = () => {

    const canonicaCircunferencia = `$$r = \\sqrt{(x - h)^2 + (y - k)^2}$$`
    const generalCircunferencia = `$$r = \\sqrt{(x - c_1)^2 + (y - c_2)^2}$$`

    return (
        <div className="homeCard" id="geometria">
            <TopWave />
            <SectionTitle title="Circunferencia"/>
            

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h3>Ecación canónica de la circunferencia con centro (h, k)</h3>
                    <Latex>{canonicaCircunferencia}</Latex><br /><br />
                    
                    <h3>Ecuación general de la circunferencia</h3>
                    <Latex>{generalCircunferencia}</Latex>
                </div>
            </div>
        </div>
    )
}
