import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import { structureMatterItems } from '.'
import { darkModeContext } from '../../../context/DarkModeContext';
import { useContext } from 'react';

export const AtomicModels = () => {

  const { isDarkMode } = useContext(darkModeContext);
  return (
    <div className="homeCard">
      <TopWave />
      <SectionTitle title="Modelos atómicos" />
      <ContentsTable items={structureMatterItems}/>
      <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <img src={isDarkMode === "dark" ? "/img/modelosAtomicosDark.svg" : "/img/modelosAtomicos.svg"} alt="Modelos atómicos" className="w-80 rounded-3 revealing-image" />
        <h4 className="pt-4">Aportes de Leucipo y  Demócrito</h4>
        <p>Leucipo consideró que hay cierto punto en el que la materia no puede divirse más, mediante el experimento de cortar un objeto en rebanadas, hasta llegar al punto que no pudiera ser cortada.</p>
        <hr />
        <h4 className="pt-4">Modelo atómico de Dalton</h4>
        <ul>
          <li>Plantea la idea de un átomo macizo. Es quien rescata las ideas de Demócrito (átomos son indivisibles).</li>
          <li>Los átomos de un mismo elemento son iguales y viceversa.</li>
          <li>Los compuestos surgen al combinar átomos de dos o más elementos.</li>
        </ul>
        <h6>Postulados</h6>
        <ul>
          <li>La materia está constituida por minúsculas partículas indivisibles llamadas átomos.</li>
          <li>Cada elemento está constituido por átomos idénticos entre sí y con  propiedades iguales. Los átomos de un elemento difieren de los de otros.</li>
          <li>Al unirse dos o más átomos de distintos elementos, lo hacen en proporciones determinadas y sencillas, creando así los compuestos formados por moléculas. Las moléculas de un determinado compuesto son idénticas entre sí.</li>
          <li>Durante una reacción química los átomos se intercambian, más no sufren transformación alguna, ni se crean o destruyen en el proceso.</li>
        </ul>
        <hr />
        <h4>Modelo atómico de Thomson</h4>
        <ul>
          <li>Según su modelo atómico, el átomo está formado por electrones de carga negativa incrustados en una esfera de carga positiva, como en un “pudin de pasas”.</li>
          <li>Los electrones se encuentran repartidos de forma uniforme por todo el átomo.</li>
          <li>El átomo es neutro, las cargas positivas se compensan con las negativas y viceversa.</li>
          <li>Descubrió el electrón.</li>
          <li>Este modelo no era estático, sino que los electrones podían cambiar su posición en la esfera siempre y cuando las cargas fueran compensadas.</li>
        </ul>
        <p>
          Para llegar a estas conclusiones, Thomson realizó varios experimentos, uno de estos, consistió en utilizar tubos de rayos catódicos al vacío. El rayo se detecta al pintar el extremo del tubo correspondiente al ánodo con fósforo, posterior al impacto del rayo. El fósforo produce una chispa y así es detectado, lo que realizó fue lanzar partículas alfa (núcleos de helio) contra una lámina de oro, observando que la mayoría de partículas atravesaban la lámina como si nada y otras pocas rebotaban. <br /> <br />

          A partir de esto, dedujo que si las partículas alfa atraviesan el oro, es porque los átomos deben tener mucho espacio vacío y, cuando algunas de estas partículas rebotan, se debe a que están chocando con esa parte del átomo que lleva carga positiva, siendo comparativamente más pequeña.</p>

        <hr />
        <h4>Modelo atómico de Rutherford</h4>
        <ul>
          <li>El átomo en sí, es espacio vacío.</li>
          <li>En el núcleo se concentra la masa y la carga positiva del átomo.</li>
          <li>Los electrones con carga negativa, giran alrededor del núcleo en trayectorias circulares a las que denominó órbitas.</li>
        </ul>
        <p>
          Para ello, replicó el experimento realizado por Thompson. Notó que la mayoría de las partículas alfa pasaban a través de la lámina de oro, procediendo así que los átomos son en gran medida espacio vacío. De igual forma, se percató de que algunas partículas alfa se desviaban ligeramente, implicando que debían existir interacciones con otras partículas de carga positiva. Mientras que otras rebotaron contra hacia la fuente. <br /> <br />

          Ante esto, consideró que los electrones negativos equilibraban la carga nuclear positiva, y que viajaban en órbitas circulares alrededor del núcleo.
        </p>
        <hr />
        <h4>Modelo atómico de Bohr</h4>
        <ul>
          <li>Los electrones orbitan el núcleo en órbitas que tienen un tamaño y energía establecidos. Estos niveles se designan por letras o números.</li>
          <li>Los electrones con carga negativa, giran alrededor del núcleo en órbitas circulares.</li>
          <li>La energía se absorbe o se emite cuando un electrón se mueve de una órbita a otra.</li>
          <li>Los niveles de energía tienen diferentes números de electrones.</li>
          <li>La energía de la órbita está relacionada con su tamaño. La energía más baja se encuentra en la órbita más pequeña. Es decir, entre más lejos esté el nivel de energía del núcleo, mayor será la energía que tiene.</li>
        </ul>
        <hr />
        <h4>Modelo atómico de Sommerfeld</h4>
        <p>
          Postuló que dentro de los mismos niveles de energía se encuentran subniveles de energía. También que los electrones se encuentran girando en órbitas eliptícas, y definió el número atómico Azimutal o secundario.
        </p>
        <hr />
        <h4>Modelo atómico de Schrödinger</h4>
        <p>
          Entre el mundo cuántico y el mundo que experimentamos normalmente, existe una gran diferencia. La <span className="fw-semibold">indeterminación.</span> Por esta razón, los átomos no poseen un lugar fijo. De ahí que la forma correcta de ver a un electrón girando no es mediante una esfera que sigue un camino, sino, a través de nubes de probabilidad (orbitales), puesto que la posición de los electrones dentro el átomo es indefinida gracias a la indeterminación. <br /><br />

          Estas nubes indican las zonas donde sería más probable encontrar un electrón <span className="fw-semibold">si</span> tratáramos de forzarlo a estar allí, debido a que estos (nuevamente por la indeterminación) están y no están en ese lugar.
          <br />
          <br />
          Para llegar a estos postulados, Schrödinger consideró el principio de incertidumbre planteado por Heisenberg, que propone que no podemos conocer la posición y velocidad de las partículas subatómicas dentro de un átomo. Así como la dualidad onda-partícula presentada por Louis de Broglie, que expone que las partículas pueden comportarse como ondas y viceversa, de manera que ambas comparten propiedades entre sí.
        </p>

        <p>Dicho de otro modo, los electrones se comportan como ondas de probabilidad, cuya posición es incierta, siendo los orbitales los lugares más probables para hallar un electrón.</p>
      </div>
    </div>
  )
}
