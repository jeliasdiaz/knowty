export const InfoPage = () => {
    return (
        <div className="infoPage">
            <img src="/img/waveThree.svg" alt="" />
            <div className="infoOne text-center" data-aos="zoom-in" data-aos-duration="800">
                <h2 className="ownShadow-lg m-auto infoTitle">¿Quiénes somos?</h2>
                <img src="/img/logo.svg" alt="" className="ImgInfo" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" />
            </div>
            <div className="flex-1 cardsInfoSection">
                <div className="cardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h3>Misión</h3>
                    <p>Este proyecto surge y existe con el objetivo de lograr que los alumnos mejoren su desempeño académico, a través de contenido educativo, diseñado para facilitar la comprensión de temáticas por parte de los estudiantes.</p>
                </div>
                <div className="cardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h3>Visión</h3>
                    <p>Knowty será una de las páginas educativas más usadas por los estudiantes en el colegio Metropolitano de Soledad 2000, brindando información de calidad clara y concisa. A través de la cual, alumnos podrán mejorar su desempeño académico.</p>

                </div>
                <div className="cardInfo ownShadow" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                    <h3>Un poco de historia</h3>
                    <p> Knowty inició como una pequeña página, cuyo propósito era tener a la mano fórmulas de Física. En función de ello, notamos que podíamos aportar más a los alumnos, de forma que añadimos nuevo contenido e integrantes al equipo.</p>
                </div>
            </div>
        </div>
    )
}
