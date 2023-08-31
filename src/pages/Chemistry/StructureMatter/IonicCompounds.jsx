import { ContentsTable, SectionTitle, Tooltip, TopWave } from '../../../components'
import { structureMatterItems } from '.'

export const IonicCompounds = () => {
    return (

        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Compuestos iónicos" />
            <ContentsTable items={structureMatterItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <ul>
                    <li>Forman
                        <Tooltip content={<span>Compuestos químicos formados a partir <br /> de la combinación de ácidos con bases.</span>} text={<span className="ps-2 pe-1">sales</span>} id="sales" />
                        sólidas.
                    </li>
                    <li>Forman redes cristalinas. Por tanto, son sólidos a temperatura ambiente.</li>
                    <li>La forma del cristal es cúbica, rómbica o hexagonal.</li>
                    <li>Pueden ser duros o frágiles.</li>
                    <li>Puntos de fusión y ebullición altos.</li>
                    <li>Solubles en disolventes polares como el agua.</li>
                    <li>En estado sólido no conducen la corriente eléctrica, pero, fundidos o disueltos en agua conducen la corriente eléctrica. Debido a que los iones se separan y pueden moverse de forma independiente.</li>
                </ul>
            </div>
        </div>

    )
}
