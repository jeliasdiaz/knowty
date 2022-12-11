import { Link } from "react-router-dom"
const Sociales = () => {
    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>I periodo</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination  pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/sociales_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_2" className="text-decoration-none page-link">D. ecómicas</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales" className="text-decoration-none page-link">M. armados</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_4" className="text-decoration-none page-link">M. sociales</Link></li>
                </ul>
            </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="zoom-in" data-aos-duration="900">
                <div>
                    <h2>Suelos</h2>
                    <ul>
                        <li>Mezcla de minerales</li>
                        <li>Aptos o no para ser cultivados</li>
                    </ul>
                    <h3>Suelos urbanos</h3>
                    <ul>
                        <li>Áreas destinadas a la construcción de viviendas, edificaciones, redes de servicios públicos e infraestructura vial.</li>
                        <li>Zonas comerciales: Restaurantes, centros comerciales, locales comerciales, bancos, etc.</li>
                    </ul>
                    <h3>Zonas industriales</h3>
                    <ul>
                        <li>Áreas donde se hallan establecimientos encargados a la transformación de materias primas.</li>
                    </ul>
                    <h3>Zonas residenciales mixtas</h3>
                    <ul>
                        <li>Integran el comercio, lo industrial y lo residencial.</li>
                        <li>Admite el funcionamiento de actividades productivas de bajo impacto en el tejido residencial.</li>
                    </ul>
                    <h3>Zonas de alto impacto o tolerancia</h3>
                    <ul>
                        <li>Aquí se realizan actividades ilícitas</li>
                        <li>Poca presencia estatal</li>
                        <li>Mucha probreza</li>
                    </ul>
                    <h3>Zonas históricas y culturales</h3>
                    <ul>
                        <li>Espacios en los que se conserva el patrimonio histórico, arquitectónico y cultural.</li>
                        <li>Son protegidas por la normatividad</li>
                        <li>Generan dinamismo económico en el sector turístico</li>
                    </ul>
                    <hr />
                </div>
                <div>
                    <h2>Territorio</h2>
                    <ul>
                        <li>Porción de espacio donde se ejerce poder</li>
                        <li>Constituido por seres humanos, recursos naturales, construcciones y edificaciones</li>
                        <li>Puede ser aéreo, marítimo o terrestre</li>
                    </ul>
                    <h3>Declaración de las naciones unidas sobre los derechos de los pueblos indígenas</h3>
                    <ol>
                        <li>Los pueblos indígenas tienen derecho a las tierras, territorios y recursos que tradicionalmente han poseído, ocupado o de otra forma utilizado o adquirido</li>
                        <li>Los pueblos indígenas tienen derecho a poseer, utilizar, desarrollar y controlar las tierras, territorios y recursos  que poseen en razón  de la propiedad tradicional de ocupación o utilización, así como aquellos que hayan adquirido de otra forma</li>
                        <li>Los estados asegurarán el reconocimiento y protección jurídica de esas tierras y recursos. Dicho reconocimiento respetará débilmente las costumbres, las  tradiciones y los sistemas de tenencia de la tierra de los pueblos indígenas</li>
                    </ol>

                    <h3>Diferencias entre un territorio y otro</h3>
                    <ul>
                        <li>Limites: son líneas divisorias que separan uno o más territorios</li>
                        <li>Fronteras: son las áreas de transiciones entre dos unidades política administrativas</li>
                    </ul>
                    <h2>Territorialidad</h2>
                    <ul>
                        <li>Acción por la cual se avala la propiedad sobre un territorio que ejerce determinada persona, grupo social o estado.</li>
                        <li>El objetivo es mantener el orden o control sobre los elementos que contiene el territorio</li>
                        <li>Se lleva a cabo a través de marcación, instauración, consolidación.</li>
                    </ul>
                    <h3>Marcación</h3>
                    <ul>
                        <li>Hasta dónde se ejerce el cambio</li>
                        <li>Cadenas montañosas, rios, lagos, desiertos, etc.</li>
                    </ul>
                    <h3>Instauración</h3>
                    <ul>
                        <li>Acciones expuestas en las normas estatales para regular quienes acceden al territorio</li>
                        <li>Símbolos patrióticos como principal anunciante de un control de territorio.</li>
                    </ul>
                    <h3>Consolidación</h3>
                    <ul>
                        <li>Normativas internacionales sustentan la presencia y accionar en el territorio.</li>
                        <li>Constituciones establecen el principio de soberanía.</li>
                    </ul>
                    <h2>Territorialización</h2>
                    <ul>
                        <li>Proceso de protección y mantenimiento de los territorios, sus recursos y sus componentes sociales y culturales</li>
                        <li>Busca mantener el control y ejercer su defenza.</li>
                    </ul>
                    <h3>Gentrificación</h3>
                    <ul>
                        <li>Renovación de viejos centros urbanos mediante transformaciones materiales e inmateriales conducidas por agentes privados o públicos, provocando la subida del valor de las propiedades y el desplazamiento de la población residente</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Plan de ordenamiento territorial</h2>
                    <ul>
                        <li>Conjunto de acciones políticas, directrices, etc. Concretadas y coherentes que se constituyen como una herramienta de planeación para el desarrollo físico de un territorio</li>
                        <li>Orientar y priorizar las inversiones en el territorio tanto del sector público como del sector privado, es decir, define dónde se construyen los parques, los colegios, los hospitales, dónde se ubica la vivienda, las oficinas, los comercios e industrias</li>
                        <li>Define implícitamente la relación de la ciudadanía con el ente territorial</li>
                        <li>Define y estipula en cuáles espacios se hacen parques, canchas, hospitales, se implementan acueductos, carreteras, bibliotecas, escuelas</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Sistema mundo</h2>
                    <ul>
                        <li>Teoría que explica el funcionamiento de las relaciones sociales, políticas y económicas en torno a las interacciones globales</li>
                        <li>Caracterización del funcionamiento del sistema capitalista</li>
                    </ul>
                    <h3>Marxismo</h3>
                    <ul>
                        <li>Caracteriza el funcionamiento de la sociedad industrial evidenciando sus carencias y excesos, las formas desiguales de relación entre la burguesía y clase trabajadora.</li>
                        <li>Desecha las ideas de nacionalismos debido a que la experiencia de la vida la marca la pertenencia a una clase social y no el lugar de nacimiento</li>
                        <li>Medios de producción en manos del estado</li>
                        <li>Sociedad igualitaria</li>
                        <li>Abolir la propiedad burguesa y libre mercado.</li>
                    </ul>
                    <h3>Teoría de la dependencia</h3>
                    <ul>
                        <li>La pobreza y el subdesarrollo son consecuencias de la dependencia de los países pobres, generando que sus estructuras ocasionen mayor división y exclusión</li>
                    </ul>
                    <h3>Enfoque de larga duración</h3>
                    <ul>
                        <li>Formas de relacionarse la humanidad con el tiempo y la permanencia de sucesos o procesos a través de la historia</li>
                    </ul>
                    <h3>Relaciones internacionales</h3>
                    <ul>
                        <li>Cooperación</li>
                        <li>Dependencia</li>
                        <li>Indiferencia</li>
                        <li>Dominación</li>
                    </ul>
                    <h3>Generan condiciones de</h3>
                    <ul>
                        <li>Subordinación: estado subyugado a la economía, política y, a veces, cultura de otro estado</li>
                        <li>Conflicto: estados con intereses antepuestos en los cuales hay fricción que pueden generar guerras</li>
                        <li>Alianzas: Estados con intereses comunes y agendas compartidas</li>
                    </ul>
                    <h2>Estructura</h2>
                    <h4>Centro</h4>
                    <ul>
                        <li>Países con elevada producción de bienes y servicios</li>
                        <li>Altos niveles de escolaridad</li>
                        <li>Acceso amplio a la tecnología</li>
                        <li>Fuerte sistema de sanidad</li>
                    </ul>
                    <h4>Periferia</h4>
                    <ul>
                        <li>Países en vías de desarrollo</li>
                        <li>Bajos niveles de ingresos y producción</li>
                        <li>Falta de productividad agrícola</li>
                        <li>Escasa influencia en las decisiones de orden mundial</li>
                    </ul>
                    <h4>Semi periferia</h4>
                    <ul>
                        <li>Países en escalas intermedias del desarrollo</li>
                        <li>Niveles de productividad por encima de los países en vías de desarrollo</li>
                        <li>Sus niveles de PIB (Producto Interno Bruto) no le permiten estar por encima de los países del primer mundo.</li>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Sociales