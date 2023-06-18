import Latex from "react-latex"
import { CollapseInformation, MoreBtn, SectionTitle, TopWave } from "../../components/";

export const Statistic = () => {

  const decilesPar = `$$D_k = \\large \\frac{n \\ \\cdot \\ k}{10} $$`

  const percentilesPar = `$$P_k = \\large \\frac{n \\ \\cdot \\ k}{100} $$`

  const cuartilesPar = `$$Q_k = \\large \\frac{n \\ \\cdot \\ k}{4} $$`
  const cuartilesEjemploOne = `$$Q_k = \\large \\frac{8 \\ \\cdot \\ 3}{4}$$`
  const cuartilesEjemploTwo = `$$Q_k = 6$$`

  const reglaTresDirecta = `$$\\Large  \\frac{C \\ \\cdot \\ B}{A}$$`
  const reglaTresDirectaEjemplo = `$$\\large  \\frac{8 \\ \\cdot \\ 600}{5} = 960$$`
  const reglaTresDirectaEjemplo2 = `$$\\large  \\frac{8 \\ cm}{5 \\ cm} = \\frac{¿x? \\ m}{600 \\ m}$$`
  const reglaTresDirectaEjemplo3 = `$$\\large  \\frac{8 }{5} = \\frac{¿x?}{600}$$`
  const reglaTresDirectaEjemplo4 = `$$\\large  \\frac{8}{5} \\ \\cdot \\ 600  = 960$$`

  const reglaTresInversa = `$$\\Large  \\frac{A \\ \\cdot \\ B}{C}$$`
  const reglaTresInversaEjemplo = `$$\\Large  \\frac{3 \\ \\cdot \\ 4}{6} = \\large 2$$`

  const varianzaOne = `$$S^2 = (\\frac{M \\ - \\ x_i}{n})^2 \\ (muestra)$$`
  const varianzaTwo = `$$S^2 = (\\frac{M \\ - \\ x_i}{N})^2 \\ (población)$$`

  const desviacionEstandar = `$$ \\small DE = \\normalsize \\sqrt{(\\frac{M \\ - \\ x_i}{N})^2}$$`

  const explicacionEjemplo = `$$Q_1 =  \\large \\frac{1 \\ \\cdot \\ 15000}{4}$$`
  const explicacionEjemploResultado = `$$Q_1 = 8,750 $$`
  const explicacionEjemploResultadoAlternativo = `$$25\\% = 8,750$$`

  const arrow = `$$\\rightarrow$$`

  return (
    <>
      <div className="homeCard">
        <TopWave />
        <SectionTitle title="Estadística" />

        <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div>
            <CollapseInformation name="Medidas de tendencia central" id="medidasTendenciaCentral" >
              <h5>Media</h5>
              <p>Es el promedio de un conjunto de números. Se calcula mediante la suma de todos los datos entre el número total de valores o datos.</p>

              <h5>Mediana</h5>
              <p>Corresponde a la posición central de un conjunto de datos, luego de organizarlos de menor a mayor. En el caso de haber dos valores centrales, se suman y dividen entre dos.</p>

              <h5>Moda</h5>
              <p>Es el valor que más se repite en una muestra o población.</p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Regla de tres simple" id="reglaTresSimple" >
              <h5>Directa</h5>
              <p>Los datos están correlacionados, de tal forma que cuando aumenta una magnitud también lo hace la otra. Es de añadir que dos variables son consideradas directamente proporcionales cuando al dividirse dan como cociente (resultado) una constante.</p>
              <h6>Fórmula</h6>
              <img src="/img/regla-3.jpg" alt="Regla de tres directa" className="reglaTres rounded-3" /> <br /><br />
              <p><Latex>{reglaTresDirecta}</Latex></p>
              <br /><br />
              <h6>Ejemplo</h6>
              <p>
                Si 5 centímetros en un mapa son 600 metros en la realidad, ¿cuántos metros son 8 centímetros?
                <br />
                <img src="/img/regla-3-ejemplo.jpg" className="reglaTres rounded-3" alt="Regla de tres directa ejemplo" /><br /><br />
                <Latex>{reglaTresDirectaEjemplo}</Latex>
              </p>

              <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#reglaTresDirectaEjemplo" aria-expanded="false" aria-controls="reglaTresDirectaEjemplo">
                Explicación
              </button>

              <div className="collapse" id="reglaTresDirectaEjemplo">
                <p>
                  En este ejemplo, se establece una relación entre las medidas de un mapa y la realidad. Si 5 centímetros en el mapa representan 600 metros en la realidad, queremos determinar cuántos metros son equivalentes a 8 centímetros en el mapa.
                  <br /><br />
                  Para resolver esto, utilizamos la regla de tres directa. La regla de tres directa nos permite establecer una proporción entre las magnitudes de dos conjuntos de datos.
                  <br /> <br />
                  En este caso, podemos establecer la siguiente proporción:
                  <br /><br />
                  5 cm en el mapa <Latex>{arrow}</Latex> 600 metros en la realidad <br />
                  8 cm en el mapa <Latex>{arrow}</Latex> ¿x? metros en la realidad
                  <br /><br />
                  Para encontrar el valor de x, dividimos 8 cm entre los 5 cm :
                  <br /> <br />
                  <Latex>{reglaTresDirectaEjemplo2}</Latex>
                  <br /><br />
                  Al hacerlo, obtenemos una constante entre 8 y 5 Ahora, simplemente multiplicamos esta constante por 600 metros:
                  <br /><br />
                  <Latex>{reglaTresDirectaEjemplo2}</Latex> <br /><br />
                  <Latex>{reglaTresDirectaEjemplo3}</Latex> <br /><br />
                  <Latex>{reglaTresDirectaEjemplo4}</Latex>
                  <br /><br />
                  Resolviendo la expresión, encontramos que x es igual a 960 metros.
                  <br /><br />
                  Por lo tanto, si 5 centímetros en el mapa representan 600 metros en la realidad, entonces 8 centímetros en el mapa equivalen a 960 metros en la realidad. De esta manera, si dividimos 600 / 960 y 8 / 5, obtendremos el mismo resultado, indicando que la relación es directa.
                </p>
              </div>
              <br />
              <br />
              <hr />
              <h5>Inversa</h5>
              <p>Los datos están correlacionados, de tal forma que mientras una magnitud aumenta, la otra disminuye. Es de añadir que dos variables son inversamente proporcionales cuando al multiplicarse dan como producto una constante.</p>
              <h6>Fórmula</h6>
              <img src="/img/regla-3-inversa.jpg" alt="regla de tres inversa" className="reglaTres rounded-3" /><br /><br />
              <Latex>{reglaTresInversa}</Latex>
              <br /><br />
              <h6>Ejemplo</h6>
              <p>
                Si Tres personas tardan 4 días en montar un escenario. ¿Cuánto tardarán seis personas? <br />
                <img src="/img/regla-3-inversa-ejemplo.jpg" alt="regla de tres inversa ejemplo" className="reglaTres rounded-3" /> <br /><br />
                <Latex>{reglaTresInversaEjemplo}</Latex>
              </p>
              <br />

              <div className="d-flex gap-3">
                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#reglaTresInversaEjemplo" aria-expanded="false" aria-controls="reglaTresInversaEjemplo">
                  Explicación
                </button>
                

                <MoreBtn url="https://youtu.be/-HORSa7OGzY" />
              </div>

              <div className="collapse" id="reglaTresInversaEjemplo">
                <p>
                  En este caso, se establece una relación entre la cantidad de personas y el tiempo necesario para montar un escenario. Si tres personas tardan 4 días en completar la tarea, queremos determinar cuánto tiempo tardarán seis personas en hacerlo.
                  <br /><br />
                  Utilizamos la regla de tres inversa para resolver este problema. La regla de tres inversa nos permite establecer una proporción entre las magnitudes de dos conjuntos de datos cuando son inversamente proporcionales.
                  <br /><br />
                  Podemos establecer la siguiente proporción:
                  <br /><br />
                  3 personas <Latex>{arrow}</Latex> 4 días  <br />
                  6 personas <Latex>{arrow}</Latex> ¿x? días <br /> <br />

                  Para encontrar el valor de x, multiplicamos las 3 personas por 4 días la igualdad por 3:
                  <br /><br />
                  3 personas * 4 días = 12 días

                  <br /><br />
                  Luego, dividimos ese producto entre 6 personas:
                  <br /><br />
                  12 días / 6 personas = 2 días
                  <br /><br />
                  Por lo tanto, si tres personas tardan 4 días en montar un escenario, entonces seis personas tardarán 2 días en completar la misma tarea.
                </p>
              </div>

            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Medidas de localización" id="medidasLocalizacion" >
              <h5>Cuartiles</h5>
              <p>Permiten calcular el 25%, 50%, 75% y 100%, donde el cuartil 1 corresponde al 25% y el cuartil 4 al 100%.</p>
              <p><Latex>{cuartilesPar}</Latex></p>

              <p>n = número total de datos <br /> k = cuartil a hallar</p>
              <p>
                Ejemplo:
                Calcula el 75% de las siguientes notas <br /> 1, 2, 3, 5, 6, 6.5, 7, 8
              </p>
              <p><Latex>{cuartilesEjemploOne}</Latex></p>
              <p><Latex>{cuartilesEjemploTwo}</Latex></p>
              <p>Por ende el 75% corresponde a 6.5</p>
              <br />

              <h5>Deciles</h5>
              <p>Permiten calcular los porcentajes desde el 10% hasta el 100% de diez en diez. Esto es, el decil 1 es 10% y el decil 10 es 100%</p>
              <p><Latex>{decilesPar}</Latex></p>
              <p>n = número total de datos <br /> k = decil a hallar</p>
              <br />

              <h5>Percentiles</h5>
              <p>Permiten calcular los porcentajes desde el 1% hasta el 100% de uno en uno, de forma que, el decil 1 es 1% y el decil 100 es 100%.</p>

              <p><Latex>{percentilesPar}</Latex></p>
              <p>n = número total de datos <br /> k = percentil a hallar</p>
              <br />

              <h6>Explicación</h6>
              <p>
                Lo sé. Probablemente, sientas que este tema no tiene ninguna aplicación en tu vida cotidiana. La realidad es todo lo contrario, tiene muchas. Aquí, aprenderás cuál es una de estas.<br /><br />

                Por ejemplo, en el caso de los cuartiles, te permiten calcular más rápido porcentajes. Ahora puede que digas "para qué me sirve eso?". Estoy casi seguro que al ir a un centro comercial, (especialmente en navidades o en fechas especiales) te hayas encontrado con descuentos en muchos productos. Si ya conoces la regla de tres simple, sabrás que mediante ella, puedes hallar el precio que ahorrarías debido al descuento. <br /> <br />

                Las medidas de localización, son otra alternativa a dicho proceso. Esto es, si un producto posee un precio de 35,000 pesos y, deseas calcular el 25% de descuento que posee. Puedes usar las medidas de localización. El procedimiento a llevar a cabo es el siguiente. <br /><br />

                En primer lugar, si eres bastante curioso, habrás notado que podemos usar tanto los cuartiles como los percentiles para hallar el descuento, a pesar de ello, los cuartiles son la opción más directa para llegar al resultado. En segundo lugar, notamos que el valor total del producto es par, por ello, recurrimos a la ecuación: <br /> <br />
              </p>
              <p><Latex>{cuartilesPar}</Latex></p>
              <p>
                De esta manera, solo es cuestión de reemplazar los valores. <i>n</i> que es 1 (25%) y, <i>k</i> que corresponde al precio del producto que deseamos comprar (35,000). Luego, dividimos los datos entre 4. Es decir: <br /> <br />
              </p>
              <p><Latex>{explicacionEjemplo}</Latex></p>
              <p><Latex>{explicacionEjemploResultado}</Latex></p>
              <p>
                Debo aclarar que también podríamos expresarlo de la siguiente manera: <br /> <br />
              </p>
              <p><Latex>{explicacionEjemploResultadoAlternativo}</Latex></p>
              <p>
                Por último, te invito buscar otros casos en los que podemos aplicar las medidas de localización. ¡Deja volar tu imaginación!
              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Medidas de dispersión" id="medidasDispersion" >
              <p>
                Consisten en números que proporcionan información de la variabilidad de los datos. Dicho de otro modo, indican que tan unidos o separados se encuentran los datos en una distribución. Por otro lado, puede considerarse que evalúan la homogeneidad de un conjunto de datos a través de varios promedios.

                <br /><br />

                Es menester añadir que, para hallar la dispersión, usamos el rango cuyo concepto es la sustracción del dato mayor de un conjunto de datos menos el dato menor de tal grupo.

                Entre las medidas de dispersión tenemos:
              </p>

              <h5>Varianza</h5>
              <p>Su fin es representar la variabilidad de un conjunto de datos respecto a la media aritmética de los mismos. Se define como la media de los cuadrados de las desviaciones sobre la media.</p>
              <p>Datos no agrupados</p>
              <p><Latex>{varianzaOne}</Latex></p>
              <p><Latex>{varianzaTwo}</Latex></p>
              <br /> <br />
              <h5>Desviación estándar</h5>
              <p>
                Su propósito es medir la dispersión de una distribución de datos. A modo de ejemplo, entre más dispersa está una distribución de datos, más grande es su desviación estándar y viceversa. Dicho en otros términos, es la raíz cuadrada de la varianza. </p>
              <h6>Fórmula</h6>
              <p><Latex>{desviacionEstandar}</Latex></p>
              <h6>Ejemplo</h6>
              <p>
                Por ejemplo, tenemos las notas de los siguientes estudiantes: <br />
                David: 8, 6 y 7 <br />
                Juan: 10, 5 y 1 <br /> <br />

                Luego de analizar los datos, llegamos a la conclusión que las notas de Juan se encuentran más alejadas de la media (mayor dispersión). Observemos <br />
                Media de notas de David: <br />
                8 + 6 + 7= 21  <br />
                <sup>21</sup>/<sub>3</sub>= 7 <br />

                Media de notas de Juan: <br />
                10 + 6 + 1 = 17 <br />
                <sup>17</sup>/<sub>3</sub> = 5.6 <br /> <br />

                Las notas de Juan se encuentran lejos de la media sin importar que tenga un 10, la dispersión de sus datos son heterogéneos y la dispersión de David es menor, por lo tanto, es homogénea.

                En conclusión, David obtendrá mejor puesto y promedio que Juan porque sus notas poseen poca dispersión.
              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Medidas de simetría y asimetría" id="medidasSimetriaAsimetria" >
              <h5>Simetría</h5>
              <p>Son medidas de distribución, cuya característica principal es que la media es igual a la mediana y esta última igual a la moda. Son representadas mediante la campana de Gauss, lo que permite identificar la simetría de los datos respecto a las medidas de tendencia central.</p>
              <h5>Asimetría</h5>
              <p>En este caso, la media, mediana y moda son diferentes. Para que la asimetría sea positiva: media {'>'} mediana {'>'} moda. Asimismo, para que sea negativa: media {'<'} mediana {'<'} moda.
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
              <img src="/img/campanaGauss.png" alt="Campana de Gauss" className="w-80 rounded-3" /> <br /> <br />
              <p>Con base a la información, tenemos una asimetría negativa debido a que la media es menor que la mediana.</p>

              <MoreBtn url="https://youtu.be/q44bP7xo2QM" />
            </CollapseInformation>
          </div>

        </div>
      </div>
    </>
  )
}
