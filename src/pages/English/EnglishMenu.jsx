import { MenuCard, TopWave } from "../../components"

export const EnglishMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/ingles/tiempos-verbales" img="englishIcon.png" title="Tiempos verbales" />
          <MenuCard url="/ingles/determinantes" img="englishIcon.png" title="Determinantes an/a" />
          <MenuCard url="/ingles/modal-verbs" img="englishIcon.png" title="Modal verbs" />
          <MenuCard url="/ingles/voz-pasiva" img="englishIcon.png" title="Voz pasiva" />
          <MenuCard url="/ingles/be-able-to" img="englishIcon.png" title="Be able to" />
        </div>
      </section>
  )
}
