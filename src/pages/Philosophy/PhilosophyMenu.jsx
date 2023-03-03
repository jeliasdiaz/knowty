import { TopWave } from "../../components/"
import { MenuCard } from "../../components/MenuCard"

export const PhilosophyMenu = () => {
    return (
        <>
            <section className="mobileMenu">
                <TopWave />
                <div className="mobileSubjectMenu">
                    <MenuCard url="/introduccion-filosofia" img="filosofiaIcon.png" title="Introducción" />

                </div>
            </section>
        </>
    )
}
