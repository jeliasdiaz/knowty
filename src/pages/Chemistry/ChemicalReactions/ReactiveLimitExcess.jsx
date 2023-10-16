import Latex from "react-latex";
import { chemicalReactionsItems } from ".";
import {
  ContentsTable,
  MoreBtn,
  SectionTitle,
  TopWave,
} from "../../../components";
import { useContext } from "react";
import { darkModeContext } from "../../../context/DarkModeContext";

export const ReactiveLimitExcess = () => {
  const { isDarkMode } = useContext(darkModeContext);
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Reactivo límite y en exceso" />
      <ContentsTable items={chemicalReactionsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Un reactivo límite es una sustancia que limita la cantidad de producto
          que se puede formar en una reacción. Mientras que el reactivo en
          exceso es aquel que restante después de que se ha alcanzado el límite.{" "}
          <br /> <br />
          Un ejemplo sencillo es el de hacer perros calientes. Si tenemos 10
          salchichas y 14 panes, la cantidad máxima de perros calientes que
          podemos hacer es 10 (igual al número de salchichas). De manera que los
          panes sobrantes son el reactivo en exceso y las salchichas son el
          reactivo límite.
        </p>

        <MoreBtn url="https://youtu.be/B-d5vKJBx-E" />

        <br />
        <br />
        <h3>Practica</h3>
        <p>
          Con base a la siguiente ecuación, halla el reactivo límite y en
          exceso. Teniendo 10.5 gr de P y 22.27 gr O2
        </p>
        <Latex>{`$4P + 3O_2 \\rightarrow 2P_2O_3$`}</Latex>
        <br />
        <br />
        <p>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            href="#reactivo"
          >
            Solución
          </button>
        </p>
        <div className="collapse dropdownBorder" id="reactivo">
          <img
            src={
              isDarkMode === "dark"
                ? "/img/reactivoLimiteEjercicioSolucionDark.svg"
                : "/img/reactivoLimiteEjercicioSolucion.svg"
            }
            alt=""
            className="w-80 rounded-3 revealing-image"
          />
        </div>
      </div>
    </div>
  );
};
