import { StepEdge } from "reactflow";

export const initialNodes = [
  {
    id: "1",
    position: { x: -150, y: 200 },
    data: { label: "Ciclo celuar" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { border: "2px solid #2b7ea1" },
    path: "/celulas/ciclo-celular",
  },
  {
    id: "2",
    position: { x: 100, y: 50 },
    data: { label: "Interfase" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "3",
    position: { x: 100, y: 250 },
    data: { label: "Fase M" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "4",
    position: { x: 300, y: 0 },
    data: { label: "Fase G1" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "5",
    position: { x: 300, y: 50 },
    data: { label: "Fase S" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "6",
    position: { x: 300, y: 100 },
    data: { label: "Fase G2" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "7",
    position: { x: 300, y: 220 },
    data: { label: "Mitosis" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "8",
    position: { x: 300, y: 300 },
    data: { label: "Citocinesis" },
    targetPosition: "left",
    sourcePosition: "right",
    path: "/celulas/ciclo-celular",
  },
  {
    id: "9",
    position: { x: 500, y: -80 },
    data: {
      label: "Célula crece y genera organulos, produce bastantes proteinas",
    },
    targetPosition: "left",
    sourcePosition: "right",
    style: { width: "160px" },
  },
  {
    id: "10",
    position: { x: 700, y: -100 },
    data: {
      label:
        'Células pueden entrar en un estado de "reposo" en el que la célula no se dividirá',
    },
    style: { width: "200px" },
    targetPosition: "left",
  },
  {
    id: "11",
    position: { x: 550, y: 100 },
    data: {
      label:
        "La célula continúa creciendo y sintetizando proteínas necesarias para la división celular",
    },
    style: { width: "220px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "12",
    position: { x: 850, y: 100 },
    data: {
      label:
        "Además, se lleva a cabo una verificación de los daños o errores en el ADN duplicado durante la fase S",
    },
    style: { width: "220px" },
    targetPosition: "left",
  },
  {
    id: "13",
    position: { x: 550, y: 20 },
    data: { label: "Se replica la información genética" },
    style: { width: "220px" },
    targetPosition: "left",
  },
  {
    id: "14",
    position: { x: 550, y: 220 },
    data: {
      label:
        "Es un proceso de división celular que hacen las celulas somaticas, en este proceso se generan 2 celulas hijas a partir de una que les antecede, estas celulas tienen la misma carga genetica que la madre, siendo diploides",
    },
    style: { width: "320px" },
    targetPosition: "left",
  },
  {
    id: "15",
    position: { x: 550, y: 380 },
    data: {
      label:
        "Proceso final de la división celular,  se divide el citoplasma de la célula madre igualitariamente entre las hijass",
    },
    style: { width: "320px" },
    targetPosition: "left",
  },
  {
    id: "16",
    position: { x: -400, y: 200 },
    data: { label: "La célula" },
    style: {
      border: "2px solid #2b7ea1",
      background: "#2b7ea1",
      color: "white",
      fontWeight: "bold",
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
];
export const initialEdges = [
  { id: "1-2", source: "1", target: "2", type: { step: StepEdge } },
  { id: "1-3", source: "1", target: "3", type: { step: StepEdge } },
  { id: "2-4", source: "2", target: "4", type: { step: StepEdge } },
  { id: "2-5", source: "2", target: "5", type: { step: StepEdge } },
  { id: "2-6", source: "2", target: "6", type: { step: StepEdge } },
  { id: "3-7", source: "3", target: "7", type: { step: StepEdge } },
  { id: "3-8", source: "3", target: "8", type: { step: StepEdge } },
  { id: "4-9", source: "4", target: "9", type: { step: StepEdge } },
  { id: "9-10", source: "9", target: "10", type: { step: StepEdge } },
  { id: "6-11", source: "6", target: "11", type: { step: StepEdge } },
  { id: "11-12", source: "11", target: "12", type: { step: StepEdge } },
  { id: "5-13", source: "5", target: "13", type: { step: StepEdge } },
  { id: "7-15", source: "7", target: "14", type: { step: StepEdge } },
  { id: "8-15", source: "8", target: "15", type: { step: StepEdge } },
  { id: "16-1", source: "16", target: "1", type: { step: StepEdge } },
];
