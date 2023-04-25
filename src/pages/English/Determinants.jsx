import { SectionTitle, TopWave } from "../../components"

export const Determinants = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Determinants" />

            <div className="englishCardContainer">
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Uso de -an-</h4>
                    <p className="mt-3">
                        Si la siguiente palabra comienza con una vocal (a, e, i, o, u), se utiliza -an-.
                        <br /><br />
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3"><span className="fw-semibold">An</span> apple or <span className="fw-semibold">an</span> umbrella</small>
                    </p>
                </div>
                <div className="englishCard ownShadow" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                    <h4>Uso de -a-</h4>
                    <p className="mt-3">
                        Si la siguiente palabra comienza con una consonante (b, c, d, f, ...), se utiliza -a-.
                        <br /><br />
                        <span className="fw-semibold">Ejemplo:</span>
                        <br />
                        <small className="ms-3"><span className="fw-semibold">A</span> bike or <span className="fw-semibold">a</span> car</small>
                    </p>
                </div>
            </div>
        </div>
    )
}
