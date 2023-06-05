
import { SectionTitle, CollapseInformation, MoreBtn, TopWave } from "../../components/";
import Latex from "react-latex";

export const ThirdChemistryPeriod = () => {

  const metodoAlgebraicoEjemplo = `$$\\text{Fe}_2O_3 \\ + \\ C \\rightarrow \\ \\text{Fe} \\ + \\ \\text{CO}$$`

  const Fe2O3 = `$$\\text{Fe}_2O_3$$`
  const Fe = `$$\\text{Fe}$$`
  const CO = `$$\\text{CO}$$`
  const metodoAlgebraicoEjemploTwo = `$$\\Large \\frac{Fe_2O_3}{a} \\ 
  + \\ \\frac{C}{b} \\rightarrow \\frac{Fe}{c} \\ + \\ \\frac{\\text{CO}}{d}$$`
  const metodoAlgebraicoEjemploThree = `$$2a = c \\newline 3a = d \\newline b = d$$`
  const metodoAlgebraicoEjemploFour = `$$2a = c \\newline 3 \\ \\cdot \\ (2) = d \\newline b = d \\newline 4 = c \\newline 6 = d \\newline  b = 6$$`
  const metodoAlgebraicoEjemploFive = `$$2 = c \\newline 3 = d \\newline b = 3$$`
  const metodoAlgebraicoEjemploSix = `$$\\text{Fe}_2O_3 \\ + \\ 3C \\rightarrow \\ \\text{2Fe} \\ + \\ \\text{3CO}$$`

  return (
    <div className="homeCard" id="geometria">
      <TopWave />
      <SectionTitle title="Química" />


      <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <div>
          <div>
            <CollapseInformation name="Nomenclaturas" id="nomenclaturas" >
              <h3>Stock</h3>
              <p>Se usa el tipo de compuesto y luego el nombre del elemento, acompañado con su valencia expresada en números romanos.</p>
              <h5>Ejemplos</h5>
              <p>
                Óxido de cloro (III) = Cl<sub>2</sub>O<sub>3</sub>
                <br />
                Hidróxido de cromo (III) = Cr(OH)<sub>3</sub>
                <br />
                Peróxido de hidrogeno (I) = H<sub>2</sub> O<sub>2</sub>
              </p>
              <h3>Sistemática</h3>
              <p>Se usa un prefijo griego: mono, di, tri, tetra, penta, hexa o hepta.</p>
              <h5>Ejemplos</h5>
              <p>
                <u>Di</u>óxido de carbono = CO<sub>2</sub>
                <br />
                <u>Tri</u>hidróxido de aluminio = Al(OH)<sub>3</sub>
                <br />
                Peróxido de <u>di</u>sodio = Na<sub>2</sub>O<sub>2</sub>
              </p>
              <h3>Tradicional</h3>
              <p>Utiliza las terminaciones -ico (Mayor) -oso (Menor), -per-ico (+ Mayor), hipo-oso (- Menor) para indicar la valencia del elemento. Es de añadir, que los elementos que poseen un solo nivel de valencia, su terminación es -ico. El sufijo depende del número de oxidación que tenga el elemento y del número de oxidación que actúa en la fórmula.</p>
              <h5>Ejemplos</h5>
              <p>
                Óxido hipobromoso = Br<sub>2</sub>O
                <br />
                Óxido bromoso = Br<sub>2</sub>O<sub>3</sub>
                <br />
                Hidróxido férrico = Fe(OH)<sub>3</sub>
                <br />
                Óxido perclórico = Cl<sub>2</sub>O<sub>7</sub>
              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Óxidos" id="oxidos" >
              <h3>Óxidos basicos</h3>
              <p>Son aquellos que contienen oxígeno y un metal. De hecho, también se les conoce como óxidos metálicos. Ejemplos: dióxido de calcio (CaO), óxido de hierro (III) (Fe<sub>2</sub>O<sub>3</sub>), óxido de magnesio (MgO), etc.</p>
              <h5>Fórmula</h5>
              <p>
                M<sub>2</sub>O<sub>x</sub>
                <br />
                M = Símbolo del metal <br />
                2 = Número de oxidación el oxígeno <br />
                O = Oxígeno <br />
                x = Número de oxidación del metal
              </p>

              <h3>Óxidos ácidos </h3>
              <p>
                Son aquellos que contienen oxígeno y un no metal. También conocidos como óxidos no metálicos. Ejemplos: ácido sulfúrico (SO2), ácido nítrico (NO2), etc.
              </p>
              <h5>Fórmula</h5>
              <p>
                (NoM)<sub>2</sub>O<sub>x</sub>
                <br />
                NoM = Símbolo del no metal <br />
                2 = Número de oxidación el oxígeno <br />
                O = Oxígeno <br />
                x = Número de oxidación del no metal
              </p>
              <h3>Resumen óxidos</h3>
              <p>Por ejemplo, si tenemos el óxido de fósforo  (V), lo escribimos de atrás hacia adelante. Es decir, <u>óxido</u> O, <u>fósforo</u> P <u>(V)</u> O<sub>5</sub>. El resultado sería:
                <br />
                P<sub>2</sub>O<sub>5</sub>. <br /> <br />
              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Hidróxidos" id="hidroxidos" >
              <p>Compuesto químico que contiene un átomo de oxígeno y uno de hidrógeno. A menudo se conoce como "agua con un exceso de oxígeno". Además, se forman por la unión entre un metal o más iones hidroxilo (OH<sup>-</sup>) provenientes del H<sub>2</sub>O</p>
              <h5>Ejemplos</h5>
              <p>
                Hidróxido de cromo (III) = Cr(OH)<sub>3</sub>
                <br />
                Dihidróxido de bario = Ba(OH)<sub>2</sub>
                <br />
                Hidróxido férrico = Fe(OH)<sub>3</sub> <br /> <br />

              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Peróxidos" id="peroxidos" >
              <p>Son compuestos altamente reactivos y pueden descomponerse fácilmente, liberando oxígeno. Están formados a partir de la unión de dos átomos de oxígeno (O<sub>2</sub>) en una molécula.</p>
              <h5>Formula</h5>
              <p>
                A<sub>2</sub>(O<sub>2</sub>)<sub>n</sub>
                <br />
                n = Estado de oxidación del metal
              </p>
              <h5>Ejemplos</h5>
              <p>
                Peróxido de calcio = CaO<sub>2</sub>
                <br />
                Peróxido de aluminio = Al<sub>2</sub>(O<sub>2</sub>)<sub>3</sub> <br /> <br />
              </p>
            </CollapseInformation>
            <hr />
          </div>


          <div>
            <CollapseInformation name="Ácidos" id="acidos" >
              <p>
                Son compuestos químicos que tienen propiedades específicas, como la capacidad de donar protones (iones H+) y tener un pH menor a 7 en solución acuosa (mezcla homogénea en la que un componente está disuelto en agua). Formados por un ion de hidrógeno y un anión. Se caracterizan por:
              </p>
              <ul>
                <li>Ceder protones en medio acuoso.</li>
                <li>Sabor agrio picante.</li>
                <li>Tienden a reaccionar con las bases para formar sales y agua</li>
              </ul>
              <p>
                Se clasifican en: <br />
                <b>Oxácido</b> = óxido ácido + agua <br />
                H<sub>x</sub>E<sub>y</sub>O<sub>z</sub> <br />
                H = Hidrógeno <br />
                E = No metal <br />
                O = oxígeno <br />
                x, y, z = Son respectivamente los posibles números de átomos <br /> <br />
                <b>Hidrácido</b> = No metal + Hidrógeno <br />
                H<sub>x</sub>E<sub>y</sub> <br />
                H = Hidrogeno <br />
                E = Elemento no metal <br />
                x, z = Número de átomos <br /> <br />
              </p>
              <h5>Nomenclatura oxácidos</h5>
              <table className="table " >
                <thead className="table-light">
                  <tr>
                    <th scope="col">Fórmula</th>
                    <th scope="col">N. tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>H<sub>2</sub>SO<sub>3</sub></td>
                    <td>Ácido sulfuroso</td>
                  </tr>
                  <tr>
                    <td>H<sub>2</sub>SO<sub>4</sub></td>
                    <td>Ácido sulfúrico</td>
                  </tr>
                  <tr>
                    <td>HClO</td>
                    <td>Ácido hipocloroso</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h5>Nomenclatura hidrácidos</h5>
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Fórmula</th>
                    <th scope="col">N. Sistemática</th>
                    <th scope="col">N. tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HF</td>
                    <td>Fluoruro de hidrógeno</td>
                    <td>Ácido fluorhídrico</td>
                  </tr>
                  <tr>
                    <td>HCl</td>
                    <td>Cloruro de hidrógeno</td>
                    <td>Ácido clorhídrico</td>
                  </tr>
                  <tr>
                    <td>H<sub>2</sub>S</td>
                    <td>Sulfuro de hidrógeno</td>
                    <td>Ácido sulfhídrico</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h5>Resumen ácidos</h5>
              <p>
                Los ácidos hidrácidos son aquellos que contienen hidrógeno y un elemento no metálico en su composición. Estos ácidos solo trabajan con su primera valencia y en nomenclatura sistemática tienen el sufijo "uro". En la nomenclatura tradicional se agrega "hídrico" al final.
                <br /><br />
                Los ácidos oxácidos, por otro lado, son aquellos que contienen hidrógeno, oxígeno y un elemento no metálico. En la nomenclatura tradicional, se usa la palabra "ácido", seguida de la raíz del elemento no metálico y la terminación -hipo-oso, -oso, -ico, -per-ico.
              </p>
              <br /> <br />
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Sales" id="sales" >
              <p>
                Son compuestos químicos que se forman a partir de la combinación de ácidos con bases. Pueden ser haloideas, formadas con halógenos (grupo VII-A) o cuaternarias, que contienen hidrógeno en su molécula. <br /><br />

                Es importante mencionar que en las sales cuaternarias (oxisales) se utiliza la nomenclatura tradicional de la siguiente manera: "hipo-ito" para las que terminan en "hipo-oso", "ito" para las que terminan en "oso", "ato" para las que terminan en "ico" y "per-ato" para las que terminan en "per-ico".
              </p>
              <h5>Ejemplos</h5>
              <p><span className="fw-semibold">Bromuro de calcio = CaBr<sub>2</sub></span> <br />Calcio posee valencia 2 (grupo II-A) y el bromo en este caso -1. Por lo tanto, se necesita añadir otra molécula de bromo para estabilizar la ecuación, dando como resultado una ecuación balanceada con una carga neta de 0.</p>

              <p><span className="fw-semibold">Sulfato de rubidio = Rb<sub>2</sub>SO<sub>4</sub></span><br />Rubidio posee valencia 1 (grupo I-A) y el oxígeno -2, pues al restar 8 - 2 = 6, dando como resultado la valencia del azufre, en consecuencia, el resultado es 2 + 6 - 8 = 0. Es de añadir que por el nombre de la molécula y la terminación ato podemos asumir que está trabajando con la valencia 6. <br /> <br />

              </p>

              <div>
                <h4>¿Cómo discernir?</h4>
                <p>
                  Para identificar una sal de un ácido, debes tener en que existen varios tipos de sales, como las haloideas, que están compuestas por un no metal y un metal y no contienen oxígeno (ejemplo: CaBr<sub>2</sub>). También están las sales ternarias, que contienen oxígeno (ejemplo: Li<sub>2</sub>SO<sub>4</sub>) y las sales cuaternarias, que contienen hidrógeno, oxígeno, un elemento no metal y un elemento metálico.
                  <br /> <br />

                  En cuanto a los ácidos, están formados por un elemento no metal y el hidrógeno, en el caso de los hidrácidos (ejemplo: HCl). Los oxácidos contienen hidrógeno, un elemento no metal y oxígeno (ejemplo: H<sub>2</sub>SO<sub>4</sub>).
                </p>
              </div>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Partes de una ecuación" id="partesEcuacion" >
              <img src="/img/partes-ecuacion-quimica.svg" alt="Partes ecuación química" className="rounded-3" />
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Balanceo de una ecuación química" id="balanceoEcuacion" >
              <p>
                Consiste en la búsqueda de coeficientes numéricos que hagan que el número de cada tipo de átomos presentes en la reacción química sea el mismo tanto en reactivos como en productos. Es decir, reside en buscar equilibrio en la ecuación, de tal forma que el número de átomos en ambas partes sea el mismo. <br /> <br />

                De igual importancia, debes tener en cuenta que el subíndice nunca puedes cambiarlo. Solo puedes agregar coeficientes para alcanzar el equilibrio.
              </p>

              <CollapseInformation name="Balanceo por tanteo" id="balanceoTanteo" >
                <p>
                  Se fundamenta en la prueba y error. Puesto que se debe experimentar con coeficientes. Es un proceso que requiere paciencia y práctica. Pero es eficaz para balancear ecuaciones químicas. De esta manera, el número de átomos de los reactivos debe ser igual al número de átomos en los productos.<br /> <br />
                  Pasos a realizar:
                </p>
                <ol>
                  <li>Se verifica que la ecuación no sea estequiométrica (cuando está balanceada)</li>
                  <li>Se balancean los metales si hay</li>
                  <li>Se equilibran los no metales diferentes a hidrógeno y a oxígeno si los hay</li>
                  <li>Se balancean los hidrógenos</li>
                  <li>Se verifican los oxígenos para corroborar si la ecuación está balanceada</li>
                </ol>
                <p>
                  Por ejemplo, tenemos la siguiente ecuación: <br />

                  Al + HCl → AlCl + H<sub>2</sub> <br />
                  Balanceada:

                  2Al + 2HCl → 2AlCl + H<sub>2</sub> <br /> <br />

                  De esta forma, obtenemos dos aluminios, dos hidrógenos y dos cloros. Por parte tanto de reactivos como de productos.
                </p>

                <MoreBtn url="https://youtu.be/tX-JRR53Dms" />
              </CollapseInformation>

              <hr />

              <CollapseInformation name="Balanceo por método algebraico" id="balanceoAlgebraico" >
                <p>
                  Posee cierta relación con el método de tanteo. Ambos darán un mismo resultado; a diferencia del método redox, el cual emplea un procedimiento que se aleja inicialmente de los métodos por tanteo y algebraico. <br /> <br />

                  Consiste en un proceso matemático, cuyo primer paso es asignar a cada reactivo y producto una letra del abecedario con el fin de determinar los coeficientes, por ejemplo, a, b, c, d, etc. <br /> <br />

                  Pasos a realizar:
                </p>
                <ol>
                  <li>Se verifica que la ecuación no sea estequiométrica.</li>
                  <li>Asignamos letras tanto a reactivos como productos</li>
                  <li>Usamos los subíndices cómo coeficientes de las letras respectivamente</li>
                  <li>Reconocemos la letra que se presenta más veces sin tener en cuenta los coeficientes. Posteriormente, asignaremos un valor arbitrario, generalmente entre uno y dos</li>
                  <li>Realizamos las operaciones resultantes y, de ser necesario, simplificar</li>
                  <li>Reemplazamos en la ecuación</li>
                </ol>
                <p>
                  Por ejemplo, tenemos la siguiente ecuación: <br /><br />
                  <Latex>{metodoAlgebraicoEjemplo}</Latex><br /><br />

                  <Latex>{Fe2O3}</Latex>, lo identificamos como <b>a</b>, C lo identificamos como <b>b</b>. Respecto a los productos, <Latex>{Fe}</Latex> lo identificamos con la letra <b>c</b> y, por último, <Latex>{CO}</Latex> con la letra <b>d</b>. Gráficamente luce de la siguiente forma: <br /><br />

                  <Latex>{metodoAlgebraicoEjemploTwo}</Latex><br /><br />

                  Posteriormente, usamos los subíndices cómo coeficientes de las letras respectivamente. Es decir: <br />
                  <Latex>{metodoAlgebraicoEjemploThree}</Latex><br /> <br />

                  Después, reconocemos la letra que se presenta más veces sin tener en cuenta los coeficientes. En este caso, tanto <b>a</b> como <b>d</b> se repiten el mismo número de veces, como resultado, podemos usar cualquiera de los dos. Le asignamos un valor arbitrario a cualquiera de las letras, a nuestra elección, usaremos la letra <b>a</b>, con un valor de dos. <br /><br />

                  Reemplazamos: <br />

                  <Latex>{metodoAlgebraicoEjemploFour}</Latex><br />
                  Simplificamos: <br />
                  <Latex>{metodoAlgebraicoEjemploFive}</Latex><br />
                  Reemplazamos en la ecuación: <br />
                  <Latex>{metodoAlgebraicoEjemploSix}</Latex><br />
                </p>

                <MoreBtn url="https://youtu.be/MUukx4RlWmw" />
              </CollapseInformation>

              <hr />

              <CollapseInformation name="Balanceo por método óxido reducción" id="balanceoRedox" >
                <p>
                  Mediante este método hacemos uso de la variación en los estados de oxidación presentes en los elementos. A partir de estos, realizaremos el procedimiento para balancear la ecuación. Es importante aclarar que estos procesos nos ayudan a orientarnos en los coeficientes, debido a que en algunas ocasiones debemos hacer uso de balanceo por tanteo para equilibrar el resto de elementos.
                </p>
                <p>Pasos a seguir:</p>
                <ol>
                  <li>Hallar los estados de oxidación tanto en los elementos que pertenecen a los reactivos como a los productos.</li>
                  <li>Observamos los elementos que cambiaron su estado de oxidación. Es decir, poseen un estado de oxidación diferente cuando son reactivos y productos.</li>
                  <li>Analizamos si los elementos han ganado o perdido electrones.</li>
                  <li>Posteriormente, realizamos una semiecuación con aquellos elementos que presentaron cierta variación. Sumando o restando cuantos electrones ganaron o perdieron. Luego, balanceamos mediante tanteo la semiecuación.</li>
                  <li>Existen ciertos casos especiales en los que compuestos no se disocian, específicamente los óxidos y peróxidos (medios ácidos). Para estos casos, debemos agregar agua (H₂O) para balancear la semiecuación. Por ende debemos añadir hidrógeno para equilibrar la ecuación.</li>
                  <li>Después, aplicamos el mínimo común múltiplo de los electrones ganados o restados. Un método más directo, es usar tales electrones como coeficientes de la ecuación para luego "cancelar" los electrones.</li>
                  <li>Reemplazamos los coeficientes en la ecuación original y de ser necesario continuar mediante tanteo.</li>
                </ol>
                <p>
                  Ejemplo: <br />
                  <img src="/img/metodoRedox.svg" alt="Método redox" className="w-75 rounded-3" />
                  <br /> <br />
                  Para comprender mejor esta temática, les recomiendo observar nuestros videos, especialmente el método redox, debido a que es más complejo.
                </p>

                <MoreBtn url="https://youtu.be/bQ0MwYR0oio" />
              </CollapseInformation>
            </CollapseInformation>
            <hr />

          </div>

          <div>
            <CollapseInformation name="Estequiometría" id="eestequiometria" >
              <p>
                Consiste en el proceso mediante el cual se relacionan cantidades de reactivos y productos en una ecuación química; estás cantidades pueden ser moléculas, moles, gramos, átomos, etc. Entre los cálculos tenemos: mol - mol, mol - gramo, gramo - mol, gramo - gramo <br /><br />
                Ejemplo <br />
                <b>Mol - mol</b><br />
                Teniendo en cuenta la siguiente ecuación: <br />
                C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> {"->"} 3CO<sub>2</sub> + 4H<sub>2</sub>O <br />
                ¿Cuántos moles de O<sub>2</sub> se requieren para reaccionar con 4,3 moles de propano?
                <br />
                <img src="/img/mol-mol.svg" alt="Mol - mol" className="w-80 rounded-3" /><br />
                Nos piden cuántos moles de oxígeno se necesitan, por tanto, ubicamos primero el oxígeno en el numerador y el dato que nos dan (C<sub>3</sub>H<sub>8</sub>) en el denominador. Posteriormente, multiplicamos la fracción por los 4,3 moles de propano. Luego, cancelamos los moles de C<sub>3</sub>H<sub>8</sub>. Dándonos el resultado expresado. <br /> <br />

                <b>Mol - gramo </b> <br />
                Teniendo en cuenta la siguiente ecuación: <br />
                4Al + 3O<sub>2</sub> {"->"} 2Al<sub>2</sub>O<sub>3</sub> <br />
                ¿Cuántos gramos de aluminio se necesitan oxidar para producir 50 mol de óxido de aluminio? <br />

                <img src="/img/mol-gramo.svg" alt="Mol - gramo" className="w-80 rounded-3" /><br />

                Nos piden cuántos gramos de aluminio se necesitan, por tanto, ubicamos primero el aluminio en el numerador y el dato que nos dan (Al<sub>2</sub>O<sub>3</sub>) en el denominador. Posteriormente, multiplicamos la fracción por los moles dados. Después, multiplicamos dicho resultado por su peso molecular. <br /> <br />

                <b>Gramo - mol</b> <br />
                Teniendo en cuenta la siguiente ecuación: <br />
                3Cu + 8NO<sub>3</sub> {"->"} 3Cu(NO3)2 + 2NO + 4H<sub>2</sub>O <br />
                ¿Cuántas moles de HNO3 son necesarias para preparar 0,75 gr de Cu(NO3)2? <br />

                <img src="/img/gramo-mol.svg" alt="Gramo - mol" className="w-80 rounded-3" /><br />

                Nos piden cuántas moles de HNO<sub>3</sub> se necesitan, por tanto, ubicamos este compuesto en el numerador y el dato que nos dan (Cu(NO<sub>3</sub>)<sub>2</sub>) en el denominador. Posteriormente, multiplicamos la fracción por otra, cuyo numerador será un mol del dato en cuestión, el denominador será el peso molecular de tal ecuación. <br /> <br />

                <b>Gramo - gramo</b> <br />
                Teniendo en cuenta la siguiente ecuación: <br />
                4P + 3O<sub>2</sub> {"->"} 2P<sub>2</sub>O<sub>3</sub> <br />
                ¿Cuántos gramos de fósforo se necesitan oxidar para producir 200 gr de óxido de fósforo?<br />

                <img src="/img/gramo-gramo.svg" alt="Gramo - gramo" className="w-80 rounded-3" /><br />

                Nos piden, de modo que el fósforo queda en el numerador y el óxido de fósforo en el denominador. Posteriormente, aplicamos el mismo proceso de gramo - mol, multiplicamos la fracción por otra, cuyo numerador será un mol de óxido de fósforo, el denominador será el peso molecular de tal ecuación. Después, multiplicamos esta fracción por otra, cuyo denominador es un mol de fósforo y en el numerador el peso atómico del mismo. Luego, será multiplicado por 200 gr de óxido de fósforo.
              </p>

              <MoreBtn url="https://youtu.be/bQ0MwYR0oio" />

              button <h3>Practica</h3>
              <p>
                Teniendo en cuenta la siguiente ecuación:
                <br />
                P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O {"->"} 2H<sub>3</sub>PO<sub>4</sub> <br />
                ¿Cuántos gramos de H2O se necesitan para producir 500 gramos H3PO4?
              </p>
              <p>
                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Solución
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <img src="/img/practicaEstequiometria.svg" alt="Practica estequiometría" className="w-80 rounded-3" />
              </div>
            </CollapseInformation>
          </div>

        </div>
      </div>
    </div>
  )
}
