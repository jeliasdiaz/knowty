import { PhysicNav } from "./PhysicNav"
import { SectionTitle } from "../SectionTitle";
const  Latex = require("react-latex")

export const Energy = () => {

    const trabajoOne = `$$W = F \\ \\cdot \\ cos(θ) \\ \\cdot \\ 𐤃x$$`
    const trabajoTwo = `$$W = F \\ \\cdot \\ sen(θ) \\ \\cdot \\ 𐤃y$$`

    const potencia = `$$P =  \\large \\frac{W}{𐤃t}$$`

    const rendimiento = `$$ \\small  Rendimiento = \\normalsize \\frac{Potencia \\ útil}{Potencia \\ teórica} \\ \\cdot \\ 100$$`

    const energiaCinetica = `$$E_k = \\frac{1}{2} * m * v^2$$`
    const extraOne = `$$m = \\large \\frac{2 \\ \\cdot \\ E_k}{v^2}$$`
    const extraTwo= `$$v = \\large \\sqrt{\\frac{2 \\ \\cdot \\ E_k}{m}}$$`
    const energiaGravitatoria = `$$E_p = m \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const energiaElastica = `$$E_{pe} = \\large \\frac{1}{2} \\ \\cdot \\ k \\ \\cdot \\ (𐤃x)^2$$`
    const energiaMecanica = `$$E_m = E_p + E_k$$`
    const conservacionEnergia = `$$E_{k1} + E_{p1} + E_{pe1} = E_{k2} + E_{p2} + E_{pe2}$$`
    const cantidadMovimiento = `$$ρ = m \\ \\cdot \\ v$$`
    const energiaCineticaCantidadMovimiento = `$$E_k = \\large \\frac{p^2}{2 \\ \\cdot \\ m}$$`
    const impulso = `$$F \\ \\cdot \\ 𐤃t = I$$`
    const colisionesElasticasOne = `$$m_1 \\ \\cdot \\ v_1 \\ + \\ m_2 \\ \\cdot \\ v_2 = m_1 \\ \\cdot \\ v_1'  \\ + \\ m_2 \\ \\cdot \\ v_2'$$`
    const colisionesElasticasTwo = `$$V_2' = \\large \\frac{2 \\ \\cdot \\ m_1 \\ \\cdot \\ v_1}{(m_1 \\ + \\ m_2)}'$$`

    const colisionesInelasticasOne = `$$m_1 \\ \\cdot \\ v_1 + m_2 * v_2 = (m_1 + m_2) \\ \\cdot \\ v_2'$$`
    const colisionesInelasticasTwo = `$$V_2' = \\large \\frac{m_1 \\ \\cdot \\ v_1 \\ + \\ m_2 \\ \\cdot \\ v_2}{(m_1 \\ + \\ m_2)}'$$`

    return (
        <div className="energia-home">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Energía" />
            
            <PhysicNav/>

            <div className="fisica shadow" data-aos="fade-up" data-aos-duration="700">
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


                <hr  />
                <h4>Potencia</h4>
                <Latex>
                    {potencia}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/JJt-bwQMJck?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>


                <hr  />
                <h4>Rendimiento</h4>
                <Latex>
                    {rendimiento}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/JJt-bwQMJck?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>


                <hr  />
                <h4>Energía cinética</h4>
                <Latex>
                    {energiaCinetica}
                </Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/wnXnqtrAQGM?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h5>Extra</h5>
                <Latex>
                    {extraOne}
                </Latex>
                <br /><br />
                <Latex>
                    {extraTwo}
                </Latex>
                <br />

                <hr  />
                <h4>Energía potencial gravitatoria</h4>
                <Latex>{energiaGravitatoria}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/wtlJS3cPkG8?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h4>Energía potencial elástica</h4>
                <Latex>{energiaElastica}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/lRc5kPcbjoI?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h4>Energía mecánica</h4>
                <Latex>{energiaMecanica}</Latex><br />

                <hr  />
                <h4>Conservación de la energía</h4>
                <Latex>{conservacionEnergia}</Latex><br /><br />
                <button className="btn btn-secondary mt-2"><a href="https://youtu.be/L_MBur9Swlo?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h4>Cantidad de movimiento</h4>
                <Latex>{cantidadMovimiento}</Latex><br />
                <p>ρ = Rho (letra griega cuyo significado es momentum)</p>
                <button className="btn btn-secondary"><a href="https://youtu.be/gHu4dVBvurQ?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h4>Energía cinética según la cantidad de movimiento</h4>
                <Latex>{energiaCineticaCantidadMovimiento}</Latex>

                <hr  />
                <h4>Impulso</h4>
                <Latex>{impulso}</Latex>

                <hr  />
                <h4>Colisiones elásticas</h4>
                <Latex>{colisionesElasticasOne}</Latex> <br /> <br />
                <Latex>{colisionesElasticasTwo}</Latex> <br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/i59oKp32JxA?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>

                <hr  />
                <h4>Colisiones inelásticas</h4>
                <Latex>{colisionesInelasticasOne}</Latex><br /><br />
                <Latex>{colisionesInelasticasTwo}</Latex><br /><br />
                <button className="btn btn-secondary"><a href="https://youtu.be/i59oKp32JxA?list=PLVkfzhBCZCW1E3k0Qc1h4piYRLO9EM4Ij" className="text-decoration-none text-white">Profundizar</a></button>
            </div>
        </div>
    )
}
