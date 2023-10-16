import Latex from "react-latex";
import { SectionTitle } from "../../components/SectionTitle";
import { TopWave } from "../../components/";

export const CircularMovement = () => {
  const mcuOne = `$$θ = θ_0 + ω \\ \\cdot \\ t$$`;
  const mcuTwo = `$$ω = \\large \\frac{(θ_f - θ_i)}{(t_f - t_i)}$$`;
  const mcuThree = `$$T = \\large \\frac{2π}{ω}$$`;
  const mcuFour = `$$f = \\large \\frac{1}{t}$$`;

  const mcuaOne = `$$θ = θ_0 + ω \\ \\cdot \\ t + \\frac{1}{2} \\ \\cdot \\ a \\ \\cdot \\ t^2$$`;
  const mcuaTwo = `$$ω = ω_0 + a \\ \\cdot \\ t$$`;
  const mcuaThree = `$$a = \\large \\frac{(w_f - w_i)}{(t_f - t_i)}$$`;

  const extraOne = `$$ω = rpm \\ \\cdot \\ \\large \\frac{2π}{60}$$`;
  const extraTwo = `$$N_v = \\large \\frac{θ}{2π}$$`;
  const velocidadAngular = `$$ω$$`;
  const rpm = `$$rpm$$`;
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Movimiento circular" />

      <div
        className="subjectCard ownShadow"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <div>
          <div>
            <h2>M.C.U.</h2>
            <h5>Posición</h5>
            <Latex>{mcuOne}</Latex>
            <br />
            <Latex>{velocidadAngular}</Latex>
            <span> = velocidad angular</span>
            <br />
            <br />

            <h5>Velocidad angular</h5>
            <Latex>{mcuTwo}</Latex>
            <br />
            <br />

            <h5>Periodo</h5>
            <Latex>{mcuThree}</Latex>
            <br />
            <br />

            <h5>Frecuencia</h5>
            <Latex>{mcuFour}</Latex>
            <br />
            <br />
          </div>

          <hr className="w-100" />
          <div>
            <h2>M.C.U.A.</h2>
            <h5>Posición</h5>
            <Latex>{mcuaOne}</Latex>
            <br />
            <br />

            <h5>Velocidad</h5>
            <Latex>{mcuaTwo}</Latex>
            <br />
            <br />

            <h5>Aceleración</h5>
            <Latex>{mcuaThree}</Latex>
            <br />
          </div>
          <hr className="w-100" />
          <div>
            <h4>Extra</h4>
            <h5>Conversion importante</h5>
            <Latex>{extraOne}</Latex>
            <br />

            <span>
              <Latex>{rpm}</Latex> = revoluciones por minuto
            </span>
            <br />
            <br />

            <h5>Número de vueltas</h5>
            <Latex>{extraTwo}</Latex>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
