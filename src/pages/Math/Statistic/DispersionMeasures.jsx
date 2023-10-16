import { SectionTitle, TopWave } from "../../../components";
import Latex from "react-latex";

export const DispersionMeasures = () => {
  const varianza = `$$\\sigma^2 = \\frac{\\Sigma (X_i - \\bar{x})^2}{N}$$`;

  const desviacionEstandar = `$$\\sigma = \\sqrt{\\frac{\\Sigma (X_i - \\bar{x})^2}{N}}$$`;

  const ejemplo = `$$\\frac{(1 \\cdot 3) + (2 \\cdot 4) + (3 \\cdot 5)}{12} = 2.16$$`;
  const ejemploDos = `$$\\sigma^2 = \\frac{(1-2.16)^2 + (2-2.16)^2 + (3-2.16)^2}{12} \\\\ \\sigma^2 = 0.17$$`;
  const ejemploTres = `$$\\sqrt{\\sigma^2} = \\sqrt{0.17} \\\\ \\sigma = 0.42$$`;

  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Medidas de dispersión" />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Las medidas de dispersión son aquellos valores estadísticos que
          proporcionan una idea acerca de como se agrupan los datos de un
          conjunto con respecto a los valores centrales del mismo. Las medidas
          de dispersión más comunes son:
          <ul>
            <li>Varianza</li>
            <li>Desviación estándar</li>
          </ul>
        </p>

        <br />
        <div>
          <h5>Varianza</h5>
          <p>
            La varianza es un índice que surge de calcular la sumatoria de las
            diferencias al cuadrado entre los valores y el valor central del
            conjunto sobre el numero total de datos en el conjunto, visto de
            otra forma:
          </p>
          <Latex>{varianza}</Latex>
        </div>

        <br />
        <br />
        <div>
          <h5>Desviación estándar</h5>
          <p>La desviación estándar es la raíz cuadrada de la varianza.</p>
          <Latex>{desviacionEstandar}</Latex>
        </div>

        <br />

        <div>
          <h6>Ejemplo</h6>
          <table className="table table-bordered text-start">
            <thead className="table-light">
              <tr>
                <th scope="col">Datos</th>
                <th scope="col">Frecuencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="fw-normal">1</th>
                <td>3</td>
              </tr>
              <tr>
                <th className="fw-normal">2</th>
                <td>4</td>
              </tr>
              <tr>
                <th className="fw-normal">3</th>
                <td>5</td>
              </tr>
              <tr>
                <th className="bg-warning" style={{ "--bs-bg-opacity": ".25" }}>
                  Total
                </th>
                <td>12</td>
              </tr>
            </tbody>
          </table>
          <p>
            Lo primero que se debe hacer es calcular la media aritmética de este
            conjunto, en este caso es:
            <br />
            <Latex>{ejemplo}</Latex>
            <br />
            <br />
            Ahora realizaremos el cálculo de la varianza:
            <br />
            <Latex>{ejemploDos}</Latex>
            <br />
            <br />
            Y a continuación la desviación estándar:
            <br />
            <Latex>{ejemploTres}</Latex>
          </p>
        </div>
      </div>
    </div>
  );
};
