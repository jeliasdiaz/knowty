import { SocialNav } from "./SocialNav"
import { SectionTitle, CollapseTitle, TopWave, Tooltip } from "../../components";

export const ExtraSocial = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Movimientos sociales" />

            <SocialNav />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                <div>
                    <CollapseTitle name="Frente nacional" id="#frenteNacional" />
                    <div className="collapse" id="frenteNacional">
                        <p>
                            <span className="fw-semibold">Pacto político</span> firmado por liberales y conservadores, entre <span className="fw-semibold">1958 a 1974</span>. Cuyo fin era hacer frente a un periodo de violencia bipartidista. Esto debido a las constantes luchas entre el partido liberal y conservador.
                            <br /><br />
                            Por otra parte, otra de las razones de este pacto, además de los intereses individuales, era el derrocamiento del presidente <span className="fw-semibold">Gustavo Rojas Pinilla</span>. Quién se había instaurado en el poder, estableciendo una dictadura militar.
                            <br /><br />
                            Entre los intereses que poseía el Frente nacional, era definir una política económica, social y estable del estado, es decir, regular las organizaciones políticas, periodos de gobierno, etc. Debido a que, eran los bipartidistas quienes gobernaban mayoritariamente. Por este motivo, se decide firmar un pacto para que ambos partidos pudieran gobernar y evitar corrupción u impedimentos en los gobiernos.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <CollapseTitle name="Unión patriótica" id="#unionPatriotica" />
                        <div className="collapse" id="unionPatriotica">
                            <p>
                                Fue un <span className="fw-semibold">partido político</span> fundado en <span className="fw-semibold">1985</span> que poseía ideologías liberales. Se le reconoce por dos aspectos, el primero, consiste en que las personas consideraban que el partido tenía inclinación por los movimientos guerrilleros debido a sus ideologías liberales.
                                <br /><br />
                                La segunda, reside en el <Tooltip text={<span>genocidio</span>} content={<span>Acción de asesinar deliberadamente a un gran número <br /> de personas pertenecientes a un grupo étnico, religioso, etc.</span>} /> de más de 1000 miembros de la unión patriótica. Puesto que en ese periodo predominaban las ideas conservadoras, por lo que no le beneficiaba a ningún partido que un grupo insurgente estuviera ganando tanto poder.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}