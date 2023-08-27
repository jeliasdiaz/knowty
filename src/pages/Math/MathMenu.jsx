import { MenuCard, TopWave } from "../../components"

export const MathMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/matematicas/introduccion-aritmetica" img="matematicasIcon.png" title="Aritmética" />
          <MenuCard url="/estadistica" img="estadisticaIcon.png" title="Estadística" />
          <MenuCard url="/geometria-menu" img="geometriaIcon.png" title="Geometría" />
          <MenuCard url="/trigonometria-menu" img="trigonometriaIcon.png" title="Trigonometría" />
        </div>
      </section>
    </>
  )
}
