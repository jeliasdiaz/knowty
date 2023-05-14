import { MenuCard, TopWave } from "../../components"

export const BiologyMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/celulas" img="biologiaIcon.png" title="Células" />
        </div>
      </section>
  )
}
