import { items } from "."
import { Glossary, SectionTitle, TopWave } from "../../../components"
export const WorldSystem = () => {

    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Sistema mundo" />
            <Glossary items={items} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <h4>Sistema mundo</h4>
                <ul>
                    <li>Teoría que explica el funcionamiento de las relaciones sociales, políticas y económicas en torno a las interacciones globales.</li>
                    <li>Caracterización del funcionamiento del sistema capitalista.</li>
                </ul>
                <h4>Marxismo</h4>
                <ul>
                    <li>Caracteriza el funcionamiento de la sociedad industrial evidenciando sus carencias y excesos, las formas desiguales de relación entre la burguesía y clase trabajadora.</li>
                    <li>Desecha las ideas de nacionalismos debido a que la experiencia de la vida la marca la pertenencia a una clase social y no el lugar de nacimiento.</li>
                    <li>Medios de producción en manos del estado.</li>
                    <li>Sociedad igualitaria.</li>
                    <li>Abolir la propiedad burguesa y libre mercado.</li>
                </ul>
                <h4>Teoría de la dependencia</h4>
                <ul>
                    <li>La pobreza y el subdesarrollo son consecuencias de la dependencia de los países pobres, generando que sus estructuras ocasionen mayor división y exclusión.</li>
                </ul>
                <h4>Enfoque de larga duración</h4>
                <ul>
                    <li>Formas de relacionarse la humanidad con el tiempo y la permanencia de sucesos o procesos a través de la historia.</li>
                </ul>
                <h4>Relaciones internacionales</h4>
                <ul>
                    <li>Cooperación.</li>
                    <li>Dependencia.</li>
                    <li>Indiferencia.</li>
                    <li>Dominación.</li>
                </ul>
                <h4>Generan condiciones de</h4>
                <p>
                    <span className="fw-semibold">Subordinación:</span> Estado subyugado a la economía, política y, a veces, cultura de otro estado. <br />
                </p>
                <p>
                    <span className="fw-semibold">Conflicto:</span>  Estados con intereses antepuestos en los cuales hay fricción que pueden generar guerras. <br />
                </p>
                <p>
                    <span className="fw-semibold">Alianzas:</span>  Estados con intereses comunes y agendas compartidas.
                </p>
                <h3>Estructura</h3>
                <h4>Centro</h4>
                <ul>
                    <li>Países con elevada producción de bienes y servicios.</li>
                    <li>Altos niveles de escolaridad.</li>
                    <li>Acceso amplio a la tecnología.</li>
                    <li>Fuerte sistema de sanidad.</li>
                </ul>
                <h4>Periferia</h4>
                <ul>
                    <li>Países en vías de desarrollo.</li>
                    <li>Bajos niveles de ingresos y producción.</li>
                    <li>Falta de productividad agrícola.</li>
                    <li>Escasa influencia en las decisiones de orden mundial.</li>
                </ul>
                <h4>Semiperiferia</h4>
                <ul>
                    <li>Países en escalas intermedias del desarrollo.</li>
                    <li>Niveles de productividad por encima de los países en vías de desarrollo.</li>
                    <li>Sus niveles de PIB (Producto Interno Bruto) no le permiten estar por encima de los países del primer mundo.</li>
                </ul>
            </div>
        </div>
    )
}
