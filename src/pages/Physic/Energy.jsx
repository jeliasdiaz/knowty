import { PhysicNav } from "./PhysicNav"
import { SectionTitle, MoreBtn, TopWave } from "../../components/";
const Latex = require("react-latex")

export const Energy = () => {

    const trabajoOne = `$$W = F \\ \\cdot \\ cos(θ) \\ \\cdot \\ 𐤃x$$`
    const trabajoTwo = `$$W = F \\ \\cdot \\ sen(θ) \\ \\cdot \\ 𐤃y$$`

    const potencia = `$$P =  \\large \\frac{W}{𐤃t}$$`

    const rendimiento = `$$ \\small  Rendimiento = \\normalsize \\frac{Potencia \\ útil}{Potencia \\ teórica} \\ \\cdot \\ 100$$`

    const energiaCinetica = `$$E_k = \\frac{1}{2} * m * v^2$$`
    const extraOne = `$$m = \\large \\frac{2 \\ \\cdot \\ E_k}{v^2}$$`
    const extraTwo = `$$v = \\large \\sqrt{\\frac{2 \\ \\cdot \\ E_k}{m}}$$`
    const energiaGravitatoria = `$$E_p = m \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const energiaElastica = `$$E_{pe} = \\large \\frac{1}{2} \\ \\cdot \\ k \\ \\cdot \\ (𐤃x)^2$$`
    const energiaMecanica = `$$E_m = E_p + E_k$$`
    const conservacionEnergia = `$$E_{k1} + E_{p1} + E_{pe1} = E_{k2} + E_{p2} + E_{pe2}$$`
    const cantidadMovimiento = `$$ρ = m \\ \\cdot \\ v$$`
    const energiaCineticaCantidadMovimiento = `$$E_k = \\large \\frac{ρ^2}{2 \\ \\cdot \\ m}$$`
    const impulso = `$$F \\ \\cdot \\ 𐤃t = I$$`
    const colisionesElasticasOne = `$$m_1 \\ \\cdot \\ v_1 \\ + \\ m_2 \\ \\cdot \\ v_2 = m_1 \\ \\cdot \\ v_1'  \\ + \\ m_2 \\ \\cdot \\ v_2'$$`
    const colisionesElasticasTwo = `$$V_2' = \\large \\frac{2 \\ \\cdot \\ m_1 \\ \\cdot \\ v_1}{(m_1 \\ + \\ m_2)}'$$`

    const colisionesInelasticasOne = `$$m_1 \\ \\cdot \\ v_1 + m_2 * v_2 = (m_1 + m_2) \\ \\cdot \\ v_2'$$`
    const colisionesInelasticasTwo = `$$V_2' = \\large \\frac{m_1 \\ \\cdot \\ v_1 \\ + \\ m_2 \\ \\cdot \\ v_2}{(m_1 \\ + \\ m_2)}'$$`

    const watts = `$$W$$`
    const deformacion = `$$𐤃x$$`
    const constanteElasticidad = `$$k$$`
    const energiaPotencialAcronimo = `$$E_p$$`
    const energiaCineticaAcronimo = `$$E_k$$`
    const energiaElasticaAcronimo = `$$E_{pe}$$`
    const momentum = `$$ρ$$`
    const tiempo = `$$t$$`
    const masa = `$$m$$`
    const velocidad = `$$v$$`
    const gravedad = `$$g$$`
    const altura = `$$h$$`

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Energía" />

            <PhysicNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
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
                <MoreBtn url="https://youtu.be/JJt-bwQMJck" />


                <hr />
                <div>
                    <h4>Potencia</h4>
                    <Latex>{potencia}</Latex><br /><br />

                    <Latex>{watts}</Latex>
                    <span> = Watts.</span><br />

                    <Latex>{tiempo}</Latex>
                    <span> = tiempo.</span>
                </div>
                <br />

                <MoreBtn url="https://youtu.be/JJt-bwQMJck" />

                <hr />
                <div>
                    <h4>Rendimiento</h4>
                    <Latex>{rendimiento}</Latex>
                </div>
                <br />
                <MoreBtn url="https://youtu.be/JJt-bwQMJck" />


                <hr />
                <div>
                    <h4>Energía cinética</h4>
                    <Latex>{energiaCinetica}</Latex><br /><br />

                    <Latex>{masa}</Latex>
                    <span> = masa.</span><br />

                    <Latex>{velocidad}</Latex>
                    <span> = velocidad.</span>
                </div>
                <br />
                <MoreBtn url="https://youtu.be/wnXnqtrAQGM" />

                <hr />
                <h5>Extra</h5>
                <Latex>{extraOne}</Latex>
                <br /><br />
                <Latex>{extraTwo}</Latex>
                <br />

                <hr />
                <div>
                    <h4>Energía potencial gravitatoria</h4>
                    <Latex>{energiaGravitatoria}</Latex><br /><br />

                    <Latex>{masa}</Latex>
                    <span> = masa.</span><br />

                    <Latex>{gravedad}</Latex>
                    <span> = gravedad.</span><br />

                    <Latex>{altura}</Latex>
                    <span> = altura.</span>
                </div>
                <br />
                <MoreBtn url="https://youtu.be/wtlJS3cPkG8" />

                <hr />
                <h4>Energía potencial elástica</h4>
                <Latex>{energiaElastica}</Latex><br /><br />

                <Latex>{deformacion}</Latex>
                <span> = deformación.</span> <br />

                <Latex>{constanteElasticidad}</Latex>
                <span> = constante de elásticidad.</span>
                <br /><br />
                <MoreBtn url="https://youtu.be/lRc5kPcbjoI" />

                <hr />
                <h4>Energía mecánica</h4>
                <Latex>{energiaMecanica}</Latex><br /><br />
                <Latex>{energiaPotencialAcronimo}</Latex>
                <span> = energía potencial.</span><br />

                <Latex>{energiaCineticaAcronimo}</Latex>
                <span> = energía cinética.</span>
                <br /><br />

                <hr />b
                <h4>Conservación de la energía</h4>
                <Latex>{conservacionEnergia}</Latex><br /><br />
                <Latex>{energiaPotencialAcronimo}</Latex>
                <span> = energía potencial.</span><br />

                <Latex>{energiaCineticaAcronimo}</Latex>
                <span> = energía cinética.</span><br />

                <Latex>{energiaElasticaAcronimo}</Latex>
                <span> = energía elástica.</span>

                <br /><br />
                <MoreBtn url="https://youtu.be/L_MBur9Swlo" />

                <hr />
                <h4>Cantidad de movimiento</h4>
                <Latex>{cantidadMovimiento}</Latex><br />
                <p><Latex>{momentum}</Latex> = Rho (letra griega cuyo significado es momentum).</p>

                <MoreBtn url="https://youtu.be/gHu4dVBvurQ" />

                <hr />
                <h4>Energía cinética según la cantidad de movimiento</h4>
                <Latex>{energiaCineticaCantidadMovimiento}</Latex><br /><br />

                <Latex>{momentum}</Latex>
                <span> = impulso.</span>

                <hr />
                <h4>Impulso</h4>
                <Latex>{impulso}</Latex>

                <hr />
                <h4>Colisiones elásticas</h4>
                <Latex>{colisionesElasticasOne}</Latex> <br /> <br />
                <Latex>{colisionesElasticasTwo}</Latex> <br /><br />
                <MoreBtn url="https://youtu.be/i59oKp32JxA" />

                <hr />
                <h4>Colisiones inelásticas</h4>
                <Latex>{colisionesInelasticasOne}</Latex><br /><br />
                <Latex>{colisionesInelasticasTwo}</Latex><br /><br />
                <MoreBtn url="https://youtu.be/i59oKp32JxA" />
            </div>
        </div>
    )
}
