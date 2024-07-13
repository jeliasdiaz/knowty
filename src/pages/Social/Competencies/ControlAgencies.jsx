import { SectionTitle, TopWave } from '../../../components'

export const ControlAgencies = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Organismos de control' />
			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<div>
                <p>
					{' '}
					Los organismos de control son aquellos a los que la Constitución
					Política les confía las funciones relacionadas con el control
					disciplinario, defender al pueblo y el control fiscal. Sin embargo,
					estos no están adscritos ni vinculados a las Ramas del poder público.
					<br />
					<br />
					Los organismos de control vienen sirviendo en el Estado desde su
					implementación en la constitución de 1886, junto a la Corte Suprema de
					Justicia, el Consejo de Estado, La Contraloría General de la República
					y la Procuraduría General de la Nación. Si bien, estos órganos de
					control ya se encontraban vigentes, no tomaron fuerza hasta 1991, año
					en el que se extendió la fiscalización de todos los órganos y ramas
					del poder, y se reconoció autonomía e independencia a dichos órganos.
					<br />
					<br />
					Dichos órganos se fortalecieron en una constitución consecuente debido
					a que las leyes ejercidas en la constitución del 86 restringían su
					autonomía e independencia necesaria para cumplir con sus labores, pues
					el ministerio público debía ejercerse “Bajo la suprema dirección de
					gobierno” (TÍTULO XIV, Art. 142) y la Contraloría General actuaba en
					nombre de la Cámara de Representantes.
					<br />
					<br />
					Su función principal es controlar ciertas actividades estatales para
					agregar al control interno necesario entre las ramas del poder
					público. Por ello en 1991 con el fin de fortalecer y especializar las
					actividades de control se les cedió autonomía.
					<br />
					<br />
					De acuerdo con la carta política de 1991 (Art. 117-119, Título X)
				</p>
				<ul>
					<li>
						<b>La Contraloría General de la República (CGR):</b> Es el máximo
						órgano de control fiscal del Estado. Como tal, tiene la misión de
						procurar el buen uso de los recursos y bienes públicos y contribuir
						a la modernización del Estado, mediante acciones de mejoramiento
						continuo en las distintas entidades públicas.
						<ul>
							<li>
								<b>Fondo de Bienestar Social de la CGR:</b> El Fondo de
								Bienestar Social de la Contraloría General de la República es un
								ente con personería jurídica, autonomía administrativa y
								presupuesto propio, adscrito a la Contraloría General de la
								República.
							</li>
						</ul>
					</li>
					<li>
						<b>Auditoría General de la República:</b> Es un organismo de
						vigilancia de la gestión fiscal, dotado de autonomía jurídica,
						administrativa, contractual y presupuestal, que no hace parte de
						ninguna de las ramas del poder público.
					</li>
					<li>
						<b>Ministerio Público:</b> Organismo autónomo de control, integrado
						por la <i>Procuraduría General de la República</i> y la{' '}
						<i>Defensoría del Pueblo</i>, (esta última creada por la
						Constitución de 1991). <br />
						“… Al Ministerio Público corresponde la guarda y promoción de los
						derechos humanos, la protección del interés público y la vigilancia
						de la conducta oficial de quienes desempeñan funciones públicas.”
						(Art. 119)
						<ul>
							<li>
								<b>Procuraduría General de la Nación:</b> Entidad con autonomía
								financiera y administrativa, que representa a los colombianos
								ante el Estado siendo el máximo organismo del ministerio
								público. Tiene autonomía administrativa, financiera y
								presupuestal, y no hace parte de ninguna de las ramas del poder
								público.
							</li>
							<li>
								<b>Defensoría del Pueblo:</b> Es un organismo de creación
								constitucional en cabeza del Defensor del Pueblo quien actúa
								bajo la dirección del Procurador General de la Nación. El
								objetivo esencial consiste en velar por la promoción, el
								ejercicio y la divulgación de los Derechos Humanos.
							</li>
						</ul>
					</li>
				</ul>
                </div>
                <hr />
                <h5>Bibliografía</h5>
                <ul>
                    <li>Organismos de control - manual del estado - función pública . (sin fecha). Gobierno del condado. Recuperado el 4 de julio de 2024, de https://www.funcionpublica<br />.gov.co/eva/gestornormativo/<br />manual-estado/organismos-control.php
                    </li>
                    <li>(S. f.). Gov.co. Recuperado 4 de julio de 2024, de https://www.funcionpublica.<br />gov.co/eva/gestornormativo/<br />manual-estado/pdf/28_<br />organismos_control.pdf#page=5</li>
                    <li>Quintero, WR (29 de diciembre de 2015). Entidades y Organismos de Control . Ministerio del Interior. https://www.mininterior.gov.co/es/</li>
                </ul>
			</div>
		</div>
	)
}
