import { items } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"
export const POT = () => {
  
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Plan de Ordenamiento Territorial" />
            <ContentsTable items={items} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <h4>Plan de ordenamiento territorial</h4>
                <ul>
                    <li>Conjunto de acciones políticas, directrices, etc. Concretadas y coherentes que se constituyen como una herramienta de planeación para el desarrollo físico de un territorio.</li>
                    <li>Orientar y priorizar las inversiones en el territorio tanto del sector público como del sector privado, es decir, define dónde se construyen los parques, los colegios, los hospitales, dónde se ubica la vivienda, las oficinas, los comercios e industrias.</li>
                    <li>Define implícitamente la relación de la ciudadanía con el ente territorial.</li>
                    <li>Define y estipula en cuáles espacios se hacen parques, canchas, hospitales, se implementan acueductos, carreteras, bibliotecas, escuelas.</li>
                </ul>
            </div>
        </div>
    )
}
