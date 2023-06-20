import React from 'react'
import { CollapseInformation, SectionTitle, TopWave } from '../../../components'

export const Organelles = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Estructura y organelos celulares" />
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div className="d-flex justify-content-center">
                    <img src="img/celulaAnimal.png" alt="Celula animal" className="w-50" />
                </div>
                <br />
                <CollapseInformation name="Mitocondria">
                    <p>
                        Son orgánelos celulares presentes en células eucariotas que se encargan de producir la mayor parte de la energía que necesita la célula a través del proceso de respiración celular. Están formadas por dos membranas (una externa y otra interna) y contienen su propio material genético, el ADN mitocondrial. Las mitocondrias se encuentran en casi todas las células eucariotas, incluyendo células musculares y neuronas, y se heredan exclusivamente de la madre en la mayoría de los organismos.
                    </p>
                    <img src="img/Mitocondria.png" className="w-50" alt="mitocondria imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Retículo endoplasmático">
                    <p>
                        El retículo endoplásmico puede ser liso o rugoso dependiendo de la presencia de ribosomas unidos a su superficie. El RE liso se encarga de la síntesis de lípidos y de la detoxificación celular, mientras que el RE rugoso se encarga de la síntesis de proteínas que serán secretadas o insertadas en la membrana celular.
                    </p>
                    <img src="img/ReticuloEndoplasmático.png" className="w-50" alt="Retículo endoplasmático imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Aparato de Golgi">
                    <p>
                        Es un organelo celular presente en las células eucariotas que se encarga de la modificación, clasificación, empaquetamiento y distribución de proteínas y lípidos que han sido sintetizados en el retículo endoplásmico. También se encarga de la síntesis de carbohidratos complejos.
                    </p>
                    <img src="img/AparatoGolgi.png" alt="Aparato de Golgi imagen" className="w-50" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Lisosomas">
                    <p>
                        Organelos compuestos por enzimas digestivas capaces de degradar diversos materiales celulares, como proteínas, lípidos, carbohidratos, etc. Se encargan de la digestión y reciclaje de sustancias celulares, así como eliminar materiales externos a la célula que han sido fagocitados
                    </p>
                    <img src="img/Lisosoma.png" className="w-50" alt="Lisosoma imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Ribosomas">
                    <p>
                        Son organelos presentes en todas las células, encargados de la síntesis de proteínas. Están compuestos por ARN ribosomal y proteínas. Generalmente se encuentran libres en el citoplassma o unidos a un retículo endoplasmático rugoso. Durante la síntesis de proteínas, los ribosomas leen la información genética del ADN y la traducen en una secuencia de aminoácidos para formar la proteína correspondiente.
                    </p>
                    <img src="img/Ribosoma.png" className="w-50" alt="Ribosoma imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Centrosomas">
                    <p>
                        Están compuestos por dos centriolos y una matriz pericentriolar/centrosfera que rodea al citoplasma. Los centrosomas son importantes para la organización de los microtúbulos, que son los componentes del citoesqueleto que se encargan del mantenimiento de la forma celular, el transporte intracelular y la división celular.
                        <br />
                        <br />
                        Los centriolos, que son cilindros formados por microtúbulos, se encuentran ubicados perpendicularmente entre sí dentro del centrosoma. La matriz pericentriolar es una red de proteínas que rodea a los centriolos y se encarga de la nucleación y organización de los microtúbulos.
                    </p>
                    <img src="img/Centrosoma.png" className="w-50" alt="Centrosoma imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Membrana nuclear">
                    <p>
                        La membrana nuclear, también conocida como envoltura nuclear, es una estructura presente en las células eucariotas que rodea el núcleo y separa su contenido del resto de la célula. Está compuesta por dos membranas lipídicas, la membrana nuclear interna y la membrana nuclear externa, que forman una doble capa. Entre estas dos membranas se encuentra el espacio perinuclear. La membrana nuclear tiene poros nucleares que permiten el intercambio de materiales entre el núcleo y el citoplasma.
                        <br />
                        <br />
                        La función principal de la membrana nuclear es proteger el material genético del núcleo, como el ADN, de las reacciones químicas que ocurren en otras partes de la célula. Actúa como una barrera física que evita que moléculas y proteínas del citoplasma ingresen al núcleo y dañen el ADN.
                    </p>

                    <img src="img/MembranaCelular.png" className="w-50" alt="membrana celular imagen" />
                </CollapseInformation>
                <hr />
                <CollapseInformation name="Citoplasma">
                    <p>
                        El citoplasma es una parte fundamental de la célula y se refiere al contenido celular que se encuentra entre la membrana plasmática y el núcleo en las células eucariotas. Está compuesto principalmente por agua, sales y proteínas, y desempeña un papel crucial en diversas funciones celulares.
                    </p>
                    <img src="img/Citoplasma.png" className="w-50" alt="Citoplasma imagen" />
                </CollapseInformation>
            </div>
        </div>
    )
}
