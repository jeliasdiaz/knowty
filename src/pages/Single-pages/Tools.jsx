import { useState } from "react"
import { Graphic, SectionTitle, TopWave } from "../../components"
import Qty from "js-quantities"
import { BsArrowRightShort } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import Latex from "react-latex"
import PeriodicTable from "../../components/PeriodicTable"

export const Tools = () => {

    // Converter
    const [convertionResult, setConvertionResult] = useState(0)
    const [convertionInput, setConvertionInput] = useState(0)
    const [unitOne, setUnitOne] = useState("")
    const [unitTwo, setUnitTwo] = useState("")

    const conversor = ({ target }) => {
        const { value } = target
        setConvertionInput(value)

        const convert = Qty.swiftConverter(unitOne, unitTwo)

        const result = convert(value)
        setConvertionResult(result)
    }

    const handleUnitSelectionOne = (type) => {
        setUnitOne(type)
        setConvertionInput(0)
    }

    const handleUnitSelectionTwo = (type) => {
        setUnitTwo(type)
        setConvertionInput(0)
    }

    const renderUnitOptions = (options, handleUnitSelection) => {
        return options.map((option) => (
            <li className="list-styled" onClick={() => handleUnitSelection(option.value)}>{option.label}</li>
        ));
    };

    const equal = `$$=$$`

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


                <div className="subjectCard mb-5 ownShadow">
                    <h3>Conversor de unidades</h3>

                    <div className=" mt-4 mb-4">
                        <div className="d-flex gap-4 mt-3 mb-3">
                            <div className="d-flex gap-2">
                                <input type="number" className="numberInput w-25" value={convertionInput} onInput={conversor} />

                                <span className="mt-2"><Latex>{equal}</Latex></span>

                                <input type="number" className="numberInput w-50" placeholder="resultado" readOnly={true} value={convertionInput ? convertionResult : 0} />
                            </div>
                        </div>
                        <div className="btn-group convertionType">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                    unitOne ? unitOne : <IoIosArrowDown size={25} />
                                }
                            </button>
                            <ul className="dropdown-menu">
                                <div className="d-flex gap-3 p-2">
                                    <div>
                                        <li className="fw-semibold list-styled">Longitud</li>
                                        {renderUnitOptions([
                                            { label: "Kilómetro", value: "km" },
                                            { label: "Hectómetro", value: "hm" },
                                            { label: "Decámetro", value: "dam" },
                                            { label: "Metro", value: "m" },
                                            { label: "Decimetro", value: "dm" },
                                            { label: "Centímetro", value: "cm" },
                                            { label: "Milímetro", value: "mm" },
                                            { label: "Pulgada", value: "in" },
                                        ], handleUnitSelectionOne)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        {renderUnitOptions([
                                            { label: "km/h", value: "km/h" },
                                            { label: "m/s", value: "m/s" },
                                            { label: "Milla/h", value: "mph" }
                                        ], handleUnitSelectionOne)}
                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        {renderUnitOptions([
                                            { label: "°C", value: "tempC" },
                                            { label: "°F", value: "tempF" },
                                            { label: "°Kelvin", value: "tempK" }
                                        ], handleUnitSelectionOne)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Masa</li>
                                        {renderUnitOptions([
                                            { label: "Gramo", value: "g" },
                                            { label: "Kilogramo", value: "kg" },
                                            { label: "Onza", value: "oz" },
                                            { label: "Libra", value: "lb" },
                                        ], handleUnitSelectionOne)}

                                    </div>
                                </div>
                            </ul>
                        </div>

                        <span className="mt-2">
                            <BsArrowRightShort size={30} className="mx-2" />
                        </span>

                        <div className="btn-group convertionType">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                    unitTwo ? unitTwo : <IoIosArrowDown size={25} />
                                }
                            </button>
                            <ul className="dropdown-menu">
                                <div className="d-flex gap-3 p-2">
                                    <div>
                                        <li className="fw-semibold list-styled">Longitud</li>
                                        {renderUnitOptions([
                                            { label: "Kilómetro", value: "km" },
                                            { label: "Hectómetro", value: "hm" },
                                            { label: "Decámetro", value: "dam" },
                                            { label: "Metro", value: "m" },
                                            { label: "Decimetro", value: "dm" },
                                            { label: "Centímetro", value: "cm" },
                                            { label: "Milímetro", value: "mm" },
                                            { label: "Pulgada", value: "in" },
                                        ], handleUnitSelectionTwo)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        {renderUnitOptions([
                                            { label: "km/h", value: "km/h" },
                                            { label: "m/s", value: "m/s" },
                                            { label: "Milla/h", value: "mph" }
                                        ], handleUnitSelectionTwo)}


                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        {renderUnitOptions([
                                            { label: "°C", value: "tempC" },
                                            { label: "°F", value: "tempF" },
                                            { label: "°Kelvin", value: "tempK" }
                                        ], handleUnitSelectionTwo)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Masa</li>
                                        {renderUnitOptions([
                                            { label: "Gramo", value: "g" },
                                            { label: "Kilogramo", value: "kg" },
                                            { label: "Onza", value: "oz" },
                                            { label: "Libra", value: "lb" },
                                        ], handleUnitSelectionTwo)}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <br />

                </div>

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
