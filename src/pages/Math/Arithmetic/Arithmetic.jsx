import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { arithmeticItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import Latex from "react-latex";
import { useContext } from "react";
import { darkModeContext } from "../../../context/DarkModeContext";

export const Arithmetic = () => {
  const valorAbsoluto = [
    {
      name: -3,
      value: 4,
    },
    {
      name: -2,
      value: 3,
    },
    {
      name: -1,
      value: 2,
    },
    {
      name: 0,
      value: 1,
    },
    {
      name: 1,
      value: 0,
    },
    {
      name: 2,
      value: 1,
    },
    {
      name: 3,
      value: 2,
    },
    {
      name: 4,
      value: 3,
    },
    {
      name: 5,
      value: 4,
    },
  ];
  const { isDarkMode } = useContext(darkModeContext);

  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Introducción" />
      <ContentsTable items={arithmeticItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h3 id="aritmetica">Aritmética</h3>
        <p>
          La aritmética es una rama de las matemáticas enfocada en el estudio de
          las operaciones básicas y las diversas propiedades bajo las que se
          rigen.
          <br />
          <br />
          La aritmética proporciona las habilidades básicas necesarias para
          llevar a cabo operaciones matemáticas en la vida cotidiana y en
          disciplinas más avanzadas, como el álgebra, la geometría y el cálculo.
          Por todo esto, es considerado un pilar fundamental de la matemática.
        </p>
        <hr />
        <h4 id="clasificacionNumeros">Clasificación de los números</h4>

        <img
          src={
            isDarkMode === "dark"
              ? "/img/clasificacionNumerosDark.png"
              : "/img/clasificacionNumeros.png"
          }
          alt=""
          className="w-80 rounded-3 revealing-image"
        />

        <p>
          <span className="fw-semibold">
            Naturales <Latex>{`$\\N$`}</Latex>:
          </span>{" "}
          Surgen de la necesidad de contar, son todos aquellos números formados
          por el conjunto de cifras {"{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}"}. Existe
          un debate sobre si el cero pertenece a este conjunto, pero lo
          incluimos o excluimos cuando nos sea conveniente. Son infinitos.
          <br />
          <br />
          <span className="fw-semibold">
            Enteros <Latex>{`$\\Z$`}</Latex>:
          </span>{" "}
          Nacen como algo necesario para complementar vacíos que dejaban los
          enteros, tales como sustracciones en las que el minuendo es menor que
          el sustraendo o para representar deudas, temperatura, etc. Contienen a
          los naturales, a sus correspondientes negativos y al cero.
          <br />
          <br />
          <span className="fw-semibold">
            Racionales <Latex>{`$\\mathbb{Q}$`}</Latex>:
          </span>{" "}
          Son el resultado de intentar dividir A número en B partes, cuando X no
          es múltiplo de Y, de tal manera, el resultado exacto (sin residuo) no
          es un número entero. Se definen como todo número el cual pueda
          escribirse de la forma A/B donde B es diferente de cero y pueden
          expresarse en forma de fracción o decimal. Contiene a los enteros.
          <br />
          <br />
          <span className="fw-semibold">
            Irracionales <Latex>{`$\\mathbb{I}$`}</Latex>:
          </span>{" "}
          Surgen debido a que la recta numérica no estaba completa con los
          racionales, y son estos mismo irracionales los que la completan, no se
          pueden expresar de la forma A/B y tienen valores decimales infinitos
          sin alguna repetición o periodicidad. El más famoso número irracional
          es pi. No contiene a algún subconjunto.
          <br />
          <br />
          <span className="fw-semibold">
            Reales <Latex>{`$\\R$`}</Latex>:
          </span>{" "}
          Agrupa a todos los anteriores, son todos los números que van desde
          menos infinito hasta más infinito.
          <br />
          <br />
          <span className="fw-semibold">Imaginarios:</span> Son la forma en la
          que expresamos las raíces de índice par y radicando negativo, debido a
          que los reales no contemplan su existencia.
          <br />
          <br />
          <span className="fw-semibold">Complejos:</span> Unión de reales e
          imaginarios.
        </p>
        <hr />
        <h4 id="valorAbsoluto">Valor absoluto de un número</h4>
        <p>
          Al contrario de lo que muchos piensan, el valor absoluto NO es la
          versión positiva de un número, sino que, se define como la distancia
          en la recta desde el cero hasta la ubicación de un punto X, por lo
          tanto, el valor absoluto de menos dos es igual a dos no porque sea su
          versión positiva sino porque se encuentra a dos unidades de distancia
          del dos. Se representa así: |a|.
          <br />
          <br />
          Ejemplo: Gráfica de la f(x) = |x - 1|
        </p>
        <ResponsiveContainer width={"88%"} height={300}>
          <LineChart width={500} height={300} data={valorAbsoluto}>
            <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name">
              <Label offset={-2} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label angle={-90} position="insideLeft" />
            </YAxis>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
