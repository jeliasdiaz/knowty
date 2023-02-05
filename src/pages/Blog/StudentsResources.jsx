import TopWave from "../../components/TopWave"

export const StudentsResources = () => {
    return (
        <div className="blogSectionContainer">
            <TopWave />
            <div className="blogSectionContainerTwo">
                <div className="blogSection ownShadow " data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                    <h2 className="pb-3">Herramientas para estudiantes</h2>
                    <p>
                        A menudo necesitamos ayuda con algunas tareas, ¿no es así? Por ello, decidimos compartir con ustedes los recursos web más útiles para facilitar el trabajo en equipo, estudio, etc.
                    </p>
                    <ul>
                        <li>
                            <h4><a href="https://docs.google.com/document/u/0/" target="_blank" rel="noreferrer">Google Docs</a></h4>
                            <p>Excelente editor de texto en el que podrás trabajar en colaboración junto a otras personas al mismo tiempo. Es liviana y muy intuitiva.</p>
                        </li>
                        <li>
                            <h4><a href="https://www.notion.so/" target="_blank" rel="noreferrer">Notion</a></h4>
                            <p>Aplicación con múltiples usos. Personalmente, la recomendamos para organizar sus horarios y tomar apuntes. Sin embargo, son muchas las funciones que brinda esta app.</p>
                        </li>
                        <li>
                            <h4><a href="https://www.canva.com/" target="_blank" rel="noreferrer">Canva</a></h4>
                            <p>Página para crear presentaciones en pocos minutos. Cuenta con miles de diseños que pueden ser modificados al gusto. </p>
                        </li>
                        <li>
                            <h4><a href="https://excalidraw.com/" target="_blank" rel="noreferrer">Excalidraw</a></h4>
                            <p>Herramienta para realizar dibujos, gráficos, desde cero. Similar a un tablero en blanco, pero virtual.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
