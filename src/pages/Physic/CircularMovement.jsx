import Latex from "react-latex"
import { PhysicNav } from "./PhysicNav"

export const CircularMovement = () => {

    const mcuOne = `$$θ = θ_0 + ω * t$$`
    const mcuTwo = `$$ω = \\frac{(θ_f - θ_i)}{(t_f - t_i)}$$`
    const mcuThree = `$$T = \\frac{2π}{ω}$$`
    const mcuFour = `$$f = \\frac{1}{t}$$`

    const mcuaOne = `$$θ = θ_0 + ω * t + \\frac{1}{2} * a *t^2$$`
    const mcuaTwo = `$$ω = ω_0 + a * t$$`
    const mcuaThree = `$$a = \\frac{(w_f - w_i)}{(t_f - t_i)}$$`

    const extraOne = `$$ω = rpm * \\frac{2π}{60}$$`
    const extraTwo = `$$N_v = \\frac{θ}{2π}$$`
    return (
        <div className="circular-home">
            <img src="/img/waveThree.svg" alt="" />
            <h1 className="textIntroducion shadow-lg">Movimiento circular</h1>
            
            <PhysicNav/>

            <div className="fisica shadow" data-aos="fade-up" data-aos-duration="700">
                <div className="flex">
                    <div>
                        <h2>M.C.U.</h2>
                        <h5>Posición</h5>
                        <Latex>{mcuOne}</Latex><br/><br />

                        <h5>Velocidad angular</h5>
                        <Latex>{mcuTwo}</Latex><br/><br />

                        <h5>Periodo</h5>
                        <Latex>{mcuThree}</Latex><br/><br />

                        <h5>Frecuencia</h5>
                        <Latex>{mcuFour}</Latex><br/><br />
                    </div>

                    <hr className="w-100" />
                    <div>
                        <h2>M.C.U.A.</h2>
                        <h5>Posición</h5>
                        <Latex>{mcuaOne}</Latex><br/><br />

                        <h5>Velocidad</h5>
                        <Latex>{mcuaTwo}</Latex><br/><br />

                        <h5>Aceleración</h5>
                        <Latex>{mcuaThree}</Latex><br/>
                    </div>
                    <hr className="w-100" />
                    <div>
                        <h4>Extra</h4>
                        <h5>Conversion importante</h5>
                        <Latex>{extraOne}</Latex><br/><br />

                        <h5>Número de vueltas</h5>
                        <Latex>{extraTwo}</Latex><br/><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
