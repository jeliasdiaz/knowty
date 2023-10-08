import { SectionTitle, Tooltip, TopWave } from "../../components"

export const PassiveVoice = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Voz pasiva" />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    Es una construcción que se utiliza para enfocar la atención en la acción realizada sobre el sujeto en lugar de quien realiza la acción, en otras palabras, es una manera especial de decir quién hace la acción en una oración. En una oración en voz pasiva, el objeto directo de una acción se convierte en el sujeto de la oración y el agente (la persona o cosa que realiza la acción) a menudo se omite o se coloca al final de la oración como complemento con la preposición "by", también podría decirse que en lugar de enfocarnos en la persona que realiza la acción, nos enfocamos en lo que está pasando, por ejemplo, tenemos la oración “Andrés patea la pelota”, la cual enfatiza en Andrés, pues es quien patea la pelota, sin embargo, con la voz pasiva nos interesa más la pelota que el propio Andrés así que diríamos: La pelota fue pateada por Andrés.
                    <br />
                    <br />
                    La estructura de la voz pasiva es:
                    <span className="fw-semibold">Verbo To be (en cualquier tiempo) + Verbo en participio pasado</span>
                    <br />
                    <br />
                    <span className="fw-semibold">Ejemplos:</span> <small>(Presiona la frase y descubre su traducción)</small><br />
                    <span className="ms-3">
                    <Tooltip content="La fiesta fue organizada por él" text="- The party was organized by him" id="passiveVoiceOne"/>
                    </span>
                    <br />
                    <span className="ms-3">
                    <Tooltip content="El viaje se realizará en Septiembre" text="- The trip will be carried out in September" id="passiveVoiceTwo"/>
                    </span>
                    <br />
                    <span className="ms-3">
                    <Tooltip content="Un vaso fue roto por los niños" text="- A glass was broken by the children " id="passiveVoiceThree"/>
                    </span>
                </p>
            </div>
        </div>
    )
}
