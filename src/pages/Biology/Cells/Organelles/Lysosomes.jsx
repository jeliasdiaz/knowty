import { organellesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const Lysosomes = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Lisosomas" />

            <ContentsTable items={organellesItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="/img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <h4>Lisosomas</h4>
                <p>
                    Organelos compuestos por enzimas digestivas capaces de degradar diversos materiales celulares, como proteínas, lípidos, carbohidratos, etc. Se encargan de la digestión y reciclaje de sustancias celulares, así como eliminar materiales externos a la célula que han sido fagocitados
                </p>
                <img src="/img/Lisosoma.png" className="w-50" alt="Lisosoma imagen" />
            </div>
        </div>
    )
}
