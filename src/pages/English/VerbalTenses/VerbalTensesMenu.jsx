import { TopWave } from "../../../components";
import { renderMenuCards } from "../../../helpers/renderMenuCards";
import menuCards from "./data/menuCards.json";
export const VerbalTensesMenu = () => {
  return (
    <section className="mobileMenu">
      <TopWave />
      <div className="mobileSubjectMenu">{renderMenuCards(menuCards)}</div>
    </section>
  );
};
