import { ancientPhilosophyItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const HellenisticSchools = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Escuelas helenísticas" />
            <ContentsTable items={ancientPhilosophyItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Escuelas helenísticas</h3>
                <p>
                    Son aquellas corrientes filosóficas que buscaron la responder la
                    interrogante ¿Cómo vivir la mejor vida? Es de añadir que se
                    diferencia de la filosofía clásica puesto que en estas se da más
                    importancia a los práctico que a lo teórico.
                </p>

                <hr />

                <h4 id="cinicos">Cínicos</h4>
                <p>
                    Fue fundada por Antístenes y, se caracterizó por tratar de adaptar
                    una vida similar a los animales, rechazando los bienes materiales
                    y enfocándose en tener una vida simple y acorde a la naturaleza.
                    <br />
                    <br />
                    En esta escuela helenística, hay un dato curioso que llama la
                    atención y reside en que a pesar de ser Antístenes su fundador, el
                    representante más conocido es Diógenes, apodado como El Perro,
                    debido a su forma de vivir y llevar la filosofía cínica a extremos
                    que nadie antes había alcanzado. De hecho, no tenía siquiera casa,
                    vivía en una tinaja en Atenas, similar a una tina, pero,
                    compuesta por barro.
                </p>

                <hr />

                <h4 id="epicureos">Epicureos</h4>
                <p>
                    Su fundador es Epicuro y se caracterizó por ser una filosofía
                    hedonista, esto es, una corriente de pensamiento fundamentada en
                    el placer. De manera que si se desea ser feliz, se necesita
                    experimentar placer, pero, no solo corporal, sino también
                    espiritual. Es de añadir que según esta corriente, a pesar de que
                    el placer es un bien (en la medida que este provenga de la
                    naturaleza), no todo placer debe ser buscado. Así como no todo
                    dolor debe ser evitado.
                    <br />
                    <br />
                    Por otra parte, según Epicuro, la amistad era un riesgo, pues uno
                    se expone a sufrir por el amigo. Sin embargo, a pesar del riesgo,
                    es hermoso puesto que la generosidad del mismo es fuente de
                    alegrías.
                </p>

                <hr />

                <h4 id="escepticos">Escépticos</h4>
                <p>
                    También conocido como escepticismo clásico o Pirronismo, debido a
                    su fundador Pirrón. Según esta corriente, para alcanzar la
                    felicidad no debemos emitir juicios de la realidad, lo que se
                    conoce como epojé (suspensión). Por ende, según sus integrantes,
                    nada puede ser afirmado como verdad.
                    <br />
                    <br />A criterio personal, considero que esta corriente deja una
                    enseñanza bastante importante y poderosa para la actualidad,
                    puesto que nos enseña que no deberíamos asumir las cosas de forma
                    arbitraria.
                </p>

                <hr />

                <h4 id="estoicos">Estoicos</h4>
                <p>
                    Una de las escuelas helenísticas más desarrolladas, digna de
                    iniciar con la siguiente frase del fundador de tan increíble
                    corriente, Zenón de Citio: "Ninguna pérdida debe sernos más
                    sensible que la del tiempo, puesto que es irreparable." Asimismo,
                    considera que el camino a la felicidad es dominando las pasiones
                    que perturban la vida y el equilibrio de los placeres. Además, uno
                    de los aspectos más relevantes es su propuesta de las cosas que
                    podemos controlar y las que no. De modo que en lo que concierne a
                    las que puedes controlar, deberías hacer lo mejor con ellas,
                    mientras que tomas el resto como nos la presenta la naturaleza.
                    <br />
                    <br />
                    De esta filosofía se desprenden grandes representantes como
                    Epicteto, Lucio Annea Séneca, Marco Aurelio Antonino, etc.
                    <br />
                    <br />
                    Por último, aquí algunas frases de Zenón de Citio:
                </p>
                <ul>
                    <li>
                        "No obres como si fueras a vivir mil años; obra como si el fin
                        estuviera muy cerca."
                    </li>
                    <li>
                        "La naturaleza nos ha dado dos oídos y una boca para enseñarnos
                        que vale más oír que hablar."
                    </li>
                </ul>
            </div>
        </div>
    )
}
