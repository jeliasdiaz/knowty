import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import { ancientPhilosophyItems } from '.'

export const Plato = () => {
  return (
    <div className="homeCard">
            <TopWave />
            <SectionTitle title="Platón" />
            <ContentsTable items={ancientPhilosophyItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Platón</h3>
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
            </div>
            </div>
  )
}
