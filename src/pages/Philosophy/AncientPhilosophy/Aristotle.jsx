import { ancientPhilosophyItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const Aristotle = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Aristóteles" />
      <ContentsTable items={ancientPhilosophyItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h3>Aritóteles</h3>
        <p>
          Fue un filósofo y científico griego que hizo aportes en áreas como la
          ética, política, metafísica, biología y lógica.
          <br />
          <br />
          Su pensamiento estuvo fuertemente influenciado por sus observaciones
          empíricas del mundo, creyendo así en el concepto de casualidad, de
          manera que todo tenía una relación de causa y efecto. Motivo por el
          cual estuvo interesado en buscar la causa última de las cosas.
          <br />
          <br />
          Por otra parte, creía que la virtud se encuentra entre dos
          extremos/excesos, así como en la importancia del conocimiento
          práctico.
        </p>
      </div>
    </div>
  );
};
