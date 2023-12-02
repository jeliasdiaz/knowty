import React from 'react'
import Latex from 'react-latex'
import { useControlObjects } from '../../../helpers/controlObjects'
import { BsBarChartFill } from 'react-icons/bs'
import { SectionTitle, TopWave } from '../../../components'
import { ProgressBar } from './ProgressBar'
import { PracticeBody } from './PracticeBody'

export const PracticeComponent = ({ data, subject, title }) => {
	const { result } = useControlObjects(data, subject)
	const {
		nextObject,
		previousObject,
		onShowProcess,
		currentObject,
		showProcess,
		selectedOption,
		handleOptionChange,
		isCorrect,
		validateOption,
		isSelected,
		showScoreboard,
		scoreResult,
		showSolution,
		restartExercises,
		colorChart,
		progress,
	} = result

	const { content, options, process, img } = data[currentObject[subject]]

	const renderOptions = () => {
		return Object.keys(options).map((key) => (
			<React.Fragment key={key}>
				<label key={key}>
					<input
						type='radio'
						value={options[key]}
						checked={selectedOption === options[key]}
						onChange={handleOptionChange}
					/>
					<span> {options[key]}</span>
				</label>
				<br />
			</React.Fragment>
		))
	}

	const renderFeedback = () => {
		if (isSelected && selectedOption) {
			const alertClass = isCorrect ? 'alert-success' : 'alert-danger'
			const alertMessage = isCorrect ? '¡Correcto!' : 'Incorrecto'
			return (
				<div
					className={`alert ${alertClass} p-1 w-25 text-center mb-0 ms-auto me-auto`}
					role='alert'
				>
					{alertMessage}
				</div>
			)
		}
		return null
	}

	const renderProcess = () => {
		if (showProcess[subject]) {
			return (
				<div className='mt-2 dropdownBorder'>
					<img
						src={data[currentObject[subject]]?.imgProcess}
						alt=''
						className='rounded'
					/>
					<br />
					<br />
					<Latex>{process}</Latex>
				</div>
			)
		}
		return null
	}

	const renderScoreboard = () => {
		if (showScoreboard) {
			return (
				<div>
					<h3 className='text-center mb-3'>Resultados</h3>
					<div className='scoreboardCard'>
						<p className='me-auto mt-0 mb-0'>Puntaje</p>
						<p className='mt-0 mb-0 pt-1'>{scoreResult}%</p>
						<span>
							<BsBarChartFill size={20} style={{ color: colorChart }} />
						</span>
					</div>
					<br />
					<button
						className='btn btn-outline-secondary'
						onClick={restartExercises}
					>
						Regresar
					</button>
				</div>
			)
		}
	}

	const practiceBodyProps = {
		content,
		img,
		data,
		currentObject,
		subject,
		previousObject,
		nextObject,
		renderOptions,
		renderFeedback,
		renderProcess,
		validateOption,
		showSolution,
		onShowProcess,
	}
  
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title={title} />

			{showScoreboard ? '' : <ProgressBar progress={progress} />}

			<div className='subjectCard ownShadow '>
				{showScoreboard ? (
					renderScoreboard()
				) : (
					<PracticeBody props={practiceBodyProps} />
				)}
			</div>
		</div>
	)
}
