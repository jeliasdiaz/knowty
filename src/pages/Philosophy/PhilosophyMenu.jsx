import { TopWave } from "../../components/";
import { renderMenuCards } from "../../helpers/renderMenuCards";
import menuCards from "./data/menuCards.json";

export const PhilosophyMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          {renderMenuCards(menuCards)}

          {/* <MenuCard url="/filosofia-medieval" img="filosofiaIcon.png" title="Filosofía medieval" />

                    <MenuCard url="/filosofia-moderna" img="filosofiaIcon.png" title="Filosofía moderna" />

                    <MenuCard url="/filosofia-contemporanea" img="filosofiaIcon.png" title="Filosofía contemporanea" /> */}
        </div>
      </section>
    </>
  );
};
