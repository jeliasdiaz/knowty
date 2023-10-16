import { economicDoctrinesItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const Neoliberalism = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Neoliberalismo" />
      <ContentsTable items={economicDoctrinesItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <ul>
          <li>Lleva los principios del liberalismo al extremo.</li>
          <li>Sistema económico en el que estamos inmersos.</li>
          <li>Establece la libertad de mercado.</li>
          <li>No intervención estatal.</li>
          <li>Gasto público debe ser mínimo.</li>
          <li>
            Los gobiernos no deben establecer regulaciones que afecten a las
            actividades económicas.
          </li>
          <li>Defiende la competencia individual y privatización.</li>
          <li>Reducción de impuestos.</li>
        </ul>
        <h4>Consecuencias</h4>
        <ul>
          <li>Reducción de derechos de trabajadores.</li>
          <li>Desigualdad.</li>
          <li>Expansión del comercio global.</li>
        </ul>
      </div>
    </div>
  );
};
