import freeFall from '../data/freeFall.json'
import mru from '../data/mru.json'
import mrua from '../data/mru.json'
import vector from '../data/vector.json'
import verticalShot from '../data/verticalShot.json'
import parabolicShot from '../data/parabolicShot.json'
import dinamic from '../data/dinamic.json'
import torque from '../data/torque.json'
import work from '../data/work.json'
import power from '../data/power.json'
import performance from '../data/performance.json'
import kineticEnergy from '../data/kineticEnergy.json'
import gravitationalPotentialEnergy from '../data/gravitationalPotentialEnergy.json'
import { PracticeComponent } from './PracticeComponent'
export * from './PhysicPractice'

export const VectorPractice = () => {
	return (
		<PracticeComponent
			data={vector}
			subject='vector'
			title='Practica vectores'
		/>
	)
}
export const MruPractice = () => {
	return <PracticeComponent data={mru} subject='mru' title='Practica M.R.U.' />
}
export const MruaPractice = () => {
	return (
		<PracticeComponent data={mrua} subject='mrua' title='Practica M.R.U.A.' />
	)
}
export const FreeFallPractice = () => {
	return (
		<PracticeComponent
			data={freeFall}
			subject='freeFall'
			title='Practica caída libre'
		/>
	)
}

export const VerticalShot = () => {
	return (
		<PracticeComponent
			data={verticalShot}
			subject='verticalShot'
			title='Practica Tiro vertical'
		/>
	)
}

export const ParabolicShot = () => {
	return (
		<PracticeComponent
			data={parabolicShot}
			subject='parabolicShot'
			title='Practica Tiro parabólico'
		/>
	)
}

export const DinamicPractice = () => {
	return (
		<PracticeComponent
			data={dinamic}
			subject='dinamic'
			title='Practica Dinámica'
		/>
	)
}

export const TorquePractice = () => {
	return (
		<PracticeComponent data={torque} subject='torque' title='Practica Torque' />
	)
}
export const WorkPractice = () => {
	return (
		<PracticeComponent data={work} subject='work' title='Practica Trabajo' />
	)
}

export const PowerPractice = () => {
	return (
		<PracticeComponent data={power} subject='power' title='Practica Potencia' />
	)
}

export const PerformancePractice = () => {
	return (
		<PracticeComponent
			data={performance}
			subject='performance'
			title='Practica Rendimiento'
		/>
	)
}

export const KineticEnergyPractice = () => {
	return (
		<PracticeComponent
			data={kineticEnergy}
			subject='kineticEnergy'
			title='Practica Energía cinética'
		/>
	)
}

export const GravitationalPotentialEnergyPractice = () => {
	return (
		<PracticeComponent
			data={gravitationalPotentialEnergy}
			subject='gravitationalPotentialEnergy'
			title='Practica Energía potencial gravitatoria'
		/>
	)
}
