import { cellCycleItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../../components'

export const CellCycle = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Ciclo celular' />

			<ContentsTable items={cellCycleItems} />

			<div
				className='subjectCard ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<p>
					Desde pequeños, se nos enseñó muy bien algo que conocemos como ciclo
					de vida, aquel en el que se nace, crece, reproduce y muere. Un ciclo
					general para los seres vivos. De esta manera, la célula como unidad
					fundamental de la vida, también posee un ciclo de vida, aunque
					diferente al ya mencionado. Este ciclo por el que pasan las células es
					llamado Ciclo Celular y este tiene el objetivo de mantener el correcto
					funcionamiento y estructuración de tejidos mediante la generación de
					nuevas células que puedan suplir el funcionamiento de sus compañeras
					ya inertes, así como la producción de gametos.
					<br />
					<br />
					El Ciclo Celular se divide en dos fases, la interfase y la división
					celular (Fase M). En la cual, la interfase se divide en tres fases
					más, Fase G1 (GAP1), Fase S (Síntesis) y Fase G2 (GAP2).
					<br />
					<br />
				</p>
				<img
					src='/img/cicloCelular.png'
					alt='Ciclo celular'
					className='w-75 revealing-image'
				/>
			</div>
		</div>
	)
}
