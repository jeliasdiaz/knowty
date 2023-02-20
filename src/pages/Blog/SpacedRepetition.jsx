import { TopWave } from "../../components/"

export const SpacedRepetition = () => {
  return (
    <div className="blogSectionContainer">
      <TopWave />
      <div className="blogSectionContainerTwo">
        <div className="blogSection ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <h2 className="pb-3">La mejor forma de estudiar para examenes</h2>
          <p>
            Probablemente, estés estudiando como la mayoría, ¿verdad? Horas y horas repasando todo antes de un examen. Es hora de mejorar ese mal hábito. <br /> <br />

            Ante todo, ¿cada cuanto te dispones a recordar lo que estudiaste? Si lo haces solo cuando vas a realizar un examen, o directamente no lo haces; debes saber que mediante un método conocido como repetición espaciada, te permite recordar más. <br /> <br />

            Dicha técnica, a forma de resumen, se basa en que el cerebro es malo para almacenar grandes cantidades de información. Provocando así que, el repasar conceptos cada cierto tiempo sea más efectivo. Todo esto distribuido en pequeñas sesiones de estudio. <br /><br />

            Con lo anterior, no me refiero a que simplemente abras tu libreta cada x cantidad de días y leas un poco. Lo crucial de esta técnica, es que debes esforzarte por recordar lo que entendiste. Dicho de otra forma, es estudiar un poco todos los días. <br /> <br />

            Por ejemplo, uno de los métodos que uso personalmente, es una vez he leído del tema y, apropiado de él de cierta forma, me dispongo a recordar y escribir lo que aprendí. Luego, repito el proceso en 2 días, luego en 7, hasta afianzarme con él. <br /> <br />


            He de añadir que puedes facilitar este proceso mediante flashcards, para ello hay aplicaciones como Anki que ya incluyen la repetición espaciada dentro de las notas. En el caso particular de Anki, en la parte inferior tendrás botones en los que deberás escoger que tanto recordaste de tu flashcard. <br /> <br />

            Por último, me gustaría recomendarte este video en el que se explica a profundidad la repetición espaciada y cómo puedes aplicarla. <br /><br />

            <button className="btn btn-secondary"><a href="https://youtu.be/pmbJHBrHP4o" target="_blank" rel="noreferrer" className="text-decoration-none text-white">Visitar</a></button>
          </p>
        </div>
      </div>
    </div>
  )
}
