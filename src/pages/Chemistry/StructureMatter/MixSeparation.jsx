import React from "react";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import { structureMatterItems } from ".";

export const MixSeparation = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Separación de mezclas" />
      <ContentsTable items={structureMatterItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4>Evaporación</h4>
        <p>
          Método físico que permite separar un sólido de un líquido en una
          mezcla. Se basa en que el punto de fusión del sólido es mayor al punto
          de ebullición del líquido. Por ejemplo, separar la sal del agua de
          mar.
        </p>

        <h4>Cristalización</h4>
        <p>
          Método utilizado para separar un sólidos disueltos en líquidos. La
          mezcla se calienta para evaporar parte del disolvente. Por ejemplo,
          separar el azúcar del agua en una disolución azucarada.
        </p>

        <h4>Destilación</h4>
        <p>
          Método que consiste en la separación de dos o más líquidos miscibles
          (que se pueden mezclar) con diferentes puntos de ebullición, primero
          por medio de la evaporación y posteriormente por la condensación de
          las sustancias.
        </p>

        <h4>Cromatografía</h4>
        <p>
          Este método depende de la distribución de los componentes de la mezcla
          entre dos fases inmiscibles. Una fase móvil, llamada activa,
          transporta las sustancias que se separaron y que progresa en relación
          con otra, denominada fase estacionaria. Por ejemplo, la separación de
          pigmentos vegetales en un papel.
        </p>

        <h4>Sedimentación</h4>
        <p>
          Es una operación basada en la diferencia de densidades de los
          componentes de la mezcla, que permite separar mezclas heterogéneas de
          un sólido en un líquido mediante reposo o precipitación. Por ejemplo,
          los tratamientos de aguas residuales.
        </p>

        <h4>Decantación</h4>
        <p>
          Separa dos líquidos con diferentes densidades o una mezcla constituida
          por un sólido insoluble en un líquido. Se basa en la diferencia de
          densidades. Por ejemplo, la separación de los sedimentos del vidrio.
        </p>

        <h4>Filtración</h4>
        <p>
          Se trata de una operación que permite separar mezclas heterogéneas de
          un sólido insoluble en un líquido. Para llevar a cabo el proceso, se
          hace pasar la mezcla a través de un papel filtro, en el que el sólido
          permanecerá en la superficie del papel, mientras que el líquido
          pasará. Por ejemplo, colar un jugo.
        </p>

        <h4>Centrifugación</h4>
        <p>
          Consiste en la separación de materiales de diferentes densidades que
          se componen una mezcla. Para lo cual, la mezcla se coloca dentro de un
          aparato llamado centrifuga que tiene el movimiento de rotación
          constante y rápido, lo cual hace que las partículas con mayor densidad
          vayan al fondo y las más livianas queden en la parte superior.
        </p>

        <h4>Imantación</h4>
        <p>
          Reside en separar con un imán los componentes de una mezcla
          heterogénea, de un material magnético, de otro que no lo es.
        </p>

        <h4>Tamización</h4>
        <p>
          Método para separar mezclas con componentes sólidos de diferentes
          tamaños. Para llevar a cabo el proceso, se hace pasar la mezcla por un
          tamiz. Separando los cuerpos grandes de los pequeños.
        </p>

        <h4>Electroforesis</h4>
        <p>
          Técnica de separación de mezclas basada en la carga eléctrica de las
          sustancias presentes en una mezcla. Consiste en colocar la mezcla y
          hacer pasar una corriente eléctrica, de tal forma que las sustancias
          con carga positiva se mueven hacia el polo negativo, mientras las
          sustancias cargadas negativamente se mueven al polo positivo. Es
          fundamental para el análisis de muestras biológicas, la cual sirve
          para separar proteínas y ácidos nucleicos, etc.
        </p>

        <h4>Sublimación</h4>
        <p>
          Paso de un sólido a gas sin pasar por el estado líquido. Se usa la
          sublimación para separar mezclas de compuestos orgánicos, donde alguno
          de los compuestos puede sublimar. Por ejemplo, en una mezcla de arena
          y yodo se puede separar el yodo calentándolo. Este pasa al estado
          gaseoso subiendo y cuando pasa por una superficie fría vuelve a
          solidificarse.
        </p>
      </div>
    </div>
  );
};
