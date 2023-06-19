import ReactFlow, { Background, Controls, StepEdge } from 'reactflow'
import { CollapseInformation, MenuCard, SectionTitle, TopWave } from '../../../components'
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
            path: "/mitosis"
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

                <CollapseInformation name="Estructura y organelos celulares">
                    <CollapseInformation name="Mitocondria">
                        <p>
                            Son orgánelos celulares presentes en células eucariotas que se encargan de producir la mayor parte de la energía que necesita la célula a través del proceso de respiración celular. Están formadas por dos membranas (una externa y otra interna) y contienen su propio material genético, el ADN mitocondrial. Las mitocondrias se encuentran en casi todas las células eucariotas, incluyendo células musculares y neuronas, y se heredan exclusivamente de la madre en la mayoría de los organismos.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Retículo endoplasmático">
                        <p>
                            El retículo endoplásmico puede ser liso o rugoso dependiendo de la presencia de ribosomas unidos a su superficie. El RE liso se encarga de la síntesis de lípidos y de la detoxificación celular, mientras que el RE rugoso se encarga de la síntesis de proteínas que serán secretadas o insertadas en la membrana celular.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Aparato de Golgi">
                        <p>
                            Es un organelo celular presente en las células eucariotas que se encarga de la modificación, clasificación, empaquetamiento y distribución de proteínas y lípidos que han sido sintetizados en el retículo endoplásmico. También se encarga de la síntesis de carbohidratos complejos.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Lisosomas">
                        <p>
                            Organelos compuestos por enzimas digestivas capaces de degradar diversos materiales celulares, como proteínas, lípidos, carbohidratos, etc. Se encargan de la digestión y reciclaje de sustancias celulares, así como eliminar materiales externos a la célula que han sido fagocitados
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Ribosomas">
                        <p>
                            Son organelos presentes en todas las células, encargados de la síntesis de proteínas. Están compuestos por ARN ribosomal y proteínas. Generalmente se encuentran libres en el citoplassma o unidos a un retículo endoplasmático rugoso. Durante la síntesis de proteínas, los ribosomas leen la información genética del ADN y la traducen en una secuencia de aminoácidos para formar la proteína correspondiente.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Centrosomas">
                        <p>
                            Están compuestos por dos centriolos y una matriz pericentriolar/centrosfera que rodea al citoplasma. Los centrosomas son importantes para la organización de los microtúbulos, que son los componentes del citoesqueleto que se encargan del mantenimiento de la forma celular, el transporte intracelular y la división celular.
                            <br />
                            <br />
                            Los centriolos, que son cilindros formados por microtúbulos, se encuentran ubicados perpendicularmente entre sí dentro del centrosoma. La matriz pericentriolar es una red de proteínas que rodea a los centriolos y se encarga de la nucleación y organización de los microtúbulos.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Membrana nuclear">
                        <p>
                            La membrana nuclear, también conocida como envoltura nuclear, es una estructura presente en las células eucariotas que rodea el núcleo y separa su contenido del resto de la célula. Está compuesta por dos membranas lipídicas, la membrana nuclear interna y la membrana nuclear externa, que forman una doble capa. Entre estas dos membranas se encuentra el espacio perinuclear. La membrana nuclear tiene poros nucleares que permiten el intercambio de materiales entre el núcleo y el citoplasma.
                            <br />
                            <br />
                            La función principal de la membrana nuclear es proteger el material genético del núcleo, como el ADN, de las reacciones químicas que ocurren en otras partes de la célula. Actúa como una barrera física que evita que moléculas y proteínas del citoplasma ingresen al núcleo y dañen el ADN.
                        </p>
                    </CollapseInformation>
                    <hr />
                    <CollapseInformation name="Citoplasma">
                        <p>
                            El citoplasma es una parte fundamental de la célula y se refiere al contenido celular que se encuentra entre la membrana plasmática y el núcleo en las células eucariotas. Está compuesto principalmente por agua, sales y proteínas, y desempeña un papel crucial en diversas funciones celulares.
                        </p>
                    </CollapseInformation>
                </CollapseInformation>

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
