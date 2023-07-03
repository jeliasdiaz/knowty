import { TopWave, MenuCard } from "../../components/"

export const ChemistryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/historia-quimica" img="quimicaIcon.png" title="Historia de la Química" />
          <MenuCard url="/quimica_1" img="quimicaIcon.png" title="I periodo" />
          <MenuCard url="/quimica_2" img="quimicaIcon.png" title="II periodo" />
          <MenuCard url="/quimica" img="quimicaIcon.png" title="III periodo" />
          <MenuCard url="/quimica_4" img="quimicaIcon.png" title="IV periodo" />
        </div>
      </section>
    </>
  )
}
