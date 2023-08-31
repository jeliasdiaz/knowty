import { nomenclatureItems } from "."
import { ContentsTable, SectionTitle, TopWave } from "../../../components"

export const Acids = () => {
  return (
    <div className="homeCard">
    <TopWave />
    <SectionTitle title="Ácidos" />
    <ContentsTable items={nomenclatureItems} />
    <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
    <p>
                Son compuestos químicos que tienen propiedades específicas, como la capacidad de donar protones (iones H+) y tener un pH menor a 7 en solución acuosa (mezcla homogénea en la que un componente está disuelto en agua). Formados por un ion de hidrógeno y un anión. Se caracterizan por:
              </p>
              <ul>
                <li>Ceder protones en medio acuoso.</li>
                <li>Sabor agrio picante.</li>
                <li>Tienden a reaccionar con las bases para formar sales y agua</li>
              </ul>
              <p>
                Se clasifican en: <br />
                <b>Oxácido</b> = óxido ácido + agua <br />
                H<sub>x</sub>E<sub>y</sub>O<sub>z</sub> <br />
                H = Hidrógeno <br />
                E = No metal <br />
                O = oxígeno <br />
                x, y, z = Son respectivamente los posibles números de átomos <br /> <br />
                <b>Hidrácido</b> = No metal + Hidrógeno <br />
                H<sub>x</sub>E<sub>y</sub> <br />
                H = Hidrogeno <br />
                E = Elemento no metal <br />
                x, z = Número de átomos <br /> <br />
              </p>
              <h5>Nomenclatura oxácidos</h5>
              <table className="table " >
                <thead className="table-light">
                  <tr>
                    <th scope="col">Fórmula</th>
                    <th scope="col">N. tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>H<sub>2</sub>SO<sub>3</sub></td>
                    <td>Ácido sulfuroso</td>
                  </tr>
                  <tr>
                    <td>H<sub>2</sub>SO<sub>4</sub></td>
                    <td>Ácido sulfúrico</td>
                  </tr>
                  <tr>
                    <td>HClO</td>
                    <td>Ácido hipocloroso</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h5>Nomenclatura hidrácidos</h5>
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Fórmula</th>
                    <th scope="col">N. Sistemática</th>
                    <th scope="col">N. tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HF</td>
                    <td>Fluoruro de hidrógeno</td>
                    <td>Ácido fluorhídrico</td>
                  </tr>
                  <tr>
                    <td>HCl</td>
                    <td>Cloruro de hidrógeno</td>
                    <td>Ácido clorhídrico</td>
                  </tr>
                  <tr>
                    <td>H<sub>2</sub>S</td>
                    <td>Sulfuro de hidrógeno</td>
                    <td>Ácido sulfhídrico</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h5>Resumen ácidos</h5>
              <p>
                Los ácidos hidrácidos son aquellos que contienen hidrógeno y un elemento no metálico en su composición. Estos ácidos solo trabajan con su primera valencia y en nomenclatura sistemática tienen el sufijo "uro". En la nomenclatura tradicional se agrega "hídrico" al final.
                <br /><br />
                Los ácidos oxácidos, por otro lado, son aquellos que contienen hidrógeno, oxígeno y un elemento no metálico. En la nomenclatura tradicional, se usa la palabra "ácido", seguida de la raíz del elemento no metálico y la terminación -hipo-oso, -oso, -ico, -per-ico.
              </p>
    </div>
    </div>
  )
}
