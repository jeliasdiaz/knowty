import { SectionTitle, TopWave, Tooltip } from '../../components'

export const ExtraSocial = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Extra' />

			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='900'
				data-aos-once='true'
			>
				<div>
					<div>
						<p>
							Fue un <span className='fw-semibold'>partido político</span>{' '}
							fundado en <span className='fw-semibold'>1985</span> que poseía
							ideologías liberales. Se le reconoce por dos aspectos, el primero,
							consiste en que las personas consideraban que el partido tenía
							inclinación por los movimientos guerrilleros debido a sus
							ideologías liberales.
							<br />
							<br />
							La segunda, reside en el{' '}
							<Tooltip
								text={<span>genocidio</span>}
								content={
									<span>
										Acción de asesinar intencionadamente <br /> a un gran número
										de personas <br /> pertenecientes a un grupo étnico, <br />{' '}
										religioso, etc.
									</span>
								}
								id='genocidio'
							/>{' '}
							de más de 1000 miembros de la unión patriótica llevado a cabo por
							los paramilitares. Puesto que en ese periodo predominaban las
							ideas conservadoras, por lo que no le beneficiaba a ningún partido
							que un grupo insurgente estuviera ganando tanto poder.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
