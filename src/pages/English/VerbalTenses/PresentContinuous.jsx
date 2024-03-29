import Latex from "react-latex";
import { SectionTitle, Tooltip, TopWave } from "../../../components";

export const PresentContinuous = () => {
  const ARROW = `$$\\rightarrow$$`;

  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Present continuous" />

      <h1 className="englishSubtitle">Usos</h1>
      <div
        className="englishCardContainer"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="englishCard ownShadow">
          <h5>Exponer eventos que están ocurriendo en el momento. </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>El está jugando tenis con su hijo</span>}
                text={<span>He is playing tennis with his son.</span>}
                id="HeIsPlayingTennisWithHisSon"
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
          <h5>Mencionar eventos repetitivos</h5>
          <small>
            Se recomienda usar adverbios de frecuencia como forever, always,
            usually, often, etc. Con el fin de facilitar la comprensión del
            mensaje.
          </small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>María suele ir al parque todos los sábados.</span>
                }
                text={<span>He is playing tennis with his son.</span>}
                id="HeIsPlayingTennisWithHisSon."
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
          <h5>Denotar con seguridad eventos a futuro.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>
                    Ella va a cocinar para nosotros este fin de semana
                  </span>
                }
                text={<span>She is going to cook for us this weekend.</span>}
                id="SheIsGoingToCookForUsThis weekend"
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
          <h5>S + To be + V-ing + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Estoy corriendo en el campo</span>}
                text={<span>I'm running in the field</span>}
                id="ImRunningInTheField"
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
          <h5>S + To be + not + V-ing + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>No estoy corriendo en el campo</span>}
                text={<span>I'm not running in the field</span>}
                id="ImNotRunningInTheField"
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
          <h5>To be + S + V-ing + C</h5>
          <br />
          <small>Estados</small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¿Estoy corriendo en el campo?</span>}
                text={<span>Am I running in the field?</span>}
                id="AmIRunningInTheField?"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Reglas</h1>
      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h5>
            Aquellos verbos que finalizan con una "e" que no se pronuncia, esta
            será reemplazada con "ing".
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              Tak<u>e</u> <Latex>{ARROW}</Latex> Tak<u>ing</u>
            </small>
            <br />
            <small className="ms-3">
              Dat<u>e</u> <Latex>{ARROW}</Latex> Dat<u>ing</u>
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
            Si el verbo es corto o la última sílaba está acentuada y termina en
            consonante, se duplica la última consonante y se agrega "ing".
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              Run <Latex>{ARROW}</Latex> Running
            </small>
            <br />
            <small className="ms-3">
              Set <Latex>{ARROW}</Latex> Setting
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
            Si el verbo termina en "ie", se cambia esta terminación por -y y se
            añade "ing".
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              Lie <Latex>{ARROW}</Latex> Lying
            </small>
            <br />
            <small className="ms-3">
              Die <Latex>{ARROW}</Latex> Dying
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
