import { cellCycleItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../../components";

export const PhaseM = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Fase M" />

      <ContentsTable items={cellCycleItems} />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4>Fase M</h4>
        <p>
          La fase M o mitótica, es la otra fase del ciclo celular, en esta se
          dan dos procesos principales que son la mitosis y la citocinesis.
        </p>

        <h4 id="mitosis">Mitosis</h4>
        <p>
          En primer lugar, la mitosis es un proceso de división celular que se
          da en las células somáticas, en este proceso una célula madre se
          divide y da origen a dos nuevas células hijas idénticas (con el mismo
          número de cromosomas al de la madre). Este proceso tiene como fines
          esenciales la curación, crecimiento y renovación de tejidos, así como
          la reproducción de seres unicelulares. La mitosis se divide en cuatro
          fases: profase, metafase, anafase y telofase (algunas fuentes
          describen una quinta llamada “prometafase” la cual se ubicaría entre
          la profase y metafase, no obstante, aquí encontrará la prometafase
          dentro de la profase).
          <br />
          <br />
          <span className="fw-semibold">Profase:</span> Inicia con la
          desaparición de la cohesina y con la condensación de la cromatina, de
          tal manera que los cromosomas se ven claramente definidos con el
          correcto microscopio. Estos cromosomas están conformados por dos
          cromatidas, la original de esa célula y la copia de ella, denominada
          cromatida hermana; estas cromatidas están unidas en un punto llamado
          centrómero, el cual todavía conserva un poco de cohesina con la que
          mantener unidas las cromatidas. Los cinetocoros empiezan a
          desarrollarse a los lados del centrómero. Desaparece el nucléolo y la
          membrana nuclear. Una vez los cromosomas se encuentran mucho más
          condensados y los cinetocoros completamente desarrollados, algunos
          micro-túbulos (que en su conjunto son llamados huso mitótico) empiezan
          a unirse con los cinetocoros o con otros micro-túbulos opuestos para
          lograr la estabilidad del huso mitótico, otros micro-túbulos forman el
          Áster al unirse con el borde de la célula.
          <br />
          <br />
          <span className="fw-semibold">Metafase:</span> En esta fase los
          cromosomas se encuentran en su pico de condensación, los micro-túbulos
          los han alineado en el centro de la célula o plano ecuatorial.
          <br />
          <br />
          <span className="fw-semibold">Anafase:</span> Inicia con la separación
          de las cromatidas hermanas, los micro-túbulos empiezan a acortarse y
          el huso mitótico lleva las cromatidas hacia los polos de la célula,
          además la célula se estira.
          <br />
          <br />
          <span className="fw-semibold">Telofase:</span> El huso mitótico se
          descompone y reaparece la membrana nuclear y nucléolo alrededor de
          ambos grupos cromosómicos, por último se descondensan los cromosomas
          para volver a su forma de cromatina.
        </p>

        <h4 id="citocinesis">Citocinesis</h4>
        <p>
          La citocinesis es el proceso final de la división celular, que se da
          en las células somáticas, en este proceso una célula madre se divide y
          da origen a dos nuevas células hijas idénticas (con el mismo número de
          cromosomas al de la madre). Este proceso tiene como fines esenciales
          la curación, crecimiento y renovación de tejidos, así como la
          reproducción de seres unicelulares. La mitosis se divide en cuatro
          fases: profase, metafase, anafase y telofase (algunas fuentes
          describen una quinta llamada “prometafase” la cual se ubicaría entre
          la profase y metafase, no obstante, aquí encontrará la prometafase
          dentro de la profase).
        </p>
      </div>
    </div>
  );
};
