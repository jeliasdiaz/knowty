import { TopWave, MenuCard } from "../../components/"

export const ChemistryMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/historia-quimica" img="quimicaIcon.png" title="Historia de la Química" />

          <MenuCard url="/quimica/estructura-materia/modelos-atomicos" img="quimicaIcon.png" title="Estructura de la materia" />
          
          <MenuCard url="/quimica/nomenclatura/nomenclaturas" img="quimicaIcon.png" title="Nomenclatura" />

          <MenuCard url="/quimica/reacciones-quimicas/balanceo" img="quimicaIcon.png" title="Reacciones químicas" />

          <MenuCard url="/quimica/familia-elementos" img="quimicaIcon.png" title="Familia de elementos" />
        </div>
      </section>
    </>
  )
}
