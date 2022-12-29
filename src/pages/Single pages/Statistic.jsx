import Latex from "react-latex"
import { SectionTitle } from "../SectionTitle";

export const Statistic = () => {

  const decilesPar = `$$D_k = \\frac{n \\ \\cdot \\ k}{10} \\ par$$`
  const decilesImpar = `$$D_k = \\frac{k(n \\ + \\ 1)}{10} \\ impar$$`

  const percentilesPar = `$$P_k = \\frac{n \\ \\cdot \\ k}{100} \\ par$$`
  const percentilesImpar = `$$P_k = \\frac{k(n \\ + \\ 1)}{100} \\ impar$$`

  const cuartilesPar = `$$Q_k = \\frac{n \\ \\cdot \\ k}{4} \\ par$$`
  const cuartilesImpar = `$$Q_k = \\frac{k(n \\ + \\ 1)}{4} \\ par$$`
  const cuartilesEjemploOne = `$$Q_k = \\frac{8 \\ \\cdot \\ 3}{4}$$`
  const cuartilesEjemploTwo = `$$Q_k = 6$$`

  const reglaTresDirecta = `$$\\Large  \\frac{C \\ \\cdot \\ B}{A}$$`
  const reglaTresDirectaEjemplo = `$$\\large  \\frac{8 \\ \\cdot \\ 600}{5} = 960$$`

  const reglaTresInversa = `$$\\Large  \\frac{A \\ \\cdot \\ B}{C}$$`
  const reglaTresInversaEjemplo = `$$\\large  \\frac{3 \\ \\cdot \\ 4}{6} = 2$$`

  const varianzaOne = `$$S^2 = (\\frac{M \\ - \\ x_i}{n})^2 \\ (muestra)$$`
  const varianzaTwo = `$$S^2 = (\\frac{M \\ - \\ x_i}{N})^2 \\ (población)$$`

  const desviacionEstandar = `$$ \\small DE = \\normalsize \\sqrt{(\\frac{M \\ - \\ x_i}{N})^2}$$`

  return (
    <div>
      <img src="/img/waveThree.svg" alt="" />
      <div className="homeEstadistica">
        <SectionTitle title="Estadística" />
        
        <div className="cardEnglish mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
          <div>
            <h2>Medidas de tendencia central</h2>
            <h5>Media</h5>
            <p>Es el promedio de un conjunto de números. Se calcula mediante la suma de todos los datos entre el número total de valores o datos.</p>

            <h5>Mediana</h5>
            <p>Corresponde a la posición central de un conjunto de datos luego de organizarlos de menor a mayor. En el caso de haber dos valores centrales, se suman y dividen entre dos.</p>

            <h5>Moda</h5>
            <p>Es el valor que más se repite en una muestra o población.</p>
            <hr />
          </div>

          <div>
            <h2>Medidas de localización</h2>
            <h5>Deciles</h5>
            <p>Permiten calcular los porcentajes desde el 10% hasta el 100% de diez en diez, de modo que el decil 1 es 10% y el decil 10 es 100%.</p>
            <p><Latex>{decilesPar}</Latex></p> 
            <p><Latex>{decilesImpar}</Latex></p>
            <p>n = número total de datos <br /> k = decil a hallar</p>
            <br />

            <h5>Percentiles</h5>
            <p>Permiten calcular los porcentajes desde el 1% hasta el 100% de uno en uno, de modo que el decil 1 es 1% y el decil 100 es 100%.</p>
            
            <p><Latex>{percentilesPar}</Latex></p>
            <p><Latex>{percentilesImpar}</Latex></p>
            <p>n = número total de datos <br /> k = percentil a hallar</p>
            <br />

            <h5>Cuartiles</h5>
            <p>Permiten calcular el 25%, 50%, 75% y 100%, donde el cuartil 1 corresponde al 25% y el cuartil 4 al 100%.</p>
            <p><Latex>{cuartilesPar}</Latex></p>
            <p><Latex>{cuartilesImpar}</Latex></p>
            <p>n = número total de datos <br /> k = cuartil a hallar</p>
            <p>
              Ejemplo:
              Calcula el 75% de las siguientes notas <br /> 1, 2, 3, 5, 6, 6.5, 7, 8
            </p>
            <p><Latex>{cuartilesEjemploOne}</Latex></p>
            <p><Latex>{cuartilesEjemploTwo}</Latex></p>
            <br />
            <p>Por ende el 75% corresponde a 6.5</p>
            <hr />
          </div>

          <div>
            <h2>Regla de 3 simple</h2>
            <h5>Directa</h5>
            <p>Los datos están correlacionados, de tal forma que cuando aumenta una magnitud también lo hace la otra.</p>
            <h6>Fórmula</h6>
            <img src="/img/regla-3.jpg" alt="" className="reglaTresDirecta" /> <br /><br />
            <p><Latex>{reglaTresDirecta}</Latex></p>
            <br /><br />
            <h6>Ejemplo</h6>
            <p>
              Si 5 centímetros en un mapa son 600 metros en la realidad, ¿cuántos metros son 8 centímetros?
              <br />
              <img src="/img/regla-3-ejemplo.jpg" className="reglaTresDirecta" alt="" /><br />
              <p><Latex>{reglaTresDirectaEjemplo}</Latex></p>
            </p>

            <h5>Inversa</h5>
            <p>Los datos están correlacionados, de tal forma que mientras una magnitud aumenta, la otra disminuye.</p>
            <h6>Fórmula</h6>
            <img src="/img/regla-3-inversa.jpg" alt="" className="reglaTresDirecta" /><br /><br />
            <p><Latex>{reglaTresInversa}</Latex></p>
            <br /><br />
            <h6>Ejemplo</h6>
            <p>
              Tres personas tardan 4 días en montar un escenario. ¿Cuánto tardarán seis personas? <br />
              <img src="/img/regla-3-inversa-ejemplo.jpg" alt="" className="reglaTresDirecta" /> <br /><br />
              <p><Latex>{reglaTresInversaEjemplo}</Latex></p>
            </p> <br />
            <button className="btn btn-secondary"><a href="https://youtu.be/-HORSa7OGzY" className="text-decoration-none text-white">Profundizar</a></button>
            <hr />
          </div>

          <div>
            <h2>Medidas de dispersión</h2>
            <p>Consisten en números que proporcionan información de la variabilidad de los datos. Dicho de otro modo, indican que tan juntos o separados se encuentran los datos en una distribución. Otro concepto es: evalúan la homogeneidad de un conjunto de datos a través de varios promedios.
              <br /><br />
              Es menester añadir que, para hallar la dispersión, usamos el rango cuyo concepto es la sustracción del dato mayor de un conjunto de datos menos el dato menor de tal grupo.
              Entre las medidas de dispersión tenemos:</p>

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
            <hr />
          </div>

          <div>
            <h2>Medidas de simetría y asimetría</h2>
            <h5>Simetría</h5>
            <p>Son medidas de distribución que tiene como característica principal que la media es igual a la mediana y esta última igual a la moda. Son representadas mediante la campana de Gauss, lo que permite identificar la simetría de los datos respecto a las medidas de tendencia central.</p>
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
            <img src="/img/campanaGauss.png" alt="" className="campanaGauss" /> <br /> <br />
            <p>Con base a la información, tenemos una asimetría negativa debido a que la media es menor que la mediana.</p>

            <button className="btn btn-secondary"><a href="https://youtu.be/q44bP7xo2QM" className="text-decoration-none text-white">Profundizar</a></button>
          </div>

        </div>
      </div>
    </div>
  )
}