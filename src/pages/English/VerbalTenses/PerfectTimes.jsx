import { SectionTitle, Tooltip, TopWave } from "../../../components";

export const PerfectTimes = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Presente perfecto" />

      <h1 className="englishSubtitle">Usos</h1>
      <div
        className="englishCardContainer"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="englishCard ownShadow">
          <h5>
            Hablar de acciones o situaciones que han ocurrido en un período de
            tiempo que incluye el pasado y que tienen relevancia en el presente
          </h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>He terminado mi tarea</span>}
                text={<span>I have finished my homework.</span>}
                id="IHaveFinishedMyHomework"
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
          <h5>S + Have + P.P. + C</h5>
          <small>
            Debes tener en cuenta que para la tercera personal del singular se
            usa has en vez de have.
          </small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Ellos han intentado convencerla</span>}
                text={<span>They have tried to convince her</span>}
                id="TheyHaveTriedToConvinceHer"
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
          <h5>S + Have + not + P.P. + C</h5>
          <small>
            Have/has y el not pueden contraerse de la forma Haven't/Hasn't
          </small>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={<span>Yo no juego fútbo</span>}
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
          <h5>Have + S + P.P. + C + ?</h5>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>¿Hemos alguna vez ido a la piscina juntos?</span>
                }
                text={<span>Have we ever gone to the pool together?</span>}
                id="HaveWeEverGoneToThePoolTogether"
              />
            </small>
          </p>
        </div>
      </div>

      <h1 className="englishSubtitle mt-3">Pasado y futuro perfecto</h1>
      <div className="englishCardContainer">
        <div
          className="englishCard ownShadow"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p>
            Son las versiones en pasado y futuro del presente perfecto. Para
            identificar cuál es el tiempo perfecto que se está utilizando se
            debe de ver en qué tiempo se encuentra el verbo to have, ya sea en
            presente (have, has), pasado (had) o futuro (Will have). <br />
            Siguen las mismas estructuras en afirmativo, negativo e
            interrogativo.
          </p>
          <p className="mt-3">
            <span className="fw-semibold">Ejemplo:</span>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>
                    Ellos habían intentado pasar el examen de matemáticas
                  </span>
                }
                text={<span>- They had tried to pass the math exam</span>}
                id="TheyHadTriedToPassTheMathExam"
              />
            </small>
            <br />
            <small className="ms-3">
              <Tooltip
                content={
                  <span>
                    En alrededor de cuatro horas el habrá termino el compromiso
                  </span>
                }
                text={
                  <span>
                    - In about four hours he will have finished the homework
                  </span>
                }
                id="InAboutFourHoursHeWillHaveFinishedTheHomework"
              />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
