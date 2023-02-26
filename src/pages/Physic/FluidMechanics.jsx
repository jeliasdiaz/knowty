import Latex from "react-latex"
import { PhysicNav } from "./PhysicNav"
import { SectionTitle, MoreBtn, TopWave } from "../../components/";

export const FluidMechanics = () => {

    const densidad = `$$ρ = \\large \\frac{masa}{volumen}$$`
    const pesoEspecifico = `$$δ = ρ \\ \\cdot \\ g$$`
    const presionLiquidos = `$$P_h = ρ \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const presionAbsoluta = `$$P_{abs} = P_{atm} + ρ \\ \\cdot \\ g \\ \\cdot \\ h$$`
    const principioPascal = `$$ \\large \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$`
    const principioArquimedes = `$$F_e = ρ \\ \\cdot \\ g \\ \\cdot \\ V_s $$`
    const principioArquimedesExtra = `$$V_s $$`
    const principioContinuidadOne = `$$V_1 \\ \\cdot \\ A_1 = V_2 \\ \\cdot \\ A_2$$`
    const principioContinuidadTwo = `$$Q = \\frac{V}{T}$$`
    const teoremaBernoulli = `$$ρgh_1  \\ + \\ \\frac{1}{2}ρV_1^2 \\ + \\ P_1 = ρgh_2$$`

    const densidadSimbolo = `$$ρ$$`
    const gravedad = `$$g$$`
    const altura = `$$h$$`
    const fuerzaEmpuje = `$$F_e$$`

    const fuerza = `$$F$$`
    const area = `$$A$$`
    const caudal = `$$Q$$`
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Mecánica de fluidos" />

            <PhysicNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h4>Densidad</h4>
                    <Latex>{densidad}</Latex><br />
                    <small>(la masa debe estar en kilogramos y el volumen en metros cúbicos)</small>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Peso específico</h4>
                    <Latex>{pesoEspecifico}</Latex><br /><br />

                    <Latex>{densidadSimbolo}</Latex>
                    <span> = densidad.</span><br />

                    <Latex>{gravedad}</Latex>
                    <span> = gravedad.</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Presión en líquidos</h4>
                    <Latex>{presionLiquidos}</Latex><br /><br />
                    <Latex>{densidadSimbolo}</Latex>
                    <span> = densidad.</span><br />

                    <Latex>{gravedad}</Latex>
                    <span> = gravedad.</span><br />

                    <Latex>{altura}</Latex>
                    <span> = altura.</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Presión absoluta</h4>
                    <Latex>{presionAbsoluta}</Latex><br /><br />

                    <Latex>{densidadSimbolo}</Latex>
                    <span> = densidad.</span><br />

                    <Latex>{gravedad}</Latex>
                    <span> = gravedad.</span><br />

                    <Latex>{altura}</Latex>
                    <span> = altura.</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Principio de Pascal</h4>
                    <Latex>{principioPascal}</Latex><br /><br />

                    <Latex>{fuerza}</Latex>
                    <span> = fuerza.</span><br />

                    <Latex>{area}</Latex>
                    <span> = area.</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Principio de Arquímedes</h4>
                    <Latex>{principioArquimedes}</Latex><br /><br />

                    <p><Latex>{fuerzaEmpuje}</Latex> = Fuerza de empuje <br /> ρ = Densidad <br /> <Latex>{principioArquimedesExtra}</Latex> = Volumen sumergido</p>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Ecuación del principio de continuidad</h4>
                    <p><Latex>{principioContinuidadOne}</Latex></p>
                    <Latex>{principioContinuidadTwo}</Latex><br /><br />

                    <Latex>{caudal}</Latex>
                    <span> = caudal.</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h4>Teorema de Bernoulli</h4>
                    <Latex>{teoremaBernoulli}</Latex>
                </div>

                <hr />
                <div className="flex-1 justify-content-center">
                    <MoreBtn url="https://youtu.be/CkZNUX-5rMY" />
                </div>
            </div>
        </div>
    )
}
