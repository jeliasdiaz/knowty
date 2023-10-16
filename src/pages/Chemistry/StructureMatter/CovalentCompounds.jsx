import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import { structureMatterItems } from ".";

export const CovalentCompounds = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Compuestos covalentes" />
      <ContentsTable items={structureMatterItems} />
      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <ul>
          <li>Sólidos, líquidos y gaseosos.</li>
          <li>Son en su mayoría compuestos orgánicos.</li>
          <li>Puntos de fusión y ebullición relativamente bajos.</li>
          <li>
            Son soluciones acuosas y en su mayoría no conducen la corriente
            eléctrica.
          </li>
          <li>
            Sus reacciones son muy lentos, generalmente necesitan catalizadores
            (sustancia que acelera una reacción química).
          </li>
        </ul>
      </div>
    </div>
  );
};
