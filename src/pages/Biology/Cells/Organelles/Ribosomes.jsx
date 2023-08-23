import { organellesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const Ribosomes = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Ribosomas" />

            <ContentsTable items={organellesItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="/img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <h4>Ribosomas</h4>
                <p>
                    Son organelos presentes en todas las células, encargados de la síntesis de proteínas. Están compuestos por ARN ribosomal y proteínas. Generalmente se encuentran libres en el citoplassma o unidos a un retículo endoplasmático rugoso. Durante la síntesis de proteínas, los ribosomas leen la información genética del ADN y la traducen en una secuencia de aminoácidos para formar la proteína correspondiente.
                </p>
                <img src="/img/Ribosoma.png" className="w-50" alt="Ribosoma imagen" />
            </div>
        </div>
    )
}
