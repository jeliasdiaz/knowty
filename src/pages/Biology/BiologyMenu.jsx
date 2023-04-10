import { MenuCard, TopWave } from "../../components"

export const BiologyMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/vida-y-celulas" img="biologiaIcon.png" title="Vida y células" />
        </div>
      </section>
  )
}
