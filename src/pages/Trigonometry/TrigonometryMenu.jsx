import { TopWave, MenuCard } from "../../components/"

export const TrigonometryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/nociones-basicas-trigonometria" img="trigonometriaIcon.png" title="Nociones básicas" />
          <MenuCard url="/angulos-y-sus-propiedades" img="trigonometriaIcon.png" title="Ángulos y propiedades" />
          <MenuCard url="/teorema-seno" img="trigonometriaIcon.png" title="Teorema del Seno" />
          <MenuCard url="/teorema-coseno" img="trigonometriaIcon.png" title="Teorema del Coseno" />
          <MenuCard url="/trigonometria-practica" img="trigonometriaIcon.png" title="Practica" />
        </div>
      </section>
    </>
  )
}
