import { armedConflictItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../components'

export const Bogotazo = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="El Bogotazo" />
            <ContentsTable items={armedConflictItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    La polarización política le dio a Colombia en el siglo XX una serie de conflictos internos entre los partidos políticos tradicionales: el Partido Conservador y el Partido Liberal. Entre los que encontramos, el Bogotazo, un periodo en el que se recrudece la violencia en Colombia. Es decir, allí no empieza la historia de la violencia, sino que se aviva más y se multiplica.
                </p>

                <hr />

                <h4>El Bogotazo</h4>
                <p>
                    El magnicidio del candidato a la presidencia liberal Jorge Eliécer Gaitán el 9 de abril de 1948 le dio paso una serie de motines y una ola de violencia a la ciudad de Bogotá conocido como el Bogotazo el 9 de abril de 1948 que luego se extendió al resto del país. Esto debido al gran apoyo que poseía el candidato entre las clases obreras y campesinas por su carisma y sus propuestas de reforma agraria y una mejora en la calidad de las condiciones laborales.
                    <br />
                    <br />
                    En pocos días se produjeron actos violentos como: incendios a edificios públicos, destrucción de archivos, asesinatos a funcionarios, asaltos a comercios, atracos a iglesias, etc. En algunas localidades se establecieron tribunales populares, se produjo la destitución de alcaldes, fuga de presos.
                    <br />
                    <br />
                    El Bogotazo marcó un punto de inflexión en la historia de Colombia y se considera como el inicio de La Violencia.

                </p>
            </div>
        </div>
    )
}
