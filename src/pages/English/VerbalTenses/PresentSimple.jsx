import Latex from "react-latex";
import { SectionTitle, Tooltip, TopWave } from "../../../components";

export const PresentSimple = () => {
  const ARROW = `$$\\rightarrow$$`;
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Present simple" />

      <h1 className="englishSubtitle">Usos</h1>
      <div
        className="englishCardContainer"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="englishCard ownShadow">
          <h5>Comunicar estados o acciones permanentes.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>La tierra es el tercer planeta desde el sol</span>
                }
                text={<span>The earth is the third planet from the sun</span>}
                id="TheEarthIsTheThirdPlanetFromTheSun"
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
          <h5>Expresar rutinas o acciones que se repiten usualmente.</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Bebo café cada mañana</span>}
                text={
                  <span>
                    I drink coffee every morning" id="IDrinkCoffeeEveryMorning
                  </span>
                }
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
            Manifestar estados o situaciones que son rutinarias o que poseen
            periodicidad
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Cada 10 años es una decada</span>}
                text={<span>Every ten years is a decade</span>}
                id="EveryTenYearsIsADecade"
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
            Transmitir citas, hechos o compromisos que pasarán en un tiempo
            determinado
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¡Mañana es mi cumpleaños!</span>}
                text={<span>Tomorrow is my birthday!</span>}
                id="TomorrowIsMyBirthday"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Estructuras</h1>
      <div className="englishCardContainer">
        <div
          className="englishCardStructure ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>Oraciones afirmativas</h4>
          <h5>S + V + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Yo juego fútbol</span>}
                text={<span>I play soccer</span>}
                id="IPlaySoccer"
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
          <h5>S + do/does (Aux) + not + V + C</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Yo no juego fútbol</span>}
                text={<span>I do not/don't play soccer</span>}
                id="IDoNotDontPlaySoccer"
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
          <h5>Do/Does (Aux) + S + V + C + ?</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>¿Juego al fútbol?</span>}
                text={<span>Do I play soccer?</span>}
                id="DoIPlaySoccer"
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
          <h4>Do y Does</h4>
          <p>
            Para negar y preguntar se utilizan los verbos auxiliares "do" y
            "does", este último para la tercera persona del singular (he, she,
            it).
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
          <p>
            Se agrega "s", "es" o "ies" a los verbos cuando el sujeto está en la
            tercera persona del singular.
          </p>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">She loves pizza and brownies</small>
          </p>
        </div>
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Cuando el verbo termina en: CH, SH, SS, O,X, Z y el sujeto este en
            la tercera persona del singular, se agrega "es".
          </p>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">She watches a movie every day</small>
          </p>
        </div>
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Si un verbo termina en "Y" y detrás de esta letra hay una
            consonante, se cambia la "Y" por "i", y se agrega "es".
          </p>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              She try <Latex>{ARROW}</Latex> She tries
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
