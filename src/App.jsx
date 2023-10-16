//* Operation
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

//* Principal components
import {
  Home,
  InfoPage,
  Search,
  Blog,
  Credits,
  Tools,
} from "./pages/Single-pages/";
import { Footer, Navbar, InstallAppBtn, ScrollBtn } from "./components";

//* Statistic

import {
  Statistic,
  CentralTendency,
  LocalizationMeasures,
  DispersionMeasures,
} from "./pages/Math/Statistic";
//* Biology
import {
  CellCycle,
  Cells,
  Centrosomes,
  Cytoplasm,
  ECells,
  EndoplasmicReticulum,
  GolgiApparatus,
  Interface,
  Lysosomes,
  Mitochondria,
  NuclearMembrane,
  PCells,
  PhaseM,
  Ribosomes,
} from "./pages/Biology/Cells";
import { BiologyMenu } from "./pages/Biology";

//* Chemistry
import {
  ChemistryMenu,
  ChemistryHistory,
  AtomicModels,
  PropertiesMatter,
  ChemicalBonds,
  IonicCompounds,
  CovalentCompounds,
  MixSeparation,
  Oxides,
  Nomenclature,
  Hydroxides,
  Peroxides,
  Acids,
  Salts,
  EquationBalancing,
  Stoichiometry,
  ReactiveLimitExcess,
  ReactivePurity,
  PerformanceReaction,
  GasLaws,
  PeriodicProperties,
  FamilyElements,
} from "./pages/Chemistry";

//* English
import {
  Determinants,
  PastSimple,
  PresentSimple,
  SimpleFuture,
  ModalVerbs,
  PresentContinuous,
  PastContinuous,
  FutureContinuous,
  EnglishMenu,
  PerfectTimes,
  VerbalTensesMenu,
  PassiveVoice,
  BeAbleTo,
} from "./pages/English";

//* Geometry
import {
  Circumference,
  Straight,
  Ellipse,
  Parable,
  GeometryMenu,
  Triangle,
  ConicSections,
} from "./pages/Math/Geometry";

//* Pyshic
import {
  Cinematic,
  Dinamic,
  CircularMovement,
  Energy,
  FluidMechanics,
  PhysicPractice,
  PhysicMenu,
  VectorPractice,
  MruPractice,
  MruaPractice,
  FreeFallPractice,
  VerticalShot,
  ParabolicShot,
  DinamicPractice,
  TorquePractice,
  WorkPractice,
} from "./pages/Physic/";

//* Social
import {
  SocialMovements,
  SocialMenu,
  ExtraSocial,
  Ground,
  Territory,
  POT,
  WorldSystem,
  GeneralAspects,
  Bogotazo,
  TheViolence,
  Liberalism,
  Neoliberalism,
  Marxism,
  Anarchism,
  Positivism,
  FARC,
  ELN,
  EPL,
  M19,
} from "./pages/Social/";

//* Trigonometry
import {
  AnglesAndProperties,
  TrigonometryMenu,
  TrigonometryPractice,
  SinTheorem,
  CosTheorem,
  TriangleClassification,
  PythagorasTheorem,
  TrigonometricRatios,
} from "./pages/Math/Trigonometry/";

//* Philosophy
import {
  PhilosophyMenu,
  IntroductionPhilosophy,
  Presocratics,
  HellenisticSchools,
  Socrates,
  Plato,
  Aristotle,
} from "./pages/Philosophy/";

//* Blog
import { SpacedRepetition, StudentsResources } from "./pages/Blog/";
import { MathMenu } from "./pages/Math/MathMenu";

//* Arithmetic
import {
  Arithmetic,
  FundamentalOperations,
  MCMMCD,
} from "./pages/Math/Arithmetic";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //* Progress button
  const [scrolled, setScrolled] = useState(false);

  const goTop = () => window.scrollTo(0, 0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 300) {
      setScrolled(true);
    } else if (scroll === 0) {
      setTimeout(() => {
        setScrolled(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //* Circular progress around the Progress Button
  const [progress, setProgress] = useState(0);
  const articleRef = useRef();

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!articleRef.current) return;
      setProgress(
        window.scrollY /
          (articleRef.current.getBoundingClientRect().height -
            window.innerHeight),
      );
    };
    updateHeight();
    window.addEventListener("scroll", updateHeight);
    return () => window.removeEventListener("scroll", updateHeight);
  }, []);

  const position = Math.max(1 - progress, 0);
  const notMoved = position === 1;

  const DIAMETER = 50;
  const STROKE_WIDTH = 4.3;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;

  const scrollBtnValues = {
    DIAMETER,
    STROKE_WIDTH,
    RADIUS,
    CIRCUMFERENCE,
    position,
    goTop,
  };
  //* Cisable right click

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);

    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div ref={articleRef}>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Outlet />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/busqueda" element={<Search />} />
            <Route path="/iconos" element={<Credits />} />
            <Route
              path="/repeticion-espaciada"
              element={<SpacedRepetition />}
            />
            <Route
              path="/recursos-para-estudiantes"
              element={<StudentsResources />}
            />

            <Route path="/celulas" element={<Cells />} />
            <Route path="/celula-eucariota" element={<ECells />} />
            <Route path="/celula-procariota" element={<PCells />} />
            <Route path="/celulas/ciclo-celular" element={<CellCycle />} />
            <Route
              path="/celulas/ciclo-celular/interfase"
              element={<Interface />}
            />
            <Route path="/celulas/ciclo-celular/fase-m" element={<PhaseM />} />
            <Route
              path="/celulas/organelos-celulares/mitocondria"
              element={<Mitochondria />}
            />
            <Route
              path="/celulas/organelos-celulares/reticulo-endoplasmatico"
              element={<EndoplasmicReticulum />}
            />
            <Route
              path="/celulas/organelos-celulares/aparato-golgi"
              element={<GolgiApparatus />}
            />
            <Route
              path="/celulas/organelos-celulares/citoplasma"
              element={<Cytoplasm />}
            />
            <Route
              path="/celulas/organelos-celulares/centrosoma"
              element={<Centrosomes />}
            />
            <Route
              path="/celulas/organelos-celulares/lisosomas"
              element={<Lysosomes />}
            />
            <Route
              path="/celulas/organelos-celulares/membrana-nuclear"
              element={<NuclearMembrane />}
            />
            <Route
              path="/celulas/organelos-celulares/ribosomas"
              element={<Ribosomes />}
            />

            <Route path="/historia-quimica" element={<ChemistryHistory />} />
            <Route
              path="/quimica/estructura-materia/modelos-atomicos"
              element={<AtomicModels />}
            />
            <Route
              path="/quimica/estructura-materia/propiedades-materia"
              element={<PropertiesMatter />}
            />
            <Route
              path="/quimica/estructura-materia/separacion-mezclas"
              element={<MixSeparation />}
            />
            <Route
              path="/quimica/estructura-materia/enlaces-quimicos"
              element={<ChemicalBonds />}
            />
            <Route
              path="/quimica/estructura-materia/compuestos-ionicos"
              element={<IonicCompounds />}
            />
            <Route
              path="/quimica/estructura-materia/compuestos-covalentes"
              element={<CovalentCompounds />}
            />
            <Route
              path="/quimica/estructura-materia/propiedades-periodicas"
              element={<PeriodicProperties />}
            />
            <Route
              path="/quimica/nomenclatura/nomenclaturas"
              element={<Nomenclature />}
            />
            <Route path="/quimica/nomenclatura/oxidos" element={<Oxides />} />
            <Route
              path="/quimica/nomenclatura/hidroxidos"
              element={<Hydroxides />}
            />
            <Route
              path="/quimica/nomenclatura/peroxidos"
              element={<Peroxides />}
            />
            <Route path="/quimica/nomenclatura/acidos" element={<Acids />} />
            <Route path="/quimica/nomenclatura/sales" element={<Salts />} />
            <Route
              path="/quimica/reacciones-quimicas/balanceo"
              element={<EquationBalancing />}
            />
            <Route
              path="/quimica/reacciones-quimicas/estequiometria"
              element={<Stoichiometry />}
            />
            <Route
              path="/quimica/reacciones-quimicas/reactivo-limite-exceso"
              element={<ReactiveLimitExcess />}
            />
            <Route
              path="/quimica/reacciones-quimicas/pureza-reactivo"
              element={<ReactivePurity />}
            />
            <Route
              path="/quimica/reacciones-quimicas/rendimiento"
              element={<PerformanceReaction />}
            />
            <Route
              path="/quimica/reacciones-quimicas/leyes-gases"
              element={<GasLaws />}
            />
            <Route
              path="/quimica/familia-elementos"
              element={<FamilyElements />}
            />

            <Route
              path="/ingles/tiempos-verbales"
              element={<VerbalTensesMenu />}
            />
            <Route
              path="/ingles/tiempos-verbales/presente-simple"
              element={<PresentSimple />}
            />
            <Route
              path="/ingles/tiempos-verbales/pasado-simple"
              element={<PastSimple />}
            />
            <Route
              path="/ingles/tiempos-verbales/futuro-simple"
              element={<SimpleFuture />}
            />
            <Route
              path="/ingles/tiempos-verbales/presente-continuo"
              element={<PresentContinuous />}
            />
            <Route
              path="/ingles/tiempos-verbales/pasado-continuo"
              element={<PastContinuous />}
            />
            <Route
              path="/ingles/tiempos-verbales/futuro-continuo"
              element={<FutureContinuous />}
            />
            <Route
              path="/ingles/tiempos-verbales/tiempos-perfectos"
              element={<PerfectTimes />}
            />
            <Route path="/ingles/determinantes" element={<Determinants />} />
            <Route path="/ingles/modal-verbs" element={<ModalVerbs />} />
            <Route path="/ingles/voz-pasiva" element={<PassiveVoice />} />
            <Route path="/ingles/be-able-to" element={<BeAbleTo />} />

            <Route path="/matematicas-menu" element={<MathMenu />} />
            <Route
              path="/matematicas/introduccion-aritmetica"
              element={<Arithmetic />}
            />
            <Route
              path="/matematicas/operaciones-fundamentales"
              element={<FundamentalOperations />}
            />
            <Route path="/matematicas/mcm-y-mcd" element={<MCMMCD />} />

            <Route path="/recta" element={<Straight />} />
            <Route path="/triangulos" element={<Triangle />} />
            <Route path="/secciones-conicas" element={<ConicSections />} />
            <Route path="/circunferencia" element={<Circumference />} />
            <Route path="/parabola" element={<Parable />} />
            <Route path="/elipse" element={<Ellipse />} />

            <Route path="/fisica/cinematica" element={<Cinematic />} />
            <Route path="/fisica/dinamica" element={<Dinamic />} />
            <Route
              path="/fisica/movimiento-circular"
              element={<CircularMovement />}
            />
            <Route path="/fisica/energia" element={<Energy />} />
            <Route
              path="/fisica/mecanica-fluidos"
              element={<FluidMechanics />}
            />
            <Route
              path="/fisica/vectores-practica"
              element={<VectorPractice />}
            />
            <Route path="/fisica/mru-practica" element={<MruPractice />} />
            <Route path="/fisica/mrua-practica" element={<MruaPractice />} />
            <Route
              path="/fisica/caida-libre-practica"
              element={<FreeFallPractice />}
            />
            <Route
              path="/fisica/tiro-vertical-practica"
              element={<VerticalShot />}
            />
            <Route
              path="/fisica/tiro-parabolico-practica"
              element={<ParabolicShot />}
            />
            <Route
              path="/fisica/dinamica-practica"
              element={<DinamicPractice />}
            />
            <Route
              path="/fisica/torque-practica"
              element={<TorquePractice />}
            />
            <Route path="/fisica/trabajo-practica" element={<WorkPractice />} />

            <Route
              path="/sociales/doctrinas-economicas/liberalismo"
              element={<Liberalism />}
            />
            <Route
              path="/sociales/doctrinas-economicas/neoliberalismo"
              element={<Neoliberalism />}
            />
            <Route
              path="/sociales/doctrinas-economicas/marxismo"
              element={<Marxism />}
            />
            <Route
              path="/sociales/doctrinas-economicas/anarquismo"
              element={<Anarchism />}
            />
            <Route
              path="/sociales/doctrinas-economicas/positivismo"
              element={<Positivism />}
            />
            <Route
              path="/sociales/movimientos-guerrilleros/farc"
              element={<FARC />}
            />
            <Route
              path="/sociales/movimientos-guerrilleros/eln"
              element={<ELN />}
            />
            <Route
              path="/sociales/movimientos-guerrilleros/epl"
              element={<EPL />}
            />
            <Route
              path="/sociales/movimientos-guerrilleros/m-19"
              element={<M19 />}
            />
            <Route
              path="/sociales/movimientos-sociales"
              element={<SocialMovements />}
            />
            <Route path="/sociales/sociales-extra" element={<ExtraSocial />} />
            <Route
              path="/sociales/organizacion-territorial/suelos"
              element={<Ground />}
            />
            <Route
              path="/sociales/organizacion-territorial/territorio"
              element={<Territory />}
            />
            <Route
              path="/sociales/organizacion-territorial/pot"
              element={<POT />}
            />
            <Route
              path="/sociales/organizacion-territorial/sistema-mundo"
              element={<WorldSystem />}
            />
            <Route
              path="/sociales/conflicto-armado/aspectos-generales"
              element={<GeneralAspects />}
            />
            <Route
              path="/sociales/conflicto-armado/bogotazo"
              element={<Bogotazo />}
            />
            <Route
              path="/sociales/conflicto-armado/la-violencia"
              element={<TheViolence />}
            />

            <Route path="/estadistica" element={<Statistic />} />
            <Route
              path="/medidas-tendencia-central"
              element={<CentralTendency />}
            />
            <Route
              path="/medidas-localizacion"
              element={<LocalizationMeasures />}
            />
            <Route
              path="/medidas-dispersion"
              element={<DispersionMeasures />}
            />

            <Route
              path="/nociones-basicas-trigonometria/triangulos"
              element={<TriangleClassification />}
            />
            <Route
              path="/nociones-basicas-trigonometria/teorema-pitagoras"
              element={<PythagorasTheorem />}
            />
            <Route
              path="/nociones-basicas-trigonometria/razones-trigonometricas"
              element={<TrigonometricRatios />}
            />
            <Route
              path="/angulos-y-sus-propiedades"
              element={<AnglesAndProperties />}
            />
            <Route path="/teorema-seno" element={<SinTheorem />} />
            <Route path="/teorema-coseno" element={<CosTheorem />} />

            <Route path="/biologia-menu" element={<BiologyMenu />} />
            <Route path="/fisica-menu" element={<PhysicMenu />} />
            <Route path="/geometria-menu" element={<GeometryMenu />} />
            <Route path="/quimica-menu" element={<ChemistryMenu />} />
            <Route path="/sociales-menu" element={<SocialMenu />} />
            <Route path="/trigonometria-menu" element={<TrigonometryMenu />} />
            <Route path="/filosofia-menu" element={<PhilosophyMenu />} />
            <Route path="/ingles-menu" element={<EnglishMenu />} />

            <Route path="/fisica-practica" element={<PhysicPractice />} />
            <Route
              path="/trigonometria-practica"
              element={<TrigonometryPractice />}
            />

            <Route
              path="/introduccion-filosofia"
              element={<IntroductionPhilosophy />}
            />
            <Route
              path="/filosofia-antigua/presocraticos"
              element={<Presocratics />}
            />
            <Route
              path="/filosofia-antigua/escuelas-helenisticas"
              element={<HellenisticSchools />}
            />
            <Route path="/filosofia-antigua/socrates" element={<Socrates />} />
            <Route path="/filosofia-antigua/platon" element={<Plato />} />
            <Route
              path="/filosofia-antigua/aristoteles"
              element={<Aristotle />}
            />

            <Route path="/tools" element={<Tools />} />
            <Route path="/creditos" element={<Credits />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {<InstallAppBtn />}

          {scrolled && !notMoved && (
            <ScrollBtn scrollBtnValues={scrollBtnValues} />
          )}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
