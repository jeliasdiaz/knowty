import { SectionTitle, Tooltip, TopWave } from "../../components";

export const BeAbleTo = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Be able to" />

      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Be able to es una expresión en inglés que se utiliza para expresar
            una capacidad o habilidad. Generalmente se usa para hablar de esta
            cualidad en una o varias personas en cualquier tiempo. Puede leerse
            como poder o ser capaz de.
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Usos</h1>
      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p className="mt-3">
            Similar a can, se puede usar para hablar de capacidad o habilidad,
            pero be able to es más formal
            <br />
            <br />
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Puedo tocar el piano"
                text={
                  <span>
                    I <u>can</u> play the piano
                  </span>
                }
                id="PuedoTocarElPiano"
              />{" "}
              /{" "}
              <Tooltip
                content="Soy capaz de tocar el piano"
                text={
                  <span>
                    I <u>am able to</u> play the piano
                  </span>
                }
                id="soyCapazDeTocarElPiano"
              />
            </small>
          </p>
        </div>

        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p className="mt-3">
            Similar a could, be able to se puede usar para hablar de habilidades
            en el pasado
            <br />
            <br />
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Él podía correr muy rápido"
                text="He could run pretty fast"
                id="He could run pretty fast"
              />{" "}
              /{" "}
              <Tooltip
                content="Él era capaz de correr muy rápido"
                text={
                  <span>
                    He <u>was able to</u> run pretty fast
                  </span>
                }
                id="eraCapazDeCorrerMuyRapido"
              />
            </small>
          </p>
        </div>

        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p className="mt-3">
            Expresar que alguien tuvo la capacidad de hacer algo y lo hizo
          </p>
        </div>

        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p className="mt-3">
            Expresar capacidades o habilidades a futuro
            <br />
            <br />
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Seré capaz de hablar inglés"
                text="I will be able to speak english"
                id="expresarCapacidadesOHabilidadesAFuturo"
              />
            </small>
          </p>
        </div>

        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p className="mt-3">
            Cuando se usa un verbo (en especial uno modal) y después se habla de
            una capacidad o habilidad,
            <br />
            <br />
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Podría ser capaz de vencerte algún día"
                text="- I may be able to beat you one day"
                id="- I may be able to beat you one day"
              />
            </small>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Podrías ser capaz de jugar mejor si practicas"
                text="- You would be able to play better if you practice"
                id="- You would be able to play better if you practice"
              />
            </small>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Ella disfruta ser capaz de descansar todo lo que quiera"
                text="- She enjoys being able to rest all she wants"
                id="- She enjoys being able to rest all she wants"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Estructura</h1>
      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones afirmativas</h4>
          <h5>S + to be + able to + V + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Ellos son capaces de estudiar ahora"
                text="They are able to study now"
                id="oracionAfirmativaBeAbleTo"
              />
            </small>
          </p>
        </div>
      </div>

      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones negativas</h4>
          <h5>
            S + to be +{" "}
            <Tooltip content="unable to" text="not + able to" id="unableto" /> +
            V + C{" "}
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="Ellos no  son capaces de estudiar ahora"
                text="They are unable to study now"
                id="oracionNegativaBeAbleTo"
              />
            </small>
          </p>
        </div>
      </div>

      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones interrogativas</h4>
          <h5> To be + S + able to + V + C + ?</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content="¿Son ellos capaces de estudiar ahora?"
                text="Are they able to study now?"
                id="oracionInterrogativaBeAbleTo"
              />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
