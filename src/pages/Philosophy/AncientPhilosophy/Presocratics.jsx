import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import { ancientPhilosophyItems } from '.'
import { Tooltip } from 'recharts'

export const Presocratics = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Presocráticos" />
            <ContentsTable items={ancientPhilosophyItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Presocráticos</h3>

                <h4 id="quienesEranPresocraticos">¿Quiénes eran los presocráticos?</h4>
                <p>
                    Los presocráticos fueron un grupo de pensadores y filósofos griegos
                    que existieron antes de Sócrates. Se les considera como los primeros
                    filósofos y se preguntaron por el{" "}
                    <Tooltip
                        text={<span>arché</span>}
                        content={
                            <span>
                                Origen/principio del cosmos. <br /> Elemento primero
                            </span>
                        }
                        id="arché"
                    />{" "}
                    del universo. En su mayoría, este correspondió a elementos de la
                    naturaleza.
                </p>

                <h4 id="tales">Tales de Mileto</h4>
                <ul>
                    <li>Fue uno del los 7 sabios de Grecia.</li>
                    <li>Fue matemático, astrónomo, físico, filósofo, etc.</li>
                    <li>Arché = agua</li>
                </ul>

                <h4 id="anaximandro">Anaximandro de Mileto</h4>
                <p>Fue el primero en desarrollar una cosmología</p>
                <ul>
                    <li>Fue el primero en desarrollar una cosmología.</li>
                    <li>Arché = Apeiron (indeterminado).</li>
                    <li>La tierra es esférica.</li>
                    <li>Universo9 infinito.</li>
                </ul>

                <hr />

                <h4 id="anaximenes">Anaxímenes de Mileto</h4>
                <ul>
                    <li>Arché = aire</li>
                    <li>
                        Supuso que el aire está en continuo movimiento, por lo que
                        consideró que también poseía vida. Además, debido a su
                        existencia/vida infinita, asumió que esta era la causa de la
                        materia.
                    </li>
                    <li>
                        "Todas las cosas se originaron por el grado de condensación o
                        enrarecimiento del aire, a causa del frío y del calor."
                    </li>
                </ul>

                <hr />

                <h4 id="heraclito">Heráclito de Efeso</h4>
                <ul>
                    <li>Arché = fuego</li>
                    <li>
                        Todo es un constante{" "}
                        <Tooltip
                            text={<span className="ms-2">devenir.</span>}
                            content={
                                <span>
                                    Proceso de cambio que <br /> ocurre a lo largo del tiempo.
                                </span>
                            }
                            id="devenir"
                        />
                    </li>
                    <li>
                        "No nos podemos bañar dos veces en el mismo río". Debido a que
                        tanto el río como tú, habrán cambiado.
                    </li>
                </ul>

                <hr />

                <h4 id="parmenides">Parménides de Elea</h4>
                <ul>
                    <li>Sólo existe una sola cosa en el mundo: el "ser".</li>
                    <li>No hay cambio, el ser es eterno.</li>
                    <li>De la nada, nada puede surgir.</li>
                </ul>

                <hr />

                <h4 id="pitagoras">Pitágoras de Samos</h4>
                <ul>
                    <li>Arché = los números</li>
                </ul>

                <hr />

                <h4 id="empedocles">Empédocles</h4>
                <ul>
                    <li>
                        Arché = la mezcla de todos los elementos (agua, fuego, tierra y
                        aire)
                    </li>
                </ul>

                <hr />

                <h4 id="anaxagoras">Anaxágoras</h4>
                <ul>
                    <li>Arché = semillas</li>
                    <li>Nous (inteligencia)</li>
                </ul>

                <hr />

                <h4 id="democrito">Demócrito</h4>
                <ul>
                    <li>Arché = átomo</li>
                </ul>
            </div>
        </div>
    )
}
