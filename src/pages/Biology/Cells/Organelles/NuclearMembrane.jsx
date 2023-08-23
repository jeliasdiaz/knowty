import { organellesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../../components"

export const NuclearMembrane = () => {
  return (
    <div className="homeCard">
            <TopWave />
            <SectionTitle title="Membrana nuclear" />

            <ContentsTable items={organellesItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="/img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <h4>Membrana nuclear</h4>
                <p>
                        La membrana nuclear, también conocida como envoltura nuclear, es una estructura presente en las células eucariotas que rodea el núcleo y separa su contenido del resto de la célula. Está compuesta por dos membranas lipídicas, la membrana nuclear interna y la membrana nuclear externa, que forman una doble capa. Entre estas dos membranas se encuentra el espacio perinuclear. La membrana nuclear tiene poros nucleares que permiten el intercambio de materiales entre el núcleo y el citoplasma.
                        <br />
                        <br />
                        La función principal de la membrana nuclear es proteger el material genético del núcleo, como el ADN, de las reacciones químicas que ocurren en otras partes de la célula. Actúa como una barrera física que evita que moléculas y proteínas del citoplasma ingresen al núcleo y dañen el ADN.
                    </p>

                    <img src="/img/MembranaCelular.png" className="w-50" alt="membrana celular imagen" />
            </div>
        </div>
  )
}
