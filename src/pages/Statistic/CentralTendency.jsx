import React from 'react'
import { SectionTitle, TopWave } from '../../components'
import Latex from 'react-latex'

export const CentralTendency = () => {

    const medianaEjemplo = `$$\\frac{12+15}{2} = 13.5$$`
    
    const mediaEjemploUno = `$$\\frac{x_1 + x_2 + x_3 + ... + x_n}{N} = \\frac{\\sum x_i}{N}$$`
    const mediaEjemploDos = `$$ = \\frac{7 + 8 + 9 + 6 + 7 + 5}{6} \\\\  = \\frac{42}{6} \\\\ = \\frac{42}{6} \\\\ = 7$$`
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Medidas de tendencia central" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <div>
                    <h3>Medidas de tendencia central</h3>
                    <p>
                        Para una interpretación completa de la distribución de los datos se utilizan una serie de parámetros los cuales se consideran representativos de dicho conjunto. Algunos de los parámetros de tendencia central más característicos son:
                    </p>
                    <ul>
                        <li>Moda</li>
                        <li>Mediana</li>
                        <li>Media aritmética</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h5>Moda</h5>
                    <p>
                        Es el valor que presenta la mayor frecuencia, es decir, aquel que aparece mas veces en un conjunto. En algunos casos puede no existir, en otros puede ser única (unimodal) y en otros no (bimodal).
                        <br /><br />
                        Ejemplos:
                        <br /><br />
                        Calcular la moda de las siguientes distribuciones de datos:
                        <br />
                        4, 6, 7, 9, 9, 10, 12, 12, 12, 15
                        <br /><br />
                        Como se puede observar la moda es 12, debido a que posee el mayor numero de apariciones. En este caso el conjunto es unimodal.
                        <br /><br />
                        Ahora bien, en este caso:
                        <br />
                        1, 2, 3, 4, 5, 6, 7, 8, 9
                        <br /><br />
                        El conjunto no posee moda, debido a que todos los valores poseen el mismo número de apariciones. <br />
                        Y en este otro caso:
                        <br />
                        4, 6, 6, 7, 9, 12, 15, 15, 16
                        <br /><br />
                        La distribución es bimodal, debido a que el 6 y el 12 poseen las mayores apariciones y es justamente el mismo valor.

                    </p>
                </div>
                <hr />
                <div>
                    <h5>Mediana</h5>
                    <p>
                        La mediana es el valor central de un conjunto que surge de tener una serie de datos organizados. Este valor central posee tantos datos como anteriores como posteriores a él. Cuando tenemos una distribución con un numero de datos impar la mediana se encuentra bien definida y si por el contrario tenemos una distribución con un numero de datos par, se toma como mediana el valor medio (promedio) de los dos valores centrales.
                        <br /><br />
                        Ejemplos:
                        <br /><br />
                        Se tiene la siguiente distribución:
                        <br />
                        4, 9, 7, 6, 5, 3, 10
                        <br /><br />
                        Lo primero es ordenar los datos (ya sea de forma creciente o decreciente)
                        <br />
                        3, 4, 5, 6, 7, 9, 10
                        <br /><br />
                        Y ahora se tomará el valor central. Como en este caso es un conjunto de datos impar el valor será el central, es decir, 6.
                        <br /><br />
                        Ahora bien, en la siguiente distribución:
                        <br />
                        3, 7, 9, 12, 15, 20, 21, 25
                        <br /><br />
                        Al ser un numero de datos par y ya estar ordenado lo que se debe hacer es tomar los datos centrales y hallar su promedio:
                        <br />
                        <Latex>{medianaEjemplo}</Latex>
                        <br /><br />
                        En este caso la mediana no corresponde a un valor presente en el conjunto.

                    </p>
                </div>
                <hr />
                <div>
                    <h5>Media aritmética</h5>
                    <p>
                        Se le conoce como media a la relación entre la suma de los valores de la distribución y el numero de estos mismos. La definición dada anteriormente crea la siguiente formula:
                        <br />
                        <Latex>{mediaEjemploUno}</Latex>
                        <br /><br />
                        Ejemplo:
                        <br />
                        Las calificaciones de un alumno han sido: 7, 8, 9, 6, 7, 5. Halla su media o promedio.
                        <br />
                        <Latex>{mediaEjemploDos}</Latex>
                    </p>
                </div>
            </div>
        </div>
    )
}
