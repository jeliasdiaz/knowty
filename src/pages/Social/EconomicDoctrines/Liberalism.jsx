import { economicDoctrinesItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Liberalism = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Liberalismo" />
            <ContentsTable items={economicDoctrinesItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <ul>
                    <li>Doctrina filosófica (conjunto de pensamientos) de carácter político, económico y social.</li>
                    <li>Base teórica del capitalismo.</li>
                    <li>Defiende las libertades individuales: los ciudadanos tienen derecho de llevar vida una vida privada como prefieran, amparados por tres derechos fundamentales de Locke: <span className="fw-semibold">vida</span>, <span className="fw-semibold">libertad</span> y <span className="fw-semibold">propiedad privada</span>
                        <ul>
                            <li>Los ciudadanos tienen derecho a elegir como son gobernados, de manera que no influya en sus asuntos privados.</li>
                            <li>Igualdad ante la ley tanto de gobernantes como gobernados (todas las personas son iguales ante el estado y la ley).</li>
                        </ul>
                        <br />
                    </li>
                    <li>Derecho a la propiedad privada.</li>
                    <li>Tolerancia religiosa y estados laicos (separación del estado de la religión).</li>
                    <li>El sistema que permite el desarrollo del liberalismo es la democracia representativa.</li>
                </ul>
            </div>
        </div>
    )
}
