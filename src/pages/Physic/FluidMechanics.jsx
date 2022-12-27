import Latex from "react-latex"
import { PhysicNav } from "./PhysicNav"
import { SectionTitle } from "../SectionTitle";

const FluidMechanics = () => {

    const densidad = `$$ρ = \\large \\frac{masa}{volumen}$$`
    const pesoEspecifico = `$$δ = p \\ \\cdot \\ g$$`
    const presionLiquidos = `$$P_h = ρ \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const presionAbsoluta = `$$P_{abs} = P_{atm} + ρ \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const principioPascal = `$$ \\large \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$`
    const principioArquimedes = `$$F_e = ρ \\ \\cdot \\ g \\ \\cdot \\ V_s $$`
    const principioArquimedesExtra = `$$V_s $$`
    const principioContinuidadOne = `$$V_1 \\ \\cdot \\ A_1 = V_2 \\ \\cdot \\ A_2$$`
    const principioContinuidadTwo = `$$Q = \\frac{V}{T}$$`
    const teoremaBernoulli = `$$ρgh_1  \\ + \\ \\frac{1}{2}ρV_1^2 \\ + \\ P_1 = ρgh_2$$`

    return (
        <div className="home-fisica">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Mecánica de fluidos"/>
            
            <PhysicNav/>

            <div className="cardsFisica container">
                <div className="fisica shadow" data-aos="fade-up" data-aos-duration="700">
                    <h4>Densidad</h4>
                    <Latex>{densidad}</Latex><br />
                    <p>(la masa debe estar en kilogramos y el volumen en metros cúbicos)</p>

                    <hr className="my-4" />
                    <h4>Peso específico</h4>
                    <Latex>{pesoEspecifico}</Latex>

                    <hr className="my-4" />
                    <h4>Presión en líquidos</h4>
                    <Latex>{presionLiquidos}</Latex><br />

                    <hr className="my-4" />
                    <h4>Presión absoluta</h4>
                    <Latex>{presionAbsoluta}</Latex>

                    <hr className="my-4" />
                    <h4>Principio de Pascal</h4>
                    <Latex>{principioPascal}</Latex>

                    <hr className="my-4" />
                    <h4>Principio de Arquímedes</h4>
                    <Latex>{principioArquimedes}</Latex><br />
                    <p>Fe = Fuerza de empuje <br /> ρ = Densidad <br /> <Latex>{principioArquimedesExtra}</Latex> = Volumen sumergido</p>

                    <hr className="my-4" />
                    <h4>Ecuación del principio de continuidad</h4>
                    <p><Latex>{principioContinuidadOne}</Latex></p>
                    <Latex>{principioContinuidadTwo}</Latex>
                    <hr className="my-4" />
                    <h4>Teorema de Bernoulli</h4>
                    <Latex>{teoremaBernoulli}</Latex>
                    <hr />
                    <div className="flex justify-content-center">
                        <button className="btn btn-secondary"><a href="https://youtu.be/F5s7LVa78xY" className="text-decoration-none text-white">Profundizar 1</a></button>
                        <button className="btn btn-secondary mx-2"><a href="https://youtu.be/F5s7LVa78xY" className="text-decoration-none text-white">Profundizar 2</a></button>
                        <button className="btn btn-secondary" id="profundizarTres"><a href="https://youtu.be/F5s7LVa78xY" className="text-decoration-none text-white">Profundizar 3</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FluidMechanics