import {
	ContentsTable,
	MoreBtn,
	SectionTitle,
	TopWave,
} from '../../../components'
import { chemicalReactionsItems } from '.'
import Latex from 'react-latex'
import { darkModeContext } from '../../../context/DarkModeContext'
import { useContext } from 'react'

export const Stoichiometry = () => {
	const { isDarkMode } = useContext(darkModeContext)
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Estequiometría' />
			<ContentsTable items={chemicalReactionsItems} />

			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<p>
					Consiste en el proceso mediante el cual se relacionan cantidades de
					reactivos y productos en una ecuación química; estás cantidades pueden
					ser moléculas, moles, gramos, átomos, etc. Entre los cálculos tenemos:
					mol - mol, mol - gramo, gramo - mol, gramo - gramo <br />
					<br />
					Ejemplo <br />
					<b>Mol - mol</b>
					<br />
					Teniendo en cuenta la siguiente ecuación: <br />
					<Latex>{`$C_3 H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$`}</Latex>
					<br />
					¿Cuántos moles de O<sub>2</sub> se requieren para reaccionar con 4,3
					moles de propano?
					<br />
					<img
						src={
							isDarkMode === 'dark'
								? '/img/mol-molDark.svg'
								: '/img/mol-mol.svg'
						}
						alt='Mol - mol'
						className='w-80 rounded-3 revealing-image'
					/>
					<br />
					Nos piden cuántos moles de oxígeno se necesitan, por tanto, ubicamos
					primero el oxígeno en el numerador y el dato que nos dan (C
					<sub>3</sub>H<sub>8</sub>) en el denominador. Posteriormente,
					multiplicamos la fracción por los 4,3 moles de propano. Luego,
					cancelamos los moles de C<sub>3</sub>H<sub>8</sub>. Dándonos el
					resultado expresado. <br /> <br />
					<b>Mol - gramo </b> <br />
					Teniendo en cuenta la siguiente ecuación: <br />
					<Latex>{`$4Al + 3O_2 \\rightarrow 2Al_2 O_3$`}</Latex> <br />
					¿Cuántos gramos de aluminio se necesitan oxidar para producir 50 mol
					de óxido de aluminio? <br />
					<img
						src={
							isDarkMode === 'dark'
								? '/img/mol-gramoDark.svg'
								: '/img/mol-gramo.svg'
						}
						alt='Mol - gramo'
						className='w-80 rounded-3 revealing-image'
					/>
					<br />
					Nos piden cuántos gramos de aluminio se necesitan, por tanto, ubicamos
					primero el aluminio en el numerador y el dato que nos dan (Al
					<sub>2</sub>O<sub>3</sub>) en el denominador. Posteriormente,
					multiplicamos la fracción por los moles dados. Después, multiplicamos
					dicho resultado por su peso molecular. <br /> <br />
					<b>Gramo - mol</b> <br />
					Teniendo en cuenta la siguiente ecuación: <br />
					<Latex>{`$3Cu + 8NO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO + 4H_2O$`}</Latex>{' '}
					<br />
					¿Cuántas moles de HNO3 son necesarias para preparar 0,75 gr de
					Cu(NO3)2? <br />
					<img
						src={
							isDarkMode === 'dark'
								? '/img/gramo-molDark.svg'
								: '/img/gramo-mol.svg'
						}
						alt='Gramo - mol'
						className='w-80 rounded-3 revealing-image'
					/>
					<br />
					Nos piden cuántas moles de HNO<sub>3</sub> se necesitan, por tanto,
					ubicamos este compuesto en el numerador y el dato que nos dan (Cu(NO
					<sub>3</sub>)<sub>2</sub>) en el denominador. Posteriormente,
					multiplicamos la fracción por otra, cuyo numerador será un mol del
					dato en cuestión, el denominador será el peso molecular de tal
					ecuación. <br /> <br />
					<b>Gramo - gramo</b> <br />
					Teniendo en cuenta la siguiente ecuación: <br />
					<Latex>{`$4P + 3O_2 \\rightarrow 2P_2O_3$`}</Latex> <br />
					¿Cuántos gramos de fósforo se necesitan oxidar para producir 200 gr de
					óxido de fósforo?
					<br />
					<img
						src={
							isDarkMode === 'dark'
								? '/img/gramo-gramoDark.svg'
								: '/img/gramo-gramo.svg'
						}
						alt='Gramo - gramo'
						className='w-80 rounded-3 revealing-image'
					/>
					<br />
					Nos piden, de modo que el fósforo queda en el numerador y el óxido de
					fósforo en el denominador. Posteriormente, aplicamos el mismo proceso
					de gramo - mol, multiplicamos la fracción por otra, cuyo numerador
					será un mol de óxido de fósforo, el denominador será el peso molecular
					de tal ecuación. Después, multiplicamos esta fracción por otra, cuyo
					denominador es un mol de fósforo y en el numerador el peso atómico del
					mismo. Luego, será multiplicado por 200 gr de óxido de fósforo.
				</p>

				<MoreBtn url='https://youtu.be/bQ0MwYR0oio' />
				<br />
				<br />
				<h3>Practica</h3>
				<p>
					Teniendo en cuenta la siguiente ecuación:
					<br />
					<Latex>{`$P_2O_5 + 3H_2O \\rightarrow 2H_3PO_4$`}</Latex> <br />
					¿Cuántos gramos de H2O se necesitan para producir 500 gramos H3PO4?
				</p>
				<p>
					<button
						className='btn btn-secondary'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseExample'
						aria-expanded='false'
						aria-controls='collapseExample'
					>
						Solución
					</button>
				</p>
				<div className='collapse dropdownBorder' id='collapseExample'>
					<img
						src={
							isDarkMode === 'dark'
								? '/img/practicaEstequiometriaDark.svg'
								: '/img/practicaEstequiometria.svg'
						}
						alt=''
						className='w-80 rounded-3 revealing-image'
					/>
				</div>
			</div>
		</div>
	)
}
