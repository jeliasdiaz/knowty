import { Link } from "react-router-dom"
const  Latex = require("react-latex")

export const Energia = () => {

    const trabajoOne = `$$W = F * cos(θ) * 𐤃x$$`
    const trabajoTwo = `$$W = F * sen(θ) * 𐤃y$$`

    const potencia = `$$P =  \\frac{W}{𐤃t}$$`

    const rendimiento = `$$Rendimiento = \\frac{Potencia \\ útil}{Potencia \\ teórica} * 100$$`

    const energiaCinetica = `$$E_k = \\frac{1}{2} * m * v^2$$`
    const extraOne = `$$m = \\frac{2 * E_k}{v^2}$$`
    const extraTwo= `$$v = \\sqrt{\\frac{2*E_k}{m}}$$`
    const energiaGravitatoria = `$$E_p = m*g*h$$`
    const energiaElastica = `$$E_{pe} = \\frac{1}{2} * k * (𐤃x)^2$$`
    const energiaMecanica = `$$E_m = E_p + E_k$$`
    const conservacionEnergia = `$$E_{k1} + E_{p1} + E_{pe1} = E_{k2} + E_{p2} + E_{pe2}$$`
    const cantidadMovimiento = `$$ρ = m * v$$`
    const energiaCineticaCantidadMovimiento = `$$E_k = \\frac{p^2}{2 * m}$$`
    const impulso = `$$F * 𐤃t = I$$`
    const colisionesElasticasOne = `$$m_1 * v_1 + m_2 * v_2 = m_1 * v_1' + m_2 * v_2'$$`
    const colisionesElasticasTwo = `$$V_2' = \\frac{2 * m_1 * v_1}{(m_1 + m_2)}'$$`

    const colisionesInelasticasOne = `$$m_1 * v_1 + m_2 * v_2 = (m_1 + m_2) * v_2'$$`
    const colisionesInelasticasTwo = `$$V_2' = \\frac{m_1 * v_1 + m_2 * v_2}{(m_1 + m_2)}'$$`

    return (
        <div className="energia-home">
            <img src="/img/waveThree.svg" alt="" />
            <h1 className="textIntroducion shadow-lg">Energía</h1>
            <nav className="nav-3 d-none d-sm-block" data-aos="zoom-in" data-aos-duration="800">
                <ul className="pagination pagination-md justify-content-center mt-5">
                    <li className="page-item shadow-lg"><Link to="/cinematica" className="text-decoration-none page-link">Cinemática</Link></li>

                    <li className="page-item shadow-lg"><Link to="/dinamica" className="text-decoration-none page-link">Dinámica</Link></li>

                    <li className="page-item shadow-lg"><Link to="/movimientocircular" className="text-decoration-none page-link">M. circular</Link></li>

                    <li className="page-item shadow-lg"><Link to="/energia" className="text-decoration-none page-link">Energía</Link></li>

                    <li className="page-item shadow-lg"><Link to="/mecanica-fluidos" className="text-decoration-none page-link">Fluidos</Link></li>

                    <li className="page-item shadow-lg"><Link to="/fisica-practica" className="text-decoration-none page-link">Practica</Link></li>
                </ul>
            </nav>
            <div className="fisica shadow" data-aos="zoom-in" data-aos-duration="900">
                <h4>Trabajo</h4>
                <Latex>
                    {trabajoOne}
                </Latex><br />
                <Latex>
                    {trabajoTwo}
                </Latex>

                <h4>Nota</h4>
                <p>
                    Si a es menor a 90°; el trabajo es positivo (fuerzas en la misma dirección)
                    <br />
                    Si a es igual a 90°; el trabajo es nulo (fuerzas en forma de L)
                    <br />
                    Si a es mayor a 90°; el trabajo es negativo (fuerzas en dirección opuesta)
                </p>
                <button className="btn btn-secondary"><a href="https://youtu.be/JJt-bwQMJck?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>


                <hr className="my-4" />
                <h4>Potencia</h4>
                <Latex>
                    {potencia}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/JJt-bwQMJck?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>


                <hr className="my-4" />
                <h4>Rendimiento</h4>
                <Latex>
                    {rendimiento}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/JJt-bwQMJck?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>


                <hr className="my-4" />
                <h4>Energía cinética</h4>
                <Latex>
                    {energiaCinetica}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/wnXnqtrAQGM?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h5>Extra</h5>
                <Latex>
                    {extraOne}
                </Latex>
                <br /><br />
                <Latex>
                    {extraTwo}
                </Latex>
                <br />

                <hr className="my-4" />
                <h4>Energía potencial gravitatoria</h4>
                <Latex>{energiaGravitatoria}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/wtlJS3cPkG8?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h4>Energía potencial elástica</h4>
                <Latex>{energiaElastica}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/lRc5kPcbjoI?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h4>Energía mecánica</h4>
                <Latex>{energiaMecanica}</Latex><br />

                <hr className="my-4" />
                <h4>Conservación de la energía</h4>
                <Latex>{conservacionEnergia}</Latex><br /><br />
                <button className="btn btn-secondary mt-2"><a href="https://youtu.be/L_MBur9Swlo?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h4>Cantidad de movimiento</h4>
                <Latex>{cantidadMovimiento}</Latex><br />
                <p>ρ = Rho (letra griega cuyo significado es momentum)</p>
                <button className="btn btn-secondary"><a href="https://youtu.be/gHu4dVBvurQ?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h4>Energía cinética según la cantidad de movimiento</h4>
                <Latex>{energiaCineticaCantidadMovimiento}</Latex>

                <hr className="my-4" />
                <h4>Impulso</h4>
                <Latex>{impulso}</Latex>

                <hr className="my-4" />
                <h4>Colisiones elásticas</h4>
                <Latex>{colisionesElasticasOne}</Latex> <br /> <br />
                <Latex>{colisionesElasticasTwo}</Latex> <br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/i59oKp32JxA?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr className="my-4" />
                <h4>Colisiones inelásticas</h4>
                <Latex>{colisionesInelasticasOne}</Latex><br /><br />
                <Latex>{colisionesInelasticasTwo}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/i59oKp32JxA?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>
            </div>
        </div>
    )
}
