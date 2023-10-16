import { TopWave } from '../../../components'
import { renderMenuCards } from '../../../helpers/renderMenuCards'

export const ConicSections = () => {

  const menuCards = [
    {
      title: "Circunferencia",
      img: "geometriaIcon.png",
      url: "/circunferencia"
    },
    {
      title: "Parábola",
      img: "geometriaIcon.png",
      url: "/parabola"
    },
    {
      title: "Elipse",
      img: "geometriaIcon.png",
      url: "/elipse"
    }
  ]
  return (
    <>
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          {
            renderMenuCards(menuCards)
          }
          {/* <MenuCard url="/hiperbola" img="geometriaIcon.png" title="Hipérbola" /> */}
        </div>
      </section>
    </>
  )
}
