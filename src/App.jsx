//* Operation
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

//* Principal components
import { Home, InfoPage, Search, Blog, Credits, Statistic, Tools } from "./pages/Single-pages/";
import { Footer, Navbar, InstallAppBtn, ScrollBtn } from "./components";

//* Biology
import { CellCycle, Cells, ECells, Organelles, PCells } from "./pages/Biology/Cells";
import { BiologyMenu } from "./pages/Biology";

//* Chemistry
import { FirstChemistryPeriod, FourthChemistryPeriod, SecondChemistryPeriod, ThirdChemistryPeriod, ChemistryMenu } from "./pages/Chemistry";

//* English
import { English, Determinants, PastSimple, PresentSimple, SimpleFuture, ModalVerbs, PresentContinuous, PastContinuous, FutureContinuous } from "./pages/English";

//* Geometry
import { Circumference, Straight, Ellipse, Parable, GeometryMenu } from "./pages/Geometry";

//* Pyshic
import { Cinematic, Dinamic, CircularMovement, Energy, FluidMechanics, PhysicPractice, PhysicMenu } from "./pages/Physic/";

//* Social
import { FirstSocialPeriod, EconomicDoctrines, ArmedGroups, SocialMovements, SocialMenu, ExtraSocial } from "./pages/Social/";

//* Trigonometry
import { ThirdTrigonometryPeriod, SecondTrigonometryPeriod, TrigonometryMenu, TrigonometryPractice } from "./pages/Trigonometry/";

//* Philosophy
import { ClassicPhilosophers, PhilosophyMenu, IntroductionPhilosophy } from "./pages/Philosophy/";

//* Blog
import { SpacedRepetition, StudentsResources } from "./pages/Blog/";
import { EnglishMenu } from "./pages/English/EnglishMenu";
import { VectorPractice } from "./pages/Physic/Practice/VectorPractice";
import { MruPractice } from "./pages/Physic/Practice/MruPractice";

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
            <Route path="/organelos-celulares" element={ <Organelles />} />

            <Route path="/quimica_1" element={<FirstChemistryPeriod />} />
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
            <Route path="modal-verbs" element={<ModalVerbs />}/>

            <Route path="/recta" element={<Straight />} />
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

            <Route path="/sociales_1" element={<FirstSocialPeriod />} />
            <Route path="/doctrinas-economicas" element={<EconomicDoctrines />} />
            <Route path="/movimientos-armados" element={<ArmedGroups />} />
            <Route path="/movimientos-sociales" element={<SocialMovements />} />
            <Route path="/sociales-extra" element={<ExtraSocial />} />

            <Route path="/estadistica" element={<Statistic />} />

            <Route path="/trigonometria_2" element={<SecondTrigonometryPeriod />} />
            <Route path="/trigonometria" element={<ThirdTrigonometryPeriod />} />

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
            <Route path="/filosofos-clasicos" element={<ClassicPhilosophers />} />

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
