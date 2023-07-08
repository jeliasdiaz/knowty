import Latex from 'react-latex'
import { MoreBtn, SectionTitle, TopWave } from '../../components'

export const CosTheorem = () => {

    const leyCosenoOne = `$$x^2 = a^2 + b^2  - 2ab \\ \\cdot \\ cos(θ)$$`
    const leyCosenoTwo = `$$x^2 = 10^2 + 5^2 - 2 \\ \\cdot \\ 10 \\ \\cdot \\ 5 \\ \\cdot \\ cos(75°)$$`
    const leyCosenoThree = `$$\\sqrt{x} = \\sqrt{10^2 + 5^2 - 2 \\ \\cdot \\ 10 \\ \\cdot \\ 5 \\ \\cdot \\ cos(75°)}$$`
    const leyCosenoFour = `$$x = 9.95$$`
    const leyCosenoFive = `$$\\large \\frac{a^2  \\ + \\ b^2 \\ - \\ c^2}{- 2bc}$$`
    const leyCosenoSix = `$$arccos \\large (\\frac{20^2 \\ + \\ 10^2  \\ - \\ 18^2}{2 \\ \\cdot \\ 20 \\ \\cdot \\ 10}) = \\normalsize cos(θ)$$`
    const leyCosenoSeven = `$$\\large \\frac{20^2 \\ + \\ 10^2 \\ - \\ 18^2}{2 \\ \\cdot \\ 20 \\ \\cdot \\ 10} = θ$$`
    const leyCosenoEight = `$$63.89 = θ$$`

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Teorema del Coseno" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    La usamos cuando en un triángulo conocemos dos lados y el ángulo formado entre ellos. De igual forma, hacemos uso de esta ley al poseer el valor de todos los lados.
                    Por ejemplo: <br />
                    <img src="/img/leyCosenoEjemplo.svg" alt="Ley del coseno ejemplo uno" className="w-50 rounded-3" /> <br />
                    Definimos las razones de la siguiente forma:
                    <br />
                    <Latex>{leyCosenoOne}</Latex><br />
                    <Latex>{leyCosenoTwo}</Latex><br />
                    <Latex>{leyCosenoThree}</Latex><br />
                    <Latex>{leyCosenoFour}</Latex><br /><br />
                    Aplicamos raiz cuadrada a ambos lados para eliminar la potencia que posee la x.
                    <br /><br />
                    Otra posibilidad, radica en tener el valor de todos los lados.
                    Por ejemplo: <br />
                    <img src="/img/leyCosenoEjemplo2.svg" alt="Ley del coseno ejemplo dos" className="w-50 rounded-3" /><br />
                    Definimos las razones de la siguiente forma: <br />
                    <Latex>{leyCosenoFive}</Latex><br /><br />
                    <Latex>{leyCosenoSix}</Latex><br /><br />
                    <Latex>{leyCosenoSeven}</Latex><br /><br />
                    <Latex>{leyCosenoEight}</Latex><br />

                </p>
                <MoreBtn url="https://youtu.be/BALWWfhnvVc" />
            </div>
        </div>
    )
}
