import {
  SectionTitle,
  Tooltip,
  TopWave,
} from "../../components";

export const IntroductionPhilosophy = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Introducción" />


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
      </div>
    </div>
  );
};
