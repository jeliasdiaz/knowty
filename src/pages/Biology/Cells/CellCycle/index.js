export * from "./CellCycle"
export * from "./Interface"
export * from "./PhaseM"

export const cellCycleItems = {
    "Ciclo celular": {
      path: "/celulas/ciclo-celular"
    },
    Interfase: {
      path: "/celulas/ciclo-celular/interfase"
    },
    "Fase M": {
      path: "/celulas/ciclo-celular/fase-m",
      subtopics: {
        Mitosis: {
          path: "/celulas/ciclo-celular/fase-m",
          scrollToId: "mitosis"
        },
        Citocinesis: {
          path: "/celulas/ciclo-celular/fase-m",
          scrollToId: "citocinesis"
        },
      }
    }
  };