import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import { structureMatterItems } from ".";
import { darkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";

export const ChemicalBonds = () => {
  const { isDarkMode } = useContext(darkModeContext);
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Enlaces químicos" />
      <ContentsTable items={structureMatterItems} />
      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <img
          src={
            isDarkMode === "dark"
              ? "/img/enlacesQuimicosDark.svg"
              : "/img/enlacesQuimicos.svg"
          }
          alt="Enlaces químicos"
          className="w-80 rounded-3 revealing-image"
        />
        <br />

        <h4 id="enlaceIonico">Enlace iónico</h4>
        <p>
          La diferencia de electronegatividades (fuerza con la que un átomo
          atrae a los electrones) entre los átomos del enlace hace que uno
          termine dándole su electrón al otro (diferencia mayor o igual a 1.7).
          Esto resulta en dos iones, uno con carga positiva y otro con carga
          negativa, que por sus cargas opuestas se terminan atrayendo. Es
          gracias a los iones que forma que recibe su nombre.
        </p>

        <hr />

        <h4 id="enlaceCovalente">Enlace covalente</h4>
        <p>
          Debido a que la diferencia de electronegatividad entre los átomos no
          es tan fuerte, terminan compartiendo un par de electrones. Como el par
          de electrones tienen carga negativa y los núcleos carga positiva estos
          se atraen, formando así el enlace.
        </p>
        <br />

        <h5>Enlace covalente polar</h5>
        <p>
          Aunque la diferencia de electronegatividades no es tan grande
          (diferencia entre 0.4 y 0.7), aun es lo suficientemente fuerte como
          para que los electrones están más atraídos a un lado del enlace que
          del otro. El costado donde están más los electrones presenta una carga
          parcialmente negativa, contrario del sitio opuesto que tiene una carga
          parcialmente positiva. Es gracias a ello que la molécula presenta
          polos.
        </p>
        <br />

        <h5>Enlace covalente no polar</h5>
        <p>
          Al ser la diferencia de electronegatividades tan mínima (diferencia
          entre 0 y 0.4), la densidad de electrones en ambos lados del enlace es
          casi la misma, por lo que al contrario del enlace polar, este no
          presenta ningún polo.
        </p>

        <hr />

        <h4 id="enlaceMetalico">Enlace metálico</h4>
        <p>
          En este enlace los electrones de valencia deambulan libremente en un
          mar o nube electrónica.Es gracias al movimiento de los electrones
          entre los núcleos de los átomos que hacen parte de ese mar electrónico
          que se forman los enlaces entre ellos y les da las propiedades tan
          características que tienen los metales. El valor de la
          electronegatividad de los átomos participantes no tiene un papel tan
          importante como lo presentan otros enlaces.
        </p>
      </div>
    </div>
  );
};
