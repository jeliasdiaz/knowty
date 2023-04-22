import { TopWave, MenuCard } from "../../components/"

export const SocialMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/sociales_1" img="socialesIcon.png" title="I periodo" />
          <MenuCard url="/doctrinas-economicas" img="socialesIcon.png" title="I. económicas" />
          <MenuCard url="/movimientos-armados" img="socialesIcon.png" title="M. armados" />
          <MenuCard url="/movimientos-sociales" img="socialesIcon.png" title="M. sociales" />
          <MenuCard url="/sociales-extra" img="socialesIcon.png" title="Extra" />
        </div>
      </section>
    </>
  )
}
