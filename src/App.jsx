import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//* Operation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

//* Principal components
import { Home } from "./pages/Single-pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

//* Chemistry
import FirstChemistryPeriod from "./pages/Chemistry/FirstChemistryPeriod";
import ThirdChemistryPeriod from "./pages/Chemistry/ThirdChemistryPeriod";
import SecondChemistryPeriod from "./pages/Chemistry/SecondChemistryPeriod";
import FourthChemistryPeriod from "./pages/Chemistry/FourthChemistryPeriod";

//* English
import English from "./pages/Single-pages/English";

//* Geometry
import Straight from "./pages/Geometry/Straight";
import Circumference from "./pages/Geometry/Circumference";
import { Parable } from "./pages/Geometry/Parable";
import Ellipse from "./pages/Geometry/Ellipse";

//* Pyshic
import { Cinematic } from "./pages/Physic/Cinematic";
import { Dinamic } from "./pages/Physic/Dinamic";
import { CircularMovement } from "./pages/Physic/CircularMovement";
import { Energy } from "./pages/Physic/Energy";
import FluidMechanics from "./pages/Physic/FluidMechanics"

//* Social
import FirstSocialPeriod from "./pages/Social/FirstSocialPeriod";
import EconomicDoctrines from "./pages/Social/EconomicDoctrines";
import ArmedGroups from "./pages/Social/ArmedGroups";
import SocialMovements from "./pages/Social/SocialMovements";

//* Statistic 
import { Statistic } from "./pages/Single-pages/Statistic";

//* Trigonometry
import { ThirdTrigonometryPeriod } from "./pages/Trigonometry/ThirdTrigonometryPeriod";
import { SecondTrigonometryPeriod } from "./pages/Trigonometry/SecondTrigonometryPeriod";

//* Phone menus
import { PhysicMenu } from "./pages/Physic/PhysicMenu";
import { GeometryMenu } from "./pages/Geometry/GeometryMenu";
import { ChemistryMenu } from "./pages/Chemistry/ChemistryMenu";
import { SocialMenu } from "./pages/Social/SocialMenu";
import { TrigonometryMenu } from "./pages/Trigonometry/TrigonometryMenu";

//* Practice pages
import { PhysicPractice } from "./pages/Physic/PhysicPractice";
import { TrigonometryPractice } from "./pages/Trigonometry/TrigonometryPractice";

//* Information page
import { InfoPage } from "./pages/Single-pages/InfoPage";
import Search from "./pages/Search";

//* Blog
import Blog from "./pages/Single-pages/Blog";
import SpacedRepetition from "./pages/Blog/SpacedRepetition";

//* Not found
import NotFound from "./pages/Single-pages/NotFound";

import { MdClose } from "react-icons/md";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    const promptEvent = window.deferredPrompt;
    promptEvent.prompt();
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  const [installBtn, setInstallBtn] = useState(true)

  const handleInstallBtn = () => {
    setInstallBtn(!installBtn)
  }


  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Outlet />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/repeticion-espaciada" element={<SpacedRepetition />} />

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

          <Route path="/buscar" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {
/*           installBtn & isReadyForInstall
            ? */
            <button className="installCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
              <div className="d-flex gap-3 justify-content-center">
                <img src="/img/logo.svg" alt="logo" className="w-25" />
                <span onClick={downloadApp}>Descargar</span>
                <div>
                  <MdClose size={35} className="closeInstallBtn mt-2" onClick={handleInstallBtn} />
                </div>
              </div>
            </button>
/*             :
            '' */
        }
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}


export default App;
