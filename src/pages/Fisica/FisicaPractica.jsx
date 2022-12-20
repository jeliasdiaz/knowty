import React from 'react'
import { Link } from 'react-router-dom'
const Latex = require("react-latex")

export const FisicaPractica = () => {
    const vectoresOne = `$$A_x = 15N * cos(30) = 12.99N$$`
    const vectoresTwo = `$$A_y = 15N * sen(30) = 7.5N$$`
    const vectoresThree = `$$B_x = 27N * sen(55) = -22.11N$$`
    const vectoresFour = `$$B_y = 27N * cos(55) = -15.48N$$`
    const vectoresFive = `$$C_x = 12.99N + (-22.11N) = -9.12N$$`
    const vectoresSix = `$$C_y = 7.5N + (-15.48N) = -7.98N$$`
    const vectoresSeven = `$$C  = \\sqrt{(-9.12N)^2 + (-7.98N)^2} = 12.11N$$`
    const vectoresEight = `$$tan^-1(\\frac{-7.98}{-9.12}) = 41.18°$$`

    const mruOne = `$$12km/h = 3.33m/s$$`
    const mruTwo = `$$t = \\frac{distancia}{velocidad}$$`
    const mruThree = `$$t = \\frac{70m}{3.33m/s}$$`
    const mruFour = `$$21.62seg$$`

    const mruaOne = `$$12min = 120seg$$`
    const mruaTwo = `$$5km/h = 1.38m/s$$`
    const mruaThree = `$$15km/h = 4.16m/s$$`
    const mruaFour = `$$a = \\frac{(v_f - v_i)}{t}$$`
    const mruaFive = `$$a = \\frac{(4.16m/s - 1.38m/s)}{120s}$$`
    const mruaSix = `$$a = 0.023m/S$$`

    const caidaLibreOne = `$$t = \\sqrt{\\frac{2h}{g}}$$`
    const caidaLibreTwo = `$$t = \\sqrt{\\frac{2(12m)}{9.8m/s^2}}$$`
    const caidaLibreThree = `$$t = 1.56seg$$`
    const caidaLibreFour = `$$v_f = 0 - 9.8m/s^2 * 1.56seg$$`
    const caidaLibreFive = `$$v_f = -15.288m/s$$`

    const tiroVerticalOne = `$$h_{max} = \\frac{(27m/s)^2}{2 * 9.8m/s^2}$$`
    const tiroVerticalTwo = `$$h_{max} = 37.19m$$`
    const tiroVerticalThree = `$$y = y_0 + v_0 *t - \\frac{1}{2} * 9.8m/s^2 * 3seg^2$$`
    const tiroVerticalFour = `$$y = 0 + 27m/s * 3seg - \\frac{1}{2} * 9.8m/s^2 * 3seg^2$$`
    const tiroVerticalFive = `$$y = 36.9m$$`

    const tiroParabolicoOne = `$$v_x = 50m/s * cos(40) = 38.10m/s$$`
    const tiroParabolicoTwo = `$$v_y = 50m/s * Sen (40) = 32.13m/s$$`
    const tiroParabolicoThree = `$$t_v = \\frac{2*v_{0y}}{g}$$`
    const tiroParabolicoFour = `$$t_v = \\frac{2*(32.13m/s)}{9.8m/s^2}$$`
    const tiroParabolicoFive = `$$t_v = 6.55s$$`
    const tiroParabolicoSix = `$$h_{max} = \\frac{v_{0y}^2}{2g}$$`
    const tiroParabolicoSeven = `$$h_{max} = \\frac{(32.13m/s)^2}{2*(9.8m/s^2)}$$`
    const tiroParabolicoEight = `$$h_{max} = 52.67m$$`


    const dinamicaOne = `$$C_x = C * cos(θ)
    $$`
    const dinamicaTwo = `$$C_y = C * sen(θ)$$`
    const dinamicaThree = `$$C_x = C * sen(θ)$$`
    const dinamicaFour = `$$C_y = C * cos(θ)$$`
    const dinamicaFive = `$$W_x = 900kg * 9.8m/s^2 * sen(25) = 3727.49N$$`
    const dinamicaSix = `$$W_y = 900kg * 9.8m/s^2 * cos(25) = 7993.63N$$`
    const dinamicaSeven = `$$ΣF_x = W_x - T = 0$$`
    const dinamicaEight = `$$ΣF_x = W_x = T$$`
    const dinamicaNine = `$$ΣF_x =  T = 3727.49N$$`

    const dinamicaTwoOne = `$$W_x = 1300kg * 9.8m/s^2 * Sen(35) = 7307.36N$$`
    const dinamicaTwoTwo = `$$W_y = 1300kg * 9.8m/s^2 * Cos(35) = 10435.99N$$`
    const dinamicaTwoThree = `$$ΣF_y = N - W_y = 0$$`
    const dinamicaTwoFour = `$$ΣF_y = N = W_y$$`
    const dinamicaTwoFive = `$$Fr= μ * N$$`
    const dinamicaTwoSix = `$$Fr= 0.5 * 10435.99N$$`
    const dinamicaTwoSeven = `$$Fr= 5217.995N$$`
    const dinamicaTwoEight = `$$ΣF_x = W_x - Fr = ma$$`
    const dinamicaTwoNine = `$$ΣF_x =\\frac{W_x - Fr}{m} = a$$`
    const dinamicaTwoTen = `$$ΣF_x =\\frac{7307.36N -  5217.995N}{1300kg} = a$$`
    const dinamicaTwoEleven = `$$ΣF_x =  a = 1.60m/s^2$$`

    const torqueOne = `$$W_1 = 60kg * 9.8m/s^2 = 588$$`
    const torqueTwo = `$$W_2 = ?$$`
    const torqueThree = `$$D_1= 0.3m$$`
    const torqueFour = `$$D_2= 0.25m$$`
    const torqueFive = `$$F_1 * D_1 * Sen(θ) - F_2 * D_2 * Sen(θ) = 0$$`
    const torqueSix = `$$588N * 0.3m * Sen(90) - W_1 * 0.25m * Sen(90) = 0$$`
    const torqueSeven = `$$W_1 = \\frac{588N * 0.3m * Sen(90)}{0.25m * Sen(90)} $$`
    const torqueEight = `$$W_1 = 705.6N$$`
    const torqueNine = `$$m = \\frac{N}{g}$$`
    const torqueTen = `$$m= \\frac{705.6N}{9.8m/s^2}$$`
    const torqueEleven = `$$m= 72kg$$`

    const trabajoOne = `$$Peso = m * g$$`
    const trabajoTwo = `$$Peso = 100kg * 9.8m/s^2$$`
    const trabajoThree = `$$Peso = 980N$$`
    const trabajoFour = `$$Trabajo= F * d$$`
    const trabajoFive = `$$d= \\frac{trabajo}{F}$$`
    const trabajoSix = `$$d= \\frac{294000J}{980N}$$`
    const trabajoSeven = `$$d = 300m$$`

    const potenciaOne = `$$P= \\frac{W}{T}$$`
    const potenciaTwo = `$$T = \\frac{W}{P}$$`
    const potenciaThree = `$$T = \\frac{294000J}{42000W}$$`
    const potenciaFour = `$$T = 7s$$`

    const rendimientoOne = `$$Rendimiento = \\frac{Potencia útil}{Potencia teórica} * 100$$`
    const rendimientoTwo = `$$ 27 = \\frac{42000W}{x} * 100$$`
    const rendimientoThree = `$$\\frac{27}{100} = \\frac{42000W}{x}$$`
    const rendimientoFour = `$$x = \\frac{42000W * 100}{27}$$`
    const rendimientoFive = `$$x = 155555.55W$$`

    const energiaCineticaOne = `$$60kg + 20kg = 80kg$$`
    const energiaCineticaTwo = `$$E_k = \\frac{1}{2} * 80kg * 15m/s^2$$`
    const energiaCineticaThree = `$$E_k = 9000 J$$`

    const energiaGravitatoriaOne = `$$E_{pg} = 20kg * 9.8m/s^2 * 12m$$`
    const energiaGravitatoriaTwo = `$$E_{pg} = 2352 J$$`

    return (
        <div>
            <img src="/img/waveThree.svg" alt="" />
            <div>
                <h1 className="textIntroducion shadow-lg">Practica</h1>
            </div>

            <nav className="nav-3 d-none d-sm-block" data-aos="zoom-in" data-aos-duration="800">
                <ul className="pagination pagination-md justify-content-center mt-5">

                    <li className="page-item shadow-lg"><Link to="/cinematica" className="text-decoration-none page-link">Cinemática</Link></li>

                    <li className="page-item shadow-lg"><Link to="/dinamica" className="text-decoration-none page-link">Dinámica</Link></li>

                    <li className="page-item shadow-lg"><Link to="/movimientocircular" className="text-decoration-none page-link">M. circular</Link></li>

                    <li className="page-item shadow-lg"><Link to="/energia" className="text-decoration-none page-link">Energía</Link></li>

                    <li className="page-item shadow-lg"><Link to="/mecanica-fluidos" className="text-decoration-none page-link">Fluidos</Link></li>

                    <li className="page-item shadow-lg"><Link to="/fisica-practica" className="text-decoration-none page-link">Practicar</Link></li>
                </ul>
            </nav>
            <div className="fisica shadow" data-aos="zoom-in" data-aos-duration="900">
                <div >
                    <div className="section">
                        <div>
                            <h3>Vectores</h3>
                            <p>Calcule la suma y dirección de los vectores A y B conociendo los siguientes datos (solución en la siguiente página):</p>

                            <p>Vector A:
                                Magnitud: 15N
                                Dirección: 30°</p>

                            <p>Vector B:
                                Magnitud: 27N
                                Dirección: 55°</p>
                            <img src="/img/vectoresPracticaImg.svg" alt="" className='practiceImg' />
                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#vectores">
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
                                <p>Tiempo que tardará en caer</p>
                                <Latex>
                                    {caidaLibreOne}
                                </Latex><br /><br />
                                <Latex>
                                    {caidaLibreTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {caidaLibreThree}
                                </Latex><br /><br />
                                <p>Velocidad al llegar</p>
                                <Latex>
                                    {caidaLibreFour}
                                </Latex><br />
                                <Latex>
                                    {caidaLibreFive}
                                </Latex><br /><br />
                                <p>Nota: La velocidad tiene resultado negativo, debido a que en el sistema de referencia planteado encontraremos que el vector velocidad se dirige hacia el eje negativo de las <i>Y</i>, por ende el resultado de esta será negativa. Esto no significa que disminuya la velocidad.</p>
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
                                <p>Altura máxima</p>
                                <Latex>
                                    {tiroVerticalOne}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroVerticalTwo}
                                </Latex><br /><br />
                                <p>Altura al transcurrir 3 segundos</p>
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
                                <p>Componentes</p>
                                <Latex>
                                    {tiroParabolicoOne}
                                </Latex><br /><br />
                                <Latex>
                                    {tiroParabolicoTwo}
                                </Latex><br /><br />
                                <p>Altura al transcurrir 3 segundos</p>
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
                            <img src="/img/dinamicaPracticaImg.svg" alt="" className='practiceImg' /><br /><br />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#dinamicaOne">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse " id="dinamicaOne">
                                <p>Análisis de fuerzas</p>
                                <img src="/img/dinamicaPracticaImgTwo.svg" alt="" className='practiceImg' /><br /><br />
                                <p>Descomponer vectores</p>
                                <p>Si θ está respecto a X:</p>
                                <Latex>
                                    {dinamicaOne}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaTwo}
                                </Latex><br /><br />
                                <p>Si θ está respecto a y:</p>
                                <Latex>
                                    {dinamicaThree}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaFour}
                                </Latex><br /><br /><br />
                                <p>Componentes del peso</p>
                                <Latex>
                                    {dinamicaFive}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaSix}
                                </Latex><br /><br /><br />
                                <Latex>
                                    {dinamicaSeven}
                                </Latex><br /><br />
                                <Latex>
                                    {dinamicaEight}
                                </Latex>
                                <Latex>
                                    {dinamicaNine}
                                </Latex><br /><br />
                            </div>

                            <h5>N°2</h5>
                            <p>Un vehículo de 1300kg se encuentra en una superficie inclinada 35° respecto a la horizontal, teniendo en cuenta que el sistema está acelerado, calcule la aceleración del vehículo. Considere μ= 0.5 y g= 9.8m/s².</p>
                            <img src="/img/dinamicaPracticaImgTwo.svg" alt="" className='practiceImg' /><br /><br />

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#dinamicaTwo">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse " id="dinamicaTwo">
                                <p>Componentes del peso</p>
                                <Latex>
                                    {dinamicaTwoOne}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoTwo}
                                </Latex><br /><br /><br />
                                <p>Normal</p>
                                <Latex>
                                    {dinamicaTwoThree}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoFour}
                                </Latex><br /><br /><br />
                                <p>Fricción</p>
                                <Latex>
                                    {dinamicaTwoFive}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoSix}
                                </Latex><br />
                                <Latex>
                                    {dinamicaTwoSeven}
                                </Latex><br /><br />
                                <p>Planteamos la ecuación</p>
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

                            <img src="/img/torquePracticaImg.svg" alt="" className='practiceImg'/><br /><br />
                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#tiroParabolico">
                                    Solución
                                </button>
                            </p>
                            

                            <div className="collapse" id="tiroParabolico">
                                <p>Datos</p>
                                <Latex>
                                    {torqueOne}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueThree}
                                </Latex><br /><br />
                                <Latex>
                                    {torqueFour}
                                </Latex><br /><br /><br />
                                <p>Planteamiento</p>
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
                                <p>Convertir N a kg</p>
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
                                <p>Datos</p>
                                <Latex>
                                    {trabajoOne}
                                </Latex><br /><br />
                                <Latex>
                                    {trabajoTwo}
                                </Latex><br /><br />
                                <Latex>
                                    {trabajoThree}
                                </Latex><br /><br /><br />
                                <Latex>
                                    {trabajoFour}
                                </Latex><br /><br />
                                <Latex>
                                    {trabajoFive}
                                </Latex><br /><br />
                                <Latex>
                                    {trabajoSix}
                                </Latex><br /><br />
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


                        <hr className="my-4"/>
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
                                <p>Fórmula</p>
                                <Latex>
                                    {rendimientoOne}
                                </Latex><br /><br />
                                <p>Reemplazo de valores</p>
                                <Latex>
                                    {rendimientoTwo}
                                </Latex><br /><br />
                                <p>Despeje de potencia teórica</p>
                                <Latex>
                                    {rendimientoThree}
                                </Latex><br /><br />
                                <Latex>
                                    {rendimientoFour}
                                </Latex><br /><br />
                                <p>Resultado</p>
                                <Latex>
                                    {rendimientoFive}
                                </Latex><br /><br />
                            </div>
                        </div>

                        <hr className="my-4"/>
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
                                <p>Suma de masas</p>
                                <Latex>
                                    {energiaCineticaOne}
                                </Latex><br /><br />
                                <p>Uso de la fórmula de energía cinética</p>
                                <Latex>
                                    {energiaCineticaTwo}
                                </Latex><br /><br />
                                <p>Resultado</p>
                                <Latex>
                                    {energiaCineticaThree}
                                </Latex><br /><br />
                            </div>
                        </div>
                        
                        <hr className="my-4"/>
                        <div>
                            <h3>Energía potencial gravitatoria</h3>
                            <p>Calcule la energia potencial de una maceta de 20kg que se encuentra en un cuarto piso. Considere que g = 9.8m/s y altura = 3m.</p>

                            <p>
                                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" href="#energiaGravitatoria">
                                    Solución
                                </button>
                            </p>

                            <div className="collapse" id="energiaGravitatoria">
                                <p>Uso de la fórmula de energía cinética</p>
                                <Latex>
                                    {energiaGravitatoriaOne}
                                </Latex><br /><br />
                                <p>Resultado</p>
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
