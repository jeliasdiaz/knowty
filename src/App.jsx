//* Operation
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

//* Principal components
import { Home, InfoPage, Search, Blog, Credits, Tools } from "./pages/Single-pages/";
import { Footer, Navbar, InstallAppBtn, ScrollBtn } from "./components";


//* Statistic

import {Statistic, CentralTendency, LocalizationMeasures, DispersionMeasures} from "./pages/Math/Statistic"
//* Biology
import { CellCycle, Cells, Centrosomes, Cytoplasm, ECells, EndoplasmicReticulum, GolgiApparatus, Interface, Lysosomes, Mitochondria, NuclearMembrane, PCells, PhaseM, Ribosomes } from "./pages/Biology/Cells";
import { BiologyMenu } from "./pages/Biology";

//* Chemistry
import { FirstChemistryPeriod, FourthChemistryPeriod, SecondChemistryPeriod, ThirdChemistryPeriod, ChemistryMenu, ChemistryHistory } from "./pages/Chemistry";

//* English
import { English, Determinants, PastSimple, PresentSimple, SimpleFuture, ModalVerbs, PresentContinuous, PastContinuous, FutureContinuous, EnglishMenu } from "./pages/English";

//* Geometry
import { Circumference, Straight, Ellipse, Parable, GeometryMenu, Triangle, ConicSections } from "./pages/Math/Geometry";

//* Pyshic
import { Cinematic, Dinamic, CircularMovement, Energy, FluidMechanics, PhysicPractice, PhysicMenu, VectorPractice, MruPractice, MruaPractice, FreeFallPractice, VerticalShot } from "./pages/Physic/";

//* Social
import { EconomicDoctrines, ArmedGroups, SocialMovements, SocialMenu, ExtraSocial, Ground, Territory, POT, WorldSystem } from "./pages/Social/";

//* Trigonometry
import { AnglesAndProperties, BasicTrigonometricNotions, TrigonometryMenu, TrigonometryPractice, SinTheorem, CosTheorem } from "./pages/Math/Trigonometry/";

//* Philosophy
import { PhilosophyMenu, IntroductionPhilosophy, Presocratics, HellenisticSchools, Socrates, Plato, Aristotle } from "./pages/Philosophy/";

//* Blog
import { SpacedRepetition, StudentsResources } from "./pages/Blog/";
import { MathMenu } from "./pages/Math/MathMenu";

//* Arithmetic
import { Arithmetic, FundamentalOperations, MCMMCD } from "./pages/Math/Arithmetic";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //* Progress button 
  const [scrolled, setScrolled] = useState(false)

  const goTop = () => window.scrollTo(0, 0)

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 300) {
      setScrolled(true);
    } else if (scroll === 0) {
      setTimeout(() => {
        setScrolled(false);
      }, 2000);
    }
  }

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
      setProgress(window.scrollY / (articleRef.current.getBoundingClientRect().height - window.innerHeight));
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

  const scrollBtnValues = { DIAMETER, STROKE_WIDTH, RADIUS, CIRCUMFERENCE, position, goTop }
  //* Cisable right click

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault()

    document.addEventListener("contextmenu", handleContextMenu)

    return () => document.removeEventListener("contextmenu", handleContextMenu)
  }, [])

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
            <Route path="/repeticion-espaciada" element={<SpacedRepetition />} />
            <Route path="/recursos-para-estudiantes" element={<StudentsResources />} />

            <Route path="/celulas" element={<Cells />} />
            <Route path="/celula-eucariota" element={<ECells />} />
            <Route path="/celula-procariota" element={<PCells />} />
            <Route path="/ciclo-celular" element={ <CellCycle />} />
            <Route path="/ciclo-celular/interfase" element={ <Interface />} />
            <Route path="/ciclo-celular/fase-m" element={ <PhaseM />} />
            <Route path="/organelos-celulares/mitocondria" element={ <Mitochondria />} />
            <Route path="/organelos-celulares/reticulo-endoplasmatico" element={ <EndoplasmicReticulum />} />
            <Route path="/organelos-celulares/aparato-golgi" element={ <GolgiApparatus />} />
            <Route path="/organelos-celulares/citoplasma" element={ <Cytoplasm />} />
            <Route path="/organelos-celulares/centrosoma" element={ <Centrosomes/>} />
            <Route path="/organelos-celulares/lisosomas" element={ <Lysosomes/>} />
            <Route path="/organelos-celulares/membrana-nuclear" element={ <NuclearMembrane/>} />
            <Route path="/organelos-celulares/ribosomas" element={ <Ribosomes/>} />

            <Route path="/quimica_1" element={<FirstChemistryPeriod />} />
            <Route path="/historia-quimica" element={<ChemistryHistory />} />
            <Route path="/quimica_2" element={<SecondChemistryPeriod />} />
            <Route path="/quimica" element={<ThirdChemistryPeriod />} />
            <Route path="/quimica_4" element={<FourthChemistryPeriod />} />

            <Route path="/ingles" element={<English />} />
            <Route path="/presente-simple" element={<PresentSimple />}/>
            <Route path="/pasado-simple" element={<PastSimple/>}/>
            <Route path="/futuro-simple" element={<SimpleFuture/>}/>
            <Route path="/futuro-continuo" element={<FutureContinuous/>}/>
            <Route path="/presente-continuo" element={<PresentContinuous/>}/>
            <Route path="/pasado-continuo" element={<PastContinuous/>}/>
            <Route path="/determinantes" element={<Determinants />}/>
            <Route path="/modal-verbs" element={<ModalVerbs />}/>

            <Route path="/matematicas-menu" element={<MathMenu />}/>
            <Route path="/matematicas/introduccion-aritmetica" element={<Arithmetic />}/>
            <Route path="/matematicas/operaciones-fundamentales" element={<FundamentalOperations/>}/>
            <Route path="/matematicas/mcm-y-mcd" element={<MCMMCD/>}/>

            <Route path="/recta" element={<Straight />} />
            <Route path="/triangulos" element={<Triangle />} />
            <Route path="/secciones-conicas" element={<ConicSections />} />
            <Route path="/circunferencia" element={<Circumference />} />
            <Route path="/parabola" element={<Parable />} />
            <Route path="/elipse" element={<Ellipse />} />

            <Route path="/cinematica" element={<Cinematic />} />
            <Route path="/dinamica" element={<Dinamic />} />
            <Route path="/movimiento-circular" element={<CircularMovement />} />
            <Route path="/energia" element={<Energy />} />
            <Route path="/mecanica-fluidos" element={<FluidMechanics />} />
            <Route  path="/vectores-practica" element={<VectorPractice/>} />
            <Route  path="/mru-practica" element={<MruPractice/>} />
            <Route  path="/mrua-practica" element={<MruaPractice/>} />
            <Route  path="/caida-libre-practica" element={<FreeFallPractice/>} />
            <Route  path="/tiro-vertical-practica" element={<VerticalShot/>} />

            <Route path="/doctrinas-economicas" element={<EconomicDoctrines />} />
            <Route path="/movimientos-guerrilleros" element={<ArmedGroups />} />
            <Route path="/movimientos-sociales" element={<SocialMovements />} />
            <Route path="/sociales-extra" element={<ExtraSocial />} />
            <Route path="/organizacion-territorial/suelos" element={<Ground />} />
            <Route path="/organizacion-territorial/territorio" element={<Territory />} />
            <Route path="/organizacion-territorial/pot" element={<POT />} />
            <Route path="/organizacion-territorial/sistema-mundo" element={<WorldSystem />} />

            <Route path="/estadistica" element={<Statistic />} />
            <Route path="/medidas-tendencia-central" element={<CentralTendency />} />
            <Route path="/medidas-localizacion" element={<LocalizationMeasures />} />
            <Route path="/medidas-dispersion" element={<DispersionMeasures />} />

            <Route path="/nociones-basicas-trigonometria" element={<BasicTrigonometricNotions />} />
            <Route path="/angulos-y-sus-propiedades" element={<AnglesAndProperties />} />
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
            <Route path="/trigonometria-practica" element={<TrigonometryPractice />} />

            <Route path="/introduccion-filosofia" element={<IntroductionPhilosophy />} />
            <Route path="/filosofia-antigua/presocraticos" element={<Presocratics />} />
            <Route path="/filosofia-antigua/escuelas-helenisticas" element={<HellenisticSchools />} />
            <Route path="/filosofia-antigua/socrates" element={<Socrates />} />
            <Route path="/filosofia-antigua/platon" element={<Plato />} />
            <Route path="/filosofia-antigua/aristoteles" element={<Aristotle />} />

            <Route path="/tools" element={<Tools />} />
            <Route path="/creditos" element={<Credits />} />

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
          {
            <InstallAppBtn />
          }

          {
            scrolled && !notMoved &&
            <ScrollBtn scrollBtnValues={scrollBtnValues} />
          }
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}


export default App;
