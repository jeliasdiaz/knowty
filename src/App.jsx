import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Cinematica } from "./pages/Fisica/Cinematica";
import { Dinamica } from "./pages/Fisica/Dinamica";
import { Energia } from "./pages/Fisica/Energia";
import MecanicaFluidos from "./pages/Fisica/MecanicaFluidos"
import { Footer } from "./components/Footer";
import { MovimientoCircular } from "./pages/Fisica/MovimientoCircular";
import { Navbar } from "./components/Navbar";
import { Geometria } from "./pages/Geometria/Geometria";
import Geometria1 from "./pages/Geometria/Geometria1";
import Geometria2 from "./pages/Geometria/Geometria2";
import Geometria4 from "./pages/Geometria/Geometria4";
import { Home } from "./pages/Home";
import { Trigonometria } from "./pages/Trigonometria/Trigonometria";
import { Trigonometria2 } from "./pages/Trigonometria/Trigonometria2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Estadistica } from "./pages/Estadistica";
import Ingles from "./pages/Ingles";
import Quimica from "./pages/Quimica/Quimica";
import Quimica1 from "./pages/Quimica/Quimica1";
import Quimica2 from "./pages/Quimica/Quimica2";
import Quimica4 from "./pages/Quimica/Quimica4";
import Sociales1 from "./pages/Sociales/Sociales1";
import Sociales from "./pages/Sociales/Sociales";
import Sociales2 from "./pages/Sociales/Sociales2";
import Sociales4 from "./pages/Sociales/Sociales4";
import { FisicaMenu } from "./pages/Fisica/FisicaMenu";
import { GeometriaMenu } from "./pages/Geometria/GeometriaMenu";
import { QuimicaMenu } from "./pages/Quimica/QuimicaMenu";
import { SocialesMenu } from "./pages/Sociales/SocialesMenu";
import { TrigonometriaMenu } from "./pages/Trigonometria/TrigonometriaMenu";
import { InfoPage } from "./pages/InfoPage";
import { FisicaPractica } from "./pages/Fisica/FisicaPractica";
import { TrigonometriaPractica } from "./pages/Trigonometria/TrigonometriaPractica";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trigonometria" element={<Trigonometria />} />
        <Route path="/trigonometria_2" element={<Trigonometria2 />} />
        <Route path="/geometria" element={<Geometria />} />
        <Route path="/geometria_1" element={<Geometria1 />} />
        <Route path="/geometria_2" element={<Geometria2 />} />
        <Route path="/geometria_4" element={<Geometria4 />} />
        <Route path="/cinematica" element={<Cinematica />} />
        <Route path="/dinamica" element={<Dinamica />} />
        <Route path="/movimientocircular" element={<MovimientoCircular />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/mecanica-fluidos" element={<MecanicaFluidos />} />
        <Route path="/sociales_1" element={<Sociales1 />} />
        <Route path="/sociales_2" element={<Sociales2 />} />
        <Route path="/sociales" element={<Sociales />} />
        <Route path="/sociales_4" element={<Sociales4 />} />
        <Route path="/quimica_1" element={<Quimica1 />} />
        <Route path="/quimica_2" element={<Quimica2 />} />
        <Route path="/quimica" element={<Quimica />} />
        <Route path="/quimica_4" element={<Quimica4 />} />
        <Route path="/estadistica" element={<Estadistica />} />
        <Route path="/ingles" element={<Ingles />} />
        <Route path="/fisica-menu" element={<FisicaMenu />} />
        <Route path="/geometria-menu" element={<GeometriaMenu />} />
        <Route path="/quimica-menu" element={<QuimicaMenu />} />
        <Route path="/sociales-menu" element={<SocialesMenu />} />
        <Route path="/trigonometria-menu" element={<TrigonometriaMenu />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/fisica-practica" element={<FisicaPractica />} />
        <Route path="/trigonometria-practica" element={<TrigonometriaPractica/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
