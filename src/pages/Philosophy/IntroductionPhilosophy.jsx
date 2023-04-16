import {
  CollapseInformation,
  SectionTitle,
  Tooltip,
  TopWave,
} from "../../components";
import { PhilosophyNav } from "./PhilosophyNav";

export const IntroductionPhilosophy = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Introducción" />

      <PhilosophyNav />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <h3>Filosofía</h3>
          <p>
            Etimológicamente, la palabra filosofía se divide en <i>filo</i> que
            significa amor y <i>sofía</i> que equivale a sabiduría. Es decir,
            amor por la sabiduría. Dicho de otra manera, es una actividad que
            realizamos las personas para comprendernos a nosotros mismos y al
            entorno que nos rodea, así como las relaciones que establecemos con
            el mundo y los demás. Analizando aspectos como la ética, existencia,
            tiempo, etc.
            <br />
            <br />
            Si deseas profundizar, te recomendamos leer:
          </p>
          <ul className="moreInformationLinks">
            <li>
              <a
                href="https://philosophy.fsu.edu/undergraduate-study/why-philosophy/What-is-Philosophy"
                target="_blank"
                rel="noreferrer"
              >
                What is Philosophy? | Department of Philosophy
              </a>
            </li>
            <li>
              <a
                href="https://www.worldhistory.org/philosophy/"
                target="_blank"
                rel="noreferrer"
              >
                Philosophy - World History Encyclopedia
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <h4>Teoría del origen de la filosofía</h4>
          <p>
            Se dice que hubo una serie de pasos por los que tuvo que pasar la
            primera persona que hizo filosofía.
          </p>
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
          <p>
            Es aquel conjunto de hechos, información y contenido intelectual que
            puede adquirir una persona de lo que se entiende como realidad.
          </p>
        </div>

        <hr />

        <div>
          <h4>¿Quiénes eran los presocráticos?</h4>
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
        </div>

        <hr />

        <CollapseInformation name="Presocráticos" id="presocraticos">
          <h4>Tales de Mileto</h4>
          <ul>
            <li>Fue uno del los 7 sabios de Grecia.</li>
            <li>Fue matemático, astrónomo, físico, filósofo, etc.</li>
            <li>Arché = agua</li>
          </ul>

          <h4>Anaximandro de Mileto</h4>
          <p>Fue el primero en desarrollar una cosmología</p>
          <ul>
            <li>Fue el primero en desarrollar una cosmología.</li>
            <li>Arché = Apeiron (indeterminado).</li>
            <li>La tierra es esférica.</li>
            <li>Universo9 infinito.</li>
          </ul>

          <hr />

          <h4>Anaxímenes de Mileto</h4>
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

          <h4>Heráclito de Efeso</h4>
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
            <li>
              Arché = la mezcla de todos los elementos (agua, fuego, tierra y
              aire)
            </li>
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
        </CollapseInformation>

        <hr />

        <CollapseInformation
          name="Escuelas helenísticas"
          id="EscuelasHelenisticas"
        >
          <p>
            Son aquellas corrientes filosóficas que buscaron la responder la
            interrogante ¿Cómo vivir la mejor vida? Es de añadir que se
            diferencia de la filosofía clásica puesto que en estas se da más
            importancia a los práctico que a lo teórico.
          </p>

          <CollapseInformation name="Cínicos" id="cinicos">
            <p>
              Fue fundada por Antístenes y, se caracterizó por tratar de adaptar
              una vida similar a los animales, rechazando los bienes materiales
              y enfocándose en tener una vida simple y acorde a la naturaleza.
              <br />
              <br />
              En esta escuela helenística, hay un dato curioso que llama la
              atención y reside en que a pesar de ser Antístenes su fundador, el
              representante más conocido es Diógenes, apodado como El Perro,
              debido a su forma de vivir y llevar la filosofía cínica a extremos
              que nadie antes había alcanzado. De hecho, no tenía siquiera casa,
              vivía en una tinaja en Atenas, similar a una tina, pero,
              compuesta por barro.
            </p>
          </CollapseInformation>
          <hr />

          <CollapseInformation name="Epicureos" id="epicureos">
            <p>
              Su fundador es Epicuro y se caracterizó por ser una filosofía
              hedonista, esto es, una corriente de pensamiento fundamentada en
              el placer. De manera que si se desea ser feliz, se necesita
              experimentar placer, pero, no solo corporal, sino también
              espiritual. Es de añadir que según esta corriente, a pesar de que
              el placer es un bien (en la medida que este provenga de la
              naturaleza), no todo placer debe ser buscado. Así como no todo
              dolor debe ser evitado.
              <br />
              <br />
              Por otra parte, según Epicuro, la amistad era un riesgo, pues uno
              se expone a sufrir por el amigo. Sin embargo, a pesar del riesgo,
              es hermoso puesto que la generosidad del mismo es fuente de
              alegrías.
            </p>
          </CollapseInformation>
          <hr />


          <CollapseInformation name="Escépticos" id="escepticos">
            <p>
              También conocido como escepticismo clásico o Pirronismo, debido a
              su fundador Pirrón. Según esta corriente, para alcanzar la
              felicidad no debemos emitir juicios de la realidad, lo que se
              conoce como epojé (suspensión). Por ende, según sus integrantes,
              nada puede ser afirmado como verdad.
              <br />
              <br />A criterio personal, considero que esta corriente deja una
              enseñanza bastante importante y poderosa para la actualidad,
              puesto que nos enseña que no deberíamos asumir las cosas de forma
              arbitraria.
            </p>
          </CollapseInformation>
          <hr />


          <CollapseInformation name="Estoicos" id="estoicos">
            <p>
              Una de las escuelas helenísticas más desarrolladas, digna de
              iniciar con la siguiente frase del fundador de tan increíble
              corriente, Zenón de Citio: "Ninguna pérdida debe sernos más
              sensible que la del tiempo, puesto que es irreparable." Asimismo,
              considera que el camino a la felicidad es dominando las pasiones
              que perturban la vida y el equilibrio de los placeres. Además, uno
              de los aspectos más relevantes es su propuesta de las cosas que
              podemos controlar y las que no. De modo que en lo que concierne a
              las que puedes controlar, deberías hacer lo mejor con ellas,
              mientras que tomas el resto como nos la presenta la naturaleza.
              <br />
              <br />
              De esta filosofía se desprenden grandes representantes como
              Epicteto, Lucio Annea Séneca, Marco Aurelio Antonino, etc.
              <br />
              <br />
              Por último, aquí algunas frases de Zenón de Citio:
            </p>

            <ul>
              <li>
                "No obres como si fueras a vivir mil años; obra como si el fin
                estuviera muy cerca."
              </li>
              <li>
                "La naturaleza nos ha dado dos oídos y una boca para enseñarnos
                que vale más oír que hablar."
              </li>
            </ul>

          </CollapseInformation>
        </CollapseInformation>
      </div>
    </div>
  );
};
