import { Link } from "react-router-dom"
import { SectionTitle, CollapseInformation, TopWave } from "../../components/";

export const SocialMovements = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Movimientos sociales" />


            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                <div>
                    <CollapseInformation name="Movimientos sociales" id="movimientosSociales" >
                        <p>
                            Grupos informales de personas cuyo fin reside en establecer un cambio social. Inicialmente, poseían gran influencia del marxismo; sin embargo actualmente poseen diversas bases. Asimismo, suelen exigir modificaciones de ley y acciones que les otorgue ciudadanía. Por último, su consolidación se remonta al siglo XX. <br /> <br />

                            Por otro lado, surgen de una problemática común en aras de solucionar alguna represión, violencia, etc. Asi como presentar herramientas ante problemáticas que no son atendidas por el estado. Es de añadir que los integrantes de estos grupos eran propensos a ser asesinados e incluso desaparecidos. <br /> <br />
                            Entre los movimientos sociales tenemos: <br /><span className="fw-semibold">Viejos movimientos:</span> están relacionados con el inicio de la consolidación marxista. De ahí que tuvieran participación en los partidos comunistas y obreros del siglo XX. <br /> <br />
                            <span className="fw-semibold">Nuevos movimientos:</span> Surgen a partir de demandas o inconvenientes sociales, caracterizados por la desobediencia civil.
                        </p>
                    </CollapseInformation>
                    <hr />
                </div>

                <div>
                    <CollapseInformation name="Movimientos sociales (Latinoamérica)" id="movimientosSocialesAmerica" >
                        <h4>Movimientos artesanos</h4>
                        <ul>
                            <li>Uno de los primeros grupos sociales que surgió.</li>
                            <li>Artesanos se agrupan en organizaciones como <span className="fw-semibold">sociedades de ayuda mutua</span>, cuyo fin era prestarse auxilio en caso de enfermedad, vejez, etc.</li>
                            <li>Estuvieron a favor de la abolición de la esclavitud.</li>
                            <li>Solicitaron respeto hacia los resguardos indígenas.</li>
                            <li>Apoyaron la elección del José Hilario López para la presidencia.</li>
                        </ul>
                        <h4>Movimientos campesinos</h4>
                        <ul>
                            <li>Campesinos trataron de conservar sus tierras, acudiendo a juicios, buscando ayuda de autoridades, etc. Puesto que para ese entonces, el latifundismo provocaba que la mayoría de la población estuviera sin acceso a la propiedad, por consiguiente la producción agrícola.</li>
                            <li>México en el siglo XX logra una revolución que tuvo como fin una repartición de tierras a campesinos.</li>
                            <li>Establecieron la reforma agraria.</li>
                        </ul>
                        <h4>Movimientos obreros</h4>
                        <ul>
                            <li>Formación de los primeros sindicatos, debido a las precarias condiciones de trabajo de los obreros.</li>
                            <li>Tuvieron como fin reducir la jornada laboral a 8 horas, aumento de los salarios, mejora de las condiciones higiénicas de trabajo.</li>
                            <li>Los sindicatos buscaron mejorar la situación de los trabajadores recorriendo a protestas que iban desde la huelga hasta el sabotaje de las empresas.</li>
                            <li>Muchas de las huelgas fueron reprimidas por parte de los gobiernos e incluso por las mismas empresas.</li>
                        </ul>
                        <h4>Movimientos estudiantiles</h4>
                        <ul>
                            <li>Jóvenes latinoamericanos buscaban un orden social más justo.</li>
                            <li>Buscaron la mejora del sistema educativo universitario, así como autonomía universitaria, de modo que la iglesia no tuviese por qué impartir cátedras.</li>
                            <li>El principal movimiento fue el de la Universidad de Córdoba en Argentina.</li>
                        </ul>
                        <h4>Movimientos guerrilleros</h4>
                        <p>De este tema ya se ha hablado en la sección correspondiente al <Link to="/sociales" className="text-decoration-none">tercer periodo de Sociales</Link>.</p>
                    </CollapseInformation>
                </div>
            </div>
        </div>
    )
}
