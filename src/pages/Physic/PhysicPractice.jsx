import { useState } from "react";
import { useGraphicator } from "../../hooks/";
import { SectionTitle, TopWave, Graphic } from "../../components/";
import { PhysicNav } from "./PhysicNav";
import Latex from "react-latex"
import { IoIosArrowDown } from "react-icons/io";
import Qty from 'js-quantities/esm';
import { BsArrowRightShort } from "react-icons/bs";

export const PhysicPractice = () => {
    const vectoresOne = `$$A_x = \\small 15N \\ \\cdot \\ cos(30) = 12.99N$$`
    const vectoresTwo = `$$A_y = \\small 15N \\ \\cdot \\ sen(30) = 7.5N$$`
    const vectoresThree = `$$B_x = \\small 27N \\ \\cdot \\ sen(55) = -22.11N$$`
    const vectoresFour = `$$B_y = \\small 27N \\ \\cdot \\ cos(55) = -15.48N$$`
    const vectoresFive = `$$C_x = \\small 12.99N + (-22.11N) = -9.12N$$`
    const vectoresSix = `$$C_y = \\small 7.5N + (-15.48N) = -7.98N$$`
    const vectoresSeven = `$$C  = \\small \\sqrt{(-9.12N)^2 + (-7.98N)^2} = 12.11N$$`
    const vectoresEight = `$$tan^-1(\\frac{-7.98}{-9.12}) = \\small 41.18°$$`

    const mruOne = `$$ \\small 12km/h = 3.33m/s$$`
    const mruTwo = `$$t = \\large \\frac{distancia}{velocidad}$$`
    const mruThree = `$$t = \\large \\frac{70m}{3.33m/s}$$`
    const mruFour = `$$ \\small 21.62seg$$`

    const mruaOne = `$$\\small  12min = 120seg$$`
    const mruaTwo = `$$\\small 5km/h = 1.38m/s$$`
    const mruaThree = `$$\\small 15km/h = 4.16m/s$$`
    const mruaFour = `$$a =  \\large \\frac{(v_f \\ - \\ v_i)}{t}$$`
    const mruaFive = `$$a =  \\large \\frac{(4.16m/s \\ - \\ 1.38m/s)}{120s}$$`
    const mruaSix = `$$a = \\small 0.023m/s$$`

    const caidaLibreOne = `$$t = \\large \\sqrt{\\frac{2h}{g}}$$`
    const caidaLibreTwo = `$$t = \\large \\sqrt{\\frac{2(12m)}{9.8m/s^2}}$$`
    const caidaLibreThree = `$$t = \\small 1.56seg$$`
    const caidaLibreFour = `$$v_f = \\small 0 - 9.8m/s^2 \\ \\cdot \\ 1.56seg$$`
    const caidaLibreFive = `$$v_f =\\small - 15.288m/s$$`

    const tiroVerticalOne = `$$h_{max} =  \\large \\frac{(27m/s)^2}{2 \\ \\cdot \\ 9.8m/s^2}$$`
    const tiroVerticalTwo = `$$h_{max} = \\small 37.19m$$`
    const tiroVerticalThree = `$$y = \\small y_0 + v_0 \\ \\cdot \\ t - \\frac{1}{2} \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ 3seg^2$$`
    const tiroVerticalFour = `$$y = \\small 0 + 27m/s \\ \\cdot \\ 3seg - \\frac{1}{2} \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ 3seg^2$$`
    const tiroVerticalFive = `$$y = \\small 36.9m$$`

    const tiroParabolicoOne = `$$v_x = \\small 50m/s \\ \\cdot \\ cos(40) = 38.10m/s$$`
    const tiroParabolicoTwo = `$$v_y = \\small 50m/s \\ \\cdot \\ \\sin(40) = 32.13m/s$$`
    const tiroParabolicoThree = `$$t_v = \\large \\frac{2 \\ \\cdot \\ v_{0y}}{g}$$`
    const tiroParabolicoFour = `$$t_v = \\large \\frac{2 \\ \\cdot \\ (32.13m/s)}{9.8m/s^2}$$`
    const tiroParabolicoFive = `$$t_v = \\small 6.55s$$`
    const tiroParabolicoSix = `$$h_{max} = \\large \\frac{v_{0y}^2}{2g}$$`
    const tiroParabolicoSeven = `$$h_{max} = \\large \\frac{(32.13m/s)^2}{2 \\ \\cdot \\ (9.8m/s^2)}$$`
    const tiroParabolicoEight = `$$h_{max} = \\small 52.67m$$`


    const dinamicaOne = `$$C_x = C \\ \\cdot \\ cos(θ)
    $$`
    const dinamicaTwo = `$$C_y = C \\ \\cdot \\ sen(θ)$$`
    const dinamicaThree = `$$C_x = C \\ \\cdot \\ sen(θ)$$`
    const dinamicaFour = `$$C_y = C \\ \\cdot \\ cos(θ)$$`
    const dinamicaFive = `$$W_x = \\small 900kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ sen(25) = 3727.49N$$`
    const dinamicaSix = `$$W_y = \\small 900kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ cos(25) = 7993.63N$$`
    const dinamicaSeven = `$$ΣF_x = \\small W_x - T = 0$$`
    const dinamicaEight = `$$ΣF_x = \\small W_x = T$$`
    const dinamicaNine = `$$ΣF_x = \\small T = 3727.49N$$`

    const dinamicaTwoOne = `$$W_x = \\small 1300kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ Sen(35) = 7307.36N$$`
    const dinamicaTwoTwo = `$$W_y = \\small 1300kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ Cos(35) = 10435.99N$$`
    const dinamicaTwoThree = `$$ΣF_y = \\small N - W_y = 0$$`
    const dinamicaTwoFour = `$$ΣF_y = \\small N = W_y$$`
    const dinamicaTwoFive = `$$\\text{Fr} = \\small μ \\ \\cdot \\ N$$`
    const dinamicaTwoSix = `$$\\text{Fr} = \\small 0.5 \\ \\cdot \\ 10435.99N$$`
    const dinamicaTwoSeven = `$$\\text{Fr} = \\small 5217.995N$$`
    const dinamicaTwoEight = `$$ΣF_x = W_x - Fr = ma$$`
    const dinamicaTwoNine = `$$ΣF_x =\\frac{W_x - Fr}{m} = a$$`
    const dinamicaTwoTen = `$$ΣF_x =\\frac{7307.36N -  5217.995N}{1300kg} = a$$`
    const dinamicaTwoEleven = `$$ΣF_x =  a = 1.60m/s^2$$`

    const torqueOne = `$$W_1 = 60kg \\ \\cdot \\ 9.8m/s^2 = 588$$`
    const torqueTwo = `$$W_2 = ?$$`
    const torqueThree = `$$D_1= 0.3m$$`
    const torqueFour = `$$D_2= 0.25m$$`
    const torqueFive = `$$F_1 \\ \\cdot \\ D_1 \\ \\cdot \\ Sen(θ) - F_2 \\ \\cdot \\ D_2 \\ \\cdot \\ Sen(θ) = 0$$`
    const torqueSix = `$$588N \\ \\cdot \\ 0.3m \\ \\cdot \\ Sen(90) - W_1 \\ \\cdot \\ 0.25m \\ \\cdot \\ Sen(90) = 0$$`
    const torqueSeven = `$$W_1 = \\frac{588N \\ \\cdot \\ 0.3m \\ \\cdot \\ Sen(90)}{0.25m \\ \\cdot \\ Sen(90)} $$`
    const torqueEight = `$$W_1 = 705.6N$$`
    const torqueNine = `$$m = \\large \\frac{N}{g}$$`
    const torqueTen = `$$m= \\large \\frac{705.6N}{9.8m/s^2}$$`
    const torqueEleven = `$$m = \\small 72kg$$`

    const trabajoOne = `$$\\small \\text{Peso} = m \\ \\cdot \\ g$$`
    const trabajoTwo = `$$ \\small \\text{Peso} = 100kg \\ \\cdot \\ 9.8m/s^2$$`
    const trabajoThree = `$$\\small  \\text{Peso} = 980N$$`
    const trabajoFour = `$$\\small \\text{Trabajo}= F \\ \\cdot \\ d$$`
    const trabajoFive = `$$d= \\frac{trabajo}{F}$$`
    const trabajoSix = `$$d= \\frac{294000J}{980N}$$`
    const trabajoSeven = `$$d = 300m$$`

    const potenciaOne = `$$P= \\frac{W}{T}$$`
    const potenciaTwo = `$$T = \\frac{W}{P}$$`
    const potenciaThree = `$$T = \\frac{294000J}{42000W}$$`
    const potenciaFour = `$$T = 7s$$`

    const rendimientoOne = `$$\\small Rendimiento = \\normalsize \\frac{Potencia útil}{Potencia teórica} \\ \\cdot \\ 100$$`
    const rendimientoTwo = `$$ 27 = \\frac{42000W}{x} \\ \\cdot \\ 100$$`
    const rendimientoThree = `$$\\frac{27}{100} = \\frac{42000W}{x}$$`
    const rendimientoFour = `$$x = \\frac{42000W \\ \\cdot \\ 100}{27}$$`
    const rendimientoFive = `$$x = \\small 155555.55W$$`

    const energiaCineticaOne = `$$\\small 60kg + 20kg = 80kg$$`
    const energiaCineticaTwo = `$$E_k = \\frac{1}{2} \\ \\cdot \\ 80kg \\ \\cdot \\ 15m/s^2$$`
    const energiaCineticaThree = `$$\\small E_k = 9000 J$$`

    const energiaGravitatoriaOne = `$$E_{pg} = 20kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ 12m$$`
    const energiaGravitatoriaTwo = `$$E_{pg} = 2352 J$$`
    const equal = `$$=$$`

    // Graphicator
    const { graphicData, onInputX, onInputY, onFormSubmit } = useGraphicator()

    const {onInputYOne, onInputYTwo, onInputYThree, onInputYFour, onInputYFive, onInputYSix} = onInputY
    const {onInputXOne, onInputXTwo, onInputXThree, onInputXFour, onInputXFive, onInputXSix} = onInputX

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


    return (
        <div className='homeCard'>
            <TopWave />
            <SectionTitle title="Practica" />

            <PhysicNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <h3>Graficador</h3>
                        <Graphic data={graphicData} />
                        <form onSubmit={onFormSubmit}>
                            <div className="numberInputContainer">
                                <span className="mt-2">Y</span>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYOne} />
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYTwo}/>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYThree}/>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYFour}/>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYFive}/>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputYSix}/>
                            </div>

                            <div className="numberInputContainer">
                                <span className="mt-2">X</span>
                                <input type="number" className="numberInput ownShadow-sm" onInput={onInputXOne} />
                                <input type="number" className="numberInput ownShadow-sm"  onInput={onInputXTwo}/>
                                <input type="number" className="numberInput ownShadow-sm"  onInput={onInputXThree}/>
                                <input type="number" className="numberInput ownShadow-sm"  onInput={onInputXFour}/>
                                <input type="number" className="numberInput ownShadow-sm"  onInput={onInputXFive}/>
                                <input type="number" className="numberInput ownShadow-sm"  onInput={onInputXSix}/>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <button type="submit" className="btn btn-outline-secondary">Enviar</button>
                            </div>
                        </form>
                    </div>

                    <hr />

                    <div>
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
                                    <li className="fw-semibold list-styled">Longitud</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("km")}>Km</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("hm")}>Hm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("dam")}>Dam</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("m")}>m</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("dm")}>dm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("cm")}>cm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("mm")}>mm</li>

                                    <hr className="dropdown-divider shadow-none" />
                                    <li className="fw-semibold list-styled">Velocidad</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("km/h")}>km/h</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("m/s")}>m/s</li>

                                    <hr className="dropdown-divider shadow-none" />
                                    <li className="fw-semibold list-styled">Temperatura</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("tempC")}>°C</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("tempF")}>°F</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionOne("tempK")}>K</li>
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
                                    <li className="fw-semibold list-styled">Longitud</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("km")}>Km</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("hm")}>Hm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("dam")}>Dam</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("m")}>m</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("dm")}>dm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("cm")}>cm</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("mm")}>mm</li>
                                    <hr className="dropdown-divider shadow-none" />

                                    <li className="fw-semibold list-styled">Velocidad</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("km/h")}>km/h</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("m/s")}>m/s</li>

                                    <hr className="dropdown-divider shadow-none" />
                                    <li className="fw-semibold list-styled">Temperatura</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempC")}>°C</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempF")}>°F</li>
                                    <li className="list-styled" onClick={() => handleUnitSelectionTwo("tempK")}>K</li>
                                </ul>
                            </div>
                        </div>
                        <br />

                    </div>
                    <hr />
                    <div className="section">
                        <div>
                            <h3>Vectores</h3>
                            <p>Calcule la suma y dirección de los vectores A y B conociendo los siguientes datos:</p>

                            <p>Vector A:
                                Magnitud: 15N
                                Dirección: 30°</p>

                            <p>Vector B:
                                Magnitud: 27N
                                Dirección: 55°</p>
                            <img src="/img/vectoresPracticaImg.svg" alt="Vectores practica" className='practiceImg rounded-3' />
                            <p>
                                <button className="btn btn-secondary mt-3" type="button" data-bs-toggle="collapse" href="#vectores">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="vectores">
                                <p>1. Hallamos sus componente en <i>x</i> y <i>y</i></p>

                                <Latex>
                                    {vectoresOne}
                                </Latex><br />
                                <Latex>
                                    {vectoresTwo}
                                </Latex><br />
                                <Latex>
                                    {vectoresThree}
                                </Latex><br />
                                <Latex>
                                    {vectoresFour}
                                </Latex><br /><br />
                                <p>2. Nuevo vector C, resultado de la suma de los vectores A y B</p>
                                <Latex>
                                    {vectoresFive}
                                </Latex><br />
                                <Latex>
                                    {vectoresSix}
                                </Latex><br />
                                <Latex>
                                    {vectoresSeven}
                                </Latex><br /><br />
                                <p>3. Cálculo dirección</p>
                                <Latex>
                                    {vectoresEight}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>M.R.U</h3>
                            <p>Albert pasea en su patineta a velocidad constante y en línea recta a 12 km/h. Albert, desea recorrer la distancia de su hogar a su colegio, la cuál es de 72 metros. Calculé el tiempo requerido para que Albert llegue a su escuela.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#mru">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="mru">
                                <Latex>
                                    {mruOne}
                                </Latex><br /><br />
                                <Latex>
                                    {mruTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {mruThree}
                                </Latex><br /><br />
                                <Latex>
                                    {mruFour}
                                </Latex><br />
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>M.R.U.A.</h3>
                            <p>Alice está muy apresurada debido a que, la tienda de vestidos va a cerrar. Ella se encuentra a 2 minutos de la tienda, al comienzo del recorrido, tenía una velocidad de 5 km/h, y al final una de 15 km/h al llegar a la tienda. Calcule la aceleración de Alice.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#mrua">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="mrua">
                                <Latex>
                                    {mruaOne}
                                </Latex><br />
                                <Latex>
                                    {mruaTwo}
                                </Latex><br />
                                <Latex>
                                    {mruaThree}
                                </Latex><br /><br />
                                <Latex>
                                    {mruaFour}
                                </Latex><br /><br />
                                <Latex>
                                    {mruaFive}
                                </Latex><br /><br />
                                <Latex>
                                    {mruaSix}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Caída libre</h3>
                            <p>Desde un cuarto piso cae una maceta, teniendo ello en cuenta, calcule la velocidad con la que llegará al piso y el tiempo que tardará en caer. Considere g = 9.8m/s y h = 12m.
                            </p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#caidaLibre">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="caidaLibre">
                                <span>Tiempo que tardará en caer</span><br />
                                <Latex>
                                    {caidaLibreOne}
                                </Latex><br /><br />
                                <Latex>
                                    {caidaLibreTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {caidaLibreThree}
                                </Latex><br /><br />
                                <span>Velocidad al llegar</span><br />
                                <Latex>
                                    {caidaLibreFour}
                                </Latex><br />
                                <Latex>
                                    {caidaLibreFive}
                                </Latex><br /><br />
                                <small>Nota: La velocidad tiene resultado negativo, debido a que en el sistema de referencia planteado encontraremos que el vector velocidad se dirige hacia el eje negativo de las <i>Y</i>, por ende el resultado de esta será negativa. Esto no significa que disminuya la velocidad.</small>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Tiro vertical</h3>
                            <p>Albert lanza hacia arriba una pelota con una velocidad inicial de 27 m/s. A partir de esto, calcule la altura máxima que alcanza. Luego, calcule la altura que posee al transcurrir 3 segundos.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#tiroVertical">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="tiroVertical">
                                <span>Altura máxima</span><br />
                                <Latex>
                                    {tiroVerticalOne}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroVerticalTwo}
                                </Latex><br /><br />
                                <span>Altura al transcurrir 3 segundos</span><br />
                                <Latex>
                                    {tiroVerticalThree}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroVerticalFour}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroVerticalFive}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Tiro parábolico</h3>
                            <p>En un circo se lanza a una persona desde un cañón, con una velocidad de 50m/s y un ángulo de 40°. Calcule el tiempo de vuelo, altura máxima y su posición horizontal a los 5 segundos.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#tiroParabolico">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="tiroParabolico">
                                <span>Componentes</span><br />
                                <Latex>
                                    {tiroParabolicoOne}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoTwo}
                                </Latex><br /><br />
                                <span>Altura al transcurrir 3 segundos</span><br />
                                <Latex>
                                    {tiroParabolicoThree}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoFour}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoFive}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoSix}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoSeven}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoEight}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Dinámica</h3>
                            <h5>N°1</h5>
                            <p>En una bodega se mantiene una caja de 900kg mediante una soga. La superficie se encuentra inclinada 25° respecto a la horizontal y la superficie tiene un coeficiente de rozamiento de 0.4. Calcule la tensión.</p>
                            <img src="/img/dinamicaPracticaImg.svg" alt="Dinamica practica uno" className='practiceImg rounded-3' /><br /><br />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#dinamicaOne">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse " id="dinamicaOne">
                                <span>Análisis de fuerzas</span><br />
                                <img src="/img/dinamicaPracticaImgTwo.svg" alt="Dinamica practica dos" className='practiceImg rounded-3' /><br /><br />
                                <span>Descomponer vectores</span><br />
                                <span>Si θ está respecto a X:</span><br />
                                <Latex>
                                    {dinamicaOne}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwo}
                                </Latex><br /><br />
                                <span>Si θ está respecto a y:</span><br />
                                <Latex>
                                    {dinamicaThree}
                                </Latex><br />
                                <Latex>
                                    {dinamicaFour}
                                </Latex><br /><br />
                                <span>Componentes del peso</span><br />
                                <Latex>
                                    {dinamicaFive}
                                </Latex><br />
                                <Latex>
                                    {dinamicaSix}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaSeven}
                                </Latex><br />
                                <Latex>
                                    {dinamicaEight}
                                </Latex><br />
                                <Latex>
                                    {dinamicaNine}
                                </Latex><br /><br />
                            </div>

                            <h5>N°2</h5>
                            <p>Un vehículo de 1300kg se encuentra en una superficie inclinada 35° respecto a la horizontal, teniendo en cuenta que el sistema está acelerado, calcule la aceleración del vehículo. Considere μ= 0.5 y g= 9.8m/s².</p>
                            <img src="/img/dinamicaPracticaImgTwo.svg" alt="Dinamica practica dos" className='practiceImg rounded-3' /><br /><br />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#dinamicaTwo">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse " id="dinamicaTwo">
                                <span>Componentes del peso</span><br />
                                <Latex>
                                    {dinamicaTwoOne}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoTwo}
                                </Latex><br /><br /><br />
                                <span>Normal</span><br />
                                <Latex>
                                    {dinamicaTwoThree}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoFour}
                                </Latex><br /><br /><br />
                                <span>Fricción</span><br />
                                <Latex>
                                    {dinamicaTwoFive}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoSix}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoSeven}
                                </Latex><br /><br />
                                <span>Planteamos la ecuación</span><br />
                                <Latex>
                                    {dinamicaTwoEight}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaTwoNine}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaTwoTen}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaTwoEleven}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Torque</h3>
                            <p>Alice y Bob juegan en un sube y baja, Alice se encuentra al lado izquierdo a 0.3 metros del centro con una masa de 60kg. Bob está a una distancia de 0.25m ¿Cuál debe ser la masa de Bob para que este sistema se encuentre en equilibrio?
                            </p>

                            <img src="/img/torquePracticaImg.svg" alt="Torque practica" className='practiceImg rounded-3' /><br /><br />
                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#tiroParabolico">
                                    Solución
                                </button>
                            </p>


                            <div className="collapse" id="tiroParabolico">
                                <p>Datos</p>
                                <Latex>
                                    {torqueOne}
                                </Latex><br />
                                <Latex>
                                    {torqueTwo}
                                </Latex><br />
                                <Latex>
                                    {torqueThree}
                                </Latex><br />
                                <Latex>
                                    {torqueFour}
                                </Latex><br /><br />
                                <span>Planteamiento</span><br />
                                <Latex>
                                    {torqueFive}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueSix}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueSeven}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueEight}
                                </Latex><br /><br /><br />
                                <span>Convertir N a kg</span><br />
                                <Latex>
                                    {torqueNine}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueTen}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueEleven}
                                </Latex>
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Trabajo</h3>
                            <p>Bob arrastra una caja haciendo mediante una máquina. Esta tiene una masa de 100 kg. Su amigo Will el físico, realizó los cálculos y halló que el trabajo realizado fue 294000 Jules. Calcule la distancia recorrida por la máquina con la caja.
                            </p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#trabajo">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="trabajo">
                                <span>Datos</span><br />
                                <Latex>
                                    {trabajoOne}
                                </Latex><br />
                                <Latex>
                                    {trabajoTwo}
                                </Latex><br />
                                <Latex>
                                    {trabajoThree}
                                </Latex><br /><br />
                                <Latex>
                                    {trabajoFour}
                                </Latex><br />
                                <Latex>
                                    {trabajoFive}
                                </Latex><br />
                                <Latex>
                                    {trabajoSix}
                                </Latex><br />
                                <Latex>
                                    {trabajoSeven}
                                </Latex><br /><br />
                            </div>
                        </div>


                        <hr />
                        <div>
                            <h3>Potencia</h3>
                            <p>En una fábrica hay una máquina que tiene una potencia de 42000 Watts, realizó el traslado de una caja de 100 kg de un punto A a un punto B, el trabajo realizado por la máquina en dicha situación fue de 294000 Jules. ¿Cuál fue el tiempo empleado?

                            </p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#potencia">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="potencia">
                                <Latex>
                                    {potenciaOne}
                                </Latex><br /><br />
                                <Latex>
                                    {potenciaTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {potenciaThree}
                                </Latex><br /><br />
                                <Latex>
                                    {potenciaFour}
                                </Latex><br /><br />
                            </div>
                        </div>


                        <hr className="my-4" />
                        <div>
                            <h3>Rendimiento</h3>
                            <p>Un taller de automóviles cuenta con una máquina cuya potencia es de 50000 watts. Además, la máquina posee un rendimiento del 27%. ¿Cuál es su potencia teórica?
                            </p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#rendimiento">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="rendimiento">
                                <span>Fórmula</span><br />
                                <Latex>
                                    {rendimientoOne}
                                </Latex><br /><br />
                                <span>Reemplazo de valores</span><br />
                                <Latex>
                                    {rendimientoTwo}
                                </Latex><br /><br />
                                <span>Despeje de potencia teórica</span><br />
                                <Latex>
                                    {rendimientoThree}
                                </Latex><br /><br />
                                <Latex>
                                    {rendimientoFour}
                                </Latex><br /><br />
                                <span>Resultado</span><br />
                                <Latex>
                                    {rendimientoFive}
                                </Latex><br /><br />
                            </div>
                        </div>

                        <hr className="my-4" />
                        <div>
                            <h3>Energía cinética</h3>
                            <p>Calcule la energía cinética de un triciclo, teniendo en cuenta que el piloto pesa 60kg, el triciclo pesa 20kg y el conjunto se mueve a una velocidad de 15m/s.
                            </p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#energiaCinetica">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="energiaCinetica">
                                <span>Suma de masas</span><br />
                                <Latex>
                                    {energiaCineticaOne}
                                </Latex><br /><br />
                                <span>Uso de la fórmula de energía cinética</span><br />
                                <Latex>
                                    {energiaCineticaTwo}
                                </Latex><br /><br />
                                <span>Resultado</span><br />
                                <Latex>
                                    {energiaCineticaThree}
                                </Latex><br /><br />
                            </div>
                        </div>

                        <hr className="my-4" />
                        <div>
                            <h3>Energía potencial gravitatoria</h3>
                            <p>Calcule la energia potencial de una maceta de 20kg que se encuentra en un cuarto piso. Considere que g = 9.8m/s y altura = 3m.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#energiaGravitatoria">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="energiaGravitatoria">
                                <span>Uso de la fórmula de energía cinéticas</span><br />
                                <Latex>
                                    {energiaGravitatoriaOne}
                                </Latex><br /><br />
                                <span>Resultados</span><br />
                                <Latex>
                                    {energiaGravitatoriaTwo}
                                </Latex><br /><br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
