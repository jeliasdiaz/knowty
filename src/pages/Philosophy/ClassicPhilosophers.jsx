import { CollapseInformation, SectionTitle, TopWave } from "../../components"

export const ClassicPhilosophers = () => {

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Filósofos clásicos" />


            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <CollapseInformation name="Sócrates" id="socrates" >
                    <p>
                        Fue un filósofo griego que vivió en Atenas durante el siglo V a.C. Sus costumbres, pensamientos y creencias tuvieron una gran influencia en el pensamiento occidental, siendo incluso considerado por algunos como uno de los fundadores de la filosofía occidental.
                        <br /><br />
                        Sócrates no escribió ningún texto, la mayoría de su pensamiento lo conocemos debido a escritos de sus discípulos, como, por ejemplo: Platón. Asimismo, se interesó por la ética y la moral. Se le atribuye el método "Mayéutica", que surge debido a que la mamá de Sócrates era partera, y este, al observar que la función de su madre era ayudar a parir y no dar a luz ella en sí; comenzó a idear tal método, de manera que las personas "parieran" su propia verdad, esto es, llegar a su propio conocimiento. Además, consistió en hacer preguntas a la otra persona en aras de hacer que esta llegue a la verdad por si misma.
                        <br /><br />
                        Cabe resaltar que Sócrates vivió en una época contemporánea a los sofistas (grupo de pensadores enfocados en la enseñanza de la retórica y persuasión sobre la búsqueda de la verdad), a los que criticó por su moral, política y la manera de buscar remuneración mediante sus "enseñanzas".
                    </p>
                    <h4>Frases</h4>
                    <ul>
                        <li>Cada ser humano tiende dentro de sí dar a luz conocimiento (Mayéutica).</li>
                        <li>Es mejor sufrir una injusticia que cometerla.</li>
                        <li>Todo vicio es el resultado de la ignorancia.</li>
                        <li>La virtud es conocimiento.</li>
                    </ul>
                </CollapseInformation>

                <hr />

                <CollapseInformation name="Platón" id="platon">
                    <p>
                        Platón fue un filósofo griego que vivió alrededor del siglo V a.C. Como estudiante de Sócrates y profesor de Aristóteles, dejó un legado duradero en el mundo de la filosofía. Es famoso por su obra La república, en la que expone sus ideas sobre la justicia y la organización de la sociedad. Su filosofía se caracteriza por ser idealista y enfatizar en la importancia de conceptos abstractos como el mundo de las ideas. Platón también creía en la existencia de una realidad más allá de lo que percibimos con nuestros sentidos y la importancia de la educación en la búsqueda de la verdad.
                    </p>
                    <ul>
                        <li>Se dedicó al estudio del conocimiento.</li>
                        <li>
                            Su fundamento se encuentra en la justicia, la cual, para él, implica que cada persona cumpla con su papel y función asignados de acuerdo con su habilidad y naturaleza, sin interferir en los roles de los demás. Asimismo, existen dos tipos de justicia.
                            <ul>
                                <li>Colectiva: Todas las personas cumplen con su deber.</li>
                                <li>Individual: Cada quién hace lo que debe hacer.</li>
                            </ul>
                        </li>
                    </ul>
                </CollapseInformation>

                <hr />

                <CollapseInformation name="Aristóteles" id="aristoteles" >
                    <p>
                        Fue un filósofo y científico griego que hizo aportes en áreas como la ética, política, metafísica, biología y lógica.
                        <br /><br />
                        Su pensamiento estuvo fuertemente influenciado por sus observaciones empíricas del mundo, creyendo así en el concepto de casualidad, de manera que todo tenía una relación de causa y efecto. Motivo por el cual estuvo interesado en buscar la causa última de las cosas.
                        <br /><br />
                        Por otra parte, creía que la virtud se encuentra entre dos extremos/excesos, así como en la importancia del conocimiento práctico.
                    </p>
                </CollapseInformation>
            </div>
        </div>
    )
}