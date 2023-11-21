import { SectionTitle, TopWave } from "../../../components";
import Latex from "react-latex";
import { renderMenuCards } from "../../../helpers/renderMenuCards";
import menuCards from "./menuCards.json"
export const PhysicPractice = () => {
  const potenciaOne = `$$P= \\frac{W}{T}$$`;
  const potenciaTwo = `$$T = \\frac{W}{P}$$`;
  const potenciaThree = `$$T = \\frac{294000J}{42000W}$$`;
  const potenciaFour = `$$T = 7s$$`;

  const rendimientoOne = `$$\\small Rendimiento = \\normalsize \\frac{Potencia útil}{Potencia teórica} \\ \\cdot \\ 100$$`;
  const rendimientoTwo = `$$ 27 = \\frac{42000W}{x} \\ \\cdot \\ 100$$`;
  const rendimientoThree = `$$\\frac{27}{100} = \\frac{42000W}{x}$$`;
  const rendimientoFour = `$$x = \\frac{42000W \\ \\cdot \\ 100}{27}$$`;
  const rendimientoFive = `$$x = \\small 155555.55W$$`;

  const energiaCineticaOne = `$$\\small 60kg + 20kg = 80kg$$`;
  const energiaCineticaTwo = `$$E_k = \\frac{1}{2} \\ \\cdot \\ 80kg \\ \\cdot \\ 15m/s^2$$`;
  const energiaCineticaThree = `$$\\small E_k = 9000 J$$`;

  const energiaGravitatoriaOne = `$$E_{pg} = 20kg \\ \\cdot \\ 9.8m/s^2 \\ \\cdot \\ 12m$$`;
  const energiaGravitatoriaTwo = `$$E_{pg} = 2352 J$$`;

  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Practica" />

      <div className="mobileSubjectMenu">
        {renderMenuCards(menuCards)}
      </div>

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <h3>Potencia</h3>
          <p>
            En una fábrica hay una máquina que tiene una potencia de 42000
            Watts, realizó el traslado de una caja de 100 kg de un punto A a un
            punto B, el trabajo realizado por la máquina en dicha situación fue
            de 294000 Jules. ¿Cuál fue el tiempo empleado?
          </p>

          <p>
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              href="#potencia"
            >
              Solución
            </button>
          </p>

          <div className="collapse" id="potencia">
            <Latex>{potenciaOne}</Latex>
            <br />
            <br />
            <Latex>{potenciaTwo}</Latex>
            <br />
            <br />
            <Latex>{potenciaThree}</Latex>
            <br />
            <br />
            <Latex>{potenciaFour}</Latex>
            <br />
            <br />
          </div>
        </div>

        <hr className="my-4" />
        <div>
          <h3>Rendimiento</h3>
          <p>
            Un taller de automóviles cuenta con una máquina cuya potencia es de
            50000 watts. Además, la máquina posee un rendimiento del 27%. ¿Cuál
            es su potencia teórica?
          </p>

          <p>
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              href="#rendimiento"
            >
              Solución
            </button>
          </p>

          <div className="collapse" id="rendimiento">
            <span>Fórmula</span>
            <br />
            <Latex>{rendimientoOne}</Latex>
            <br />
            <br />
            <span>Reemplazo de valores</span>
            <br />
            <Latex>{rendimientoTwo}</Latex>
            <br />
            <br />
            <span>Despeje de potencia teórica</span>
            <br />
            <Latex>{rendimientoThree}</Latex>
            <br />
            <br />
            <Latex>{rendimientoFour}</Latex>
            <br />
            <br />
            <span>Resultado</span>
            <br />
            <Latex>{rendimientoFive}</Latex>
            <br />
            <br />
          </div>
        </div>

        <hr className="my-4" />
        <div>
          <h3>Energía cinética</h3>
          <p>
            Calcule la energía cinética de un triciclo, teniendo en cuenta que
            el piloto pesa 60kg, el triciclo pesa 20kg y el conjunto se mueve a
            una velocidad de 15m/s.
          </p>

          <p>
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              href="#energiaCinetica"
            >
              Solución
            </button>
          </p>

          <div className="collapse" id="energiaCinetica">
            <span>Suma de masas</span>
            <br />
            <Latex>{energiaCineticaOne}</Latex>
            <br />
            <br />
            <span>Uso de la fórmula de energía cinética</span>
            <br />
            <Latex>{energiaCineticaTwo}</Latex>
            <br />
            <br />
            <span>Resultado</span>
            <br />
            <Latex>{energiaCineticaThree}</Latex>
            <br />
            <br />
          </div>
        </div>

        <hr className="my-4" />
        <div>
          <h3>Energía potencial gravitatoria</h3>
          <p>
            Calcule la energia potencial de una maceta de 20kg que se encuentra
            en un cuarto piso. Considere que g = 9.8m/s y altura = 3m.
          </p>

          <p>
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              href="#energiaGravitatoria"
            >
              Solución
            </button>
          </p>

          <div className="collapse" id="energiaGravitatoria">
            <span>Uso de la fórmula de energía cinéticas</span>
            <br />
            <Latex>{energiaGravitatoriaOne}</Latex>
            <br />
            <br />
            <span>Resultados</span>
            <br />
            <Latex>{energiaGravitatoriaTwo}</Latex>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
