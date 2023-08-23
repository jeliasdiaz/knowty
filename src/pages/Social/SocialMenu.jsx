import { TopWave, MenuCard } from "../../components/"

export const SocialMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/organizacion-territorial/suelos" img="socialesIcon.png" title="Organización territorial" />
          <MenuCard url="/doctrinas-economicas" img="socialesIcon.png" title="I. económicas" />
          <MenuCard url="/movimientos-guerrilleros" img="socialesIcon.png" title="M. armados" />
          <MenuCard url="/movimientos-sociales" img="socialesIcon.png" title="M. sociales" />
          <MenuCard url="/sociales-extra" img="socialesIcon.png" title="Extra" />
        </div>
      </section>
    </>
  )
}
