import { nomenclatureItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const Hydroxides = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Hidróxidos" />
      <ContentsTable items={nomenclatureItems} />
      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Compuesto químico que contiene un átomo de oxígeno y uno de hidrógeno.
          A menudo se conoce como "agua con un exceso de oxígeno". Además, se
          forman por la unión entre un metal o más iones hidroxilo (OH
          <sup>-</sup>) provenientes del H<sub>2</sub>O
        </p>
        <h5>Ejemplos</h5>
        <p>
          Hidróxido de cromo (III) = Cr(OH)<sub>3</sub>
          <br />
          Dihidróxido de bario = Ba(OH)<sub>2</sub>
          <br />
          Hidróxido férrico = Fe(OH)<sub>3</sub> <br /> <br />
        </p>
      </div>
    </div>
  );
};
