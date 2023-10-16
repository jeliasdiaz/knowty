import Latex from "react-latex";
import {
  CollapseInformation,
  MenuCard,
  MoreBtn,
  SectionTitle,
  TopWave,
} from "../../../components";

export const Statistic = () => {
  const reglaTresDirecta = `$$\\Large  \\frac{C \\ \\cdot \\ B}{A}$$`;
  const reglaTresDirectaEjemplo = `$$\\large  \\frac{8 \\ \\cdot \\ 600}{5} = 960$$`;
  const reglaTresDirectaEjemplo2 = `$$\\large  \\frac{8 \\ cm}{5 \\ cm} = \\frac{¿x? \\ m}{600 \\ m}$$`;
  const reglaTresDirectaEjemplo3 = `$$\\large  \\frac{8 }{5} = \\frac{¿x?}{600}$$`;
  const reglaTresDirectaEjemplo4 = `$$\\large  \\frac{8}{5} \\ \\cdot \\ 600  = 960$$`;

  const reglaTresInversa = `$$\\Large  \\frac{A \\ \\cdot \\ B}{C}$$`;
  const reglaTresInversaEjemplo = `$$\\Large  \\frac{3 \\ \\cdot \\ 4}{6} = \\large 2$$`;

  const arrow = `$$\\rightarrow$$`;

  return (
    <>
      <div className="homeCard">
        <TopWave />
        <SectionTitle title="Estadística" />

        <div
          className="subjectCard mb-5 ownShadow"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <div>
            <CollapseInformation
              name="Regla de tres simple"
              id="reglaTresSimple"
            >
              <h5>Directa</h5>
              <p>
                Los datos están correlacionados, de tal forma que cuando aumenta
                una magnitud también lo hace la otra. Es de añadir que dos
                variables son consideradas directamente proporcionales cuando al
                dividirse dan como cociente (resultado) una constante.
              </p>
              <h6>Fórmula</h6>
              <img
                src="/img/regla-3.jpg"
                alt="Regla de tres directa"
                className="reglaTres rounded-3 revealing-image"
              />{" "}
              <br />
              <br />
              <p>
                <Latex>{reglaTresDirecta}</Latex>
              </p>
              <br />
              <br />
              <h6>Ejemplo</h6>
              <p>
                Si 5 centímetros en un mapa son 600 metros en la realidad,
                ¿cuántos metros son 8 centímetros?
                <br />
                <img
                  src="/img/regla-3-ejemplo.jpg"
                  className="reglaTres rounded-3 revealing-image"
                  alt="Regla de tres directa ejemplo"
                />
                <br />
                <br />
                <Latex>{reglaTresDirectaEjemplo}</Latex>
              </p>
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#reglaTresDirectaEjemplo"
                aria-expanded="false"
                aria-controls="reglaTresDirectaEjemplo"
              >
                Explicación
              </button>
              <div
                className="collapse dropdownBorder"
                id="reglaTresDirectaEjemplo"
              >
                <p>
                  En este ejemplo, se establece una relación entre las medidas
                  de un mapa y la realidad. Si 5 centímetros en el mapa
                  representan 600 metros en la realidad, queremos determinar
                  cuántos metros son equivalentes a 8 centímetros en el mapa.
                  <br />
                  <br />
                  Para resolver esto, utilizamos la regla de tres directa. La
                  regla de tres directa nos permite establecer una proporción
                  entre las magnitudes de dos conjuntos de datos.
                  <br /> <br />
                  En este caso, podemos establecer la siguiente proporción:
                  <br />
                  <br />5 cm en el mapa <Latex>{arrow}</Latex> 600 metros en la
                  realidad <br />8 cm en el mapa <Latex>{arrow}</Latex> ¿x?
                  metros en la realidad
                  <br />
                  <br />
                  Para encontrar el valor de x, dividimos 8 cm entre los 5 cm :
                  <br /> <br />
                  <Latex>{reglaTresDirectaEjemplo2}</Latex>
                  <br />
                  <br />
                  Al hacerlo, obtenemos una constante entre 8 y 5 Ahora,
                  simplemente multiplicamos esta constante por 600 metros:
                  <br />
                  <br />
                  <Latex>{reglaTresDirectaEjemplo2}</Latex> <br />
                  <br />
                  <Latex>{reglaTresDirectaEjemplo3}</Latex> <br />
                  <br />
                  <Latex>{reglaTresDirectaEjemplo4}</Latex>
                  <br />
                  <br />
                  Resolviendo la expresión, encontramos que x es igual a 960
                  metros.
                  <br />
                  <br />
                  Por lo tanto, si 5 centímetros en el mapa representan 600
                  metros en la realidad, entonces 8 centímetros en el mapa
                  equivalen a 960 metros en la realidad. De esta manera, si
                  dividimos 600 / 960 y 8 / 5, obtendremos el mismo resultado,
                  indicando que la relación es directa.
                </p>
              </div>
              <br />
              <br />
              <hr />
              <h5>Inversa</h5>
              <p>
                Los datos están correlacionados, de tal forma que mientras una
                magnitud aumenta, la otra disminuye. Es de añadir que dos
                variables son inversamente proporcionales cuando al
                multiplicarse dan como producto una constante.
              </p>
              <h6>Fórmula</h6>
              <img
                src="/img/regla-3-inversa.jpg"
                alt="regla de tres inversa"
                className="reglaTres rounded-3 revealing-image"
              />
              <br />
              <br />
              <Latex>{reglaTresInversa}</Latex>
              <br />
              <br />
              <h6>Ejemplo</h6>
              <p>
                Si Tres personas tardan 4 días en montar un escenario. ¿Cuánto
                tardarán seis personas? <br />
                <img
                  src="/img/regla-3-inversa-ejemplo.jpg"
                  alt="regla de tres inversa ejemplo"
                  className="reglaTres rounded-3 revealing-image"
                />{" "}
                <br />
                <br />
                <Latex>{reglaTresInversaEjemplo}</Latex>
              </p>
              <br />
              <div className="d-flex gap-3">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#reglaTresInversaEjemplo"
                  aria-expanded="false"
                  aria-controls="reglaTresInversaEjemplo"
                >
                  Explicación
                </button>

                <MoreBtn url="https://youtu.be/-HORSa7OGzY" />
              </div>
              <div
                className="collapse dropdownBorder"
                id="reglaTresInversaEjemplo"
              >
                <p>
                  En este caso, se establece una relación entre la cantidad de
                  personas y el tiempo necesario para montar un escenario. Si
                  tres personas tardan 4 días en completar la tarea, queremos
                  determinar cuánto tiempo tardarán seis personas en hacerlo.
                  <br />
                  <br />
                  Utilizamos la regla de tres inversa para resolver este
                  problema. La regla de tres inversa nos permite establecer una
                  proporción entre las magnitudes de dos conjuntos de datos
                  cuando son inversamente proporcionales.
                  <br />
                  <br />
                  Podemos establecer la siguiente proporción:
                  <br />
                  <br />3 personas <Latex>{arrow}</Latex> 4 días <br />6
                  personas <Latex>{arrow}</Latex> ¿x? días <br /> <br />
                  Para encontrar el valor de x, multiplicamos las 3 personas por
                  4 días la igualdad por 3:
                  <br />
                  <br />
                  3 personas * 4 días = 12 días
                  <br />
                  <br />
                  Luego, dividimos ese producto entre 6 personas:
                  <br />
                  <br />
                  12 días / 6 personas = 2 días
                  <br />
                  <br />
                  Por lo tanto, si tres personas tardan 4 días en montar un
                  escenario, entonces seis personas tardarán 2 días en completar
                  la misma tarea.
                </p>
              </div>
            </CollapseInformation>
          </div>
          <hr />

          <div>
            <CollapseInformation
              name="Medidas de simetría y asimetría"
              id="medidasSimetriaAsimetria"
            >
              <h5>Simetría</h5>
              <p>
                Son medidas de distribución, cuya característica principal es
                que la media es igual a la mediana y esta última igual a la
                moda. Son representadas mediante la campana de Gauss, lo que
                permite identificar la simetría de los datos respecto a las
                medidas de tendencia central.
              </p>
              <h5>Asimetría</h5>
              <p>
                En este caso, la media, mediana y moda son diferentes. Para que
                la asimetría sea positiva: media {">"} mediana {">"} moda.
                Asimismo, para que sea negativa: media {"<"} mediana {"<"} moda.
              </p>
              <h5>Ejemplo</h5>
              <p>
                Tenemos los siguientes valores: <br />
                5,5; 6,0; 5,8; 6,5; 3,0
                <br />
                Media: 5.36 <br />
                Mediana: 5,8 <br />
                Moda: No hay
              </p>
              <img
                src="/img/campanaGauss.png"
                alt="Campana de Gauss"
                className="w-80 rounded-3"
              />{" "}
              <br /> <br />
              <p>
                Con base a la información, tenemos una asimetría negativa debido
                a que la media es menor que la mediana.
              </p>
              <MoreBtn url="https://youtu.be/q44bP7xo2QM" />
            </CollapseInformation>
          </div>
        </div>

        <div className="mobileSubjectMenu justify-content-center mt-5">
          <MenuCard
            url="/medidas-tendencia-central"
            img="tendenciaCentral.png"
            title="Medidas de tendencia central"
            imgSize="w-50"
          />

          <MenuCard
            url="/medidas-localizacion"
            img="tendenciaCentral.png"
            title="Medidas de localización"
            imgSize="w-50"
          />

          <MenuCard
            url="/medidas-dispersion"
            img="tendenciaCentral.png"
            title="Medidas de dispersión"
            imgSize="w-50"
          />
        </div>
      </div>
    </>
  );
};
