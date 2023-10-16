export * from "./Nomenclature";
export * from "./Oxides";
export * from "./Hydroxides";
export * from "./Peroxides";
export * from "./Acids";
export * from "./Salts";

export const nomenclatureItems = {
  Nomenclaturas: {
    path: "/quimica/nomenclatura/nomenclaturas",
    subtopics: {
      Stock: {
        path: "/quimica/nomenclatura/nomenclaturas",
        scrollToId: "nomenStock",
      },
      Sistemática: {
        path: "/quimica/nomenclatura/nomenclaturas",
        scrollToId: "nomenSistematica",
      },
      Tradicional: {
        path: "/quimica/nomenclatura/nomenclaturas",
        scrollToId: "nomenTradicional",
      },
    },
  },
  Óxidos: {
    path: "/quimica/nomenclatura/oxidos",
    subtopics: {
      Básicos: {
        path: "/quimica/nomenclatura/oxidos",
        scrollToId: "oxidosBasicos",
      },
      Ácidos: {
        path: "/quimica/nomenclatura/oxidos",
        scrollToId: "oxidosAcidos",
      },
    },
  },
  Hidróxidos: {
    path: "/quimica/nomenclatura/hidroxidos",
  },
  Peróxidos: {
    path: "/quimica/nomenclatura/peroxidos",
  },
  Ácidos: {
    path: "/quimica/nomenclatura/acidos",
  },
  Sales: {
    path: "/quimica/nomenclatura/sales",
  },
};
