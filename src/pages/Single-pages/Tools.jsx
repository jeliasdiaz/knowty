import { useState } from "react"
import { Graphic, SectionTitle, TopWave } from "../../components"
import { useGraphicator } from "../../hooks"
import Qty from "js-quantities"
import { BsArrowRightShort } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import Latex from "react-latex"
import PeriodicTable from "../../components/PeriodicTable"

export const Tools = () => {

    // Graphicator
    const { graphicData, onInputX, onInputY, onFormSubmit } = useGraphicator()

    const { onInputYOne, onInputYTwo, onInputYThree, onInputYFour, onInputYFive, onInputYSix } = onInputY
    const { onInputXOne, onInputXTwo, onInputXThree, onInputXFour, onInputXFive, onInputXSix } = onInputX

    // Converter
    const [convertionResult, setConvertionResult] = useState(0)

    const [unitOne, setUnitOne] = useState("")
    const [unitTwo, setUnitTwo] = useState("")

    const conversor = ({ target }) => {
        const { value } = target

        const convert = Qty.swiftConverter(unitOne, unitTwo)

        const result = convert(value)
        setConvertionResult(result)
    }

    const handleUnitSelectionOne = (type) => setUnitOne(type)

    const handleUnitSelectionTwo = (type) => setUnitTwo(type)
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

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Tools" />

            <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="subjectCard mb-5 ownShadow" >
                    <h3>Graficador</h3>
                    <Graphic data={graphicData} />
                    <form onSubmit={onFormSubmit}>
                        <div className="numberInputContainer">
                            <span className="mt-2">Y</span>
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYOne} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYTwo} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYThree} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYFour} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYFive} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputYSix} />
                        </div>

                        <div className="numberInputContainer">
                            <span className="mt-2">X</span>
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXOne} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXTwo} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXThree} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXFour} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXFive} />
                            <input type="number" className="numberInput ownShadow-sm" onInput={onInputXSix} />
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-outline-secondary">Enviar</button>
                        </div>
                    </form>
                </div>


                <div  className="subjectCard mb-5 ownShadow">
                    <h3>Conversor de unidades</h3>

                    <div className=" mt-4 mb-4">
                        <div className="d-flex gap-4 mt-3 mb-3">
                            <div className="d-flex gap-2">
                                <input type="number" className="numberInput w-25" onInput={conversor} />

                                <span className="mt-2"><Latex>{equal}</Latex></span>

                                <input type="number" className="numberInput w-50" placeholder="resultado" readOnly={true} value={convertionResult} />
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
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("km")}>Km</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("hm")}>Hm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("dam")}>Dam</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("m")}>m</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("dm")}>dm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("cm")}>cm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("mm")}>mm</li>
                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("km/h")}>km/h</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("m/s")}>m/s</li>

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("tempC")}>°C</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("tempF")}>°F</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionOne("tempK")}>K</li>
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
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("km")}>Km</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("hm")}>Hm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("dam")}>Dam</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("m")}>m</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("dm")}>dm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("cm")}>cm</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("mm")}>mm</li>
                                    </div>

                                    <div>
                                        <li className="fw-semibold list-styled">Velocidad</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("km/h")}>km/h</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("m/s")}>m/s</li>

                                        <hr className="dropdown-divider shadow-none" />
                                        <li className="fw-semibold list-styled">Temperatura</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempC")}>°C</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempF")}>°F</li>
                                        <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempK")}>K</li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <br />

                </div>

                <div  className="subjectCard mb-5 ownShadow">
                    <h3>Razones trigonométricas para ángulos notables</h3>
                    <table className="table table-bordered text-end">
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
            </div>

            <div className="subjectCard mb-5 ownShadow peridocTableWidth">
                <PeriodicTable />
            </div>
        </div>
    )
}
