import { CollapseInformation, TopWave } from "../../components"

export const Credits = () => {
    return (
        <div className="iconsContainer">
            <TopWave />
            <div className="pb-5">
                <div className="iconsCard ownShadow">
                    <CollapseInformation name="Colaboradores" id="Colaboradores">
                        <ul>
                            <li>Harold Smith Martínez</li>
                            {/* <li>Henoc Solano</li> */}
                            <li>Emily María Puello Rodriguez</li>
                            <li>Miguel Andrés Bujato García</li>
                        </ul>
                    </CollapseInformation>

                    <hr />

                    <CollapseInformation name="Iconos de Flaticon" id="flaticonIconos">
                        <ul>
                            <li><a href="https://www.flaticon.es/iconos-gratis/grafico-circular" target="_blank" rel="noreferrer" title="gráfico circular iconos" className=" text-decoration-none">Gráfico circular iconos creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/physics" target="_blank" rel="noreferrer" title="physics icons" className=" text-decoration-none">Iconos de física creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.es/iconos-gratis/figura-geometrica" target="_blank" rel="noreferrer" title="figura geométrica iconos" className=" text-decoration-none">Figura geométrica iconos creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/english-language" target="_blank" rel="noreferrer" title="english language icons" className=" text-decoration-none">Iconos de inglés creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/flask" target="_blank" rel="noreferrer" title="flask icons" className=" text-decoration-none">Flask iconos creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/law" target="_blank" rel="noreferrer" title="law icons" className=" text-decoration-none">Iconos de leyes creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/pythagoras" target="_blank" rel="noreferrer" title="pythagoras icons" className=" text-decoration-none">Iconos de Pitágoras creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.es/iconos-gratis/filosofia" target="_blank" rel="noreferrer" title="filosofia iconos" className=" text-decoration-none">Filosofía iconos creados por Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/dna" title="dna icons" className=" text-decoration-none">Dna icons created by Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/tool-box" title="tool box icons" className=" text-decoration-none">Tool box icons created by pongsakornRed - Flaticon</a></li>
                        </ul>
                    </CollapseInformation>
                </div>
            </div>
        </div>
    )
}
