import { armedGroupsItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const ELN = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="ELN" />
            <ContentsTable items={armedGroupsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h4 className="pb-4">Ejército de liberación nacional</h4>
                <p>
                    <span className="fw-semibold">Fundador:</span> Fabio Vásquez Castaño <br />
                    <span className="fw-semibold">Máximo pensador:</span> Camilo Torres <br />
                    <span className="fw-semibold">Base teórica:</span> Revolución cubana <br />
                </p>
                <span className="fw-semibold">Líderes:</span>
                <ul>
                    <li>Fabio Vásquez.</li>
                    <li>El cura Pérez (Manuel Pérez).</li>
                    <li>Gabino (Nicolás Rodrigues).</li>
                    <li>Antonio García.</li>
                </ul>
                <span className="fw-semibold">A tener en cuenta:</span> <br />
                <ul>
                    <li>Proviene de estudiantes universitarios, reconocidos por su buena preparación académica. Esta es su diferencia con las FARC, debido a que esta última, surge de grupos campesinos.</li>
                    <li>Lograron poner en jaque a muchas multinacionales.</li>
                </ul>
                <span className="fw-semibold">Extras</span>
                <ul>
                    <li>Coce = Comando central, se encarga de las decisiones políticas, económicas y demás.</li>
                    <li>Teología de la liberación = Como los católicos Jesuitas buscaron cambiar las condiciones de vida de las personas.</li>
                </ul>
            </div>
        </div>
    )
}
