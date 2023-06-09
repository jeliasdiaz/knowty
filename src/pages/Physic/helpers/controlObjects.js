import { useState } from 'react'
import PropTypes from 'prop-types'

export const useControlObjects = (data, type) => {
  const [currentObject, setCurrentObject] = useState({
    vectores: 0,
    mru: 0
  })
  const [showProcess, setShowProcess] = useState({
    vectores: false,
    mru: false
  });

  const [isCorrect, setIsCorrect] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [showSolution, setShowSolution] = useState(false)
  const nextObject = () => {
    if (currentObject[type] < data.length - 1) {
      setCurrentObject({ ...currentObject, [type]: currentObject[type] + 1 });
    setShowSolution(false)
    }
    else {
      setCurrentObject({ ...currentObject, [type]: currentObject[type] });
      setShowScoreboard(true); 
    }
    setShowProcess({ ...showProcess, [type]: false });
    setIsSelected(false)
    setSelectedOption('');
    setIsCorrect(false)
  };

  const previousObject = () => {
    if (currentObject[type] > 0) {
      setCurrentObject({ ...currentObject, [type]: currentObject[type] - 1 });
    }
    if (currentObject[type] === 0) {
      setCurrentObject({ ...currentObject, [type]: currentObject[type] });
    } else {
      setCurrentObject({ ...currentObject, [type]: 0 });
    }
    setShowProcess({ ...showProcess, [type]: false });
    setIsSelected(false);
    setSelectedOption('');
    setIsCorrect(false);

  };

  const onShowProcess = () => {
    setShowProcess({ ...showProcess, [type]: !showProcess[type] });
  };

  const [selectedOption, setSelectedOption] = useState(0);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsCorrect(false)
  };

  const validateOption = () => {
    if (selectedOption === data[currentObject[type]].answer) {
      setIsCorrect(true)
    setCorrectOptions(correctOptions + 1)

    }
    setIsSelected(true)
    setShowSolution(true)
  }

  const restartExercises = () => {
    setCurrentObject({ ...currentObject, [type]: 0 });
    setShowScoreboard(false);
    setIsSelected(false)
    setShowSolution(false)
  };

  const [correctOptions, setCorrectOptions] = useState(0)
  const result = correctOptions / data.length * 100
  return {
    nextObject,
    previousObject,
    onShowProcess,
    currentObject,
    showProcess,
    selectedOption,
    isSelected,
    isCorrect,
    handleOptionChange,
    validateOption,
    showScoreboard,
    result,
    showSolution,
    restartExercises
  }
}

useControlObjects.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}