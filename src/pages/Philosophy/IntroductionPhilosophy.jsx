import React from 'react'
import { CollapseTitle, SectionTitle, Tooltip, TopWave } from '../../components'
import { PhilosophyNav } from './PhilosophyNav'

export const IntroductionPhilosophy = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Introducción" />

            <PhilosophyNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h3>Filosofía</h3>
                    <p>
                        Etimológicamente, la palabra filosofía se divide en <i>filo</i> que significa amor y <i>sofía</i> que equivale a sabiduría. Es decir, amor por la sabiduría. Dicho de otra manera, es una actividad que realizamos las personas para comprendernos a nosotros mismos y al entorno que nos rodea, así como las relaciones que establecemos con el mundo y los demás. Analizando aspectos como la ética, existencia, tiempo, etc.
                        <br /><br />
                        Si deseas profundizar, te recomendamos leer:
                    </p>
                    <ul className="moreInformationLinks">
                        <li>
                            <a href="https://philosophy.fsu.edu/undergraduate-study/why-philosophy/What-is-Philosophy" target="_blank" rel="noreferrer">What is Philosophy? | Department of Philosophy</a>
                        </li>
                        <li>
                            <a href="https://www.worldhistory.org/philosophy/" target="_blank" rel="noreferrer">Philosophy - World History Encyclopedia</a>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h4>Teoría del origen de la filosofía</h4>
                    <p>Se dice que hubo una serie de pasos por los que tuvo que pasar la primera persona que hizo filosofía.</p>
                    <ul>
                        <li>Admiración del fenómeno.</li>
                        <li>Pregunta.</li>
                        <li>Conciencia de que hay cosas que no sabes (ignorancia).</li>
                        <li>Reflexión formal.</li>
                    </ul>

                    <small>Se considera a Tales de Mileto como el primer filósofo.</small>
                </div>

                <hr />

                <div>
                    <h4>¿Qué es el conocimiento?</h4>
                    <p>Es aquel conjunto de hechos, información, contenido intelectual que puede adquirir una persona de lo que se entiende como realidad.</p>
                </div>

                <hr />

                <div>
                    <h4>¿Quiénes eran los presocráticos?</h4>
                    <ul>
                        <li>Aquellos que vivieron antes de Sócrates.</li>
                        <li>Los primeros filósofos.</li>
                        <li>Se preguntaron por el <Tooltip text={<span className="ps-2">arché</span>} content={<span>Origen/principio del cosmos. <br /> Elemento primero</span>} /> del universo.</li>
                    </ul>
                </div>

                <hr />

                <CollapseTitle name="Presocráticos" id="#presocraticos" />
                <div className="collapse" id="presocraticos">
                    <h4>Anaximandro de Mileto</h4>
                    <ul>
                        <li>Arché = Apeiron (indeterminación)</li>
                        <li>La tierra es esférica</li>
                        <li>Universo infinito</li>
                    </ul>

                    <hr />

                    <h4>Anaxímenes de Mileto</h4>
                    <ul>
                        <li>Arché = aire</li>
                        <li>"Todas las cosas se originaron por el grado de condensación o enrarecimiento del aire, a causa del frío y del calor."</li>
                    </ul>

                    <hr />

                    <h4>Heráclito de Efeso</h4>
                    <ul>
                        <li>Arché = fuego</li>
                        <li>Todo es un constante devenir.</li>
                        <li>"No nos podemos bañar dos veces en el mismo río" debido a qué tanto el río como tú, habrán cambiado.</li>
                    </ul>

                    <hr />

                    <h4>Parménides de Elea</h4>
                    <ul>
                        <li>Sólo existe una sola cosa en el mundo: el "ser".</li>
                        <li>No hay cambio, el ser es eterno.</li>
                        <li>De la nada, nada puede surgir.</li>
                    </ul>

                    <hr />

                    <h4>Pitágoras de Samos</h4>
                    <ul>
                        <li>Arché = los números</li>
                    </ul>

                    <hr />

                    <h4>Empédocles</h4>
                    <ul>
                        <li>Arché = la mezcla de todos los elementos (agua, fuego, tierra y aire)</li>
                    </ul>

                    <hr />

                    <h4>Anaxágoras</h4>
                    <ul>
                        <li>Arché = semillas</li>
                        <li>Nous (inteligencia)</li>
                    </ul>

                    <hr />

                    <h4>Demócrito</h4>
                    <ul>
                        <li>Arché = átomo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
