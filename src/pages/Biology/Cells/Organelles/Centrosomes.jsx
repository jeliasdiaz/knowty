import React from "react";
import { organellesItems } from ".";
import { ContentsTable, SectionTitle, TopWave } from "../../../../components";

export const Centrosomes = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Centrosomas" />

      <ContentsTable items={organellesItems} />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div className="d-flex justify-content-center">
          <img
            src="/img/celulaAnimal.png"
            alt="Celula animal"
            className="w-50"
          />
        </div>
        <h4>Centrosomas</h4>
        <p>
          Están compuestos por dos centriolos y una matriz
          pericentriolar/centrosfera que rodea al citoplasma. Los centrosomas
          son importantes para la organización de los microtúbulos, que son los
          componentes del citoesqueleto que se encargan del mantenimiento de la
          forma celular, el transporte intracelular y la división celular.
          <br />
          <br />
          Los centriolos, que son cilindros formados por microtúbulos, se
          encuentran ubicados perpendicularmente entre sí dentro del centrosoma.
          La matriz pericentriolar es una red de proteínas que rodea a los
          centriolos y se encarga de la nucleación y organización de los
          microtúbulos.
        </p>
        <img
          src="/img/Centrosoma.png"
          className="w-50"
          alt="Centrosoma imagen"
        />
      </div>
    </div>
  );
};
