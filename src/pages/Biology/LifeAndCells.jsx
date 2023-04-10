import { CollapseInformation, SectionTitle, TopWave } from '../../components'

export const LifeAndCells = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Vida y células" />
            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h3>¿Qué es la vida?</h3>
                    <p>
                        La vida es un fenómeno muy complejo y fascinante, que ha sido objeto de estudio y reflexión durante siglos. Definir lo que es la vida es una tarea difícil, ya que involucra muchos aspectos y características que deben ser considerados.
                        <br /><br />
                        En términos generales, se puede decir que la vida se refiere a la capacidad de un ser para realizar ciertas funciones vitales, como la reproducción, el crecimiento, la nutrición, la respuesta a estímulos y la adaptación al medio ambiente. Sin embargo, para afirmar que un organismo posee vida, se deben cumplir tres requisitos esenciales: la presencia de células (o una sola célula en el caso de organismos unicelulares), el autosostenimiento y la capacidad de autorreplicación.
                        <br /><br />
                        Es de añadir que los virus al no cumplir con los tres requisitos fundamentales para la vida, no se considera estén vivos, a pesar de poseer material genético, ya sea ADN o ARN. De igual forma, todos los individuos siempre tenderán a el estado máximo de equilibrio, conocido como Homeostasis.
                    </p>
                </div>
                <hr />

                <h3>La célula</h3>
                <p>
                    Es el nombre dado por Robert Hooke a la unidad básica de la vida, mientras observó en el microscopio de una lámina de corcho, pequeñas celdas/cavidades que tenían forma similar a las celdas de un panal de abejas. Con el paso del tiempo, el concepto de célula fue evolucionando, describiendo características de esta. Entre las cuales tenemos la capacidad autosostenerse, presencia de una membrana plasmática, reproducirse mediante procesos de división celular, etc.
                    <br /><br />
                    A partir de esto, los seres vivos pueden clasificarse según la cantidad de células que poseen, ya sea unicelular (una célula) o pluricelular (dos o más células). Sin embargo, ambos tipos caracterizados por poseer en su interior organelos especializados en cumplir funciones específicas para el correcto funcionamiento de la célula. Aunque los organelos no sean los mismos para todos los tipos de célula existentes, Eucariotas y Procariotas.
                </p>
                <br />
                <CollapseInformation name="Célula eucariota" id="eucariota">
                    <p>Son aquellas...</p>
                </CollapseInformation>
            </div>
        </div>
    )
}
