import { TopWave, MenuCard } from "../../components/"

export const PhysicMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/cinematica" img="fisicaIcon.png" title="Cinemática" />
          <MenuCard url="/dinamica" img="fisicaIcon.png" title="Dinámica" />
          <MenuCard url="/movimiento-circular" img="fisicaIcon.png" title="M. circular" />
          <MenuCard url="/energia" img="fisicaIcon.png" title="Energía" />
          <MenuCard url="/mecanica-fluidos" img="fisicaIcon.png" title="M. fluidos" />
          <MenuCard url="/fisica-practica" img="fisicaIcon.png" title="Practica" />
        </div>
      </section>
    </>
  )
}
