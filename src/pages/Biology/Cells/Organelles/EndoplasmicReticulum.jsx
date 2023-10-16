import { organellesItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../../components";

export const EndoplasmicReticulum = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Retículo endoplasmático" />

      <ContentsTable items={organellesItems} />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div className="d-flex justify-content-center">
          <img
            src="/img/celulaAnimal.png"
            alt="Celula animal"
            className="w-50"
          />
        </div>

        <h4>Retículo endoplasmático</h4>
        <p>
          El retículo endoplásmico puede ser liso o rugoso dependiendo de la
          presencia de ribosomas unidos a su superficie. El RE liso se encarga
          de la síntesis de lípidos y de la detoxificación celular, mientras que
          el RE rugoso se encarga de la síntesis de proteínas que serán
          secretadas o insertadas en la membrana celular.
        </p>
        <img
          src="/img/ReticuloEndoplasmático.png"
          className="w-50"
          alt="Retículo endoplasmático imagen"
        />
      </div>
    </div>
  );
};
