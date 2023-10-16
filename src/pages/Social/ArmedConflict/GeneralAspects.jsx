import { armedConflictItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const GeneralAspects = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Aspectos generales" />
      <ContentsTable items={armedConflictItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4>Datos generales</h4>
        <p>
          El conflicto armado en Colombia es el conflicto interno más{" "}
          <span className="fw-semibold">complejo</span> y{" "}
          <span className="fw-semibold">prolongado</span> que ha afectado al
          país durante décadas hasta nuestros días.
          <br />
          <br />
          <i>Complejo</i> ya que involucra a múltiples actores, como lo son:
          grupos guerrilleros, paramilitares, partidos políticos y
          narcotraficantes; de diferentes formas de violencia y además de una
          combinación de factores sociales, políticos y económicos.
          <br />
          <br />
          <i>Prolongado</i> debido a sus más de 60 años de existencia que se ha
          extendido en todas las regiones del país.
          <br />
          <br />A lo largo de estos años, este conflicto ha generado gran
          cantidad de consecuencias atroces como el alto número de víctimas de
          diferentes tipos de violencias, desplazamientos forzados, violaciones
          a los derechos humanos a civiles y combatientes y crímenes de guerra.
        </p>

        <hr />

        <h4>Antecedentes y causas</h4>
        <p>
          A través de las décadas, las causas del conflicto se fueron
          desarrollando y diferenciándose, sin embargo todos guardan
          antecedentes comunes, entre las que encontramos la desigualdad{" "}
          <span className="fw-semibold">social y exclusión política</span>.
          <br />
          <br />
          Desde su independencia en 1810, Colombia ha experimentado una marcada
          brecha de desigualdad social y exclusión política.{" "}
          <span className="fw-semibold">La tenencia de tierras</span>, la falta
          de oportunidades económicas y la exclusión de muchos grupos sociales
          en la toma de decisiones políticas y protección de sus derechos, han
          forjado el descontento y la lucha por la justicia social.Conflicto
          armado de Colombia.
        </p>
      </div>
    </div>
  );
};
