import React from 'react'
import { CollapseInformation, SectionTitle, TopWave } from '../../components'
import Latex from 'react-latex'

export const Triangle = () => {
    const pitagorasOne = `$$c^2 = a^2 + b^2$$`
    const pitagorasTwo = `$$c = \\sqrt{a^2 + b^2}$$`
    const pitagorasThree = `$$\\sqrt{c^2 - b^2} = a$$`
    const ejemplo1Pitagoras = `$$a = 7m \\\\ \\allowbreak  b = 5m \\\\ c = 9m  \\\\  \\allowbreak \\\\  c^2 = 7^2 + 10^2 \\\\  \\allowbreak \\ c^2 = 49 + 100 \\\\ \\allowbreak \\ c = \\sqrt{49 + 100} \\\\ \\allowbreak \\ c = \\sqrt{149} \\\\ \\allowbreak \\ c = 12.20m$$`

    const ejemplo2Pitagoras = `$$a = ? \\\\ \\allowbreak  b = 10m \\\\ c = 9m  \\\\  \\allowbreak \\\\  a = \\sqrt{9^2 + 5^2} \\\\  \\allowbreak \\ a = \\sqrt{81 + 25} \\\\ \\allowbreak \\ a = \\sqrt{106} \\\\ \\allowbreak \\ a = 10.29m$$`
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Triángulos" />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <CollapseInformation name="Clasificación de triángulos" id="clasificacionTriangulos" >
                    <div className="d-flex flex-wrap">
                        <div className="d-flex justify-content-between w-100">
                            <div>
                                <img src="/img/trianguloEquilatero.svg" alt="Triangulo equilatero" className="w-50 rounded-3" />
                                <h5 className="pt-2">Equilatero</h5>
                                <p className="w-75"> Todos sus lados poseen la misma medida.</p>
                            </div>

                            <div>
                                <div className="d-flex justify-content-end">
                                    <img src="/img/trianguloIsoceles.svg" alt="Triangulo isoceles" className="w-50 rounded-3" />
                                </div>
                                <h5 className="text-end pt-2">Isóceles</h5>
                                <p className="text-end ">Dos de sus lados poseen la misma medida.</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-2">
                            <div>
                                <img src="/img/trianguloEscaleno.svg" alt="Triangulo escaleno" className="w-50 rounded-3" />
                                <h5 className="pt-2">Escaleno</h5>
                                <p className="w-75">La medida de todos sus lados es diferente.</p>
                            </div>
                            <div>
                                <div className="d-flex justify-content-end">
                                    <img src="/img/trianguloAcutangulo.svg" alt="Triangulo acutangulo" className="w-75 rounded-3" />
                                </div>
                                <h5 className="text-end pt-2">Acutángulo</h5>
                                <p className="text-end"> Todos sus ángulos internos son agudos.</p>
                            </div>

                        </div>

                        <div className="d-flex justify-content-between pt-2">
                            <div>
                                <img src="/img/trianguloObtuso.svg" alt="Triangulo obtuso" className="w-50 rounded-3" />
                                <h5 className=" pt-2">Obtusángulo</h5>
                                <p className="w-75"> Posee un ángulo obtuso (mayor a 90° y menor a 180°).</p>
                            </div>

                            <div>
                                <div className="d-flex justify-content-end">
                                    <img src="/img/trianguloRectangulo.svg" alt="Triangulo rectangulo" className="w-75 rounded-3" />
                                </div>
                                <h5 className="text-end pt-2">Rectángulo</h5>
                                <p className="text-end"> Posee un ángulo recto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-block pt-3">
                        <h4>Nota</h4>
                        <ul>
                            <li>La sumatoria de los ángulos internos de un triángulo es 180°</li>
                            <li>El ángulo de mayor longitud se opone al ángulo de mayor valor y viceversa.</li>
                            <li>Los ángulos agudos son aquellos menores a 90°</li>
                            <li>Los ángulos rectos poseen 90°</li>
                        </ul>
                    </div>
                </CollapseInformation>
                <hr />

                <CollapseInformation name="Teorema de Pitágoras" id="teoremaPitagoras" >
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
                                    <img src="img/pitagorasImgEjemplos.svg" alt="Ejemplo 1 teorema de pitágoras" className="rounded-3" /><br /><br />
                                    <Latex>{ejemplo1Pitagoras}</Latex>
                                </th>
                                <td>
                                    <img src="img/pitagorasImgEjemplos.svg" alt="Ejemplo 1 teorema de pitágoras" className="rounded-3" /><br /><br />
                                    <Latex>{ejemplo2Pitagoras}</Latex>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CollapseInformation>
            </div>
        </div>
    )
}
