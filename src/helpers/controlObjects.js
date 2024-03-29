import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const useControlObjects = (data, type) => {
	// Estado para el objeto actual
	const [currentObject, setCurrentObject] = useState({
		vector: 0,
		mru: 0,
		mrua: 0,
		freeFall: 0,
		verticalShot: 0,
		pitagoras: 0,
		parabolicShot: 0,
		dinamic: 0,
		torque: 0,
		work: 0,
		power: 0,
		performance: 0,
		kineticEnergy: 0,
		gravitationalPotentialEnergy: 0,
	})

	// Estado para mostrar el proceso de resolución
	const [showProcess, setShowProcess] = useState({
		vectores: false,
		mru: false,
		mrua: false,
		freeFall: false,
		verticalShot: false,
		pitagoras: false,
		parabolicShot: false,
		dinamic: false,
		torque: false,
		work: false,
		power: false,
		performance: false,
		kineticEnergy: false,
		gravitationalPotentialEnergy: false,
	})

	// Estado para indicar si la opción seleccionada es correcta
	const [isCorrect, setIsCorrect] = useState(false)

	// Estado para indicar si se ha seleccionado una opción
	const [isSelected, setIsSelected] = useState(false)

	// Estado para mostrar el marcador de puntuación
	const [showScoreboard, setShowScoreboard] = useState(false)

	// Estado para mostrar la solución
	const [showSolution, setShowSolution] = useState(false)

	// Estado para la opción seleccionada
	const [selectedOption, setSelectedOption] = useState(0)

	// Estado para el número de respuestas correctas
	const [correctOptions, setCorrectOptions] = useState(0)

	// Barra de progreso
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		setProgress(() => {
			const nextProgress = 100 / data.length
			return nextProgress
		})
	}, [data.length])

	// Función para pasar al siguiente objeto
	const nextObject = () => {
		const isAnswerCorrect = selectedOption === data[currentObject[type]].answer

		// Check if the user has already selected the correct answer
		if (isSelected && isCorrect) {
			if (currentObject[type] < data.length - 1) {
				setCurrentObject({ ...currentObject, [type]: currentObject[type] + 1 })
			} else {
				setCurrentObject({ ...currentObject, [type]: currentObject[type] })
				setShowScoreboard(true)
			}

			setShowProcess({ ...showProcess, [type]: false })
			setIsSelected(false)
			setIsCorrect(false)
			setSelectedOption('')
			setShowSolution(false)
			return
		}

		// If the answer is correct, mark it as such and proceed
		if (isAnswerCorrect) {
			setIsCorrect(true)
			setCorrectOptions(correctOptions + 1)
		}

		if (currentObject[type] < data.length - 1) {
			setCurrentObject({ ...currentObject, [type]: currentObject[type] + 1 })
			setShowSolution(false)
		} else {
			setCurrentObject({ ...currentObject, [type]: currentObject[type] })
			setShowScoreboard(true)
		}

		setShowProcess({ ...showProcess, [type]: false })
		setIsSelected(false)
		setSelectedOption('')

		setProgress((prevProgress) => {
			const nextProgress = prevProgress + 100 / data.length
			return nextProgress > 100 ? 100 : nextProgress
		})
	}

	// Función para mostrar/ocultar el proceso de resolución
	const onShowProcess = () => {
		setShowProcess({ ...showProcess, [type]: !showProcess[type] })
	}

	// Manejador de cambio de opción seleccionada
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value)
		setIsCorrect(false)
	}

	// Validar la opción seleccionada y actualizar el estado correspondiente
	const validateOption = () => {
		if (!selectedOption) {
			return
		}
		if (selectedOption === data[currentObject[type]].answer) {
			setIsCorrect(true)
			setCorrectOptions(correctOptions + 1)
		}
		setIsSelected(true)
		setShowSolution(true)
	}

	// Reiniciar los ejercicios
	const restartExercises = () => {
		setCurrentObject({ ...currentObject, [type]: 0 })
		setShowScoreboard(false)
		setIsSelected(false)
		setShowSolution(false)
		setCorrectOptions(0)
		setProgress(() => {
			const nextProgress = 100 / data.length
			return nextProgress
		})
	}

	// Calcular el resultado del puntaje
	const scoreResult = ((correctOptions / data.length) * 100).toFixed(2)

	// Determinar el color del gráfico de barras de puntuación
	const [colorChart, setColorChart] = useState('')

	useEffect(() => {
		const renderColorBarChart = (score) => {
			if (score >= 80.0 && score <= 100.0) {
				setColorChart('lightgreen')
			} else if (score > 50.0 && score <= 70.99) {
				setColorChart('#f0f05e')
			} else if (score >= 0 && score <= 40.99) {
				setColorChart('lightcoral')
			}
		}
		renderColorBarChart(scoreResult)
	}, [scoreResult])

	const result = {
		nextObject,
		onShowProcess,
		currentObject,
		showProcess,
		selectedOption,
		isSelected,
		isCorrect,
		handleOptionChange,
		validateOption,
		showScoreboard,
		scoreResult,
		showSolution,
		restartExercises,
		colorChart,
		progress,
	}
	return {
		result,
	}
}

// Propiedades esperadas para el hook useControlObjects
useControlObjects.propTypes = {
	data: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
}
