import { economicDoctrinesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Marxism = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Marxismo" />
            <ContentsTable items={economicDoctrinesItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <ul>
                    <li>Doctrina política, económica y social que pretende la consecución del poder estatal por parte del proletariado.</li>
                    <li>Estatización de los medios de producción y comunicación.</li>
                    <li>Propone abolir la propiedad burguesa, propiedad privada y el libre mercado.</li>
                    <li>Practica el comunismo.</li>
                    <li>Sociedad debe ser igualitaria.</li>
                    <li>Marxistas afirman que el comunismo proporciona más libertad que otros sistemas económicos, y que la redistribución de la riqueza resolverá muchos problemas.</li>
                </ul>
                <h4>Capitalismo según el marxismo</h4>
                <ul>
                    <li>Excedente mano de obra.</li>
                    <li>Las economías capitalistas se retroalimentan de las crisis económicas.</li>
                </ul>
            </div>
        </div>
    )
}
