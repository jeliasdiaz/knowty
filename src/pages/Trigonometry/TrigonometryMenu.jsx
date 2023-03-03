import { TopWave } from "../../components/"
import { MenuCard } from "../../components/MenuCard"
export const TrigonometryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/trigonometria_2" img="trigonometriaIcon.png" title="II periodo" />
          <MenuCard url="/trigonometria" img="trigonometriaIcon.png" title="III periodo" />
          <MenuCard url="/trigonometria-practica" img="trigonometriaIcon.png" title="Practica" />
        </div>
      </section>
    </>
  )
}
