import { MenuCard, SectionTitle, TopWave } from "../../../components";
import Latex from "react-latex"


export const PhysicPractice = () => {

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


    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Practica" />

            <div className="mobileSubjectMenu"> 
                <MenuCard url="/vectores-practica" img="fisicaIcon.png" title="Vectores" />

                <MenuCard url="/mru-practica" img="fisicaIcon.png" title="M.R.U" />

                <MenuCard url="/mrua-practica" img="fisicaIcon.png" title="M.R.U.A." />

                <MenuCard url="/caida-libre-practica" img="fisicaIcon.png" title="Caída libre" />

                <MenuCard url="/tiro-vertical-practica" img="fisicaIcon.png" title="Tiro vertical" />

                <MenuCard url="/tiro-parabolico-practica" img="fisicaIcon.png" title="Tiro parabólico" />

                <MenuCard url="/dinamica-practica" img="fisicaIcon.png" title="Dinámica" />
            </div>

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
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
    )
}
