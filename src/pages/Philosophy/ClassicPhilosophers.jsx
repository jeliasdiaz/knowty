import { CollapseTitle, SectionTitle, TopWave } from "../../components"
import { PhilosophyNav } from "./"

export const ClassicPhilosophers = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Filósofos clásicos" />

            <PhilosophyNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <CollapseTitle name="Sócrates" id="#socrates" />
                <div className="collapse" id="socrates">
                    <h4>Frases</h4>
                    <ul>
                        <li>Cada ser humano tiende dentro de sí dar a luz conocimiento (Mayéutica).</li>
                        <li>Es mejor sufrir una injusticia que cometerla.</li>
                        <li>Todo vicio es el resultado de la ignorancia.</li>
                        <li>La virtud es conocimiento.</li>
                    </ul>
                </div>

                <hr />

                <CollapseTitle name="Platón" id="#platon" />
                <div className="collapse" id="platon">
                    <ul>
                        <li>Se dedicó al estudio del conocimiento.</li>
                        <li>
                            Su fundamento se encuentra en la justicia, la cual, para él, implica que cada persona cumpla con su papel y función asignados de acuerdo con su habilidad y naturaleza, sin interferir en los roles de los demás. Asimismo, existen dos tipos de justicia.
                            <ul>
                                <li>Colectiva: Todas las personas cumplen con su deber</li>
                                <li>Individual: Cada quién hace lo que debe hacer</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
