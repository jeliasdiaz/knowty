import { economicDoctrinesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Positivism = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Positivismo" />
            <ContentsTable items={economicDoctrinesItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <ul>
                    <li>Doctrina de pensamiento que postula el metodo científico como única forma de obtención de conocimiento.</li>
                    <li>La experiencia y verificación son esenciales doctrina.</li>
                    <li>Todo conocimiento debe llevar al progreso del ser humano.</li>
                </ul>
            </div>
        </div>
    )
}
