export const InfoPage = () => {
    return (
        <div className="infoPage">
            <img src="/img/waveThree.svg" alt="" />
            <div className="infoOne text-center" data-aos="zoom-in" data-aos-duration="800">
                <h1 className="ownShadow-lg m-auto infoTitle">¿Quiénes somos?</h1>
                <img src="/img/logo.svg" alt="" className="ImgInfo" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" />
            </div>
            <div className="flex-1 justify-content-center cardsInfoSection">
                <div className="cardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h2>Misión</h2>
                    <p>Como grupo, buscamos brindar servicios a la comunidad educativa a través de recursos educativos de autoría propia, que conceden exclusividad y calidad; con el objetivo de apoyar y contribuir a los estudiantes en su proceso de formación.</p>
                </div>
                <div className="cardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h2>Visión</h2>
                    <p>Proyectamos contribuir al desarrollo académico de las próximas generaciones de alumnos; en aras de aportar herramientas que faciliten el aprendizaje y formación de los estudiantes. </p>
                </div>
                <div className="cardInfo lastCardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h2>Un poco de historia</h2>
                    <p>Por extraño que parezca, Knowty inició como una pequeña página, cuyo propósito era tener a la mano fórmulas de Física. En función de ello, notamos que podíamos aportar más a los alumnos, de forma que añadimos nuevo contenido e integrantes al equipo.</p>
                </div>
            </div>
        </div>
    )
}
