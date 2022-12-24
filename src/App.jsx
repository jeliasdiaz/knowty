import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//* Operation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//* Principal components
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

//* Chemistry
import FirstChemistryPeriod from "./pages/Chemistry/FirstChemistryPeriod";
import SecondChemistryPeriod from "./pages/Chemistry/ThirdChemistryPeriod";
import ThirdChemistryPeriod from "./pages/Chemistry/SecondChemistryPeriod";
import FourthChemistryPeriod from "./pages/Chemistry/FourthChemistryPeriod";

//* English
import English from "./pages/English";

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
import { Statistic } from "./pages/Statistic";

//* Trigonometry
import { FirstTrigonometryPeriod } from "./pages/Trigonometry/FirstTrigonometryPeriod";
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
import { InfoPage } from "./pages/InfoPage";

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
        <Route path="/info" element={<InfoPage />} />


        <Route path="/quimica_1" element={<FirstChemistryPeriod />} />
        <Route path="/quimica_2" element={<SecondChemistryPeriod />} />
        <Route path="/quimica" element={<ThirdChemistryPeriod />} />
        <Route path="/quimica_4" element={<FourthChemistryPeriod />} />


        <Route path="/ingles" element={<English />} />


        <Route path="/geometria_1" element={<Straight />} />
        <Route path="/geometria_2" element={<Circumference />} />
        <Route path="/geometria" element={<Parable />} />
        <Route path="/geometria_4" element={<Ellipse />} />


        <Route path="/cinematica" element={<Cinematic />} />
        <Route path="/dinamica" element={<Dinamic />} />
        <Route path="/movimientocircular" element={<CircularMovement />} />
        <Route path="/energia" element={<Energy />} />
        <Route path="/mecanica-fluidos" element={<FluidMechanics />} />


        <Route path="/sociales_1" element={<FirstSocialPeriod />} />
        <Route path="/sociales_2" element={<ArmedGroups />} />
        <Route path="/sociales" element={<EconomicDoctrines />} />
        <Route path="/sociales_4" element={<SocialMovements />} />


        <Route path="/estadistica" element={<Statistic />} />


        <Route path="/trigonometria_2" element={<SecondTrigonometryPeriod />} />
        <Route path="/trigonometria" element={<FirstTrigonometryPeriod />} />


        <Route path="/fisica-menu" element={<PhysicMenu />} />
        <Route path="/geometria-menu" element={<GeometryMenu />} />
        <Route path="/quimica-menu" element={<ChemistryMenu />} />
        <Route path="/sociales-menu" element={<SocialMenu />} />
        <Route path="/trigonometria-menu" element={<TrigonometryMenu />} />


        <Route path="/fisica-practica" element={<PhysicPractice />} />
        <Route path="/trigonometria-practica" element={<TrigonometryPractice />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
