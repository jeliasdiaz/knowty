import { useContext } from 'react'
import { MoreBtn, SectionTitle, TopWave } from '../../../components'
import Latex from 'react-latex'
import { darkModeContext } from '../../../context/DarkModeContext'

export const SinTheorem = () => {
    const leySenoOne = `$$\\large \\frac{20}{sen(80)} = \\frac{x}{sen(40)}$$`
    const leySenoTwo = `$$\\large \\frac{20 \\ \\cdot \\ sen(40)}{sen(80)}$$`
    const leySenoThree = `$$x = 13.05$$`
    const leySenoFour = `$$\\large \\frac{sen(80)}{30} =  \\frac{sen(θ)}{15}$$`
    const leySenoFive = `$$arcsin \\large (\\frac{sen(80) \\ \\cdot \\ 15}{30}) = \\small sen(θ)$$`
    const leySenoSix = `$$\\large \\frac{sen(80) \\ \\cdot \\ 15}{30} =  θ$$`
    const leySenoSeven = `$$θ = 29.49°$$`

    const { isDarkMode } = useContext(darkModeContext);
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Teorema del Seno" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    La usamos cuando en un triángulo nos dan una pareja y un lado cualquiera. Dicho de otro modo, cuando poseemos el valor de un ángulo y su lado opuesto. <br /> <br /> De igual forma, hacemos uso de esta ley al poseer el valor dos lados y un ángulo opuesto a ellos.

                    Por ejemplo: <br />
                    <img src={isDarkMode === "dark" ? "/img/leySenoEjemploDark.svg" : "/img/leySenoEjemplo.svg"} alt="Ley del seno ejemplo" className="w-50 rounded-3 revealing-image" /><br />
                    Definimos las razones de la siguiente forma:
                    <br /><br />
                    <Latex>{leySenoOne}</Latex><br /><br />
                    Despejando la incognita <b>x</b> queda de la siguiente forma: <br /><br />
                    <Latex>{leySenoTwo}</Latex><br /><Latex>{leySenoThree}</Latex><br /><br />

                    El otro caso radica en tener el valor de dos lados y un ángulo opuesto a ellos. <br />
                    Por ejemplo: <br />
                    <img src={isDarkMode === "dark" ? "/img/leySenoEjemplo4Dark.svg" : "/img/leySenoEjemplo4.svg"} alt="" className="w-50 rounded-3 revealing-image" /><br />
                    Definimos las razones de la siguiente forma: <br />
                    <Latex>{leySenoFour}</Latex><br /><br />
                    Despejando para hallar el ángulo, queda de la siguiente forma: <br />
                    <Latex>{leySenoFive}</Latex><br /><br />
                    Usamos arcoseno (sen <sup>-1</sup>) para "cancelar" el seno al lado de theta, de forma que el resultado es: <br />
                    <Latex>{leySenoSix}</Latex><br /><Latex>{leySenoSeven}</Latex><br /><br />

                    <MoreBtn url="https://youtu.be/8T45M-Kv88I" />
                </p>
            </div>
        </div>
    )
}
