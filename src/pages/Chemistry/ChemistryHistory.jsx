import { Tooltip } from "recharts"
import { SectionTitle, TopWave } from "../../components"

export const ChemistryHistory = () => {
  return (
    <div className="homeCard">
        <TopWave />
        <SectionTitle title="Historia de la Química"  />

        <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <h4>Prehistórico (Era primitiva [500 a.c])</h4>
                            <ul>
                                <li>Descubrimiento y dominación del fuego, siendo la primera reacción química de la humanidad.</li>
                                <li>En China se crea la seda artificial, papel, pólvora, porcelana y pintura.</li>
                                <li>En Egipto se usan técnicas de embalsamiento, momificación y se crea el vidrio.</li>
                            </ul>

                            <h4>Griego (500 - 300 a.c)</h4>
                            <ul>
                                <li>Empédocles afirma que el universo se encuentra conformado por 4 elementos principales, fuego, agua, aire y tierra.</li>
                                <li>Leucipo y Demócrito postulan la teoría atómica griega: “Toda la materia está formada por  <Tooltip content={<span>Unidad básica de la materia. <br /> Compuestos por electrones, <br /> protones y neutrones.</span>} text={<span className="ps-2">átomos</span>} id="átomos" /> eternos, indestructibles, indivisibles, pero diferentes en tamaño, forma y peso”.</li>
                            </ul>

                            <h4>Alquimia (300 - 1500 d.c)</h4>
                            <ul>
                                <li>Búsqueda de la piedra filosofal, la cual al ser frotada con un metal, este se convertiría en oro. Además, sería capaz de curar cualquier enfermedad.</li>
                                <li>Se inicia en Egipto y Mesopotamia.</li>
                                <li>Se descubre el arsénico, antimonio, bismuto.</li>
                            </ul>

                            <h4>Iatroquímica ("Química médica" [1500 - 1660 d.c])</h4>
                            <ul>
                                <li>Paracelso afirma que el objetivo fundamental de la química es el de obtener drogas para el tratamiento de enfermedades.</li>
                            </ul>

                            <h4>Flogisto (1660 - 1770 d.c)</h4>
                            <ul>
                                <li>Georg Stahl afirma que el flogisto (sustancia del fuego) se encontraba en todas las sustancias combustibles y, producía una perdida  de flogisto cuando se oxidaban y una ganancia de flogisto cuando se reducían (desmentido).</li>
                            </ul>

                            <h4>Moderno (1770 d.c - actualidad)</h4>
                            <ul>
                                <li>Descubrimiento de la ley de la conservación de la materia.</li>
                                <li>John Dalton retoma la teoría atómica.</li>
                            </ul>
        </div>
    </div>
  )
}
