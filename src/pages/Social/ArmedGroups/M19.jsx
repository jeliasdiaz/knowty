import { armedGroupsItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const M19 = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="M-19" />
      <ContentsTable items={armedGroupsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4 className="pb-4">Movimiento 19 de abril</h4>
        <p>
          <span className="fw-semibold">Fundación:</span> 1974 <br />
          <span className="fw-semibold">Objetivo:</span> instaurar una
          democracia socialista
          <br />
        </p>
        <span className="fw-semibold">Líderes:</span>
        <ul>
          <li>Jaime Bateman (máximo comandante).</li>
          <li>Iván Marino Ospina (lideró los acuerdos de Corinto).</li>
          <li>
            Álvaro Fayad (nombra al M-19, dirige la toma del palacio de
            justicia).
          </li>
          <li>Antonio García.</li>
          <li>Carlos Pizarro (lideró los diálogos de paz).</li>
        </ul>
        <span className="fw-semibold">A tener en cuenta:</span>
        <ul>
          <li>Conformado por personas que pertenecían a las FARC.</li>
          <li>Tuvieron apoyo de estudiantes y sindicalistas.</li>
          <li>Copiaron la idea al EPL de la constituyente.</li>
          <li>
            Se enfocaron en las zonas urbanas debido a que se percatan que en
            las zonas rurales el estado no presta atención.
          </li>
        </ul>

        <span className="fw-semibold">Actos emblemáticos</span>
        <ul>
          <li>Toma del palacio de justicia.</li>
          <li>Robo de la espada de bolÍvar.</li>
          <li>Robo de armas del cantón norte.</li>
          <li>
            Toma de la embajada de república dominicana. De hecho, Estados
            Unidos les da dinero por liberar a los embajadores.
          </li>
        </ul>
      </div>
    </div>
  );
};
