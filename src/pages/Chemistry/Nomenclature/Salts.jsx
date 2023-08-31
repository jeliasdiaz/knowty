import { nomenclatureItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Salts = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Sales" />
            <ContentsTable items={nomenclatureItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Son compuestos químicos que se forman a partir de la combinación de ácidos con bases. Pueden ser haloideas, formadas con halógenos (grupo VII-A) o cuaternarias, que contienen hidrógeno en su molécula. <br /><br />

                    Es importante mencionar que en las sales cuaternarias (oxisales) se utiliza la nomenclatura tradicional de la siguiente manera: "hipo-ito" para las que terminan en "hipo-oso", "ito" para las que terminan en "oso", "ato" para las que terminan en "ico" y "per-ato" para las que terminan en "per-ico".
                </p>
                <h5>Ejemplos</h5>
                <p><span className="fw-semibold">Bromuro de calcio = CaBr<sub>2</sub></span> <br />Calcio posee valencia 2 (grupo II-A) y el bromo en este caso -1. Por lo tanto, se necesita añadir otra molécula de bromo para estabilizar la ecuación, dando como resultado una ecuación balanceada con una carga neta de 0.</p>

                <p><span className="fw-semibold">Sulfato de rubidio = Rb<sub>2</sub>SO<sub>4</sub></span><br />Rubidio posee valencia 1 (grupo I-A) y el oxígeno -2, pues al restar 8 - 2 = 6, dando como resultado la valencia del azufre, en consecuencia, el resultado es 2 + 6 - 8 = 0. Es de añadir que por el nombre de la molécula y la terminación ato podemos asumir que está trabajando con la valencia 6. <br /> <br />

                </p>

                <div>
                    <h4>¿Cómo discernir?</h4>
                    <p>
                        Para identificar una sal de un ácido, debes tener en que existen varios tipos de sales, como las haloideas, que están compuestas por un no metal y un metal y no contienen oxígeno (ejemplo: CaBr<sub>2</sub>). También están las sales ternarias, que contienen oxígeno (ejemplo: Li<sub>2</sub>SO<sub>4</sub>) y las sales cuaternarias, que contienen hidrógeno, oxígeno, un elemento no metal y un elemento metálico.
                        <br /> <br />

                        En cuanto a los ácidos, están formados por un elemento no metal y el hidrógeno, en el caso de los hidrácidos (ejemplo: HCl). Los oxácidos contienen hidrógeno, un elemento no metal y oxígeno (ejemplo: H<sub>2</sub>SO<sub>4</sub>).
                    </p>
                </div>
            </div>
        </div>
    )
}
