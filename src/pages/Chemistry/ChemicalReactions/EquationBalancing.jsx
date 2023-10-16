import Latex from "react-latex";
import { chemicalReactionsItems } from ".";
import {
  ContentsTable,
  MoreBtn,
  SectionTitle,
  TopWave,
} from "../../../components";
import { darkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";

export const EquationBalancing = () => {
  const metodoAlgebraicoEjemplo = `$$\\text{Fe}_2O_3 \\ + \\ C \\rightarrow \\ \\text{Fe} \\ + \\ \\text{CO}$$`;

  const Fe2O3 = `$$\\text{Fe}_2O_3$$`;
  const Fe = `$$\\text{Fe}$$`;
  const CO = `$$\\text{CO}$$`;
  const metodoAlgebraicoEjemploTwo = `$$\\Large \\frac{Fe_2O_3}{a} \\ 
  + \\ \\frac{C}{b} \\rightarrow \\frac{Fe}{c} \\ + \\ \\frac{\\text{CO}}{d}$$`;
  const metodoAlgebraicoEjemploThree = `$$2a = c \\newline 3a = d \\newline b = d$$`;
  const metodoAlgebraicoEjemploFour = `$$2a = c \\newline 3 \\ \\cdot \\ (2) = d \\newline b = d \\newline 4 = c \\newline 6 = d \\newline  b = 6$$`;
  const metodoAlgebraicoEjemploFive = `$$2 = c \\newline 3 = d \\newline b = 3$$`;
  const metodoAlgebraicoEjemploSix = `$$\\text{Fe}_2O_3 \\ + \\ 3C \\rightarrow \\ \\text{2Fe} \\ + \\ \\text{3CO}$$`;

  const { isDarkMode } = useContext(darkModeContext);
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Balanceo de una ecuación" />
      <ContentsTable items={chemicalReactionsItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Consiste en la búsqueda de coeficientes numéricos que hagan que el
          número de cada tipo de átomos presentes en la reacción química sea el
          mismo tanto en reactivos como en productos. Es decir, reside en buscar
          equilibrio en la ecuación, de tal forma que el número de átomos en
          ambas partes sea el mismo.
          <br /> <br />
          De igual importancia, debes tener en cuenta que el subíndice nunca
          puedes cambiarlo. Solo puedes agregar coeficientes para alcanzar el
          equilibrio.
          <br />
          <br />
          Por otra parte, las partes de una ecuación química son:
        </p>
        <img
          src={
            isDarkMode === "dark"
              ? "/img/partes-ecuacion-quimicaDark.svg"
              : "/img/partes-ecuacion-quimica.svg"
          }
          alt="Partes ecuación química"
          className="rounded revealing-image"
        />
        <hr />
        <h4 id="balanceoTanteo">Balanceo por tanteo</h4>
        <p>
          Se fundamenta en la prueba y error. Puesto que se debe experimentar
          con coeficientes. Es un proceso que requiere paciencia y práctica.
          Pero es eficaz para balancear ecuaciones químicas. De esta manera, el
          número de átomos de los reactivos debe ser igual al número de átomos
          en los productos.
          <br /> <br />
          Pasos a realizar:
        </p>
        <ol>
          <li>
            Se verifica que la ecuación no sea estequiométrica (cuando está
            balanceada)
          </li>
          <li>Se balancean los metales si hay</li>
          <li>
            Se equilibran los no metales diferentes a hidrógeno y a oxígeno si
            los hay
          </li>
          <li>Se balancean los hidrógenos</li>
          <li>
            Se verifican los oxígenos para corroborar si la ecuación está
            balanceada
          </li>
        </ol>
        <p>
          Por ejemplo, tenemos la siguiente ecuación: <br />
          Al + HCl → AlCl + H<sub>2</sub> <br />
          Balanceada: 2Al + 2HCl → 2AlCl + H<sub>2</sub> <br /> <br />
          De esta forma, obtenemos dos aluminios, dos hidrógenos y dos cloros.
          Por parte tanto de reactivos como de productos.
        </p>

        <MoreBtn url="https://youtu.be/tX-JRR53Dms" />

        <hr />

        <h4 id="balanceoAlgebraico">Balanceo por método algebraico</h4>
        <p>
          Posee cierta relación con el método de tanteo. Ambos darán un mismo
          resultado; a diferencia del método redox, el cual emplea un
          procedimiento que se aleja inicialmente de los métodos por tanteo y
          algebraico. <br /> <br />
          Consiste en un proceso matemático, cuyo primer paso es asignar a cada
          reactivo y producto una letra del abecedario con el fin de determinar
          los coeficientes, por ejemplo, a, b, c, d, etc. <br /> <br />
          Pasos a realizar:
        </p>
        <ol>
          <li>Se verifica que la ecuación no sea estequiométrica.</li>
          <li>Asignamos letras tanto a reactivos como productos</li>
          <li>
            Usamos los subíndices cómo coeficientes de las letras
            respectivamente
          </li>
          <li>
            Reconocemos la letra que se presenta más veces sin tener en cuenta
            los coeficientes. Posteriormente, asignaremos un valor arbitrario,
            generalmente entre uno y dos
          </li>
          <li>
            Realizamos las operaciones resultantes y, de ser necesario,
            simplificar
          </li>
          <li>Reemplazamos en la ecuación</li>
        </ol>
        <p>
          Por ejemplo, tenemos la siguiente ecuación: <br />
          <br />
          <Latex>{metodoAlgebraicoEjemplo}</Latex>
          <br />
          <br />
          <Latex>{Fe2O3}</Latex>, lo identificamos como <b>a</b>, C lo
          identificamos como <b>b</b>. Respecto a los productos,{" "}
          <Latex>{Fe}</Latex> lo identificamos con la letra <b>c</b> y, por
          último, <Latex>{CO}</Latex> con la letra <b>d</b>. Gráficamente luce
          de la siguiente forma: <br />
          <br />
          <Latex>{metodoAlgebraicoEjemploTwo}</Latex>
          <br />
          <br />
          Posteriormente, usamos los subíndices cómo coeficientes de las letras
          respectivamente. Es decir: <br />
          <Latex>{metodoAlgebraicoEjemploThree}</Latex>
          <br /> <br />
          Después, reconocemos la letra que se presenta más veces sin tener en
          cuenta los coeficientes. En este caso, tanto <b>a</b> como <b>d</b> se
          repiten el mismo número de veces, como resultado, podemos usar
          cualquiera de los dos. Le asignamos un valor arbitrario a cualquiera
          de las letras, a nuestra elección, usaremos la letra <b>a</b>, con un
          valor de dos. <br />
          <br />
          Reemplazamos: <br />
          <Latex>{metodoAlgebraicoEjemploFour}</Latex>
          <br />
          Simplificamos: <br />
          <Latex>{metodoAlgebraicoEjemploFive}</Latex>
          <br />
          Reemplazamos en la ecuación: <br />
          <Latex>{metodoAlgebraicoEjemploSix}</Latex>
          <br />
        </p>

        <MoreBtn url="https://youtu.be/MUukx4RlWmw" />

        <hr />

        <h4 id="balanceoRedox">Balanceo por método óxido reducción (Redox)</h4>
        <p>
          Mediante este método hacemos uso de la variación en los estados de
          oxidación presentes en los elementos. A partir de estos, realizaremos
          el procedimiento para balancear la ecuación. Es importante aclarar que
          estos procesos nos ayudan a orientarnos en los coeficientes, debido a
          que en algunas ocasiones debemos hacer uso de balanceo por tanteo para
          equilibrar el resto de elementos.
        </p>
        <p>Pasos a seguir:</p>
        <ol>
          <li>
            Hallar los estados de oxidación tanto en los elementos que
            pertenecen a los reactivos como a los productos.
          </li>
          <li>
            Observamos los elementos que cambiaron su estado de oxidación. Es
            decir, poseen un estado de oxidación diferente cuando son reactivos
            y productos.
          </li>
          <li>Analizamos si los elementos han ganado o perdido electrones.</li>
          <li>
            Posteriormente, realizamos una semiecuación con aquellos elementos
            que presentaron cierta variación. Sumando o restando cuantos
            electrones ganaron o perdieron. Luego, balanceamos mediante tanteo
            la semiecuación.
          </li>
          <li>
            Existen ciertos casos especiales en los que compuestos no se
            disocian, específicamente los óxidos y peróxidos (medios ácidos).
            Para estos casos, debemos agregar agua (H₂O) para balancear la
            semiecuación. Por ende debemos añadir hidrógeno para equilibrar la
            ecuación.
          </li>
          <li>
            Después, aplicamos el mínimo común múltiplo de los electrones
            ganados o restados. Un método más directo, es usar tales electrones
            como coeficientes de la ecuación para luego "cancelar" los
            electrones.
          </li>
          <li>
            Reemplazamos los coeficientes en la ecuación original y de ser
            necesario continuar mediante tanteo.
          </li>
        </ol>
        <p>
          Ejemplo: <br />
          <img
            src={
              isDarkMode === "dark"
                ? "/img/metodoRedoxDark.svg"
                : "/img/metodoRedox.svg"
            }
            alt="Método redox"
            className="w-75 rounded-3 revealing-image"
          />
          <br /> <br />
          Para comprender mejor esta temática, les recomiendo observar nuestros
          videos, especialmente el método redox, debido a que es más complejo.
        </p>

        <MoreBtn url="https://youtu.be/bQ0MwYR0oio" />
      </div>
    </div>
  );
};
