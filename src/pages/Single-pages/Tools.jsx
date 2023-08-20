import { Graphic, SectionTitle, TopWave, UnitConverter } from "../../components"

import Latex from "react-latex"
import PeriodicTable from "../../components/PeriodicTable"

export const Tools = () => {

    const sen30 = `$$ \\frac{1}{2}$$`
    const cos30 = `$$ \\frac{\\sqrt{3}}{2}$$`
    const tan30 = `$$ \\frac{\\sqrt{3}}{3}$$`
    const cot30 = `$$ \\sqrt{3}$$`
    const sec30 = `$$ \\frac{2 \\sqrt{3}}{3}$$`
    const cosec30 = `$$2$$`

    const sen45 = `$$ \\frac{\\sqrt{2}}{2}$$`
    const cos45 = `$$ \\frac{\\sqrt{2}}{2}$$`
    const tan45 = `$$ 1$$`
    const cot45 = `$$ 1$$`
    const sec45 = `$$ \\sqrt{2}$$`
    const cosec45 = `$$ \\sqrt{2}$$`

    const sen60 = `$$ \\frac{\\sqrt{3}}{2}$$`
    const cos60 = `$$ \\frac{1}{2}$$`
    const tan60 = `$$ \\sqrt{3}$$`
    const cot60 = `$$ \\frac{\\sqrt{3}}{3}$$`
    const sec60 = `$$ 2$$`
    const cosec60 = `$$\\frac{2 \\sqrt{3}}{3}$$`

    const escalasConversionOne = "$$°C + 273$$"
    const escalasConversionTwo = "$$°k \\ - \\ 273$$"
    const escalasConversionThree = "$$1.8(°C) + 32$$"
    const escalasConversionFour = "$$\\frac{5}{9} (°F - 32)$$"
    const escalasConversionFive = "$$\\large\\frac{°F \\ - \\ 32}{1.8  \\ + \\ 273}$$"
    const escalasConversionSix = "$$1.8(°k - 273) + 32$$"
 
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Tools" />

            <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="subjectCard mb-5 ownShadow" >
                    <h3>Graficador</h3>
                    <Graphic />
                </div>

                <UnitConverter />

                
                <div className="subjectCard mb-5 ownShadow text-center">
                    <h3>Razones trigonométricas para ángulos notables</h3>
                    <table className="table table-bordered text-end mx-auto">
                        <thead className="table-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">30°</th>
                                <th scope="col">45°</th>
                                <th scope="col">60°</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Sen</th>
                                <td><Latex>{sen30}</Latex></td>
                                <td><Latex>{sen45}</Latex></td>
                                <td><Latex>{sen60}</Latex></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Cos</th>
                                <td><Latex>{cos30}</Latex></td>
                                <td><Latex>{cos45}</Latex></td>
                                <td><Latex>{cos60}</Latex></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Tan</th>
                                <td><Latex>{tan30}</Latex></td>
                                <td><Latex>{tan45}</Latex></td>
                                <td><Latex>{tan60}</Latex></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Cot</th>
                                <td><Latex>{cot30}</Latex></td>
                                <td><Latex>{cot45}</Latex></td>
                                <td><Latex>{cot60}</Latex></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Sec</th>
                                <td><Latex>{sec30}</Latex></td>
                                <td><Latex>{sec45}</Latex></td>
                                <td><Latex>{sec60}</Latex></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Cosec</th>
                                <td><Latex>{cosec30}</Latex></td>
                                <td><Latex>{cosec45}</Latex></td>
                                <td><Latex>{cosec60}</Latex></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                                            
                <div className="subjectCard mb-5 ownShadow text-center">
                    <h3>Escalas de conversión</h3>
                    <table className="table table-bordered mx-auto">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Conversión</th>
                                <th scope="col">Ecuación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Celsius a Kelvin</td>
                                <td><Latex>{escalasConversionOne}</Latex></td>
                            </tr>
                            <tr>
                                <td>Kelvin a Celsius</td>
                                <td><Latex>{escalasConversionTwo}</Latex></td>
                            </tr>
                            <tr>
                                <td>Celsius a Fahrenheit</td>
                                <td><Latex>{escalasConversionThree}</Latex></td>
                            </tr>
                            <tr>
                                <td>Fahrenheit a Celsius</td>
                                <td><Latex>{escalasConversionFour}</Latex></td>
                            </tr>
                            <tr>
                                <td>Fahrenheit a Kelvin</td>
                                <td><Latex>{escalasConversionFive}</Latex></td>
                            </tr>
                            <tr>
                                <td>Kelvin a Fahrenheit</td>
                                <td><Latex>{escalasConversionSix}</Latex></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="subjectCard mb-5 ownShadow peridocTableWidth">
                <PeriodicTable />
            </div>
        </div>
    )
}
