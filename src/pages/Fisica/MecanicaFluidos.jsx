import Latex from "react-latex"
import { Link } from "react-router-dom"

const MecanicaFluidos = () => {

    const densidad = `$$ρ = \\frac{masa}{volumen}$$`
    const pesoEspecifico = `$$δ = p * g$$`
    const presionLiquidos = `$$P_h = ρ * g * h$$`
    const presionAbsoluta = `$$P_abs = P_atm + ρ * g * h$$`
    const principioPascal = `$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$`
    const principioArquimedes = `$$F_e = ρ * g * V_s $$`
    const principioArquimedesExtra = `$$V_s $$`
    const principioContinuidadOne = `$$V_1*A_1 = V_2*A_2$$`
    const principioContinuidadTwo = `$$Q = \\frac{V}{T}$$`
    const teoremaBernoulli = `$$ρgh_1 + \\frac{1}{2}ρV_1^2 + P_1 = ρgh_2$$`

    return (
        <div className="home-fisica">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Mecánica de fluidos</h1>
            </div>
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
            <div className="cardsFisica container">
                <div className="fisica shadow" data-aos="zoom-in" data-aos-duration="900">
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
                    <Latex>{principioContinuidadOne}</Latex><br />
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

export default MecanicaFluidos