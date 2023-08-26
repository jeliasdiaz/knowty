import { arithmeticItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const MCMMCD = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="MCM y MCD" />
            <ContentsTable items={arithmeticItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Números primos</h3>
                <ul>
                    <li>Los números primos son aquellos que solo son divisibles entre ellos mismos y la unidad, por definición el 1 no cuenta como número primo.</li>
                    <li>Todos los números pueden ser descompuestos en factores primos. En otras palabras, expresarse como el producto de factores primos, por ejemplo, el 84, se puede escribir como 2*2*3*7.</li>
                </ul>

                <hr />

                <h3>Mínimo común múltiplo (MCM)</h3>
                <p>
                    Es el menor múltiplo común de dos o más números, para calcular se descomponen simultáneamente los números en factores primos, comenzando por el 2 y aumentando el número primo conforme se imposibilita seguir dividiendo con el que se esté usando. Así hasta que todos los números tengan como residuo uno, el MCM es el resultado de multiplicar los números primos que se necesitaron para descomponer por completo a los números originales.
                    <br /><br />
                    Este proceso es útil debido a que en la vida real, varios procesos requieren de sincronización o simplemente siguen patrones los cuales no podemos controlar del todo, por ejemplo, si ponemos a competir a un atleta con una persona promedio en una carrera, el atleta logrará una vuelta con mayor rapidez que la persona, de esta manera, si conocemos el tiempo que tarda cada uno de los dos, podemos calcular cuánto demorarán en encontrarse otra vez en el punto de partida.
                </p>

                <hr />

                <h3>Máximo común divisor (MCD)</h3>
                <p>
                    Es el mayor divisor común de dos o más números, se calcula descomponiendo los números en factores primos así como en el MCM, sin embargo, se debe detener cuando no existan más números primos que dividan perfectamente a todos los elementos. En la práctica, este proceso nos ayuda a hacer divisiones exactas de la forma más eficiente posible cuando se trabaja con dos o más elementos.
                </p>
            </div>
        </div>
    )
}
