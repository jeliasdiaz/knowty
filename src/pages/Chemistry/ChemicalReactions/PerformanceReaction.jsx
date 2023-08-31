import { chemicalReactionsItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import Latex from 'react-latex'

export const PerformanceReaction = () => {
    const rendimiento = `$$\\% E_f  = \\frac{P_r}{P_t} \\ \\cdot \\ 100$$`
    const ecuacionOne = `$$2C_2H_2 + 5O_2 \\Rightarrow  4\\text{CO}_2 + 2H_2O$$`
    const ecuacionTwo = `$$\\large \\frac{64gr \\ \\text{CO}_2}{176gr \\ \\text{CO}_2}  \\ \\cdot \\ \\small 100 \\% = \\small 35.36 \\%$$`
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Rendimiento" />
            <ContentsTable items={chemicalReactionsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Las reacciones que se llevan a cabo, no siempre tienen un 100% de eficiencia. Esto se debe a la producción de reacciones secundarias, de modo que el reactivo límite no se transforma completamente en productos.
                    <br /><br />
                    Por ende, el rendimiento de una reacción es la cantidad de producto obtenible al darse una reacción completamente. Existen dos tipos.
                    <br /><br />
                    <b>Rendimiento real:</b> Es la cantidad que se obtiene realmente mediante la experimentación. Generalmente es menor que el rendimiento teórico.<br /><br />
                    <b>Rendimiento teórico:</b> Es la cantidad máxima de producto que se podría obtener con la cantidad de reactivo límite dado. Es decir, es lo máximo que podemos obtener.
                    <br />
                </p>
                <p>Su ecuación es la siguiente:</p>
                <p><Latex>{rendimiento}</Latex></p>
                <p>
                    % Ef = Porcentaje de rendimiento <br />
                    PR = Producto real <br />
                    Pf = Producto teórico
                </p>
                <p>
                    Ejemplo: <br />
                    Teniendo en cuenta la siguiente ecuación: <br />
                </p>
                <p><Latex>{ecuacionOne}</Latex></p>
                <p>
                    Si se producen 64gr de CO2, ¿cuál es el porcentaje de rendimiento de la reacción? <br />
                </p>
                <p><Latex>{ecuacionTwo}</Latex></p>
            </div>
        </div>
    )
}
