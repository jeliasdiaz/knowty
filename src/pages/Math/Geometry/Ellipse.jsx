import Latex from "react-latex";
import { SectionTitle, TopWave } from "../../../components/";

export const Ellipse = () => {
  const elipseOne = `$$ \\large \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\small 1$$`;
  const elipseTwo = `$$\\small LR = \\large \\frac{2 \\ \\cdot \\ b^2}{a}$$`;
  const elipseThree = `$$e = \\Large \\frac{c}{a}$$`;
  const elipseFour = `$$ \\large \\frac{x^2}{25} + \\frac{y^2}{9} = \\small 1$$`;
  const c = `$$\\small c = \\sqrt{5^2 \\ - 3^2 = 4}$$`;
  const elipseFive = `$$\\large \\frac{2 \\ \\cdot \\ 3^2}{5} = \\small 3.6$$`;
  const elipseSix = `$$\\large \\frac{(x-h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = \\small 1$$`;

  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Elipse" />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <h3>Ecuación de la elipse con vértice en (0, 0)</h3>
          <p>
            <Latex>{elipseOne}</Latex>
          </p>
          <p>
            a = distancia del centro al vértice del eje mayor <br />
            b = distancia del centro al vértice del eje menor <br />c =
            distancia del centro al vértice de uno de los focos
          </p>

          <Latex>{elipseTwo}</Latex>
          <br />
          <Latex>{elipseThree}</Latex>
          <br />
          <br />

          <p>Ejemplo</p>
          <p>
            <Latex>{elipseFour}</Latex>{" "}
          </p>
          <p>
            a = 5 <br />
            b = 3 <br />
            <Latex>{c}</Latex>
          </p>
          <p>LR (lado recto) =</p>
          <Latex>{elipseFive}</Latex>

          <hr />
        </div>
        <div>
          <h3>Ecuación de la elipse con vértice en (h, k)</h3>
          <Latex>{elipseSix}</Latex>
        </div>
      </div>
    </div>
  );
};
