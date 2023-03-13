import { TopWave, MenuCard } from "../../components/"

export const GeometryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/recta" img="geometriaIcon.png" title="Recta" />
          <MenuCard url="/circunferencia" img="geometriaIcon.png" title="Circunferencia" />
          <MenuCard url="/parabola" img="geometriaIcon.png" title="Parábola" />
          <MenuCard url="/elipse" img="geometriaIcon.png" title="Elipse" />
        </div>
      </section>
    </>
  )
}
