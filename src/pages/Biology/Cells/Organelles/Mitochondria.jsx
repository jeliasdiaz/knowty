import { organellesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const Mitochondria = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Mitocondria" />
            
            <ContentsTable items={organellesItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="/img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <h4>Mitocondria</h4>
                <p>
                        Son orgánelos celulares presentes en células eucariotas que se encargan de producir la mayor parte de la energía que necesita la célula a través del proceso de respiración celular. Están formadas por dos membranas (una externa y otra interna) y contienen su propio material genético, el ADN mitocondrial. Las mitocondrias se encuentran en casi todas las células eucariotas, incluyendo células musculares y neuronas, y se heredan exclusivamente de la madre en la mayoría de los organismos.
                    </p>
                    <img src="/img/Mitocondria.png" className="w-50" alt="mitocondria imagen" />
            </div>
        </div>
    )
}
