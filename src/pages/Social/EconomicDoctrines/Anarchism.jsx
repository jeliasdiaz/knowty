import { economicDoctrinesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Anarchism = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Anarquismo" />
            <ContentsTable items={economicDoctrinesItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <ul>
                    <li>Similar al marxismo pero, más radical.</li>
                    <li>La libertad es el mayor bien de los individuos.</li>
                    <li>La violencia es el método legitimado para conseguir cambios sociales.</li>
                    <li>Abolición total del estado.</li>
                    <li>Las personas viven sin autoridad más no sin orden.</li>
                    <li>Crítica principalmente al capitalismo.</li>
                    <li>Colectivización de los bienes y modos de producción.</li>
                </ul>
            </div>
        </div>
    )
}
