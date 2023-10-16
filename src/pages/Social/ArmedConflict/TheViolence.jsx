import { armedConflictItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../components";

export const TheViolence = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="La Violencia" />
      <ContentsTable items={armedConflictItems} />

      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h4>Actores</h4>
        <ul>
          <li>
            <span className="fw-semibold">Pájaros:</span> Grupo armado ilegal
            que existió durante los años de La Violencia en Colombia. Estaba
            conformado por campesinos y habitantes de afiliación conservadora.
            Apoyado y financiado por las grandes élites conservadoras y la
            iglesia católica. Sus principales víctimas fueron campesinos
            liberales, obreros, sindicalistas, comunistas e indígenas que
            luchaban por su tierras y autonomía.
          </li>
          <li>
            <span className="fw-semibold">Chulavitas:</span> Llamados también
            "policía chulavita". Grupos armados irregulares respaldados por el
            gobierno colombiano conservador que fueron utilizados como una
            fuerza de oposición y persecución a las guerrillas liberales.
          </li>
          <li>
            <span className="fw-semibold">Cachiporros:</span> Los Cachiporros
            fue el nombre que recibieron los miembros del partido liberal.
            Durante La Violencia sufrieron persecución, desplazamientos forzados
            y violencia debido a su afiliación política.
          </li>
          <li>
            <span className="fw-semibold">Guerrillas gaitanistas:</span> Serie
            de grupos armados ilegales dispersos en diferentes regiones de
            Colombia asociadas con el Partido Liberal y seguidoras de las
            ideologías de Jorge Eliécer Gaitán.
          </li>
        </ul>
        <p>
          La Violencia en Colombia, sí, con V mayúscula, fue un período violento
          que tuvo lugar entre 1948 y 1958. Marcó un antes y después en la
          historia del país. Durante este período, hubo enfrentamientos armados,
          crisis sociales y políticas, asesinatos políticos, masacres y
          violencia generalizada en todo el país.
          <br />
          <br />
          La Violencia no estuvo motivada primariamente por conflictos de clases
          sociales o ideologías extranjeras, sino, por la lucha por el poder
          político entre los dos principales partidos políticos de la época en
          Colombia.
          <br />
          <br />
          <span className="fw-semibold">La guerra bipartidista</span> fue una
          serie de confrontaciones entre los seguidores del Partido Liberal y
          los del Partido conservador entre las décadas de 1940 y 1950.
          <br />
          <br />
          Esta guerra civil bipartidista surgió a partir de las tensiones
          políticas, económicas y sociales acumuladas a lo largo del siglo XX y
          finales del XIX. La Violencia se extendió por todo el país y dejó
          múltiples víctimas mortales y desplazados. Y llegó a su fin en 1958 a
          través de un acuerdo conocido como el "Frente Nacional”.
          <br />
          <br />
          Un plan electoral mortal por parte de los conservadores para acabar a
          toda costa con los votantes liberales a través de una persecución
          política resultó en numerosos asesinatos, masacres, amenazas,
          torturas, violaciones, desapariciones, robo, destrucción y
          expropiación de propiedades.
        </p>
      </div>
    </div>
  );
};
