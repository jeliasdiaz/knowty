import { items } from "."
import { Glossary, SectionTitle, TopWave } from "../../../components"

export const Ground = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Suelos" />
            
            <Glossary items={items} />
            
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

                <h4>Suelos</h4>
                <ul>
                    <li>Mezcla de minerales.</li>
                    <li>Aptos o no para ser cultivados.</li>
                </ul>
                <h4>Suelos urbanos</h4>
                <ul>
                    <li>Áreas destinadas a la construcción de viviendas, edificaciones, redes de servicios públicos e infraestructura vial.</li>
                    <li>Zonas comerciales: Restaurantes, centros comerciales, locales comerciales, bancos, etc.</li>
                </ul>
                <h4>Zonas industriales</h4>
                <ul>
                    <li>Áreas donde se hallan establecimientos encargados a la transformación de materias primas.</li>
                </ul>
                <h4>Zonas residenciales mixtas</h4>
                <ul>
                    <li>Integran el comercio, lo industrial y lo residencial.</li>
                    <li>Admite el funcionamiento de actividades productivas de bajo impacto en el tejido residencial.</li>
                </ul>
                <h4>Zonas de alto impacto o tolerancia</h4>
                <ul>
                    <li>Ocurren actividades ilícitas.</li>
                    <li>Poca presencia estatal.</li>
                    <li>Mucha pobreza.</li>
                </ul>
                <h4>Zonas históricas y culturales</h4>
                <ul>
                    <li>Espacios en los que se conserva el patrimonio histórico, arquitectónico y cultural.</li>
                    <li>Son protegidas por la normatividad.</li>
                    <li>Generan dinamismo económico en el sector turístico.</li>
                </ul>

            </div>
        </div>
    )
}
