import { SectionTitle, TopWave } from '../../../components'

export const PoliticalGroups = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Partidos, movimientos políticos y grupos de presión' />
			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<img src='/img/gruposPoliticos.png' alt='Grupos politicios imagen' className='w-100 rounded mx-auto d-block'/>
				<br />
				<p>
					Aquí te enseñamos que en Colombia, no solo los partidos políticos
					representan a los ciudadanos ante el gobierno, también existen los
					grupos de presión y los movimientos políticos. Pero, ¿Cómo se
					diferencia entre sí?
					<br />
					<br />
					Los partidos políticos son un conjunto de personas que con una
					ideología en común buscan el acceso al poder político. En Colombia, es
					necesario que cumplan con:
				</p>
				<ol>
					<li>
						Tener una estructura orgánica, es decir, un sistema que permita
						delimitar las funciones de cada uno de los miembros.
					</li>
					<li>
						Presentar un documento que contenga la plataforma política del
						partido, expresando su filosofía y principios del partido. Además
						programas y aspiraciones que lo identifiquen.
					</li>
					<li>
						El Consejo Nacional Electoral (CNE) debe otorgarles la personería
						jurídica, es decir, una “persona” que sea capaz de ejercer derechos
						y contraer obligaciones{' '}
					</li>
				</ol>
				<small>
					Ejemplos: El Partido liberal Colombiano, Partido conservador
					Colombiano, Cambio Radical, Alianza verde, entre otros
				</small>
				<br />
				<p>
					Por otro lado, los movimientos políticos, son aquel grupo de personas
					que buscando el acceso al poder político se aglomeran en razón de una
					estrategia electoral. Usualmente, surgen antes de las campañas
					electorales (es decir, son temporales). Ejemplo: Movimiento Unionista,
					Movimiento cristiano fuente de justicia, Fuerza social progresista,
					entre otros.
					<br />
					<br />
					Mientras que, los grupos de presión son todos aquellos que sin estar
					constituidos como partidos o movimientos políticos tienen influencia
					dentro de los procesos electorales. Algunos ejemplos que podemos
					encontrar son los grupos Feministas, ambientalistas, pro- aborto,
					sindicatos, FECODE y demás
				</p>
				<h5>Origen de los partidos políticos a nivel internacional</h5>
				<p>
					Para muchos autores el origen de los partidos políticos se remonta a
					Grecia ya que durante los debates en el Ágora, se formaban distintos
					grupos. Sin embargo, para la mayoría de las doctrinas coinciden en
					señalar que el origen de los partidos políticos tiene que ver con el
					parlamento inglés. Dentro del parlamento habían unos que abogaban por
					el fortalecimiento del Rey y los que abogaban por el fortalecimiento
					del parlamento (Wings) En el caso de los Estados Unidos la división
					entre los partidarios de un Estado federal y una confederación de
					partido federativo (demócrata) y el partido republicano.
					<br />
					<br />
					Por otro lado, según algunos tratadistas el origen de los partidos
					políticos en colombia nace como producto de la lucha entre
					Centralistas al mando de Antonio Nariño y Federalistas dirigidos por
					Camilo Torres. Otros aseguran que surgen a partir de la creación del
					partido Liberal de la mano de Ezequiel Rojas cuando publica en el
					diario nacional una declaración de principios a modo de artículo
					titulado “La razón de mi voto” en el año 1848. Un año después (1849)
					Mariano Opsina Rodriguez y Jose Eusebio Caro publican los principios
					del partido Conservador. Iniciando así la época del bipartidismo en
					Colombia.
				</p>
			</div>
		</div>
	)
}
