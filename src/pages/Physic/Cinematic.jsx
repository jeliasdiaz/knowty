import Latex from "react-latex"
import { PhysicNav } from "./PhysicNav.jsx";
import { SectionTitle, MoreBtn, TopWave } from "../../components/";
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Cinematic = () => {

    const vectoresOne = `$$C_x = C \\cdot cos(θ)
    $$`
    const vectoresTwo = `$$C_y = C \\ \\cdot \\ sen(θ)$$`
    const vectoresThree = `$$C_x = C \\ \\cdot \\ sen(θ)$$`
    const vectoresFour = `$$C_y = C \\ \\cdot \\ cos(θ)$$`
    const vectoresFive = `$$X_x + Y_y = Z_x$$`
    const vectoresSix = `$$X_y + Y_y = Z_y$$`
    const vectoresSeven = `$$Z = \\sqrt{Z_x^2 + Z_y^2} $$`
    const vectoresEight = `$$θ_z = tan^{-1} \\left(\\frac{Z_y}{Z_x}  \\right)  $$`

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
    const tiroParabolicoSix = `$$h_{max} = \\large \\frac{v_{oy}^2}{g}$$`
    const tiroParabolicoSeven = `$$t_v = \\large \\frac{2v_{oy}}{g}$$`
    const tiroParabolicoEight = `$$t_c = \\large \\sqrt{\\frac{2h}{g}}$$`
    const tiroParabolicoNine = `$$D_h = v_{ox} \\ \\cdot \\ t_v$$`

    const cx = `$$C_x$$`
    const cy = `$$C_y$$`
    const angulo = `$$θ$$`
    const magnitud = `$$Z$$`
    const direccion = `$$θ_z$$`

    const posicionMru = [
        {
            name: "1s",
            value: 0,
        },
        {
            name: "2s",
            value: 2,
        },
        {
            name: "3s",
            value: 4,
        },
        {
            name: "4s",
            value: 6,
        },
    ];

    const velocidadMru = [
        {
            name: "1s",
            value: 2,
        },
        {
            name: "2s",
            value: 2,
        },
        {
            name: "3s",
            value: 2,
        },
        {
            name: "4s",
            value: 2,
        },
    ];

    const posicionMrua = [
        {
            value: 0,
        },
        {
            name: "1s",
            value: 1,
        },
        {
            name: "2s",
            value: 4,
        },
        {
            name: "3s",
            value: 9,
        },
        {
            name: "4s",
            value: 16,
        },
        {
            name: "4s",
            value: 25,
        },
    ];

    const velocidadMrua = [
        {
            value: 0,
        },
        {
            name: "1s",
            value: 2,
        },
        {
            name: "2s",
            value: 4,
        },
        {
            name: "3s",
            value: 6,
        },
        {
            name: "4s",
            value: 8,
        },
    ];

    const aceleracionMrua = [
        {
            name: "1s",
            value: 2,
        },
        {
            name: "2s",
            value: 2,
        },
        {
            name: "3s",
            value: 2,
        },
        {
            name: "4s",
            value: 2,
        },
    ];

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Cinemática" />

            <PhysicNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <div>
                        <h3>Vectores</h3>
                        <h6>Descomponer vectores</h6>
                        <Latex>{angulo}</Latex><span> = ángulo.</span><br />
                        <Latex>{cx}</Latex><span> = componente horizontal o x.</span><br />
                        <Latex>{cy}</Latex><span>= componente vertical o y.</span><br /><br />
                        <p>
                            Si θ esta respecto a X <br />
                            <Latex>{vectoresOne}</Latex><br />
                            <Latex>{vectoresTwo}</Latex><br />
                        </p>
                        <p>
                            Si θ esta respecto a Y <br />
                            <Latex>{vectoresThree}</Latex><br />
                            <Latex>{vectoresFour}</Latex><br />
                        </p>

                        <h6>Calculo del nuevo vector</h6>
                        <Latex>{vectoresFive}</Latex><br />
                        <Latex>{vectoresSix}</Latex><br /><br />

                        <h6>Calculo magnitud y dirección </h6>
                        <Latex>{vectoresSeven}</Latex><br />
                        <Latex>{vectoresEight}</Latex><br /><br />

                        <Latex>{magnitud}</Latex> <span> = magnitud / valor del vector.</span><br />
                        <Latex>{direccion}</Latex> <span> = dirección / ángulo de inclinación del vector.</span>

                    </div>
                    <hr />
                    <div>
                        <h3>M.R.U.</h3>
                        <h6>Posición</h6>
                        <Latex>{mruOne}</Latex><br /><br />

                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#posiciónMru">
                            Gráfica
                        </button>
                        <br /><br /><br />

                        <div className="collapse mx-auto" id="posiciónMru">
                            <ResponsiveContainer width={"88%"} height={300}>
                                <LineChart width={500} height={300} data={posicionMru}>
                                    <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name">
                                        <Label value="Tiempo" offset={-2} position="insideBottom" />
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Posición" angle={-90} position="insideLeft" />
                                    </YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <h6>Velocidad</h6>
                        <Latex>{mruTwo}</Latex><br /><br />

                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#velocidadMru">
                            Gráfica
                        </button>
                        <br /><br /><br />

                        <div className="collapse mx-auto" id="velocidadMru">
                            <ResponsiveContainer width={"88%"} height={300}>
                                <LineChart width={500} height={300} data={velocidadMru}>
                                    <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name">
                                        <Label value="Tiempo" offset={-2} position="insideBottom" />
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Velocidad" angle={-90} position="insideLeft" />
                                    </YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <MoreBtn url="https://youtu.be/q44bP7xo2QM" />

                        <hr />

                        <h3>M.R.U.A.</h3>
                        <h6>Posición</h6>
                        <Latex>{mruaOne}</Latex>
                        <br /><br />

                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#posicionMrua">
                            Gráfica
                        </button>
                        <br />

                        <div className="collapse mx-auto" id="posicionMrua">
                            <ResponsiveContainer width={"88%"} height={300}>
                                <LineChart width={500} height={300} data={posicionMrua} >
                                    <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name">
                                        <Label value="Tiempo" offset={-2} position="insideBottom" />
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Posición" angle={-90} position="insideLeft" />
                                    </YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <br />

                        <h6>Velocidad</h6>
                        <Latex>{mruaTwo}</Latex><br /><br />

                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#velocidadMrua">
                            Gráfica
                        </button>
                        <br /><br />

                        <div className="collapse mx-auto" id="velocidadMrua">
                            <ResponsiveContainer width={"88%"} height={300}>
                                <LineChart width={500} height={300} data={velocidadMrua} >
                                    <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name">
                                        <Label value="Tiempo" offset={-2} position="insideBottom" />
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Velocidad" angle={-90} position="insideLeft" />
                                    </YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <h6>Aceleración</h6>
                        <Latex>{mruaThree}</Latex><br /><br />


                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" href="#aceleracionMrua">
                            Gráfica
                        </button>
                        <br /><br />

                        <div className="collapse mx-auto" id="aceleracionMrua">
                            <ResponsiveContainer width={"88%"} height={300}>
                                <LineChart width={500} height={300} data={aceleracionMrua} >
                                    <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="name">
                                        <Label value="Tiempo" offset={-2} position="insideBottom" />
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Aceleración" angle={-90} position="insideLeft" offset={2} />
                                    </YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <MoreBtn url="https://youtu.be/q44bP7xo2QM" />
                    </div>
                    <hr />
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
                <hr />
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
