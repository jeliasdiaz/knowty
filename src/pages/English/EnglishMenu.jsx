import { MenuCard, TopWave } from "../../components"

export const EnglishMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/ingles/tiempos-verbales" img="englishIcon.png" title="Tiempos verbales" />
          <MenuCard url="/ingles/determinantes" img="englishIcon.png" title="Determinants an/a" />
          <MenuCard url="/ingles/modal-verbs" img="englishIcon.png" title="Modal verbs" />
        </div>
      </section>
  )
}
