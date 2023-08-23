import { cellCycleItems } from "."
import { ContentsTable, SectionTitle, Tooltip, TopWave } from "../../../../components"

export const Interface = () => {
  return (
    <div className="homeCard">
            <TopWave />
            <SectionTitle title="Interfase" />

            <ContentsTable items={cellCycleItems} />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <p>
                        En la <b>Fase G1</b>, la célula aumenta su tamaño debido a la generación de más orgánulos y alta producción de proteínas, es en esta fase que la célula puede desviarse de su ciclo normal y entrar en un estado llamado <b>G0</b> temporal (Como las células madre, linfocitos o los hepatocitos del hígado) o permanentemente (Como las neuronas), en el que cualquier célula que funcione de forma anormal regresará a este estado de reposo, disminuyendo así la probabilidad de que una célula se vuelva cancerosa.
                        <br /><br />
                        Por otra parte, este estado de G0 también es conocido como quiescencia, el cual no debe confundirse con el estado de senescencia a la que ingresa una célula una vez detectado que su ADN se encuentra dañado por causas como la vejez, de esta manera impendiendo su replicación del error. En caso de ser dañino o simplemente estar en un grave estado, la célula procede a realizar la muerte celular programada (Apoptosis), en caso de que estas células dañadas no hagan la apoptosis y continúen con su ciclo celular, se replicarán causando cáncer y tumores.
                        <br />
                        <br />
                        Una vez superada la fase G1, la célula entra en la <b>fase S</b> en la cual se sintetizan proteínas nucleares y realiza el proceso de replicación para duplicar su material genético, de esta forma pasan de tener veintitrés pares de cromosomas simples (Una cromátida) a veintitrés pares de cromosomas de doble estructura (Dos cromátidas unidas por un centrómero), en esta fase también se duplican los centrosomas.
                        <br />
                        <br />
                        Así, en la <b>fase G2</b> vuelve a aumentar su tamaño y síntesis de proteínas. Además, preparándose para la división, se ensamblan las estructuras necesarias para esta. Así, los cromosomas en el núcleo que se encuentran en forma de cromatina, empiezan a enrollarse y condensarse tomando la forma a la que estamos habituados a ver en imágenes, permitiendo así su fácil desplazamiento y a que más adelante se dé la correcta división de material genético. Los dos pares de centriolos se posicionan de forma <Tooltip text={<span>perpendicular</span>} content={<span>Que forma ángulo recto con otra <br /> línea o con otro plano</span>} id="perpendicular" /> al otro.
                    </p>
            </div>
        </div>
  )
}
