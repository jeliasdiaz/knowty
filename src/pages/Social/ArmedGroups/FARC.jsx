import { armedGroupsItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const FARC = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="FARC" />
      <ContentsTable items={armedGroupsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4 className="pb-4">Fuerzas armadas revolucionarias de Colombia</h4>
        <p>
          <span className="fw-semibold">Filosofía:</span> Marxista - Leninista
        </p>
        <p>
          <span className="fw-semibold">Origen:</span> Surgen durante el periodo
          de "la violencia", luego del asesinato de Gaitán
        </p>
        <p>
          <span className="fw-semibold">Motivaciones:</span> Representar a la
          población campesina ante el manejo de las tierras en manos de pocos.
          Es de añadir que las FARC se originan como grupos de campesinos en
          contra del estado.
        </p>
        <p>
          <span className="fw-semibold">Contexto internacional:</span> Guerra
          fría, a partir de esta, cuba adopta ciertos ideales. Surge la
          revolución cubana, de la cual Gaitán adopta ideales marxistas a favor
          de los campesinos; luego de ser asesinado, las FARC adoptan esta
          ideología.
        </p>
        <span className="fw-semibold">A tener en cuenta:</span>
        <ul>
          <li>Obtenían el poder mediante la lucha guerrillera. </li>
          <li>
            Posteriormente, tergiversan sus ideales debido a que en un principio
            se involucran en "negocios" como el narcotráfico para cumplir sus
            cometidos. Sin embargo, se envuelven en secuestros, lavados de
            dinero, etc.
          </li>
        </ul>
        <span className="fw-semibold">Extras</span>
        <ul>
          <li>
            Alias Timochenko es quien participa en los acuerdos de paz en 2016.
          </li>
          <li>
            El fundador de las FARC es alias Tirofijo. Actualmente, alias
            Timochenko está en la comandancia.
          </li>
        </ul>
        <span className="fw-semibold">Líderes:</span>
        <ul>
          <li>Manuel Marulanda (Tiro fijo).</li>
          <li>Alfonso Cano.</li>
          <li>Timochenko.</li>
        </ul>
      </div>
    </div>
  );
};
