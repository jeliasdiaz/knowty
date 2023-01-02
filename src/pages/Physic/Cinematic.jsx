import Latex from "react-latex"
import { PhysicNav } from "./PhysicNav.jsx";
import { SectionTitle } from "../../components/SectionTitle";

export const Cinematic = () => {

    const vectoresOne = `$$C_x = C \\cdot cos(θ)
    $$`
    const vectoresTwo = `$$C_y = C \\ \\cdot \\ sen(θ)$$`
    const vectoresThree = `$$C_x = C \\ \\cdot \\ sen(θ)$$`
    const vectoresFour = `$$C_y = C \\ \\cdot \\ cos(θ)$$`
    const vectoresFive = `$$X_x + Y_y = Z_x$$`
    const vectoresSix = `$$X_y + Y_y = Z_y$$`
    const vectoresSeven = `$$Z = \\sqrt{Z_x^2 + Z_y^2} $$`
    const vectoresEight = `$$θ_z = tan^-1 \\left(\\frac{Z_y}{Z_x}  \\right)  $$`

    const mruOne = `$$x = x_0 + v \\ \\cdot \\ t$$`
    const mruTwo = `$$v = \\large \\frac{(x_f \\ - \\  x_i)}{(t_f \\ - \\ t_i)}$$`

    const mruaOne = `$$x =  x_0 \\ + \\ v_0 \\ \\cdot \\ t + \\ \\frac{1}{2} \\ \\cdot \\ a \\ \\cdot \\ t^2$$`
    const mruaTwo = `$$v =  v_0 \\ + \\ a \\ \\cdot \\ t$$`
    const mruaThree = `$$a = \\large \\frac{(v_f \\ - \\ v_i)}{(t_f \\ - \\ t_i)}$$`

    const caidaTiroVerticalOne = `$$y = y_0 + v_0 \\ \\cdot \\ t - \\frac{1}{2} \\ \\cdot \\ g \\ \\cdot \\ t ^2$$`
    const caidaTiroVerticalTwo = `$$v = v_0 - g \\ \\cdot \\ t$$`
    const caidaTiroVerticalThree = `$$h_{max} = v_{oy}^2$$`
    const caidaTiroVerticalFour = `$$t_v = \\large \\frac{2v_0}{2g}$$`
    const caidaTiroVerticalFive = `$$t_c = \\large \\sqrt{\\frac{2h}{g}}$$`

    const tiroParabolicoOne = `$$v_{ox} = v_0 \\ \\cdot \\ cos(θ)$$`
    const tiroParabolicoTwo = `$$v_{oy} = v_0 \\ \\cdot \\ sen(θ)$$`
    const tiroParabolicoThree = `$$x = x_0 + v_{0x} \\ \\cdot \\ t$$`
    const tiroParabolicoFour = `$$y = y_0 + v_{oy} \\ \\cdot \\ t - \\frac{1}{2} \\ \\cdot \\ g \\ \\cdot \\ t^2$$`
    const tiroParabolicoFive = `$$v = v_0 - g \\ \\cdot \\ t$$`
    const tiroParabolicoSix = `$$h_{max} = \\large \\frac{2v_{oy}}{g}$$`
    const tiroParabolicoSeven = `$$t_v = \\large \\frac{2v_{oy}}{g}$$`
    const tiroParabolicoEight = `$$t_c = \\large \\sqrt{\\frac{2h}{g}}$$`
    const tiroParabolicoNine = `$$D_h = v_{ox} \\ \\cdot \\ t_v$$`

    return (
        <div className="home-fisica">
            <img src="/img/waveThree.svg" alt="" />
            
            <SectionTitle title="Cinemática"/>

            <PhysicNav/>

            <div className="fisica ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <h3>Vectores</h3>
                        <h6>Descomponer vectores</h6>
                        <p>
                            Si θ esta respecto a X <br />
                            <Latex>{vectoresOne}</Latex><br />
                            <Latex>{vectoresTwo}</Latex>
                        </p>
                        <p>
                            Si θ esta respecto a Y <br />
                            <Latex>{vectoresThree}</Latex><br />
                            <Latex>{vectoresFour}</Latex><br />
                        </p>

                        <h6>Calculo del nuevo vector</h6>
                        <Latex>{vectoresFive}</Latex><br />
                        <Latex>{vectoresSix}</Latex><br /><br />
                        <h6>Calculo magnitud, y dirección </h6>
                        <Latex>{vectoresSeven}</Latex><br />
                        <Latex>{vectoresEight}</Latex>

                    </div>
                    <hr/>
                    <div>
                        <h3>M.R.U.</h3>
                        <h6>Posición</h6>
                        <Latex>{mruOne}</Latex><br /><br />

                        <h6>Velocidad</h6>
                        <Latex>{mruTwo}</Latex><br /><br />

                        <button className="btn btn-secondary"><a href="https://youtu.be/q44bP7xo2QM" className="text-decoration-none text-white">Profundizar</a></button>

                        <hr />

                        <h3>M.R.U.A.</h3>
                        <h6>Posición</h6>
                        <Latex>{mruaOne}</Latex><br /><br />

                        <h6>Velocidad</h6>
                        <Latex>{mruaTwo}</Latex><br /><br />

                        <h6>Aceleración</h6>
                        <Latex>{mruaThree}</Latex><br /><br />

                        <button className="btn btn-secondary"><a href="https://youtu.be/q44bP7xo2QM" className="text-decoration-none text-white">Profundizar</a></button>


                    </div>
                    <hr/>
                    <div>
                        <h3>Caída libre y tiro vertical</h3>
                        <h6>Posición</h6>
                        <Latex>{caidaTiroVerticalOne}</Latex><br /><br />

                        <h6>Velocidad</h6>
                        <Latex>{caidaTiroVerticalTwo}</Latex><br /><br />

                        <h6>Altura máxima</h6>
                        <Latex>{caidaTiroVerticalThree}</Latex><br /><br />

                        <h6>Tiempo de vuelo</h6>
                        <Latex>{caidaTiroVerticalFour}</Latex><br /><br />

                        <h6>Tiempo de caída</h6>
                        <Latex>{caidaTiroVerticalFive}</Latex><br /><br />

                    </div>
                </div>
                <hr  />
                <h3>Tiro parábolico</h3>
                <h6>Componentes de la velocidad</h6>
                <Latex>{tiroParabolicoOne}</Latex><br />
                <Latex>{tiroParabolicoTwo}</Latex><br /><br />

                <h6>Posición</h6>
                <Latex>{tiroParabolicoThree}</Latex><br />
                <Latex>{tiroParabolicoFour}</Latex><br /><br />

                <h6>Velocidad</h6>
                <Latex>{tiroParabolicoFive}</Latex><br /><br />

                <h6>Altura máxima</h6>
                <Latex>{tiroParabolicoSix}</Latex><br /><br />

                <h6>Tiempo de vuelo</h6>
                <Latex>{tiroParabolicoSeven}</Latex><br /><br />

                <h6>Tiempo de caída</h6>
                <Latex>{tiroParabolicoEight}</Latex><br /><br />

                <h6>Alcance horizontal</h6>
                <Latex>{tiroParabolicoNine}</Latex>

            </div>
        </div>
    )
}
