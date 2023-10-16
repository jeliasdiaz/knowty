import { SectionTitle, Tooltip, TopWave } from "../../../components";

export const FutureContinuous = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Future Continuous" />

      <h1 className="englishSubtitle">Usos</h1>
      <div
        className="englishCardContainer"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="englishCard ownShadow">
          <h5>
            Exponer un evento futuro que ocurrirá en un momento determinado.
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>
                    En una hora estaré jugando videjuegos con mis amigos
                  </span>
                }
                text={
                  <span>
                    In an hour I will be playing videogames with my friends.
                  </span>
                }
                id="InAnHourIWillBePlayingVideogamesWithMyFriends"
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
          <h5>
            Expresar acciones que iniciaron y seguirán desarrollandose a futuro.
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>El estará entrenando por dos horas más</span>}
                text={<span>He will be training for two more hours</span>}
                id="HeWillBeTrainingForTwoMoreHours"
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
          <h5>Preguntar sobre un evento que podría ocurrir a futuro.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>
                    ¿Ella estará haciendo las tareas contigo después de la
                    reunión?
                  </span>
                }
                text={
                  <span>
                    Will she be doing the homework with you after the meeting?
                  </span>
                }
                id="WillSheBeDoingTheHomeworkWithYouAfterTheMeeting?"
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
          <h5>S + Will +To be + V-ing + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Ella estará corriendo en el campo</span>}
                text={<span>She will be running in the field.</span>}
                id="SheWillBeRunningInTheField"
              />
            </small>
          </p>
        </div>
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones negativas</h4>
          <h5>S + Will + not + To be + V-ing + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Ella no estará corriendo en el campo</span>}
                text={<span>She won't be running in the field</span>}
                id="SheWontBeRunningInTheField"
              />
            </small>
          </p>
        </div>
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones interrogativas</h4>
          <h5>Will + S + To be + V-ing + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¿Estará ella corriendo en el campo?</span>}
                text={<span>Will she be running in the field?</span>}
                id="InAnHourIWillBePlayingVideogamesWithMyFriends"
              />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
