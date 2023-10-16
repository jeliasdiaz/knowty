import { armedGroupsItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const EPL = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="EPL" />
      <ContentsTable items={armedGroupsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4 className="pb-4">Ejército popular de liberación</h4>
        <p>
          <span className="fw-semibold">Fundación:</span> 1967 <br />
          <span className="fw-semibold">Contexto internacional:</span> Guerra
          fría <br />
          <span className="fw-semibold">Filosofía:</span> Marxista - Leninista{" "}
          <br />
        </p>
        <span className="fw-semibold">Objetivos:</span>
        <ul>
          <li>Establecer un estado socialista.</li>
          <li>Derrocar el estado.</li>
          <li>Defender el territorio.</li>
        </ul>
        <span className="fw-semibold">Líderes:</span>
        <ul>
          <li>Pedro Vásquez Rondón.</li>
          <li>Libardo Mora Toro.</li>
          <li>Óscar William Calvo.</li>
          <li>Ernesto Rojas Ocampo.</li>
          <li>Bernardo Gutiérrez.</li>
        </ul>
        <span className="fw-semibold">A tener en cuenta:</span>
        <ul>
          <li>Obtenían el poder mediante las armas.</li>
          <li>
            Fuerte apoyo del sindicalismo, este último busca defender los
            derechos de los trabajadores de industrias.
          </li>
          <li>
            En 1991 se firman acuerdos de paz con el presidente César Gaviria.
            No obstante, parte de la guerrilla no se acoge a estos acuerdos de
            paz.
          </li>
        </ul>
        <span className="fw-semibold">Extras:</span>
        <ul>
          <li>Líderes sobresalientes a nivel nacional.</li>
          <li>Sus integrantes son de origen caribeño.</li>
          <li>
            Operaron en lugares como La Guajira, Córdoba, Sucre y Magdalena.
          </li>
          <li>Tercera guerrilla más numerosa.</li>
        </ul>
      </div>
    </div>
  );
};
