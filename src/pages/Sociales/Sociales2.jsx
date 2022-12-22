import { Link } from "react-router-dom"
const Sociales = () => {
    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <div className="textIntroducion shadow-lg">
                <h1>Doctrinas económicas</h1>
            </div>
            <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
                <ul className="pagination  pagination-md justify-content-center">
                    <li className="page-item shadow-lg"><Link to="/sociales_1" className="text-decoration-none page-link">I periodo</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_2" className="text-decoration-none page-link">D. ecómicas</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales" className="text-decoration-none page-link">M. armados</Link></li>

                    <li className="page-item shadow-lg"><Link to="/sociales_4" className="text-decoration-none page-link">M. sociales</Link></li>
                </ul>
            </nav>
            <div className="cardTrigonometria mb-5 shadow" data-aos="fade-up" data-aos-duration="700">

                <div>
                    <h2>Liberalismo</h2>
                    <ul>
                        <li>Doctrina filosófica de carácter político, económico y social (Es un conjunto de pensamientos)</li>
                        <li>Funciona de base teórica del capitalismo</li>
                        <li>Defiende las libertades individuales: los ciudadanos tienen derecho de llevar vida una vida privada como prefieran, amparados por tres derechos fundamentales de Locke: **vida, libertad y propiedad privada
                            <ul>
                                <li>Los ciudadanos tienen derecho a elegir como son gobernados, de manera que no influya en sus asuntos privados</li>
                                <li>Igualdad ante la ley tanto de gobernantes como gobernados (todas las personas son iguales ante el estado y la ley)</li>
                            </ul>
                        </li>
                        <li>Derecho a la propiedad privada</li>
                        <li>Tolerancia religiosa y estados laicos (separación del estado y las religiones)</li>
                        <li>El sistema que permite el desarrollo del liberalismo es la democracia representativa</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Neoliberalismo</h2>
                    <ul>
                        <li>Lleva los principios del liberalismo al extremo</li>
                        <li>Sistema económico en el que estamos inmersos</li>
                        <li>Establece la libertad de mercado</li>
                        <li>No intervención estatal</li>
                        <li>Gasto publico debe ser mínimo</li>
                        <li>Los gobiernos no deben establecer regulaciones que afecten a las actividades económicas</li>
                        <li>Defiende la competencia individual y privatización</li>
                        <li>Reducción de impuestos</li>
                    </ul>
                    <h4>Consecuencias</h4>
                    <ul>
                        <li>Reducción de derechos de trabajadores</li>
                        <li>Desigualdad</li>
                        <li>Expansión del comercio global</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Marxismo</h2>
                    <ul>
                        <li>Doctrina política, económica y social que pretende la consecución del poder estatal por parte del proletariado.</li>
                        <li>Estatización de los medios de producción y comunicación</li>
                        <li>Propone abolir la propiedad burguesa, propiedad privada y el libre mercado</li>
                        <li>Practica el comunismo</li>
                        <li>Sociedad debe ser igualitaria</li>
                        <li>Marxistas afirman que el comunismo proporciona más libertad que otros sistemas económicos, y que la redistribución de la riqueza resolverá muchos problemas</li>
                    </ul>
                    <h4>Capitalismo según el marxismo</h4>
                    <ul>
                        <li>Excedente mano de obra</li>
                        <li>Las economías capitalistas se retroalimentan de las crisis económicas</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Anarquismo</h2>
                    <ul>
                        <li>Similar al marxismo pero, más radical</li>
                        <li>La libertad es el mayor bien de los individuos</li>
                        <li>La violencia es el método legitimado para conseguir cambios sociales</li>
                        <li>Abolición total del estado debido a su </li>
                        <li>Las personas viven sin autoridad más no sin orden</li>
                        <li>Critica principalmente al capitalismo</li>
                        <li>Colectivización de los bienes y modos de producción</li>
                    </ul>
                    <hr />
                </div>

                <div>
                    <h2>Positivismo</h2>
                    <ul>
                        <li>Doctrina de pensamiento que postula el metodo cientifico como única forma de obtención de conocimiento</li>
                        <li>La experiencia y verificación son esenciales doctrina</li>
                        <li>Todo conocimiento debe llevar al progreso del ser humano</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sociales