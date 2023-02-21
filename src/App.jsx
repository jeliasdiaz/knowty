//* Operation
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

//* Principal components
import { Home, InfoPage, English, Search, Blog, NotFound, Icons, Statistic } from "./pages/Single-pages/";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

//* Chemistry
import { FirstChemistryPeriod, FourthChemistryPeriod, SecondChemistryPeriod, ThirdChemistryPeriod, ChemistryMenu } from "./pages/Chemistry";

//* Geometry
import { Circumference, Straight, Ellipse, Parable, GeometryMenu } from "./pages/Geometry";

//* Pyshic
import { Cinematic, Dinamic, CircularMovement, Energy, FluidMechanics, PhysicPractice, PhysicMenu } from "./pages/Physic/";

//* Social
import { FirstSocialPeriod, EconomicDoctrines, ArmedGroups, SocialMovements, SocialMenu } from "./pages/Social/";

//* Trigonometry
import { ThirdTrigonometryPeriod, SecondTrigonometryPeriod, TrigonometryMenu, TrigonometryPractice } from "./pages/Trigonometry/";

//* Blog
import { SpacedRepetition, StudentsResources } from "./pages/Blog/";

//* Icons credit card
import { InstallAppBtn } from "./components/InstallAppBtn";
import { ScrollBtn } from "./components/ScrollBtn";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //* Progress button 
  const [scrolled, setScrolled] = useState(false)

  const goTop = () => {
    window.scrollTo(0, 0)
  }

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
            <Route path="/iconos" element={<Icons />} />
            <Route path="/repeticion-espaciada" element={<SpacedRepetition />} />
            <Route path="/recursos-para-estudiantes" element={<StudentsResources />} />

            <Route path="/quimica_1" element={<FirstChemistryPeriod />} />
            <Route path="/quimica_2" element={<SecondChemistryPeriod />} />
            <Route path="/quimica" element={<ThirdChemistryPeriod />} />
            <Route path="/quimica_4" element={<FourthChemistryPeriod />} />

            <Route path="/ingles" element={<English />} />

            <Route path="/recta" element={<Straight />} />
            <Route path="/circunferencia" element={<Circumference />} />
            <Route path="/parabola" element={<Parable />} />
            <Route path="/elipse" element={<Ellipse />} />

            <Route path="/cinematica" element={<Cinematic />} />
            <Route path="/dinamica" element={<Dinamic />} />
            <Route path="/movimientocircular" element={<CircularMovement />} />
            <Route path="/energia" element={<Energy />} />
            <Route path="/mecanica-fluidos" element={<FluidMechanics />} />

            <Route path="/sociales_1" element={<FirstSocialPeriod />} />
            <Route path="/doctrinas-economicas" element={<EconomicDoctrines />} />
            <Route path="/movimientos-armados" element={<ArmedGroups />} />
            <Route path="/movimientos-sociales" element={<SocialMovements />} />

            <Route path="/estadistica" element={<Statistic />} />

            <Route path="/trigonometria_2" element={<SecondTrigonometryPeriod />} />
            <Route path="/trigonometria" element={<ThirdTrigonometryPeriod />} />

            <Route path="/fisica-menu" element={<PhysicMenu />} />
            <Route path="/geometria-menu" element={<GeometryMenu />} />
            <Route path="/quimica-menu" element={<ChemistryMenu />} />
            <Route path="/sociales-menu" element={<SocialMenu />} />
            <Route path="/trigonometria-menu" element={<TrigonometryMenu />} />

            <Route path="/fisica-practica" element={<PhysicPractice />} />
            <Route path="/trigonometria-practica" element={<TrigonometryPractice />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          {
            <InstallAppBtn />
          }

          {
            scrolled && !notMoved &&
            <ScrollBtn goTop={goTop} DIAMETER={DIAMETER} RADIUS={RADIUS} STROKE_WIDTH={STROKE_WIDTH} CIRCUMFERENCE={CIRCUMFERENCE} position={position} />
          }

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}


export default App;
