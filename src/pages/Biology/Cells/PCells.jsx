import { SectionTitle, TopWave } from "../../../components"

export const PCells = () => {
    return (
        <div className="homeCard">
            <TopWave />

            <SectionTitle title="Células Procariotas" />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Son células simples y pequeñas que carecen de núcleo y de organelos rodeados de membrana. A diferencia de las células eucariotas, encuentradas en plantas, animales, hongos y otros organismos complejos, las células procariotas son típicamente unicelulares y se encuentran en bacterias y arqueas.
                    <br />
                    <br />
                    Además, poseen una estructura celular básica, que incluye una membrana plasmática que rodea el citoplasma, donde se encuentran los ribosomas y el material genético en forma de una molécula circular de ADN. Es de añadir algunas células procariotas pueden tener estructuras adicionales, como flagelos para el movimiento y pili para la adhesión.
                    <br />
                    <br />
                    Al no tener núcleo definido, su material genético no está contenido dentro de un núcleo separado. En cambio, el material genético está contenido dentro de la región citoplasmática conocida como nucleoide.
                    <br />
                    <br />
                    <img src="img/bacteria.png" alt="bacteria" className="w-75" />
                </p>
            </div>
        </div>
    )
}
