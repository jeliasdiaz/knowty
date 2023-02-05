import { SocialNav } from "./SocialNav"
import { SectionTitle } from "../../components/SectionTitle";
import CollapseTitle from "../../components/CollapseTitle";
import TopWave from "../../components/TopWave";

export const EconomicDoctrines = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Doctrinas económicas" />

            <SocialNav />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <CollapseTitle name="Liberalismo" id="#liberalismo" />
                    <div className="collapse" id="liberalismo">
                        <ul>
                            <li>Doctrina filosófica (conjunto de pensamientos) de carácter político, económico y social.</li>
                            <li>Base teórica del capitalismo.</li>
                            <li>Defiende las libertades individuales: los ciudadanos tienen derecho de llevar vida una vida privada como prefieran, amparados por tres derechos fundamentales de Locke: <span className="fw-semibold">vida</span>, <span className="fw-semibold">libertad</span> y <span className="fw-semibold">propiedad privada</span> 
                                <ul>
                                    <li>Los ciudadanos tienen derecho a elegir como son gobernados, de manera que no influya en sus asuntos privados.</li>
                                    <li>Igualdad ante la ley tanto de gobernantes como gobernados (todas las personas son iguales ante el estado y la ley).</li>
                                </ul>
                                <br />
                            </li>
                            <li>Derecho a la propiedad privada.</li>
                            <li>Tolerancia religiosa y estados laicos (separación del estado de la religión).</li>
                            <li>El sistema que permite el desarrollo del liberalismo es la democracia representativa.</li>
                        </ul>
                    </div>
                    <hr />
                </div>

                <div>
                    <CollapseTitle name="Neoliberalismo" id="#neoliberalismo" />
                    <div className="collapse" id="neoliberalismo">
                        <ul>
                            <li>Lleva los principios del liberalismo al extremo.</li>
                            <li>Sistema económico en el que estamos inmersos.</li>
                            <li>Establece la libertad de mercado.</li>
                            <li>No intervención estatal.</li>
                            <li>Gasto público debe ser mínimo.</li>
                            <li>Los gobiernos no deben establecer regulaciones que afecten a las actividades económicas.</li>
                            <li>Defiende la competencia individual y privatización.</li>
                            <li>Reducción de impuestos.</li>
                        </ul>
                        <h4>Consecuencias</h4>
                        <ul>
                            <li>Reducción de derechos de trabajadores.</li>
                            <li>Desigualdad.</li>
                            <li>Expansión del comercio global.</li>
                        </ul>
                    </div>
                    <hr />
                </div>

                <div>
                <CollapseTitle name="Marxismo" id="#marxismo" />
                    <div className="collapse" id="marxismo">
                    <ul>
                        <li>Doctrina política, económica y social que pretende la consecución del poder estatal por parte del proletariado.</li>
                        <li>Estatización de los medios de producción y comunicación.</li>
                        <li>Propone abolir la propiedad burguesa, propiedad privada y el libre mercado.</li>
                        <li>Practica el comunismo.</li>
                        <li>Sociedad debe ser igualitaria.</li>
                        <li>Marxistas afirman que el comunismo proporciona más libertad que otros sistemas económicos, y que la redistribución de la riqueza resolverá muchos problemas.</li>
                    </ul>
                    <h4>Capitalismo según el marxismo</h4>
                    <ul>
                        <li>Excedente mano de obra.</li>
                        <li>Las economías capitalistas se retroalimentan de las crisis económicas.</li>
                    </ul>
                    </div>
                    <hr />
                </div>

                <div>
                    <CollapseTitle name="Anarquismo" id="#anarquismo" />
                    <div className="collapse" id="anarquismo">
                    <ul>
                        <li>Similar al marxismo pero, más radical.</li>
                        <li>La libertad es el mayor bien de los individuos.</li>
                        <li>La violencia es el método legitimado para conseguir cambios sociales.</li>
                        <li>Abolición total del estado.</li>
                        <li>Las personas viven sin autoridad más no sin orden.</li>
                        <li>Crítica principalmente al capitalismo.</li>
                        <li>Colectivización de los bienes y modos de producción.</li>
                    </ul>
                    </div>
                    <hr />
                </div>

                <div>
                <CollapseTitle name="Positivismo" id="#positivismo" />
                    <div className="collapse" id="positivismo">
                    <ul>
                        <li>Doctrina de pensamiento que postula el metodo científico como única forma de obtención de conocimiento.</li>
                        <li>La experiencia y verificación son esenciales doctrina.</li>
                        <li>Todo conocimiento debe llevar al progreso del ser humano.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
