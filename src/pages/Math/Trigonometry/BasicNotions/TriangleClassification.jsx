import { basicTrigonometryNotionsItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const TriangleClassification = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Clasificación de triángulos" />
            <ContentsTable items={basicTrigonometryNotionsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex flex-wrap">
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <img src="/img/trianguloEquilatero.svg" alt="Triangulo equilatero" className="w-50 rounded-3 revealing-image" />
                            <h5 className="pt-2">Equilatero</h5>
                            <p className="w-75"> Todos sus lados poseen la misma medida.</p>
                        </div>

                        <div>
                            <div className="d-flex justify-content-end">
                                <img src="/img/trianguloIsoceles.svg" alt="Triangulo isoceles" className="w-50 rounded-3 revealing-image" />
                            </div>
                            <h5 className="text-end pt-2">Isóceles</h5>
                            <p className="text-end">Dos de sus lados poseen la misma medida.</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                        <div>
                            <img src="/img/trianguloEscaleno.svg" alt="Triangulo escaleno" className="w-50 rounded-3 revealing-image" />
                            <h5 className="pt-2">Escaleno</h5>
                            <p className="w-75">La medida de todos sus lados es diferente.</p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-end">
                                <img src="/img/trianguloAcutangulo.svg" alt="Triangulo acutangulo" className="w-75 rounded-3 revealing-image" />
                            </div>
                            <h5 className="text-end pt-2">Acutángulo</h5>
                            <p className="text-end"> Todos sus ángulos internos son agudos.</p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between pt-2">
                        <div>
                            <img src="/img/trianguloObtuso.svg" alt="Triangulo obtuso" className="w-50 rounded-3 revealing-image" />
                            <h5 className=" pt-2">Obtusángulo</h5>
                            <p className="w-75"> Posee un ángulo obtuso (mayor a 90° y menor a 180°).</p>
                        </div>

                        <div>
                            <div className="d-flex justify-content-end">
                                <img src="/img/trianguloRectangulo.svg" alt="Triangulo rectangulo" className="w-75 rounded-3 revealing-image" />
                            </div>
                            <h5 className="text-end pt-2">Rectángulo</h5>
                            <p className="text-end"> Posee un ángulo recto.</p>
                        </div>
                    </div>
                </div>
                <div className="d-block pt-3">
                    <h4>Nota</h4>
                    <ul>
                        <li>La sumatoria de los ángulos internos de un triángulo es 180°</li>
                        <li>El ángulo de mayor longitud se opone al ángulo de mayor valor y viceversa.</li>
                        <li>Los ángulos agudos son aquellos menores a 90°</li>
                        <li>Los ángulos rectos poseen 90°</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
