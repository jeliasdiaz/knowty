import { ContentsTable, SectionTitle, TopWave } from '../../../../components'
import Latex from "react-latex"
import { basicTrigonometryNotionsItems } from '.'
import { useContext } from 'react'
import { darkModeContext } from '../../../../context/DarkModeContext'

export const PythagorasTheorem = () => {
    const pitagorasOne = `$$c^2 = a^2 + b^2$$`
    const pitagorasTwo = `$$c = \\sqrt{a^2 + b^2}$$`
    const pitagorasThree = `$$\\sqrt{c^2 - b^2} = a$$`
    const ejemplo1Pitagoras = `$$a = 7m \\\\ \\allowbreak  b = 5m \\\\ c = 9m  \\\\  \\allowbreak \\\\  c^2 = 7^2 + 10^2 \\\\  \\allowbreak \\ c^2 = 49 + 100 \\\\ \\allowbreak \\ c = \\sqrt{49 + 100} \\\\ \\allowbreak \\ c = \\sqrt{149} \\\\ \\allowbreak \\ c = 12.20m$$`

    const ejemplo2Pitagoras = `$$a = ? \\\\ \\allowbreak  b = 10m \\\\ c = 9m  \\\\  \\allowbreak \\\\  a = \\sqrt{9^2 + 5^2} \\\\  \\allowbreak \\ a = \\sqrt{81 + 25} \\\\ \\allowbreak \\ a = \\sqrt{106} \\\\ \\allowbreak \\ a = 10.29m$$`

    const { isDarkMode } = useContext(darkModeContext);

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Teorema de Pitágoras" />
            <ContentsTable items={basicTrigonometryNotionsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>Es una regla matemática que se aplica a los triángulos rectángulos. Dicho de otra manera, si tienes un triángulo con un ángulo recto (triángulo rectángulo), esta ley te ayudará a calcular la medida de cualquiera de sus tres lados, siempre y cuando ya sepas la medida de los otros dos.</p>
                <Latex>{pitagorasOne}</Latex>
                <p>
                    <var>c</var> = hipotenusa (lado más largo) <br />
                    <var>a</var> = cateto<br />
                    <var>b</var> = cateto
                </p>
                <h5>Nota</h5>
                <ul>
                    <li>La hipotenusa corresponde al lado más grande.</li>
                    <li>Los catetos corresponden a los lados más pequeños del triángulo.</li>
                </ul><br />

                <p>Por lo tanto, si queremos hallar <var>c</var>, la ecuación queda de la siguiente forma:</p>
                <Latex>{pitagorasTwo}</Latex><br /><br />

                <p>Aplicado a cualquier cateto reemplazando <var>a</var> por <var>b</var> y viceversa:</p>
                <Latex>{pitagorasThree}</Latex>
                <br /><br />
                <table className="table table-bordered text-start">
                    <thead className="table-light">
                        <tr>
                            <th scope="col ">Ejemplo 1</th>
                            <th scope="col">Ejemplo 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <img
                                    src={isDarkMode === 'dark' ? "/img/pitagorasImgEjemplosDark.svg" : "/img/pitagorasImgEjemplos.svg"}
                                    alt=""
                                    className="rounded-3 revealing-image"
                                />
                                <br /><br />
                                <Latex>{ejemplo1Pitagoras}</Latex>
                            </th>
                            <td>
                                <img
                                    src={isDarkMode === 'dark' ? "/img/pitagorasImgEjemplosDark.svg" : "/img/pitagorasImgEjemplos.svg"}
                                    alt=""
                                    className="rounded-3 revealing-image"
                                />
                                <br /><br />
                                <Latex>{ejemplo2Pitagoras}</Latex>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
