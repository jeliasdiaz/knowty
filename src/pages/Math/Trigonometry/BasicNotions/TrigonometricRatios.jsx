import {
  ContentsTable,
  SectionTitle,
  TopWave,
  MoreBtn,
} from "../../../../components";
import Latex from "react-latex";
import { basicTrigonometryNotionsItems } from ".";

export const TrigonometricRatios = () => {
  const seno = `$$\\textsf{Seno} = \\large \\frac{\\textsf{Cateto \\ opuesto}}{ \\textsf{Hipotenusa}}$$`;
  const coseno = `$$\\textsf{Coseno} = \\large  \\frac{\\textsf{Cateto \\ adyacente}}{\\textsf{Hipotenusa}}$$`;
  const tan = `$$\\textsf{Tangente} = \\large  \\frac{\\textsf{Cateto \\ opuesto}}{\\textsf{Cateto \\ adyacente}}$$`;
  const cotan = `$$\\textsf{Cotangente} = \\large  \\frac{\\textsf{Cateto \\ adyacente}}{\\textsf{Cateto \\ opuesto}}$$`;
  const sec = `$$\\textsf{Secante} = \\large  \\frac{\\textsf{Hipotenusa}}{\\textsf{Cateto \\ adyacente}}$$`;
  const cosec = `$$\\textsf{Cosecante} = \\large  \\frac{\\textsf{Hipotenusa}}{\\textsf{Cateto \\ opuesto}}$$`;

  const sen30 = `$$ \\frac{1}{2}$$`;
  const cos30 = `$$ \\frac{\\sqrt{3}}{2}$$`;
  const tan30 = `$$ \\frac{\\sqrt{3}}{3}$$`;
  const cot30 = `$$ \\sqrt{3}$$`;
  const sec30 = `$$ \\frac{2 \\sqrt{3}}{3}$$`;
  const cosec30 = `$$2$$`;

  const sen45 = `$$ \\frac{\\sqrt{2}}{2}$$`;
  const cos45 = `$$ \\frac{\\sqrt{2}}{2}$$`;
  const tan45 = `$$ 1$$`;
  const cot45 = `$$ 1$$`;
  const sec45 = `$$ \\sqrt{2}$$`;
  const cosec45 = `$$ \\sqrt{2}$$`;

  const sen60 = `$$ \\frac{\\sqrt{3}}{2}$$`;
  const cos60 = `$$ \\frac{1}{2}$$`;
  const tan60 = `$$ \\sqrt{3}$$`;
  const cot60 = `$$ \\frac{\\sqrt{3}}{3}$$`;
  const sec60 = `$$ 2$$`;
  const cosec60 = `$$\\frac{2 \\sqrt{3}}{3}$$`;
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Razones trigonométricas" />
      <ContentsTable items={basicTrigonometryNotionsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Son un conjunto de relaciones matemáticas que nos permiten medir
          ángulos y longitudes de los lados de un triángulo rectángulo. Ante
          todo, una razón consiste en la relación de dos valores (ejemplo: a/b).
          Teniendo esto en cuenta, las razones trigonométricas no son más que
          relaciones que se basan en las medidas de los ángulos y longitudes de
          los lados del triángulo. Existen seis razones trigonométricas, que
          son:
        </p>

        <div className="d-flex justify-content-between pt-2">
          <div className="">
            <Latex>{seno}</Latex>
            <br />
            <br />
            <Latex>{coseno}</Latex>
            <br />
            <br />
            <Latex>{tan}</Latex>
            <br />
            <br />
          </div>
          <div className="text-end">
            <Latex>{cotan}</Latex>
            <br />
            <br />
            <Latex>{sec}</Latex>
            <br />
            <br />
            <Latex>{cosec}</Latex>
            <br />
            <br />
          </div>
        </div>

        <MoreBtn url="https://youtu.be/wSw1CzVtuQk?list=PLVkfzhBCZCW172VWuZUrqztV_nTLTazk0" />
        <br />
        <br />
        <h3>Razones trigonométricas para ángulos notables</h3>
        <table className="table table-bordered text-end">
          <thead className="table-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">30°</th>
              <th scope="col">45°</th>
              <th scope="col">60°</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Sen
              </th>
              <td>
                <Latex>{sen30}</Latex>
              </td>
              <td>
                <Latex>{sen45}</Latex>
              </td>
              <td>
                <Latex>{sen60}</Latex>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Cos
              </th>
              <td>
                <Latex>{cos30}</Latex>
              </td>
              <td>
                <Latex>{cos45}</Latex>
              </td>
              <td>
                <Latex>{cos60}</Latex>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Tan
              </th>
              <td>
                <Latex>{tan30}</Latex>
              </td>
              <td>
                <Latex>{tan45}</Latex>
              </td>
              <td>
                <Latex>{tan60}</Latex>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Cot
              </th>
              <td>
                <Latex>{cot30}</Latex>
              </td>
              <td>
                <Latex>{cot45}</Latex>
              </td>
              <td>
                <Latex>{cot60}</Latex>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sec
              </th>
              <td>
                <Latex>{sec30}</Latex>
              </td>
              <td>
                <Latex>{sec45}</Latex>
              </td>
              <td>
                <Latex>{sec60}</Latex>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Cosec
              </th>
              <td>
                <Latex>{cosec30}</Latex>
              </td>
              <td>
                <Latex>{cosec45}</Latex>
              </td>
              <td>
                <Latex>{cosec60}</Latex>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
