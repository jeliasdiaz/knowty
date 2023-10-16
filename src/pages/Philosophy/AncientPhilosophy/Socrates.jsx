import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import { ancientPhilosophyItems } from ".";

export const Socrates = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Sócrates" />
      <ContentsTable items={ancientPhilosophyItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h3>Sócrates</h3>
        <p>
          Fue un filósofo griego que vivió en Atenas durante el siglo V a.C. Sus
          costumbres, pensamientos y creencias tuvieron una gran influencia en
          el pensamiento occidental, siendo incluso considerado por algunos como
          uno de los fundadores de la filosofía occidental.
          <br />
          <br />
          Sócrates no escribió ningún texto, la mayoría de su pensamiento lo
          conocemos debido a escritos de sus discípulos, como, por ejemplo:
          Platón. Asimismo, se interesó por la ética y la moral. Se le atribuye
          el método "Mayéutica", que surge debido a que la mamá de Sócrates era
          partera, y este, al observar que la función de su madre era ayudar a
          parir y no dar a luz ella en sí; comenzó a idear tal método, de manera
          que las personas "parieran" su propia verdad, esto es, llegar a su
          propio conocimiento. Además, consistió en hacer preguntas a la otra
          persona en aras de hacer que esta llegue a la verdad por si misma.
          <br />
          <br />
          Cabe resaltar que Sócrates vivió en una época contemporánea a los
          sofistas (grupo de pensadores enfocados en la enseñanza de la retórica
          y persuasión sobre la búsqueda de la verdad), a los que criticó por su
          moral, política y la manera de buscar remuneración mediante sus
          "enseñanzas".
        </p>

        <h4>Frases</h4>
        <ul>
          <li>
            Cada ser humano tiende dentro de sí dar a luz conocimiento
            (Mayéutica).
          </li>
          <li>Es mejor sufrir una injusticia que cometerla.</li>
          <li>Todo vicio es el resultado de la ignorancia.</li>
          <li>La virtud es conocimiento.</li>
        </ul>
      </div>
    </div>
  );
};
