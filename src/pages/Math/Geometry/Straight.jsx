import Latex from "react-latex";
import { SectionTitle, TopWave } from "../../../components/";
import { useContext } from "react";
import { darkModeContext } from "../../../context/DarkModeContext";

export const Straight = () => {
  const distanciaPuntos = `$$d(P, Q) =  \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$`;
  const puntoMedio = `$$(\\frac{x_1 \\ + \\ x_2}{2}, (\\frac{y_1 \\ + \\ y_2}{2})$$`;
  const puntoMedioEjemplo = `$$(\\frac{4 \\ + \\  (-2)}{2}, (\\frac{6 \\ + \\ (-2)}{2}) = (1, 2)$$`;
  const inclinacionPendiente = `$$m = (\\frac{y_2 \\ - \\ y_1} {x_2 \\ - \\ x_1})$$`;
  const ecuacionRecta = `$$y = mx \\ + \\ b$$`;
  const ecuacionGeneralRecta = `$$A_x \\ + \\ B_y \\ + \\ C = 0$$`;
  const { isDarkMode } = useContext(darkModeContext);
  return (
    <div className="homeCard" id="geometria">
      <TopWave />
      <SectionTitle title="Recta" />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <h3>Distancia entre dos puntos</h3>
          <p>
            La fórmula de distancia entre dos puntos es aquella ecuación que nos
            permite conocer la longitud del segmento de recta que une dos puntos
            del plano. Recordemos que las coordenadas del plano cartesiano son
            de la forma (X, Y) por lo tanto tenemos un sistema horizontal y
            vertical lo que da lugar al famoso teorema de Pitágoras. Por ende,
            su ecuación luce así: <Latex>{distanciaPuntos}</Latex>
          </p>
          <p>Ejemplo:</p>

          <img
            src={
              isDarkMode === "dark"
                ? "/img/distanciaDosPuntosUnoDark.svg"
                : "/img/distanciaDosPuntosUno.jpeg"
            }
            alt=""
            className="w-50 rounded-3 revealing-image"
          />
          <br />
          <br />
          <p>
            En este caso tenemos las coordenadas de dos puntos del plano
            cartesiano y deseamos conocer la longitud del segmento de recta que
            los une, es decir, la menor distancia entre ellos. Si observamos:
          </p>
          <br />

          <img
            src={
              isDarkMode === "dark"
                ? "/img/distanciaDosPuntosDosDark.svg"
                : "/img/distanciaDosPuntosDos.jpeg"
            }
            alt=""
            className="w-50 rounded-3 revealing-image"
          />

          <br />
          <br />
          <p>
            Se forma un triángulo rectángulo cuya hipotenusa es el segmento de
            recta que une a los dos puntos de la manera mas corta, porque si
            recordamos, por concepto, la suma de los catetos de un triángulo
            rectángulo siempre es mayor que su hipotenusa. Por ende, aplicando
            la formula la cual es el mismo teorema de Pitágoras, podremos hallar
            la longitud de dicho segmento:
          </p>

          <img
            src={
              isDarkMode === "dark"
                ? "/img/distanciaDosPuntosTresDark.svg"
                : "/img/distanciaDosPuntosTres.jpeg"
            }
            alt=""
            className="w-50 rounded-3 revealing-image"
          />

          <br />
          <br />
          <p>
            Como podrás notar el camino 1 acumula 9 unidades de longitud, en
            cambio, el camino 2 acumula solamente 6.4 unidades, una distancia
            mucho menor.
          </p>
          <hr />
        </div>

        <div>
          <h3>Punto medio de un segmento</h3>
          <Latex>{puntoMedio}</Latex>
          <br /> <br />
          <p>
            Ejemplo, halle el punto medio entre los puntos A(4, 6) y B(-2, -2)
          </p>
          <Latex>{puntoMedioEjemplo}</Latex>
          <hr />
        </div>

        <div>
          <h3>Inclinación</h3>
          <Latex>{inclinacionPendiente}</Latex>
          <hr />
        </div>

        <div>
          <h3>Ecuación de la recta</h3>
          <Latex>{ecuacionRecta}</Latex>
          <hr />
        </div>

        <div>
          <h3>Ecuación general de la recta</h3>
          <Latex>{ecuacionGeneralRecta}</Latex>
        </div>
      </div>
    </div>
  );
};
