import { worldWaritems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../components'

export const FirstWar = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Primera Guerra Mundial' />
			<ContentsTable items={worldWaritems} />

			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<p>
					La Primera Guerra Mundial, también denominada La Gran Guerra, fue un
					conflicto bélico de carácter internacional, el cual transcurrió entre
					los años <b>1914</b> y <b>1918</b>.
					<br />
					<br />
					Grandes potencias militares y económicas participaron en la guerra,
					organizándose en dos bandos:{' '}
					<b className='text-danger'>La triple Alianza</b> (conformada por el
					Imperio Austrohúngaro, el Imperio Alemán e Italia) y la{' '}
					<b className='text-primary'>Triple Entente </b>(conformada por el
					Reino Unido, Francia y el Imperio Ruso). Cabe resaltar que en la
					Triple Entente el Imperio Ruso se desintegra en 1917 y salió de la
					guerra, asimismo en ese mismo año Estados Unidos entró a la guerra,
					entre otros países.
				</p>
				<hr />
				<h4>Antecedentes</h4>
				<ul>
					<li>
						Previamente al desarrollo de la guerra, dichas potencias competían
						entre sí, estableciendo alianzas militares, económicas y políticas,
						las cuales provocaron tensión durante años.
					</li>
					<li>
						Las ideologías nacionalistas, colonialistas e imperialistas se
						consideran un factor influyente en el inicio y desarrollo del
						conflicto.
					</li>
					<li>
						Guerras como la Franco-Prusiana (el imperio Austro-Húngaro y Francia
						se enfrentaron por los territorios de Alsacia-Lorena) y la de los
						Balcanes (Serbia intentó recuperar Bosnia-Herzegovina, pero tuvo
						conflictos militares con Austria-Hungría).
					</li>
					<li>
						El detonante de este conflicto fue el asesinato del archiduque del
						Imperio Astrohúngaro, Francisco Fernando, a manos de unos
						nacionalistas serbios. Por tal motivo, el Imperio Austrohúngaro le
						declaró la guerra a Serbia, lo cual involucró a sus respectivos
						aliados.
					</li>
				</ul>
				<hr />
				<h4>Desarollo de la guerra (puntos clave)</h4>
				<ul>
					<li>
						<b> La guerra de movimientos:</b> Fueron las movilizaciones de las
						tropas de las potencias (Alemania, Francia y Gran Bretaña) que se
						realizaron con el objetivo de invadir a sus enemigos y obtener la
						victoria.
					</li>
					<li>
						<b>Guerra de trincheras:</b> Ambos bandos construyeron líneas de
						defensa difíciles de sobrepasar, cavaron agujeros en la tierra en
						donde se asentaban los soldados por un período de tiempo
						indeterminado. Dichas trincheras eran espacios insalubres, los
						cuales generaron enfermedades y muertes a los soldados.
					</li>
					<li>
						<b>Frente oriental y occidental:</b> El Frente Oriental fue la zona
						territorial donde se enfrentaron los rusos contra los alemanes y los
						austrohúngaros. Y el Frente Occidental fue la zona territorial donde
						se enfrentaron los alemanes contra los británicos, franceses y, a
						partir de 1917, los estadounidenses.
					</li>
					<li>
						<b>Revolución Bolchevique en 1917:</b> En 1917 Rusia tuvo que
						alejarse de la Gran Guerra para atender sus asuntos internos, pues
						durante ese año se derrocó al Zar Nicolás II y, por medio de una
						revolución, se consolidó un gobierno de corte socialista.
					</li>
				</ul>
				<hr />
				<h4>Consecuencias</h4>
				<ul>
					<li>
						<b>
							Desaparición de ciertos Imperios y redistribución de territorios:
						</b>{' '}
						El Imperio Alemán, Austrohúngaro, Otomano y Ruso se desintegraron
						después de la Gran Guerra. En el caso de Alemania, sus colonias
						fueron distribuidas entre los franceses y británicos. Además,
						Francia recuperó los territorios de Alsacia y Lorena.{' '}
					</li>
					<li>
						<b>Crisis económica:</b> Naturalmente una guerra de esta magnitud,
						significó un gran gasto en armamento y manutención de las tropas, lo
						cual generó una fuerte crisis económica en el continente europeo. En
						cambio, Estados Unidos se benefició económicamente de esto, pues él
						era quien hacía préstamos a los países.
					</li>
					<li>
						El conflicto dejó incontables muertos y heridos, además de la
						destrucción de ciudades y obras públicas.
					</li>
					<li>
						<b>Firma del tratado de Versalles:</b> dicho tratado se firmó en
						1919 en París, con el objetivo de garantizar la paz mundial. Se
						constató como principal responsable del conflicto a Alemania, por
						ello, le impusieron sanciones económicas, que la dejaron en una
						profunda crisis y en un descontento general.{' '}
					</li>
					<li>
						Surgieron nuevas ideologías tales como: el comunismo, nazismo y
						facismo.{' '}
					</li>
				</ul>
				<br />
				<hr />
				<h5>Bibliografía</h5>
				<ul>
					<li>
						National Geographic, Historia (13 de marzo de 2023). La primera
						guerra mundial al completo
						https://historia.<br/>nationalgeographic.com.es
						<br />
						/a/origenes-causas-y-efectos-primera
						<br />
						-guerra-mundial-2_18350
					</li>
					<li>
						Editorial Etecé, Concepto Historia (5 de marzo de 2024). Primera
						Guerra Mundial https://concepto.de/primera-guerra-mundial/
					</li>
				</ul>
			</div>
		</div>
	)
}
