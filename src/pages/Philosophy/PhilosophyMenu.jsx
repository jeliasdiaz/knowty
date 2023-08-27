import { TopWave, MenuCard } from "../../components/"

export const PhilosophyMenu = () => {
    return (
        <>
            <section className="mobileMenu">
                <TopWave />
                <div className="mobileSubjectMenu">
                    <MenuCard url="/introduccion-filosofia" img="filosofiaIcon.png" title="Introducción" />

                    <MenuCard url="/filosofia-antigua/presocraticos" img="filosofiaIcon.png" title="Filosofía antigua" />

                    {/* <MenuCard url="/filosofia-medieval" img="filosofiaIcon.png" title="Filosofía medieval" />

                    <MenuCard url="/filosofia-moderna" img="filosofiaIcon.png" title="Filosofía moderna" />

                    <MenuCard url="/filosofia-contemporanea" img="filosofiaIcon.png" title="Filosofía contemporanea" /> */}
                </div>
            </section>
        </>
    )
}
