import { useContext } from "react";
import { structureMatterItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"
import { darkModeContext } from "../../../context/DarkModeContext";

export const PeriodicProperties = () => {
    const { isDarkMode } = useContext(darkModeContext);
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Propiedades periódicas" />
            <ContentsTable items={structureMatterItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h5>Posición en la tabla periódica con base a la configuración electrónica</h5>
                <img src={isDarkMode === "dark" ? "/img/configElectronicaDark.svg" : "/img/configElectronica.svg"} alt="Configuración electrónica" className="w-50 rounded-3 revealing-image" /><br />
                <p> Terminación: <br /> <i>d</i> o <i>f</i>, pertenece al grupo <i>b</i> <br /> <i>s</i> o <i>p</i>, pertenece al grupo <i>a</i> <br /> (Si varía el número de neutrones, es un isótopo)</p>
                <h4>Radio atómico</h4>
                <ul>
                    <li>Distancia entre el núcleo del átomo y su orbital más extremo, lo que permite calcular el tamaño del átomo.</li>
                    <li>Aumenta de derecha a izquierda y arriba hacia abajo en la tabla periódica.</li>
                </ul>

                <h4>Afinidad electrónica</h4>
                <ul>
                    <li>Cantidad de energía de liberada cuando se agrega un electrón.</li>
                    <li>Aumenta de izquierda a derecha y de abajo hacia arriba en la tabla periódica.</li>
                </ul>

                <h4>Energía de ionización</h4>
                <ul>
                    <li>Energía necesaria para separar un electrón de un átomo.</li>
                    <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica.</li>
                </ul>

                <h4>Electronegatividad</h4>
                <ul>
                    <li>Capacidad de un átomo para atraer electrones.</li>
                    <li>Aumenta hacia la derecha y hacia arriba en la tabla periódica.</li>
                </ul>
            </div>
        </div>
    )
}
