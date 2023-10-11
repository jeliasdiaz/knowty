import Latex from 'react-latex'
import { chemicalReactionsItems } from '.'
import { ContentsTable, MoreBtn, SectionTitle, TopWave } from '../../../components'
import { useContext } from 'react'
import { darkModeContext } from '../../../context/DarkModeContext'

export const ReactivePurity = () => {
    const purezaReactivo = `$$SP = \\large \\frac{SI \\ \\cdot \\ \\%P}{100}$$`
    const sustanciaPura = `$$\\small Sustancia \\ pura = \\large \\frac{Sustancia \\ impura \\ \\cdot \\ Porcentaje \\ de \\ pureza}{100}$$`

    const { isDarkMode } = useContext(darkModeContext);

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Pureza de un reactivo" />
            <ContentsTable items={chemicalReactionsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Muchos de los reactivos presentes en reacciones químicas, contienen impurezas. Estas últimas son sustancias que no reaccionarán en una reacción. Por ende, las sustancias puras son aquellas que si se presentan o reaccionan en una reacción concreta. La pureza de un reactivo se puede calcular mediante la siguiente ecuación:
                    <br /><br />
                </p>
                <p><Latex>{purezaReactivo}</Latex></p>
                <p><Latex>{sustanciaPura}</Latex></p>
                <p>
                    Por otra parte, la pureza también se refiere a la cantidad de una sustancia específica que existe en una muestra dada. Es de añadir que la pureza se expresa como porcentaje. Esto es, si una muestra de cafeína tiene una pureza del 80%, significa que hay 80 gramos de cafeína y 20 gramos de impurezas en 100 gramos de la muestra.
                </p>

                <MoreBtn url="https://youtu.be/B-d5vKJBx-E" />
                <br />
                <br />

                <h3>Practica</h3>
                <p>Halla la pureza del fósforo y oxígeno diatómico</p>
                <Latex>{`$4P + 3O_2 \\rightarrow 2P_2O_3$`}</Latex><br />
                <p>
                    12 gr de P <br />
                    87.5% <br />
                    <br />
                    27 gr de O2 <br />
                    82.5% <br />
                </p>

                <p>
                    <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" aria-expanded="false" href="#pureza">
                        Solución
                    </button>
                </p>
                <div className="collapse dropdownBorder" id="pureza">
                    <img
                        src={isDarkMode === 'dark' ? "/img/purezaEjercicioSolucionDark.svg" : "/img/purezaEjercicioSolucion.svg"}
                        alt=""
                        className="w-80 rounded-3 revealing-image"
                    />
                </div>
            </div>
        </div>
    )
}
