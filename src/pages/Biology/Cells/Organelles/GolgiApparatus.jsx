import { organellesItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../../components";

export const GolgiApparatus = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Aparato de Golgi" />

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

        <h4>Aparato de Golgi</h4>
        <p>
          Es un organelo celular presente en las células eucariotas que se
          encarga de la modificación, clasificación, empaquetamiento y
          distribución de proteínas y lípidos que han sido sintetizados en el
          retículo endoplásmico. También se encarga de la síntesis de
          carbohidratos complejos.
        </p>
        <img
          src="/img/AparatoGolgi.png"
          alt="Aparato de Golgi imagen"
          className="w-50"
        />
      </div>
    </div>
  );
};
