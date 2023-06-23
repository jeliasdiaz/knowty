import Latex from "react-latex"
import { SectionTitle, TopWave } from "../../components"

export const LocalizationMeasures = () => {
    const decilesPar = `$$D_k = \\large \\frac{n \\ \\cdot \\ k}{10} $$`

    const percentilesPar = `$$P_k = \\large \\frac{n \\ \\cdot \\ k}{100} $$`

    const cuartilesPar = `$$Q_k = \\large \\frac{n \\ \\cdot \\ k}{4} $$`
    const cuartilesEjemploOne = `$$Q_k = \\large \\frac{8 \\ \\cdot \\ 3}{4}$$`
    const cuartilesEjemploTwo = `$$Q_k = 6$$`
    const explicacionEjemplo = `$$Q_1 =  \\large \\frac{1 \\ \\cdot \\ 15000}{4}$$`
    const explicacionEjemploResultado = `$$Q_1 = 8,750 $$`
    const explicacionEjemploResultadoAlternativo = `$$25\\% = 8,750$$`
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Medidas de localización" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h5>Cuartiles</h5>
                    <p>Permiten calcular el 25%, 50%, 75% y 100%, donde el cuartil 1 corresponde al 25% y el cuartil 4 al 100%.</p>
                    <p><Latex>{cuartilesPar}</Latex></p>

                    <p>n = número total de datos <br /> k = cuartil a hallar</p>
                    <p>
                        Ejemplo:
                        Calcula el 75% de las siguientes notas <br /> 1, 2, 3, 5, 6, 6.5, 7, 8
                    </p>
                    <p><Latex>{cuartilesEjemploOne}</Latex></p>
                    <p><Latex>{cuartilesEjemploTwo}</Latex></p>
                    <p>Por ende el 75% corresponde a 6.5</p>
                </div>
                <hr />
                <div>
                    <h5>Deciles</h5>
                    <p>Permiten calcular los porcentajes desde el 10% hasta el 100% de diez en diez. Esto es, el decil 1 es 10% y el decil 10 es 100%</p>
                    <p><Latex>{decilesPar}</Latex></p>
                    <p>n = número total de datos <br /> k = decil a hallar</p>
                </div>

                <hr />

                <div>
                    <h5>Percentiles</h5>
                    <p>Permiten calcular los porcentajes desde el 1% hasta el 100% de uno en uno, de forma que, el decil 1 es 1% y el decil 100 es 100%.</p>

                    <p><Latex>{percentilesPar}</Latex></p>
                    <p>n = número total de datos <br /> k = percentil a hallar</p>
                </div>

                <hr />

                <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#medidasLocalizacionExplicacion" aria-expanded="false" aria-controls="reglaTresDirectaEjemplo">
                    Explicación
                </button>

                <div className="collapse dropdownBorder" id="medidasLocalizacionExplicacion">
                    <p>
                        Lo sé. Probablemente, sientas que este tema no tiene ninguna aplicación en tu vida cotidiana. La realidad es todo lo contrario, tiene muchas. Aquí, aprenderás cuál es una de estas.<br /><br />

                        Por ejemplo, en el caso de los cuartiles, te permiten calcular más rápido porcentajes. Ahora puede que digas "para qué me sirve eso?". Estoy casi seguro que al ir a un centro comercial, (especialmente en navidades o en fechas especiales) te hayas encontrado con descuentos en muchos productos. Si ya conoces la regla de tres simple, sabrás que mediante ella, puedes hallar el precio que ahorrarías debido al descuento. <br /> <br />

                        Las medidas de localización, son otra alternativa a dicho proceso. Esto es, si un producto posee un precio de 35,000 pesos y, deseas calcular el 25% de descuento que posee. Puedes usar las medidas de localización. El procedimiento a llevar a cabo es el siguiente. <br /><br />

                        En primer lugar, si eres bastante curioso, habrás notado que podemos usar tanto los cuartiles como los percentiles para hallar el descuento, a pesar de ello, los cuartiles son la opción más directa para llegar al resultado. En segundo lugar, notamos que el valor total del producto es par, por ello, recurrimos a la ecuación: <br /> <br />

                        <p><Latex>{cuartilesPar}</Latex></p>
                        <p>
                            De esta manera, solo es cuestión de reemplazar los valores. <i>n</i> que es 1 (25%) y, <i>k</i> que corresponde al precio del producto que deseamos comprar (35,000). Luego, dividimos los datos entre 4. Es decir: <br /> <br />
                        </p>
                        <p><Latex>{explicacionEjemplo}</Latex></p>
                        <p><Latex>{explicacionEjemploResultado}</Latex></p>
                        <p>
                            Debo aclarar que también podríamos expresarlo de la siguiente manera: <br /> <br />
                        </p>
                        <p><Latex>{explicacionEjemploResultadoAlternativo}</Latex></p>
                        <p>
                            Por último, te invito buscar otros casos en los que podemos aplicar las medidas de localización. ¡Deja volar tu imaginación!
                        </p>
                    </p>
                </div>

            </div>
        </div>
    )
}
