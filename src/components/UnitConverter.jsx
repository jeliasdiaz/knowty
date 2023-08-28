import { useState } from "react"
import Qty from "js-quantities"
import Latex from "react-latex"
import { BsArrowRightShort } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"

export const UnitConverter = () => {

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
            <li className="list-styled" onClick={() => handleUnitSelection(option.value)} key={option.label}>{option.label}</li>
        ));
    };

    const equal = `$$=$$`

    const lengthOptions = [
        { label: "Kilómetro", value: "km" },
        { label: "Hectómetro", value: "hm" },
        { label: "Decámetro", value: "dam" },
        { label: "Metro", value: "m" },
        { label: "Decimetro", value: "dm" },
        { label: "Centímetro", value: "cm" },
        { label: "Milímetro", value: "mm" },
        { label: "Pulgada", value: "in" },
    ]

    const speedOptions = [
        { label: "km/h", value: "km/h" },
        { label: "m/s", value: "m/s" },
        { label: "Milla/h", value: "mph" }
    ]

    const tempOptions = [
        { label: "°C", value: "tempC" },
        { label: "°F", value: "tempF" },
        { label: "°Kelvin", value: "tempK" }
    ]

    const massOptions = [
        { label: "Gramo", value: "g" },
        { label: "Kilogramo", value: "kg" },
        { label: "Onza", value: "oz" },
        { label: "Libra", value: "lb" },
    ]
  return (
    <div className="subjectCard mb-5 ownShadow">
                    <h3>Conversor de unidades</h3>

                    <div className="mt-4 mb-4">
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
                                        {renderUnitOptions(lengthOptions, handleUnitSelectionOne)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        {renderUnitOptions(speedOptions, handleUnitSelectionOne)}
                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        {renderUnitOptions(tempOptions, handleUnitSelectionOne)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Masa</li>
                                        {renderUnitOptions(massOptions, handleUnitSelectionOne)}

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
                                        {renderUnitOptions(lengthOptions, handleUnitSelectionTwo)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        {renderUnitOptions(speedOptions, handleUnitSelectionTwo)}


                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        {renderUnitOptions(tempOptions, handleUnitSelectionTwo)}

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Masa</li>
                                        {renderUnitOptions(massOptions, handleUnitSelectionTwo)}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <br />

                </div>

  )
}
