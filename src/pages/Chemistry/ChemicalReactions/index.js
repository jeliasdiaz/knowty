export * from "./EquationBalancing";
export * from "./Stoichiometry";
export * from "./ReactiveLimitExcess";
export * from "./ReactivePurity";
export * from "./PerformanceReaction";
export * from "./GasLaws";

export const chemicalReactionsItems = {
  "Balanceo de una ecuación": {
    path: "/quimica/reacciones-quimicas/balanceo",
    subtopics: {
      Tanteo: {
        path: "/quimica/reacciones-quimicas/balanceo",
        scrollToId: "balanceoTanteo",
      },
      "Método algebraico": {
        path: "/quimica/reacciones-quimicas/balanceo",
        scrollToId: "balanceoAlgebraico",
      },
      "Óxido reducción": {
        path: "/quimica/reacciones-quimicas/balanceo",
        scrollToId: "balanceoRedox",
      },
    },
  },
  Estequiometría: {
    path: "/quimica/reacciones-quimicas/estequiometria",
  },
  "Reactivo límite y en exceso": {
    path: "/quimica/reacciones-quimicas/reactivo-limite-exceso",
  },
  "Pureza de un reactivo": {
    path: "/quimica/reacciones-quimicas/pureza-reactivo",
  },
  Rendimiento: {
    path: "/quimica/reacciones-quimicas/rendimiento",
  },
  "Leyes de los gases": {
    path: "/quimica/reacciones-quimicas/leyes-gases",
    subtopics: {
      Boyle: {
        path: "/quimica/reacciones-quimicas/leyes-gases",
        scrollToId: "leyBoyle",
      },
      Charles: {
        path: "/quimica/reacciones-quimicas/leyes-gases",
        scrollToId: "leyCharles",
      },
      "Gay-Lussac": {
        path: "/quimica/reacciones-quimicas/leyes-gases",
        scrollToId: "leyGayLussac",
      },
    },
  },
};
