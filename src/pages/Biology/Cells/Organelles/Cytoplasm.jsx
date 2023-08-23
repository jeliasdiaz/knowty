import { organellesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const Cytoplasm = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Citoplasma" />

            <ContentsTable items={organellesItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="/img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <h4>Citoplasma</h4>
                <p>
                    El citoplasma es una parte fundamental de la célula y se refiere al contenido celular que se encuentra entre la membrana plasmática y el núcleo en las células eucariotas. Está compuesto principalmente por agua, sales y proteínas, y desempeña un papel crucial en diversas funciones celulares.
                </p>
                <img src="/img/Citoplasma.png" className="w-50" alt="Citoplasma imagen" />
            </div>
        </div>
    )
}
