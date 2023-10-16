import { SectionTitle, Tooltip, TopWave } from "../../../components";

export const SimpleFuture = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Future simple" />

      <h1 className="englishSubtitle">Usos con "will"</h1>
      <div
        className="englishCardContainer"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="englishCard ownShadow">
          <h5>
            Referirnos a cosas que creemos pero de las que no estamos seguros al
            100%. Es decir, predicciones.
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Nevará este fin de semana</span>}
                text={<span>It will snow this weekend</span>}
                id="ItWillSnowThisWeekend"
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
          <h5>Decisiones o ideas espontáneas.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Te recogeré mañana</span>}
                text={<span>I will pick you up tomorrow.</span>}
                id="IWillPickYouUpTomorrow."
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
          <h5>Proponer, ofrecerse o invitar a realizar algo.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¿Te casarás conmigo?</span>}
                text={<span>Will you marry me?</span>}
                id="willYouMarryMe?"
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
          <h5>Firme decisión de hacer algo.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Haré las tareas esta noche</span>}
                text={<span>I will do these homeworks tonight.</span>}
                id="IWillDoTheseHomeworksTonight"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Estructuras con "will"</h1>
      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones afirmativas</h4>
          <h5>S + Will + V + C</h5>
          <small>
            "Will" es un verbo modal para el futuro. Después de un verbo modal
            siempre va un verbo en su forma base.
          </small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Ella vendrá al país el próximo año.</span>}
                text={<span>She will come to the country next year.</span>}
                id="SWillComeToTheCountryNextYear"
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
          <h5>S + Will + not + V + C</h5>
          <small>El verbo debe estar su forma base.</small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Ellos no cocinarán esta semana.</span>}
                text={<span>They Will not cook this week</span>}
                id="TheyWillNotCookThisWeek"
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
          <small>Acciones</small>
          <h5>Will + S + V + C + ?</h5>
          <br />
          <small>Estados</small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¿Jugará en el próximo partido?</span>}
                text={<span>Will he play in the next match?</span>}
                id="WillHePlayInTheNextMatch"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Nota</h1>
      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Para leer el futuro simple con "will" en ingles, lo leemos como el
            futuro en indicativo.
          </p>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">You'll work (tú trabajarás)</small>
            <br />
            <small className="ms-3">He'll work (él trabajará)</small>
            <br />
            <small className="ms-3">We'll work (nosotros trabajaremos)</small>
            <br />
            <small className="ms-3">You'll work (vosotros trabajareis)</small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Usos con "going to"</h1>
      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h5>
            Cuando se llevarán acabo planes que son 100% seguro que van a
            ocurrir.
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              I am going to see you this holiday season
            </small>
            <br />
            <small className="ms-3">(Iré a verte estas vacaciones)</small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Estructuras con "going to"</h1>
      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones afirmativas</h4>
          <h5>S + to be + Going to + V + C</h5>
          <small>Be = [am, is, are]</small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">I'm going to eat a sandwich tonight.</small>
            <br />
            <small className="ms-3">Voy a comer un sandwich esta noche.</small>
          </p>
        </div>
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones negativas</h4>
          <h5>S + to be + not + Going to + V + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              She's not going to go to the cinema with us.
            </small>
            <br />
            <small className="ms-3">
              Ella no va a ir al cine con nosotros.
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
          <small>Acciones</small>
          <h5>To be + S + Going to + V + C + ?</h5>
          <br />
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              Are you going to write the email for the client?
            </small>
            <br />
            <small className="ms-3">
              ¿Tú vas a escribir el correo electrónico para el cliente?
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
