import { MenuCard, TopWave } from '../../../components'

export const ConicSections = () => {
  return (
    <>
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/circunferencia" img="geometriaIcon.png" title="Circunferencia" />
          <MenuCard url="/parabola" img="geometriaIcon.png" title="Parábola" />
          <MenuCard url="/elipse" img="geometriaIcon.png" title="Elipse" />
          {/* <MenuCard url="/hiperbola" img="geometriaIcon.png" title="Hipérbola" /> */}
        </div>
      </section>
    </>
  )
}
