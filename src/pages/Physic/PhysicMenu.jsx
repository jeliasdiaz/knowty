import { TopWave, MenuCard } from "../../components/"

export const PhysicMenu = () => {
  return (
    <>
      <section className="mobileMenu">
        <TopWave />
        <div className="mobileSubjectMenu">
          <MenuCard url="/fisica/cinematica" img="fisicaIcon.png" title="Cinemática" />
          <MenuCard url="/fisica/dinamica" img="fisicaIcon.png" title="Dinámica" />
          <MenuCard url="/fisica/movimiento-circular" img="fisicaIcon.png" title="M. circular" />
          <MenuCard url="/fisica/energia" img="fisicaIcon.png" title="Energía" />
          <MenuCard url="/fisica/mecanica-fluidos" img="fisicaIcon.png" title="M. fluidos" />
          <MenuCard url="/fisica-practica" img="fisicaIcon.png" title="Practica" />
        </div>
      </section>
    </>
  )
}
