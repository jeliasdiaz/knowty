import { SectionTitle, TopWave } from "../../components";

export const ModalVerbs = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Modal verbs" />

      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Los verbos modales son un tipo de verbo auxiliar en inglés que
            modifica el significado del verbo principal de una frase. Expresan
            varios matices de significado relacionados con la posibilidad, la
            capacidad, el permiso, la obligación, etc.
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle">¿Cuáles son?</h1>
      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Can</h4>
          <p>Usado para expresar habilidad, posibilidad, permiso o petición.</p>
          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>Students can learn English.</li>
            <li>Can I help you?</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow 
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Could</h4>
          <p>
            Usado para expresar habilidad o posibilidad en el pasado, peticiones
            educadas u ofrecimientos, y situaciones condicionales o hipotéticas.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>I could speak Spanish fluently when I lived in Spain.</li>
            <li>Could you please pass me the salt?</li>
            <li>If I had more time, I could finish the project by tomorrow.</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow 
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>May - might</h4>
          <p>
            "May" se utiliza para expresar un mayor grado de probabilidad, pedir
            permiso o expresar una situación hipotética en el presente o futuro.
            Mientras que "might" se utiliza para expresar un menor grado de
            probabilidad o una situación hipotética en el pasado.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>
              It may rain later today. (There's a good chance it will rain.)
            </li>
            <li>
              It might rain later today. (There's a possibility, but it's less
              likely than with "may".)
            </li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow 
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Should</h4>
          <p>
            Se utiliza para indicar expectativa o recomendación, o situación
            hipotética. También puede también para expresar crítica o pesar. Es
            un verbo versátil que puede usarse en diferentes contextos según la
            situación.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>You should study more to pass the exam."</li>
            <li>You shouldn't have said that to her.</li>
            <li>It should be sunny tomorrow.</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow 
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Must</h4>
          <p>
            Utilizado para expresar obligación o necesidad. Algunas de sus
            funciones son también expresar una certeza o recomendación fuerte,
            prohibición u obligación negativa, etc.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>I must finish my work before I can go home.</li>
            <li>You must see that movie, it's really good.</li>
            <li>You must not smoke in here.</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Would</h4>
          <p>
            Se utiliza para comunicar una situación condicional o hipotética.
            También puede utilizarse para describir una acción o hábito repetido
            en el pasado. Además, suele utilizarse en peticiones u ofertas de
            cortesía.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>If I had more time, I would go to the gym.</li>
            <li>
              When I was a child, I would often spend hours playing outside.
            </li>
            <li>Would you like a cup of tea?</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Ought to</h4>
          <p>
            Sugiere una obligación más fuerte que "should", pero no tan fuerte
            como "must".
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>You ought to eat more vegetables if you want to be healthy.</li>
            <li>They ought to be here by now.</li>
            <li>He ought to have finished his homework by now.</li>
          </ul>
        </div>

        <div
          className="englishCardStructure ownShadow
                "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Shall</h4>
          <p>
            En el pasado, se utilizaba como alternativa a "will", incluso se
            puede encontrar en conocidos libros de literatura del pasado. Hoy en
            día, "shall" se utiliza comúnmente para formar preguntas para hacer
            una oferta o sugerencia.
          </p>

          <span className="fw-semibold mt-3">Ejemplo:</span>
          <ul>
            <li>Shall we go for a walk later?</li>
            <li>I shall do my best to help you.</li>
            <li>Shall I call you later to discuss the details?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
