import { mechanismItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../../components'

export const ProtectionMechanisms = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Mecanismos de protección' />
			<ContentsTable items={mechanismItems} />
			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<p>
					Son los instrumentos establecidos con el fin de garantizar la
					efectividad de los derechos y el disfrute de los mismos, estos pueden
					ser nacionales, regionales e internacionales: En el caso de los
					nacionales, son los que establece cada Estado de manera autónoma en su
					Constitución, como es el caso de Colombia.
				</p>
				<ol>
					<li>
						<b>Derecho de petición:</b> Es un derecho fundamental establecido en
						el artículo 23 de la constitución política, pero a su vez un
						instrumento de protección de otros derechos. Estos pueden ser
						verbales o escritos y los términos vencen según el tipo de solicitud
						hay diferentes tipos de petición como son de interés general,
						interés particular y de documentos y de información que deben ser
						resueltas en 15 días.
						<br /> <br />
						<b>Ejemplo:</b> Carla, una joven de 16 años que vive en una zona
						rural del país se dirige a un hospital cercano por un dolor en la
						espalda, al llegar a la entidad la enfermera en turno le responde
						que no pueden darle atención medica porque ella no es originaria del
						pueblo donde se encuentra el hospital. Ante esta situación, Carla
						interpone un derecho de petición en contra de la entidad de salud
						por vulnerar su derecho a la salud.
					</li>
					<li>
						<b>Acción de tutela:</b> Mecanismo constitucional que procede para
						lograr el amparo frente a la violacion de derechos fundamentales.
						<br />
						<br />
						<b>Ejemplo:</b> Mariana es una estudiante universitaria, sus
						profesores no le permiten ingresar a sus clases por su estado de
						embarazo alegando que “
						<i>
							una estudiante embarazada no debería estar en sus clases ya que
							podría interrumpirlas molestar a sus demás compañeros y empañar la
							imagen de la universidad
						</i>
						” . Mariana ante esta situación interpone una Acción de tutela en
						contra de su institución pidiendo que se ampare el derecho de la
						educación y a la igualdad.
					</li>
					<li>
						<b>Acción de grupo:</b> Mecanismos de protección constitucional que
						procede para amparar a un grupo plural de ciudadanos que han sido
						objeto de perjuicio* por una acción u omisión de determinada
						entidad.
						<br />
						<br />
						<b>Ejemplo:</b> En Campo Alegre, barrio ubicado en la ciudad de
						Barranquilla. Los habitantes han presentado una acción de grupo
						contra la Alcaldía de Barranquilla debido a que esta entidad ha
						estado construyendo casas en un terreno el cual es peligroso a
						construir debido a su inestabilidad atentando así contra la vida de
						las personas que viven en el barrio
					</li>
					<li>
						<b>Acción popular:</b> Medida que procede para amparar derechos
						colectivos y medio ambiente de carácter preventivo.
						<br />
						<br />
						<b>Ejemplo: </b>La comunidad de Fusagasugá en Bucaramanga le está
						pidiendo a la gobernación que no permita la construcción de una
						fábrica ya que esta puede deteriorar más el territorio debido a la
						emisión de gases nocivos para los habitantes y el medio ambiente,
						por ende los ciudadanos presentan una acción popular para que la
						gobernación no permita la construcción de esta fábrica ya que puede
						dañar el territorio y a sus habitantes por lo cual la gobernación
						acepta esta medida.
					</li>
					<li>
						<b>Acción de cumplimiento:</b> Medio judicial a través del cual un
						juez ordena darle cumplimiento a lo dispuesto a una ley o acto
						administrativo.{' '}
					</li>
					<li>
						<b>Habeas Corpus (Derecho a la libertad):</b> Medio de defensa que
						impide la captura ilegal y arbitraria de una persona, por este
						motivo, el habeas corpus es una figura que garantiza que una vez que
						haya sido capturada su situación jurídica sea definida durante las
						primeras 36 horas.
						<br />
						<br />
						<b>Ejemplo:</b> Juana una madre soltera es arrestada sin justa
						causa, los policías al momento del arresto no leyeron sus derechos y
						Juana no sabe qué hacer. Karina, la madre de Juana dice que a su
						hija se le violentó el derecho a la libertad ya que su captura fue
						de manera ilegal y sin ninguna prueba, al ver esta situación los
						policías liberan a Juana y piden disculpas por su actuar diciendo
						que fue un accidente.
					</li>
					<li>
						<b>Habeas Data:</b> Figura política que busca el amparo del derecho
						a la honra de la persona; de manera que la información que sobre
						esta aparezca en la base de datos, en la lista de deudores y demás
						instrumentos públicos no afectan su imagen ante la sociedad.
						<br />
						<br />
						Ejemplo: Martin quiere saber su información bancaria con su banco.
						El banco se niega a darle esta información ya que no encuentran una
						razón sólida para dársela. Martin, ante esta situación decide usar
						el mecanismo de protección de Habeas Data y gana. Por lo cual el
						Banco está en la obligación de darle esa información
					</li>
				</ol>
			</div>
		</div>
	)
}
