import { Link } from "react-router-dom"

const Quimica = () => {
  return (
    <div className="homeQuimica" id="geometria">
      <img src="/img/waveThree.svg" alt="" />
      <div className="textIntroducion shadow-lg">
        <h1>Química</h1>
      </div>
      <nav data-aos="zoom-in" data-aos-duration="800" className="d-none d-sm-block">
        <ul className="pagination pagination-md justify-content-center">
          <li className="page-item shadow-lg"><Link to="/quimica_1" className="text-decoration-none page-link">I periodo</Link></li>

          <li className="page-item shadow-lg"><Link to="/quimica_2" className="text-decoration-none page-link">II periodo</Link></li>

          <li className="page-item shadow-lg"><Link to="/quimica" className="text-decoration-none page-link">III periodo</Link></li>

          <li className="page-item shadow-lg"><Link to="/quimica_4" className="text-decoration-none page-link">IV periodo</Link></li>
        </ul>
      </nav>
      <div className="cardQuimica mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
        <div>
          <div >
            <h2>Nomenclaturas</h2>
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
            <p>Utiliza las terminaciones -ico (Mayor) -oso (Menor),- per-ico (+ Mayor), hipo-oso (- Menor) para indicar la valencia del elemento. Es de añadir, que los elementos que poseen un solo nivel de valencia, su terminación es -ico. El sufijo depende del número de oxidación que tenga el elemento y del número de oxidación que actúa en la fórmula.</p>
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
            <hr />
          </div>

          <div>
            <h2>Funciones</h2>
            <h3>Óxidos basicos</h3>
            <p>Está presente un metal con una molécula de oxígeno.</p>
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
              Está presente un no metal con una molécula de oxígeno.
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
            <hr />
          </div>

          <div>
            <h3>Hidróxidos</h3>
            <p>Se forman por la unión entre un metal o más iones hidroxilo (OH<sup>-</sup>) provenientes del H<sub>2</sub>O</p>
            <h5>Ejemplos</h5>
            <p>
              Hidróxido de cromo (III) = Cr(OH)<sub>3</sub>
              <br />
              Dihidróxido de bario = Ba(OH)<sub>2</sub>
              <br />
              Hidróxido ferrico = Fe(OH)<sub>3</sub> <br /> <br />

            </p>
            <hr />
          </div>

          <div>
            <h3>Peróxidos</h3>
            <p>Oxígeno (O<sub>2</sub>)+ metales y excepción del Hidrógeno</p>
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
            <hr />
          </div>


          <div>
            <h3>Ácidos</h3>
            <p>
              Formados por un ion de hidrógeno y un anión <br />Se caracterizan por:
            </p>
            <ul>
              <li>Ceder protones en medio acuoso</li>
              <li>Enrojecen el papel tornasol azul</li>
              <li>En presencia de la fenolftaleína se torna incolora</li>
              <li>Sabor agrio picante</li>
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
            <table className="table table-hover" >
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
            <h5>Nomenclatura hidrácidos</h5>
            <table className="table table-hover">
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
            <h5>Resumen ácidos</h5>
            <p>
              Los ácidos hidrácidos contienen hidrógeno y un elemento no metal en su composición (grupo VI-A y VII-A. Solo trabajan con su primera valencia)(H<sub>x</sub>E<sub>y</sub>). En nomenclatura sistemática poseen el sufijo <i>uro</i>. Asimismo, en la tradicional se agrega al final <i>hídrico</i>.
              <br /><br />
              Por otro lado, los ácidos oxácidos contienen hidrógeno, oxígeno y un elemento no metal. En la nomenclatura tradicional, se usa la palabra <i>Ácido</i>, seguido de la raíz del elemento no metal y la terminación -hipo-oso, -oso, -ico, -per-ico. <br /> <br />

            </p>
            <hr />
          </div>

          <div>
            <h3>Sales</h3>
            <p>
              Son la combinación de ácidos con bases. Pueden ser haloideas, formadas con halógenos (grupo VII-A). Asimismo, pueden ser cuaternarias, que contienen hidrógeno en su molécula. Es de añadir, que en las sales cuaternarias (oxisales) se emplea la nomenclatura tradicional de la siguiente forma: <br />
              hipo-oso  = hipo-ito <br />
              oso = ito <br />
              ico = ato <br />
              per-ico = per-ato
            </p>
            <h5>Ejemplos</h5>
            <p>Bromuro de calcio = CaBr<sub>2</sub> <br />Calcio posee valencia 2 (grupo II-A) y el bromo en este caso -1, por tanto, debemos añadir otra molécula de bromo para estabilizar la ecuación, dando como resultado 2 - 2 = 0.</p>

            <p>Sulfato de rubidio = Rb<sub>2</sub>SO<sub>4</sub><br />Rubidio posee valencia 1 (grupo I-A) y el oxígeno -2, pues al restar 8 - 2 = 6, dando como resultado la valencia del azufre, en consecuencia, el resultado es 2 + 6 - 8 = 0. Es de añadir que por el nombre de la molécula y la terminación ato podemos asumir que está trabajando con la valencia 6. <br /> <br />

            </p>
          </div>

          <div>
            <h4>¿Cómo discernir?</h4>
            <p>
              Para identificar una sal de un ácido, puedes tener en cuenta que las sales, están compuestas por un no metal y un metal, las que no posean oxígeno son haloideas (CaBr<sub>2</sub>). Por otro lado, las que poseen oxígeno son ternarias (Li<sub>2</sub>SO<sub>4</sub>). Por último, las sales que posean hidrógeno, oxígeno, E. no metal y E. metal, es cuaternaria. <br /> <br />

              En lo que concierne a los ácidos, están formados por un elemento no metal y el hidrógeno, en el caso de los hidrácidos. En cuanto a los oxácidos, su composición radica en hidrógeno + E. no metal + oxígeno.
            </p>
            <hr />
          </div>

          <div>
            <h3>Partes de una ecuación</h3>
            <img src="/img/partes-ecuacion-quimica.jpg" alt="" className="quimicaEcuacion" />
            <hr />
          </div>

          <div>
            <h2>Balanceo de una ecuación química</h2>
            <p>
              Consiste en la búsqueda de coeficientes numéricos que hagan que el número de cada tipo de átomos presentes en la reacción química sea el mismo tanto en reactivos como en productos. Dicho de otro modo, reside en buscar equilibrio en la ecuación, de tal forma que el número de átomos en ambas partes sea el mismo.

              De igual importancia, debes tener en cuenta que el subíndice nunca puedes cambiarlo. Solo puedes agregar coeficientes para alcanzar el equilibrio.
            </p>

            <h4>Balanceo por tanteo</h4>
            <p>
              Se fundamenta en la prueba y error. El número de átomos de los reactivos debe ser igual al número de átomos en los productos. Es de añadir que, este tipo de balanceo es poco eficiente. <br /> <br />
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

              Al + HCl → AlCl + H2 <br />
              Balanceada:

              2Al + 2HCl → 2AlCl + H2 <br /> <br />

              Es decir, nos queda tal que, dos aluminios, dos hidrógenos y dos cloros por parte tanto de reactivos como de productos.
            </p>
            <button className="btn btn-secondary"><a href="https://youtu.be/tX-JRR53Dms" className="text-decoration-none text-white">Profundizar</a></button> <br /> <br />


            <h4>Balanceo por método algebraico</h4>
            <p>
              Posee cierta relación con el método de tanteo, reside en que ambos darán un mismo resultado; a diferencia del método redox, el cual emplea un procedimiento que se aleja inicialmente de los métodos por tanteo y algebraico. Aclarado esto, el método algebraico consiste en un proceso matemático, cuyo primer paso es asignar a cada reactivo y producto una letra del abecedario con el fin de determinar los coeficientes, por ejemplo, a, b, c, d... <br /> <br />

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
              Por ejemplo, tenemos la siguiente ecuación: <br />
              <img src="/img/metodoAlgebraico-1.svg" alt="" /><br />
              Fe2O3, lo identificamos como <b>a</b>, C lo identificamos como <b>b</b>. Respecto a los productos, Fe lo identificamos con la letra <b>c</b> y, por último, CO con la letra <b>d</b>. Gráficamente luce de la siguiente forma: <br />
              <img src="/img/metodoAlgebraico-2.png" alt="" id="metodoAlgebraico2" /><br />
              Posteriormente, usamos los subíndices cómo coeficientes de las letras respectivamente. Es decir: <br />
              <img src="/img/metodoAlgebraico-3.svg" alt="" /> <br />
              Después, reconocemos la letra que se presenta más veces sin tener en cuenta los coeficientes. En este caso, tanto <b>a</b> como <b>d</b> se repiten el mismo número de veces, como resultado, podemos usar cualquiera de los dos. Le asignamos un valor arbitrario a cualquiera de las letras, a nuestra elección, usaremos la letra <b>a</b>, con un valor de dos. Reemplazamos: <br />
              <img src="/img/metodoAlgebraico-4.svg" alt="" /><br />
              <img src="/img/metodoAlgebraico-5.svg" alt="" /><br />
              Simplificamos: <br />
              <img src="/img/metodoAlgebraico-6.svg" alt="" /><br />
              Reemplazamos en la ecuación: <br />
              <img src="/img/metodoAlgebraico-7.svg" alt="" />
              <br />
            </p>

            <button className="btn btn-secondary"><a href="https://youtu.be/MUukx4RlWmw" className="text-decoration-none text-white">Profundizar</a></button> <br /> <br />

            <h4>Balanceo por método óxido reducción</h4>
            <p>
              Mediante este método hacemos uso de la variación en los estados de oxidación presentes en los elementos. A partir de estos, realizaremos el procedimiento para balancear la ecuación. Es menester aclarar que, estos procesos nos ayudan para orientarnos en los coeficientes, debido a que en algunas ocasiones debemos hacer uso de tanteo para equilibrar el resto de elementos. <br />

              Pasos a seguir:

            </p>
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
              <img src="/img/metodoRedox.svg" alt="" className="w-75" />
              <br /> <br />
              Para comprender mejor esta temática, les recomiendo observar nuestros videos, especialmente el método redox, debido a que es más complejo.
            </p>

            <button className="btn btn-secondary"><a href="https://youtu.be/bQ0MwYR0oio" className="text-decoration-none text-white">Profundizar</a></button>

            <hr />

          </div>

          <div>
            <h3>Estequiometría</h3>
            <p>
              Consiste en el proceso mediante el cual se relacionan cantidades de reactivos y productos en una ecuación química; estás cantidades pueden ser moléculas, moles, gramos, átomos, etc. Entre los cálculos tenemos: mol - mol, mol - gramo, gramo - mol, gramo - gramo <br /><br />
              Ejemplo <br />
              <b>Mol - mol</b><br />
              Teniendo en cuenta la siguiente ecuación: <br />
              C3H8 + 5O2 {"->"} 3CO2 + 4H2O <br />
              ¿Cuántos moles de O2 se requieren para reaccionar con 4,3 moles de propano?
              <br />
              <img src="/img/mol-mol.svg" alt="" className="estequiometriaImg" /><br />
              Identificamos que nos piden cuántos moles de oxígeno se necesitan, por tanto, ubicamos primero el oxígeno en el numerador y el dato que nos dan (C3H8) en el denominador. Posteriormente, multiplicamos la fracción por los 4,3 moles de propano. Luego, cancelamos los moles de C3H8. Dándonos el resultado expresado. <br /> <br />

              <b>Mol - gramo </b> <br />
              Teniendo en cuenta la siguiente ecuación: <br />
              4Al + 3O2 {"->"} 2Al2O3 <br />
              ¿Cuántos gramos de aluminio se necesitan oxidar para producir 50 mol de óxido de aluminio? <br />

              <img src="/img/mol-gramo.svg" alt="" className="estequiometriaImg" /><br />

              Identificamos que nos piden cuántos gramos de aluminio se necesitan, por tanto, ubicamos primero el aluminio en el numerador y el dato que nos dan (Al2O3) en el denominador. Posteriormente, multiplicamos la fracción por los moles dados. Después, multiplicamos dicho resultado por su peso molecular. <br /> <br />

              <b>Gramo - mol</b> <br />
              Teniendo en cuenta la siguiente ecuación: <br />
              3Cu + 8NO3 {"->"} 3Cu(NO3)2 + 2NO + 4H2O <br />
              ¿Cuántas moles de HNO3 son necesarias para preparar 0,75 gr de Cu(NO3)2? <br />

              <img src="/img/gramo-mol.svg" alt="" className="estequiometriaImg" /><br />

              Identificamos que nos piden cuántas moles de HNO3 se necesitan, por tanto, ubicamos este compuesto en el numerador y el dato que nos dan (Cu(NO3)2) en el denominador. Posteriormente, multiplicamos la fracción por otra, cuyo numerador será un mol del dato en cuestión, el denominador será el peso molecular de tal ecuación. <br /> <br />

              <b>Gramo - gramo</b> <br />
              Teniendo en cuenta la siguiente ecuación: <br />
              4P + 3O2 {"->"} 2P2O3 <br />
              ¿Cuántos gramos de fósforo se necesitan oxidar para producir 200 gr de óxido de fósforo?<br />

              <img src="/img/gramo-gramo.svg" alt="" className="estequiometriaImg" /><br />

              Identificamos lo que nos piden, de modo que el fósforo queda en el numerador y el óxido de fósforo en el denominador. Posteriormente, aplicamos el mismo proceso de gramo - mol, multiplicamos la fracción por otra, cuyo numerador será un mol de óxido de fósforo, el denominador será el peso molecular de tal ecuación. Después, multiplicamos esta fracción por otra, cuyo denominador es un mol de fósforo y en el numerador el peso atómico del mismo. Luego, será multiplicado por 200 gr de óxido de fósforo.
            </p>

            <button className="btn btn-secondary"><a href="https://youtu.be/hi0aTzsOZjI" className="text-decoration-none text-white">Profundizar</a></button> <br /> <br />

            <h3>Practica</h3>
            <p>
              Teniendo en cuenta la siguiente ecuación:
              <br />
              P2O5 + 3H2O {"->"} 2H3PO4 <br />
              ¿Cuántos gramos de H2O se necesitan para producir 500 gramos H3PO4?
            </p>
            <p>
              <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Solución
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <img src="/img/practicaEstequiometria.svg" alt="" className="quimicaEcuacion" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Quimica