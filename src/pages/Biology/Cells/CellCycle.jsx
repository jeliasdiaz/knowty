import { CollapseInformation, SectionTitle, Tooltip, TopWave } from "../../../components"

export const CellCycle = () => {
    return (
        <div className="homeCard">
            <TopWave />

            <SectionTitle title="Ciclo celular" />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Desde pequeños, se nos enseñó muy bien algo que conocemos como ciclo de vida, aquel en el que se nace, crece, reproduce y muere. Un ciclo general para los seres vivos. De esta manera, la célula como unidad fundamental de la vida, también posee un ciclo de vida, aunque diferente al ya mencionado. Este ciclo por el que pasan las células es llamado Ciclo Celular y este tiene el objetivo de mantener el correcto funcionamiento y estructuración de tejidos mediante la generación de nuevas células que puedan suplir el funcionamiento de sus compañeras ya inertes, así como la producción de gametos.
                    <br />
                    <br />
                    El Ciclo Celular se divide en dos fases, la interfase y la división celular (Fase M). En la cual, la interfase se divide en tres fases más, Fase G1 (GAP1), Fase S (Síntesis) y Fase G2 (GAP2).
                    <br />
                    <br />
                </p>
                <img src="img/cicloCelular.png" alt="Ciclo celular" className="w-75 revealing-image" />
                <hr />
                <CollapseInformation name="Interfase">
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
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Fase M" id="fasem">
                    <p>
                        La fase M o mitótica, es la otra fase del ciclo celular, en esta se dan dos procesos principales que son la mitosis y la citocinesis.

                    </p>
                    <CollapseInformation name="Mitosis">
                        <p>
                            En primer lugar, la mitosis es un proceso de división celular que se da en las células somáticas, en este proceso una célula madre se divide y da origen a dos nuevas células hijas idénticas (con el mismo número de cromosomas al de la madre). Este proceso tiene como fines esenciales la curación, crecimiento y renovación de tejidos, así como la reproducción de seres unicelulares. La mitosis se divide en cuatro fases: profase, metafase, anafase y telofase (algunas fuentes describen una quinta llamada “prometafase” la cual se ubicaría entre la profase y metafase, no obstante, aquí encontrará la prometafase dentro de la profase).
                            <br />
                            <br />
                            <span className="fw-semibold">Profase:</span> Inicia con la desaparición de la cohesina y con la condensación de la cromatina, de tal manera que los cromosomas se ven claramente definidos con el correcto microscopio. Estos cromosomas están conformados por dos cromatidas, la original de esa célula y la copia de ella, denominada cromatida hermana; estas cromatidas están unidas en un punto llamado centrómero, el cual todavía conserva un poco de cohesina con la que mantener unidas las cromatidas. Los cinetocoros empiezan a desarrollarse a los lados del centrómero. Desaparece el nucléolo y la membrana nuclear. Una vez los cromosomas se encuentran mucho más condensados y los cinetocoros completamente desarrollados, algunos micro-túbulos (que en su conjunto son llamados huso mitótico) empiezan a unirse con los cinetocoros o con otros micro-túbulos opuestos para lograr la estabilidad del huso mitótico, otros micro-túbulos forman el Áster al unirse con el borde de la célula.
                            <br />
                            <br />

                            <span className="fw-semibold">Metafase:</span> En esta fase los cromosomas se encuentran en su pico de condensación, los micro-túbulos los han alineado en el centro de la célula o plano ecuatorial.
                            <br />
                            <br />
                            <span className="fw-semibold">Anafase:</span> Inicia con la separación de las cromatidas hermanas, los micro-túbulos empiezan a acortarse y el huso mitótico lleva las cromatidas hacia los polos de la célula, además la célula se estira.
                            <br />
                            <br />
                            <span className="fw-semibold">Telofase:</span> El huso mitótico se descompone y reaparece la membrana nuclear y nucléolo alrededor de ambos grupos cromosómicos, por último se descondensan los cromosomas para volver a su forma de cromatina.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Citocinesis">
                        <p>
                            La citocinesis es el proceso final de la división celular, que se da en las células somáticas, en este proceso una célula madre se divide y da origen a dos nuevas células hijas idénticas (con el mismo número de cromosomas al de la madre). Este proceso tiene como fines esenciales la curación, crecimiento y renovación de tejidos, así como la reproducción de seres unicelulares. La mitosis se divide en cuatro fases: profase, metafase, anafase y telofase (algunas fuentes describen una quinta llamada “prometafase” la cual se ubicaría entre la profase y metafase, no obstante, aquí encontrará la prometafase dentro de la profase).
                        </p>
                    </CollapseInformation>
                </CollapseInformation>
            </div>
        </div>
    )
}
