import { SectionTitle, TopWave } from "../../../components"

export const ECells = () => {
    return (
        <div className="homeCard">
            <TopWave />

            <SectionTitle title="Células Eucariotas" />
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <p>
                        Las células eucariotas son células que tienen un núcleo definido y separado del resto de la célula por una membrana nuclear. Además del núcleo, estas células también tienen otros orgánelos celulares, como mitocondrias, retículo endoplasmático, aparato de Golgi y lisosomas, que realizan diversas funciones en la célula. Estas células se encuentran en organismos multicelulares, como plantas, animales y hongos. A menudo son más grandes y complejas que las células procariotas, que carecen de un núcleo definido y otros orgánulos celulares.

                        Por otra parte, estas células se dividen en animales y vegetales, las cuales se diferencian en ciertos aspectos:
                    </p>
                    <ul>
                        <li>Las células vegetales poseen una pared celular que les proporciona rigidez, mientras que las células animales cuentan con una membrana plasmática</li>
                        <li>Las células vegetales poseen cloroplastos, encargado de realizar la fotosíntesis</li>
                        <li>Mientras que las células animales poseen una nutrición heterótrofa, es decir, necesitan alimentarse de otros seres; las células vegetales producen su propio alimento.</li>
                    </ul>

                    <div className="flex-1 mt-5 mb-4 gap-5">
                        <div>
                            <h5>Célula animal</h5>
                            <img src="/img/celulaAnimal.png" alt="Célula vegetal" className="w-75" />

                        </div>

                        <div>
                            <h5>Célula vegetal</h5>
                            <img src="/img/celulaVegetal.png" alt="Célula vegetal" className="w-75" />
                        </div>
                    </div>

            </div>
        </div>
    )
}
