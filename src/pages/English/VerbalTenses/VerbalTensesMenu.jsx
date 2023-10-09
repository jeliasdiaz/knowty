import { MenuCard, TopWave } from "../../../components"

export const VerbalTensesMenu = () => {
  return (
    <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/ingles/tiempos-verbales/presente-simple" img="englishIcon.png" title="Presente simple" />
          <MenuCard url="/ingles/tiempos-verbales/pasado-simple" img="englishIcon.png" title="Pasado simple" />
          <MenuCard url="/ingles/tiempos-verbales/futuro-simple" img="englishIcon.png" title="Futuro simple" />
          <MenuCard url="/ingles/tiempos-verbales/presente-continuo" img="englishIcon.png" title="Presente continuo" />
          <MenuCard url="/ingles/tiempos-verbales/pasado-continuo" img="englishIcon.png" title="Pasado continuo" />
          <MenuCard url="/ingles/tiempos-verbales/futuro-continuo" img="englishIcon.png" title="Futuro continuo" />
          <MenuCard url="/ingles/tiempos-verbales/tiempos-perfectos" img="englishIcon.png" title="Tiempos perfectos" />
        </div>
      </section>
  )
}
