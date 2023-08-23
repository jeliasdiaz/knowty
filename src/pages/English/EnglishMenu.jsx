import { MenuCard, TopWave } from "../../components"

export const EnglishMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/ingles" img="englishIcon.png" title="Tiempos verbales" />
          <MenuCard url="/determinantes" img="englishIcon.png" title="Determinants an/a" />
          <MenuCard url="/modal-verbs" img="englishIcon.png" title="Modal verbs" />
        </div>
      </section>
  )
}
