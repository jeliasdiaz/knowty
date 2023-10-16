import { SectionTitle, TopWave } from "../../components";

export const FamilyElements = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Familia de elementos" />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4>Alcalinos</h4>
        <ul>
          <li>Son blandos.</li>
          <li>Brillantes.</li>
          <li>Puntos de fusión bajos.</li>
          <li>Se combinan fácilmente con oxígeno.</li>
          <li>Propensos a perder más de un electrón de valencia.</li>
        </ul>

        <h4>Alcalino férreos</h4>
        <ul>
          <li>Poseen dos electrones en su nivel más externo.</li>
          <li>
            Densidad, punto de fusión y ebullición mayores a los metales
            alcalinos.
          </li>
          <li>Muy reactivos.</li>
          <li>
            Se oxidan rápidamente con el aire para formar óxidos e hidróxidos.
          </li>
        </ul>

        <h4>Térreos</h4>
        <ul>
          <li>
            Se oxidan rápidamente con el aire para formar óxidos e hidróxidos.
          </li>
        </ul>

        <h4>Familia del carbono</h4>
        <ul>
          <li>Propiedades diferentes según su ubicación en el grupo.</li>
          <li>Elementos estables y poco reactivos.</li>
          <li>Elementos tienden a formar compuestos covalentes.</li>
        </ul>

        <h4>Familia del nitrógeno</h4>
        <ul>
          <li>
            5 electrones de valencia, tendencia a formar enlaces covalentes.
          </li>
          <li>Valencia o estado de oxidación de -3.</li>
        </ul>

        <h4>Anfígenos</h4>
        <ul>
          <li>No reaccionan al agua.</li>
          <li>
            Con el oxígeno componen dióxido que con agua originan oxácidos.
          </li>
          <li>
            Reaccionan con el ácido nítrico concentrado, excepto el oxígeno.
          </li>
        </ul>

        <h4>Halógenos</h4>
        <ul>
          <li>7 electrones de valencia en su capa externa.</li>
          <li>Elevada electronegatividad y alta reactividad.</li>
          <li>Todos los elementos poseen al menos valencia de -1.</li>
          <li>Energías de ionización altas.</li>
        </ul>

        <h4>Gases nobles</h4>
        <ul>
          <li>Poca o nula electronegatividad química.</li>
          <li>Desprovistos de color, olor y sabor.</li>
          <li>Puntos de ebullición muy próximos y muy bajos.</li>
        </ul>
      </div>
    </div>
  );
};
