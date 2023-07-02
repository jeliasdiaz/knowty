import ReactFlow, { Background, Controls, StepEdge } from 'reactflow'
import { MenuCard, SectionTitle, TopWave } from '../../../components'
import { useNavigate } from 'react-router-dom';



const Flow = () => {
    const initialNodes = [
        {
            id: '1',
            position: { x: -150, y: 200 },
            data: { label: 'Ciclo celuar' },
            targetPosition: "left",
            sourcePosition: "right",
            style: {border: '2px solid #2b7ea1'},
            path: "/ciclo-celular"
        },
        {
            id: '2',
            position: { x: 100, y: 50 },
            data: { label: 'Interfase' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '3',
            position: { x: 100, y: 250 },
            data: { label: 'Fase M' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"

        },
        {
            id: '4',
            position: { x: 300, y: 0 },
            data: { label: 'Fase G1' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '5',
            position: { x: 300, y: 50 },
            data: { label: 'Fase S' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '6',
            position: { x: 300, y: 100 },
            data: { label: 'Fase G2' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '7',
            position: { x: 300, y: 220 },
            data: { label: 'Mitosis' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '8',
            position: { x: 300, y: 300 },
            data: { label: 'Citocinesis' },
            targetPosition: "left",
            sourcePosition: "right",
            path: "/ciclo-celular"
        },
        {
            id: '9',
            position: { x: 500, y: -80 },
            data: { label: 'Célula crece y genera organulos, produce bastantes proteinas' },
            targetPosition: "left",
            sourcePosition: "right",
            style: {width: '160px'},

        },
        {
            id: '10',
            position: { x: 700, y: -100 },
            data: { label: 'Células pueden entrar en un estado de "reposo" en el que la célula no se dividirá' },
            style: {width: '200px'},
            targetPosition: "left",
        },
        {
            id: '11',
            position: { x: 550, y: 100 },
            data: { label: 'La célula continúa creciendo y sintetizando proteínas necesarias para la división celular' },
            style: {width: '220px'},
            targetPosition: "left",
            sourcePosition: "right",
        },
        {
            id: '12',
            position: { x: 850, y: 100 },
            data: { label: 'Además, se lleva a cabo una verificación de los daños o errores en el ADN duplicado durante la fase S' },
            style: {width: '220px'},
            targetPosition: "left",
        },
        {
            id: '13',
            position: { x: 550, y: 20 },
            data: { label: 'Se replica la información genética' },
            style: {width: '220px'},
            targetPosition: "left",
        },
        {
            id: '14',
            position: { x: 550, y: 220 },
            data: { label: 'Es un proceso de división celular que hacen las celulas somaticas, en este proceso se generan 2 celulas hijas a partir de una que les antecede, estas celulas tienen la misma carga genetica que la madre, siendo diploides' },
            style: {width: '320px'},
            targetPosition: "left",
        },
        {
            id: '15',
            position: { x: 550, y: 380 },
            data: { label: 'Proceso final de la división celular,  se divide el citoplasma de la célula madre igualitariamente entre las hijass' },
            style: {width: '320px'},
            targetPosition: "left",
        },
        {
            id: '16',
            position: { x: -400, y: 200 },
            data: { label: 'La célula' },
            style: {border: '2px solid #2b7ea1', background: "#2b7ea1", color: "white", fontWeight: "bold"},
            targetPosition: "left",
            sourcePosition: "right",
        },


    ];
    const initialEdges = [
        { id: '1-2', source: '1', target: '2', type: {step: StepEdge}},
        { id: '1-3', source: '1', target: '3', type: {step: StepEdge}},
        { id: '2-4', source: '2', target: '4', type: {step: StepEdge}},
        { id: '2-5', source: '2', target: '5', type: {step: StepEdge}},
        { id: '2-6', source: '2', target: '6', type: {step: StepEdge}},
        { id: '3-7', source: '3', target: '7', type: {step: StepEdge}},
        { id: '3-8', source: '3', target: '8', type: {step: StepEdge}},
        { id: '4-9', source: '4', target: '9', type: {step: StepEdge}},
        { id: '9-10', source: '9', target: '10', type: {step: StepEdge}},
        { id: '6-11', source: '6', target: '11', type: {step: StepEdge}},
        { id: '11-12', source: '11', target: '12', type: {step: StepEdge}},
        { id: '5-13', source: '5', target: '13', type: {step: StepEdge}},
        { id: '7-15', source: '7', target: '14', type: {step: StepEdge}},
        { id: '8-15', source: '8', target: '15', type: {step: StepEdge}},
        { id: '16-1', source: '16', target: '1', type: {step: StepEdge}},
    ];



    const navigate = useNavigate()
    const handleNodeClick = (event, node) => {
        const clickedNodeId = node.id;
        const clickedNode = initialNodes.find((n) => n.id === clickedNodeId);

        if (clickedNode && clickedNode.path) {
            navigate(clickedNode.path)
        }
    };

    return (
        <div style={{ height: '50vh' }}>
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
    )
}

export const Cells = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Células" />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>La célula</h3>
                <br />
                <Flow />
                <br />
                <p>
                    Es el nombre dado por Robert Hooke a la unidad básica de la vida, mientras observó en el microscopio de una lámina de corcho, pequeñas celdas/cavidades que tenían forma similar a las celdas de un panal de abejas. Con el paso del tiempo, el concepto de célula fue evolucionando, describiendo características de esta. Entre las cuales tenemos la capacidad autosostenerse, presencia de una membrana plasmática, reproducirse mediante procesos de división celular, etc.
                    <br /><br />
                    A partir de esto, los seres vivos pueden clasificarse según la cantidad de células que poseen, ya sea unicelular (una célula) o pluricelular (dos o más células). Sin embargo, ambos tipos caracterizados por poseer en su interior organelos especializados en cumplir funciones específicas para el correcto funcionamiento de la célula. Aunque los organelos no sean los mismos para todos los tipos de célula existentes, Eucariotas y Procariotas.
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

                <MenuCard url="/organelos-celulares" img="aparatoGolgi.png" title="Estructura y organelos" imgSize="w-50" />

                <MenuCard url="/ciclo-celular" img="cicloCelular.png" title="Ciclo Celular" imgSize="w-50" />

                <MenuCard url="/celula-eucariota" img="celulaAnimal.png" title="Células Eucariotas" imgSize="w-50"/>

                <MenuCard url="/celula-procariota" img="bacteria.png" title="Células Procariotas" imgSize="w-50" />
            </div>
        </div>
    )
}
