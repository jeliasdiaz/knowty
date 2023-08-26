import { TopWave, MenuCard } from "../../../components/"

export const GeometryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/triangulos" img="geometriaIcon.png" title="Triángulos" />
          <MenuCard url="/recta" img="geometriaIcon.png" title="Recta" />
          <MenuCard url="/secciones-conicas" img="geometriaIcon.png" title="Secciones cónicas" />
        </div>
      </section>
    </>
  )
}
