import ReactFlow, { Background, Controls } from "reactflow";
import { SectionTitle, TopWave } from "../../../components";
import { useNavigate } from "react-router-dom";
import { initialEdges, initialNodes } from "./data/initialNodesEdges";
import { renderMenuCards } from "../../../helpers/renderMenuCards";
import menuCards from "./data/menuCards.json";

const Flow = () => {
  const navigate = useNavigate();
  const handleNodeClick = (event, node) => {
    const clickedNodeId = node.id;
    const clickedNode = initialNodes.find((n) => n.id === clickedNodeId);

    if (clickedNode && clickedNode.path) {
      navigate(clickedNode.path);
    }
  };

  return (
    <div style={{ height: "50vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeClick={handleNodeClick}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export const Cells = () => {
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Células" />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h3>La célula</h3>
        <br />
        <Flow />
        <br />
        <p>
          Es el nombre dado por Robert Hooke a la unidad básica de la vida,
          mientras observó en el microscopio de una lámina de corcho, pequeñas
          celdas/cavidades que tenían forma similar a las celdas de un panal de
          abejas. Con el paso del tiempo, el concepto de célula fue
          evolucionando, describiendo características de esta. Entre las cuales
          tenemos la capacidad autosostenerse, presencia de una membrana
          plasmática, reproducirse mediante procesos de división celular, etc.
          <br />
          <br />A partir de esto, los seres vivos pueden clasificarse según la
          cantidad de células que poseen, ya sea unicelular (una célula) o
          pluricelular (dos o más células). Sin embargo, ambos tipos
          caracterizados por poseer en su interior organelos especializados en
          cumplir funciones específicas para el correcto funcionamiento de la
          célula. Aunque los organelos no sean los mismos para todos los tipos
          de célula existentes, Eucariotas y Procariotas.
        </p>
        <hr />

        {/* <hr />
                <CollapseInformation name="Conceptos relacionados">
                    <CollapseInformation name="Células somáticas">
                        <p>
                            Las células somáticas son todas las células del cuerpo, excepto las células germinales, que son los óvulos y los espermatozoides. Las células somáticas son diploides, lo que significa que contienen dos conjuntos de cromosomas, uno heredado de cada progenitor. Estas células constituyen la mayoría de las células en el organismo y se encuentran en los huesos, la piel, los tejidos, los órganos y la sangre.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Células sexuales">
                        <p>
                            Las células somáticas son todas las células del cuerpo, excepto las células germinales, que son los óvulos y los espermatozoides. Las células somáticas son diploides, lo que significa que contienen dos conjuntos de cromosomas, uno heredado de cada progenitor. Estas células constituyen la mayoría de las células en el organismo y se encuentran en los huesos, la piel, los tejidos, los órganos y la sangre.
                        </p>
                    </CollapseInformation>
                    
                </CollapseInformation> */}
      </div>

      <div className="mobileSubjectMenu justify-content-center mt-5">
        {renderMenuCards(menuCards)}
      </div>
    </div>
  );
};
