import Latex from "react-latex"
import { arithmeticItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const FundamentalOperations = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Operaciones fundamentales" />
            <ContentsTable items={arithmeticItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h4>Suma y resta</h4>
                <ul>
                    <li>La suma se compone de dos o más elementos a los que llamamos sumandos, el resultado se conoce como suma o adición.</li>
                    <li>La resta se compone del minuendo y el sustraendo, el resultado es llamado resta o diferencia.</li>
                    <li>En caso de suma de números con diferente signo, se le resta el menor al mayor y el resultado se escribe con el signo del de mayor valor absoluto.</li>
                    <li>En caso de restar a una cantidad negativa, se suman los valores absolutos de los números y se deja el signo negativo.</li>
                </ul>
                <br />
                <h5>Propiedades de la suma</h5>
                <ol>
                    <li>
                        <span className="fw-semibold">Conmutativa:</span> El orden de los sumandos no afecta el resultado.

                        <ul>
                            <li><Latex>{`$a + b = b + a \\ \\ \\rightarrow \\ \\ 2 + 6 = 6 + 2$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Asociativa:</span> Cuando se suman tres o más números, el orden en el que se sumen (la forma en la que los asocias) no afecta el resultado.
                        <ul>
                            <li><Latex>{`$(a + b) + c = a + (b + c) \\ \\ \\rightarrow \\ \\ (2 + 1) + 3 = 2 + (1 + 3)$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Elemento neutro:</span> Todo número sumado con cero tiene como resultado el mismo número.
                        <ul>
                            <li><Latex>{`$a + 0 = a \\ \\ \\rightarrow \\ \\ 1 + 0 = 1$`}</Latex></li>
                        </ul>
                    </li>
                </ol>
                <br />
                <h5>Propiedades de la resta</h5>
                <p>
                    No posee propiedades, sin embargo, se puede mencionar el hecho de que puede aprovecharse la propiedad de elemento neutro de la suma para escribir el cero de formas convenientes (tiene aplicación en el álgebra). Por ejemplo, 0 puede escribirse como +4 - 4, por lo tanto, 5 + 0 = -4 + 4+ 5.
                    <br /><br />
                    Se deben tener en cuenta los signos de agrupación, en caso que de un signo anteceda a un signo de agrupación, se distribuye el signo en todos los elementos dentro del signo (explicación en el apartado de multiplicación). En otras palabras, si antes de un signo de agrupación hay un “+” se puede eliminar el signo sin problema alguno, si lo antecede un “- “entonces se elimina el signo, pero cambiando de signo a todos los elementos que se encontraban dentro de él.
                </p>
                <br />
                <h5>Suma y resta de decimales</h5>
                <p>
                    Se alinea la coma decimal y se deja en la misma posición para el resultado, de resto se opera normal.
                </p>
                <br />
                <h5>Suma y resta de fracciones</h5>
                <p>
                    Se deben de llevar las fracciones a un mismo denominador, el resultado de dividir el mínimo común múltiplo entre el denominador debe de ser multiplicado en forma de fracción unitaria con la fracción y así con ambas, sin embargo, muchas veces no conocemos todos los valores o al menos no con exactitud, por lo tanto se recomienda el uso del que llaman infantilmente “método de la carita feliz” el cual consiste en que el producto del numerador de la fracción A con el denominador de la fracción B se suma o resta dependiendo del caso con el producto del numerador de la fracción B con el denominador de la fracción B, todo esto sobre el producto de los denominadores de ambas fracciones. Esto es debido a que al hacer estas multiplicaciones se aseguran de que se tenga un denominador común, por lo tanto, se puede sumar o restar tranquilamente.
                </p>

                <hr />

                <h4>Multiplicación y división</h4>
                <ul>
                    <li>La multiplicación puede considerarse la suma de un número con sí mismo una determinada cantidad de veces, por lo que 4 x 5 = 4 + 4 + 4 + 4 + 4</li>
                    <li>La división es el proceso en el que se calcula el número de veces que debe repetirse un número para que al sumarse tengan como resultado el dividendo. 20/4=5 porque el cuatro al multiplicarse con 5 tiene como resultado 20 o también puede decirse que el 4 al sumarse con el mismo 5 veces tiene como resultado 20.</li>
                </ul>
                <br />
                <h5>Propiedades de la multiplicación</h5>
                <ul>
                    <li>
                        <span className="fw-semibold">Conmutativa:</span> El orden de los factores no afecta el producto, por lo que es lo mismo 2x3 a 3x2.
                        <ul>
                            <li><Latex>{`$a \\cdot b = b \\cdot a \\ \\ \\rightarrow \\ \\ 5 \\cdot 3 = 3 \\cdot 5$`}</Latex></li>
                        </ul>
                    </li>

                    <li>
                        <span className="fw-semibold">Asociativa:</span> La forma en la que asocies los factores no afecta al producto, esto es visible con facilidad en multiplicaciones con tres factores o más.
                        <ul>
                            <li><Latex>{`$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c) \\ \\ \\rightarrow \\ \\ (5 \\cdot 3) \\cdot 2 = 5 \\cdot (3 \\cdot 2)$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Distributiva:</span> Al multiplicar una cantidad (coeficiente) por un signo de agrupación que contiene varios elementos (sumas o restas) este tiene que multiplicar a cada uno de los términos y así “distribuirse”, se debe tener en cuenta el signo del coeficiente.
                        <ul>
                            <li><Latex>{`$a(b + c) = ab + ac \\ \\ \\rightarrow \\ \\ 3(2 + 1) = 3 \\cdot 2 + 3 \\cdot 1$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Elemento neutro:</span> Todo número multiplicado por 1 tiene como resultado él mismo, propiedad aprovechable debido a que el 1 puede escribirse en forma de fracción en ocasiones convenientes, por ejemplo 1-5/23 puede realizarse fácilmente si se sabe que el uno puede reescribirse como una fracción unitaria (numerador y denominador iguales). De esta manera se reescribe como 23/23-5/23, dando la rápida respuesta de 18/23.
                        <ul>
                            <li><Latex>{`$a \\cdot 1 = a \\ \\ \\rightarrow \\ \\ 5 \\cdot 1 = 5$`}</Latex></li>
                        </ul>
                    </li>
                </ul>
                <br />
                <h5>Propiedades de la división</h5>
                <p>
                    De la división solo es destacable el elemento neutro, que al igual que en la multiplicación, es el 1, también podemos aprovecharnos de esto y escribir el 1 de maneras convenientes.
                </p>
                <ul>
                    <li>Para ambos rige la conocida ley de los signos. Si se multiplican o dividen elementos de igual signo el resultado será positivo, mientras que al operar signos diferentes el resultado es negativo.</li>
                    <li>Ante signos de agrupación se debe tener en cuenta la propiedades distributiva, en especial si hay otras operaciones como sumas o restas, pues están a un diferente nivel jerárquico,  debe recordarse que cuando un número antecede a un signo de agrupación es porque este es el coeficiente de tal signo, por lo tanto el coeficiente no puede sumarse con otros términos sin antes distribuirse.</li>
                    <li>El valor de una fracción no se ve afectado si se multiplica o divide el numerador y denominador por el mismo número.</li>
                    <li>La multiplicación consta de factores y de un producto.</li>
                    <li>Al estar en el mismo nivel de jerarquía, se dice que multiplicar por un medio es equivalente a dividir entre dos.</li>
                    <li>Para multiplicar fracciones es tan sencillo como multiplicar numerador por numerador y denominador por denominador.</li>
                    <li>Al multiplicar por un múltiplo de 10, se rueda la coma decimal a la derecha tantas veces como ceros tenga el múltiplo de 10. Si se trata de un número entero (sin coma decimal) se le añaden tantos ceros como tenga el múltiplo de 10.</li>
                    <li>La división tiene un dividendo, divisor y su resultado es llamado cociente, en caso de ser inexacta se considera también a un residuo.</li>
                    <li>Para dividir fracciones se invierte la segunda fracción y una vez invertida se opera como si fuera una multiplicación, o también se puede multiplicar en cruz, sin embargo, recuerde que en las divisiones el orden sí importa</li>
                    <li>Al dividir entre un múltiplo de 10, la coma decimal se rueda a la izquierda tantas veces como ceros tenga el múltiplo de 10. Al tratarse de un número entero, puede imaginar una coma para hacer más sencillo el proceso, por ejemplo el número 7, puede escribirse como 7,0.</li>
                </ul>
                <br />
                <br />
                <h5>Divisibilidad</h5>
                <p>
                    Es la capacidad de un número de dividir exactamente a otro, por lo tanto el cociente es un número entero.
                </p>
                <h6>Criterios</h6>
                <ul>
                    <li><span className="fw-semibold">2:</span> Que termine en una cifra par/múltiplo de dos {"{0,2,4,6,8}"}.</li>
                    <li><span className="fw-semibold">3:</span> Que la suma de las cifras sea un múltiplo de 3.</li>
                    <li><span className="fw-semibold">4:</span> Que sus dos últimas cifras sean cero o múltiplo de 4.</li>
                    <li><span className="fw-semibold">5:</span> Que termine en 0 o 5.</li>
                    <li><span className="fw-semibold">6:</span> Que sea divisible entre 2 y 3.</li>
                </ul>

                <hr />

                <h4>Potenciación</h4>
                <ul>
                    <li>Operación que consiste en multiplicar la base por sí misma tantas veces como sea el valor del exponente.</li>
                    <li>Se compone de una base (ejemplo: 2), elevada a un exponente (ejemplo: 3), dando como resultado la potencia <Latex>{`$2^3$`}</Latex>.</li>
                    <li>Cuando un número negativo se eleva a un exponente par, la potencia resultará positiva, mientras que si es impar, la potencia seguirá negativa (Aplicación de la ley de los signos).</li>
                </ul>
                <br />
                <h5>Propiedades</h5>
                <ul>
                    <li>
                        <span className="fw-semibold">Potencia de exponente 0:</span> Todo número diferente de 0 elevado a la 0 tiene como resultado 1 (0 elevado a la 0 es un caso indeterminado, sin embargo, en algunos contextos lo asumen como 1 por conveniencia matemática en ciertas áreas).
                        <ul>
                            <li><Latex>{`$x^0 = 1 \\ \\ \\rightarrow \\ \\ 2^0 = 1$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Potencia de exponente 1:</span> Todo número elevado al exponente 1 tiene como resultado el mismo número.
                        <ul>
                            <li><Latex>{`$x^1 = x \\ \\ \\rightarrow \\ \\ 3^1 = 3$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Producto de potencias de igual base:</span> Al multiplicar potencias de igual base, el resultado es reescribir la base y sumar los exponentes.
                        <ul>
                            <li><Latex>{`$x^n \\cdot x^m = x^{n + m} \\ \\ \\rightarrow \\ \\ 7^3 \\cdot 7^5 = 7^8$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Cociente de potencias de igual base:</span> Al dividir potencias de igual base, se reescribe la base y se resta el exponente del dividendo con el del divisor (No aplica para base 0).
                        <ul>
                            <li><Latex>{`$\\frac{x^n}{x^m} = x^{n-m} \\ \\ \\rightarrow \\ \\ \\frac{3^5}{3^3} = 3^{3-5} = 3^2$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Distributiva de la multiplicación y división:</span> Si un signo de agrupación se eleva a un exponente y este contiene ÚNICAMENTE multiplicaciones y o divisiones, el exponente puede distribuirse en cada uno de los elementos multiplicando y o dividiendo.
                        <ul>
                            <li><Latex>{`$(x \\cdot y)^n = x^n \\cdot y^n \\ \\ \\rightarrow \\ \\ (6 \\cdot 4)^3 = 6^3 \\cdot 4^3 $`}</Latex></li>
                            <li><Latex>{`$(\\frac{x}{y})^n = \\frac{x^n}{y^n} \\ \\ \\rightarrow \\ \\ (\\frac{5}{3})^2 = \\frac{5^2}{3^2}$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Potencia de una potencia:</span> Si una potencia se encuentra elevada a algún otro exponente, es equivalente a la misma base elevada al producto de ambos exponentes. Truco: Aprovecha la propiedad conmutativa de la multiplicación, pues <Latex>{`$(2^3)^2$`}</Latex> se puede reescribir como <Latex>{`$(2^2)^3$`}</Latex>. También se puede aprovechar para descomponer exponentes grandes, por ejemplo <Latex>{`$3^6$`}</Latex> puede escribirse como <Latex>{`$3(3^3)^2$`}</Latex>.
                        <ul>
                            <li><Latex>{`$(x^n)^m = x^{n + m} \\ \\ \\rightarrow \\ \\ (2^2)^4 = 2^{2+4} = 2^6$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Potencia de exponente negativo:</span> Si una base es elevada a un exponente negativo, puede reescribirse como uno entre la base elevada a dicho exponente pero en su forma positiva y viceversa.
                        <ul>
                            <li><Latex>{`$x^{-n} = \\frac{1}{x^n} \\ \\ \\rightarrow \\ \\ 5^{-2} = \\frac{1}{5^2}$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Potencia de exponente racional:</span> Si una base <var>x</var> se encuentra elevada a un exponente de la forma <Latex>{`$\\frac{a}{b}$`}</Latex>, puede reescribirse como una raíz de índice <var>b</var> con un radicando <var>x</var> elevado a un exponente <var>a</var> y viceversa.

                        <ul>
                            <li><Latex>{`$x^{\\frac{m}{n}} = \\sqrt[n]{x^m} \\ \\ \\rightarrow \\ \\ 9^{\\frac{2}{3}} = \\sqrt[3]{9^2}$`}</Latex></li>
                        </ul>
                    </li>
                </ul>

                <hr />

                <h4>Radicación</h4>
                <p>
                    Operación inversa a la potenciación, consta de un índice, radicando y una raíz, cosa que en la potenciación representan al exponente, potencia y base respectivamente. Por lo tanto, en palabras de la potenciación se podría decir que es la operación que a partir del exponente y la potencia busca la base.
                    Cuando no se escribe un índice se asume que es dos.
                    <br />
                    <small><b>Nota:</b> Cuando no se escribe un índice se asume que es dos.</small>
                </p>
                <br />
                <h5>Propiedades</h5>
                <ul>
                    <li>
                        <span className="fw-semibold">Raíz de un producto:</span> Dos números multiplicándose dentro del mismo radical (símbolo de la radicación √) pueden escribirse como la raíz de uno multiplicado por la raíz del otro (manteniendo el mismo índice para ambas raíces), así mismo, si dos raíces con el mismo índice se encuentran multiplicando, puede reescribirse todo bajo un mismo radical.

                        <ul>
                            <li><Latex>{`$\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Raíz de un cociente:</span> La misma lógica que con la raíz de un producto, recuerde el requisito del índice.

                        <ul>
                            <li><Latex>{`$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$`}</Latex></li>
                        </ul>
                    </li>
                    <li>
                    <span className="fw-semibold">Raíz de una potencia:</span> La radicación puede expresarse en forma de potenciación, dejando el radicando como base, el exponente de esta base va a ser igual al exponente al que se encontraba elevado el radicando inicialmente dividido entre el índice. Por ejemplo, raíz de dos puede escribirse como dos elevado a un medio, el radicando (dos) se deja como base y como inicialmente se encontraba elevado a la uno (todo número en el que no se encuentre visible un exponente se le considera exponente uno debido a la propiedad “Potencia de exponente 1” de la potenciación) y tenía indice dos, el exponente del dos será su exponente inicial (uno) dividido entre el índice (dos).
                    <ul>
                        <li><Latex>{`$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m = a^{\\frac{m}{n}}$`}</Latex></li>
                    </ul>
                    </li>
                    <li>
                        <span className="fw-semibold">Raíz de una raíz:</span> Si se le saca raíz a una raíz, todo puede reescribirse como una raíz de índice producto de multiplicar los índices de las raíces iniciales, manteniendo el radicando igual.
                        
                        <ul>
                            <li><Latex>{`$\\sqrt[n]{\\sqrt[p]{a}} = \\sqrt[n \\cdot p]{a}$`}</Latex></li>
                        </ul>
                    </li>
                </ul>
                <br />
                <h5>Simplificación de raíces</h5>
                <p>
                    En matemática, las expresiones deben ser lo más simples posible y las raíces no son la excepción, así que, en caso de raíces no exactas se aplica la simplificación, consiste en descomponer el radicando como un producto de factores, estos factores deben de tener una raíz exacta, así aprovecharemos la propiedad “Raíz de un producto” para simplificar.
                    <br /> <br />
                    Ejemplo: <Latex>{`$\\sqrt{84} = \\sqrt{4*21} = \\sqrt{4} * \\sqrt{21} = 2   \\sqrt{21}$`}</Latex>
                </p>

                <hr />

                <h3>Jerarquía de operaciones</h3>
                <p>Indica el orden en el que deben efectuarse las operaciones</p>
                <ol>
                    <li>Potencias y raíces.</li>
                    <li>Multiplicaciones y divisiones de izquierda a derecha.</li>
                    <li>Sumas y restas.</li>
                </ol>
            </div>
        </div>
    )
}
