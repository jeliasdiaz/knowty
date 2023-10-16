import { ContentsTable, SectionTitle, TopWave } from "../../../components";
import { structureMatterItems } from ".";

export const PropertiesMatter = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Propiedades de la materia" />
      <ContentsTable items={structureMatterItems} />
      <div
        className="subjectCard mb-5 ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <p>
          Las propiedades de la materia se refieren a las características y
          comportamientos que describen cómo interactúa y se presenta la materia
          en sus diferentes estados. Estas propiedades pueden clasificarse en
          generales y específicas.
        </p>
        <hr />
        <h4>Generales</h4>
        <div>
          <p>
            <span className="fw-semibold">Masa:</span> cantidad de materia que
            contiene un cuerpo. <br />
          </p>
          <p>
            <span className="fw-semibold">Peso:</span> fuerza que ejerce la
            gravedad ante la materia. <br />
          </p>
          <p>
            <span className="fw-semibold">Volumen:</span> espacio que ocupa un
            cuerpo. <br />
          </p>
          <p>
            <span className="fw-semibold">Inercia:</span> característica que
            impide a la materia moverse sin intervención de una fuerza externa.{" "}
            <br />
          </p>
          <p>
            <span className="fw-semibold">Impenetrabilidad:</span> consiste en
            que un cuerpo no puede ocupar el espacio de otro cuerpo al mismo
            tiempo. <br />
          </p>
          <p>
            <span className="fw-semibold">Porosidad:</span> espacio que existe
            entre las partículas. <br />
            <br />
          </p>
        </div>
        <hr />
        <div>
          <h4>Específicas</h4>
          <p>
            <span className="fw-semibold">Punto de fusión:</span> es la
            temperatura a la que una sustancia sólida se funde, pasando al
            estado líquido. <br />
          </p>
          <p>
            <span className="fw-semibold">Punto de ebullición:</span> es la
            temperatura que un líquido debe alcanzar para pasar al estado
            gaseoso. <br />
          </p>
          <p>
            <span className="fw-semibold">Densidad:</span> relación entre la
            masa y el volumen de un cuerpo. Es elevada en la mayoría de sólidos,
            baja en los líquidos y, aún menor en los gases. <br />
            <br />
          </p>

          <h6>Conductividad</h6>
          <p>
            <span className="fw-semibold">Térmica:</span> capacidad de un
            material para transferir calor. <br />
          </p>
          <p>
            <span className="fw-semibold">Eléctrica:</span> capacidad de un
            material de conducir corriente eléctrica. Por ejemplo, los metales.{" "}
            <br /> <br />
          </p>

          <p>
            <span className="fw-semibold">Dilatación:</span> cambio de
            dimensiones que presenta la materia en diferentes estados al variar
            la temperatura con una presión constante. <br />
          </p>
          <p>
            <span className="fw-semibold">Ductilidad:</span> capacidad de un
            material de dejarse deformar hasta convertirse en hilos. <br />
          </p>
          <p>
            <span className="fw-semibold">Maleabilidad:</span> capacidad de
            ciertos materiales de convertirse en láminas. <br />
          </p>
          <p>
            <span className="fw-semibold">Dureza:</span> capacidad de
            resistencia de un material a ser rayado. <br />
          </p>
          <p>
            <span className="fw-semibold">Solubilidad:</span> propiedad que
            posee una sustancia para disolverse en otra sustancia. <br />
          </p>
          <p>
            <span className="fw-semibold">Elasticidad:</span> capacidad de un
            objeto a deformarse al ser sometido a una fuerza y volver a
            recuperar su forma original. <br />
          </p>
          <p>
            <span className="fw-semibold">Tenacidad:</span> resistencia de un
            material a romperse por efecto de una fuerza. <br />
          </p>
        </div>
      </div>
    </div>
  );
};
