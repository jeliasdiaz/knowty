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
					</li>
					<li></li>
				</ol>

			</div>
		</div>
	)
}
