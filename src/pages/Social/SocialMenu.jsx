import { TopWave, MenuCard } from "../../components/"

export const SocialMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/sociales/organizacion-territorial/suelos" img="socialesIcon.png" title="Organización territorial" />
          <MenuCard url="/sociales/ideologias-economicas/liberalismo" img="socialesIcon.png" title="I. económicas" />
          <MenuCard url="/sociales/conflicto-armado/aspectos-generales" img="socialesIcon.png" title="Conflicto armado" />
          <MenuCard url="/sociales/movimientos-guerrilleros" img="socialesIcon.png" title="M. armados" />
          <MenuCard url="/sociales/movimientos-sociales" img="socialesIcon.png" title="M. sociales" />
          <MenuCard url="/sociales/sociales-extra" img="socialesIcon.png" title="Extra" />
        </div>
      </section>
    </>
  )
}
