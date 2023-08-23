import { items } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Territory = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Territorio" />
            <ContentsTable items={items} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <h4>Territorio</h4>
                <ul>
                    <li>Porción de espacio donde se ejerce poder.</li>
                    <li>Constituido por seres humanos, recursos naturales, construcciones y edificaciones.</li>
                    <li>Puede ser aéreo, marítimo o terrestre.</li>
                </ul>
                <h5>Declaración de las naciones unidas sobre los derechos de los pueblos indígenas</h5>
                <ol>
                    <li>Los pueblos indígenas tienen derecho a las tierras, territorios y recursos que tradicionalmente han poseído, ocupado o de otra forma utilizado o adquirido.</li>
                    <li>Los pueblos indígenas tienen derecho a poseer, utilizar, desarrollar y controlar las tierras, territorios y recursos  que poseen en razón  de la propiedad tradicional de ocupación o utilización, así como aquellos que hayan adquirido de otra forma.</li>
                    <li>Los estados asegurarán el reconocimiento y protección jurídica de esas tierras y recursos. Dicho reconocimiento respetará débilmente las costumbres, las  tradiciones y los sistemas de tenencia de la tierra de los pueblos indígenas.</li>
                </ol>

                <h4>Diferencias entre un territorio y otro</h4>

                <p><span className="fw-semibold">Fronteras:</span> Son las áreas de transiciones entre dos unidades políticas.</p>
                <p><span className="fw-semibold">Límites:</span> Son líneas divisorias que separan uno o más territorios.</p>

                <hr />
                <h3>Territorialidad</h3>
                <ul>
                    <li>Acción por la cual se avala la propiedad sobre un territorio que ejerce determinada persona, grupo social o estado.</li>
                    <li>El objetivo es mantener el orden o control sobre los elementos que contiene el territorio.</li>
                    <li>Se lleva a cabo a través de marcación, instauración, consolidación.</li>
                </ul>
                <h4>Marcación</h4>
                <ul>
                    <li>Hasta dónde se ejerce el cambio.</li>
                    <li>Cadenas montañosas, ríos, lagos, desiertos, etc.</li>
                </ul>
                <h4>Instauración</h4>
                <ul>
                    <li>Acciones expuestas en las normas estatales para regular quienes acceden al territorio.</li>
                    <li>Símbolos patrióticos como principal anunciante de un control de territorio.</li>
                </ul>
                <h4>Consolidación</h4>
                <ul>
                    <li>Normativas internacionales sustentan la presencia y accionar en el territorio.</li>
                    <li>Constituciones establecen el principio de soberanía.</li>
                </ul>
                <hr />
                <h3>Territorialización</h3>
                <ul>
                    <li>Proceso de protección y mantenimiento de los territorios, sus recursos y sus componentes sociales y culturales.</li>
                    <li>Busca mantener el control y ejercer su defensa.</li>
                </ul>
                <h4>Gentrificación</h4>
                <ul>
                    <li>Renovación de viejos centros urbanos mediante transformaciones materiales e inmateriales conducidas por agentes privados o públicos, provocando la subida del valor de las propiedades y el desplazamiento de la población residente.</li>
                </ul>
            </div>
        </div>
    )
}
