import React from 'react'
import { useControlObjects } from '../../../helpers/controlObjects';
import pitagoras from "../data/pitagoras.json"
import { BsBarChartFill } from 'react-icons/bs';
import Latex from 'react-latex';
export const PitagorasPractice = () => {
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
    } = useControlObjects(pitagoras, "pitagoras");

    const { content, img, options, process } = pitagoras[currentObject.pitagoras];


    const renderOptions = () => {
        return Object.keys(options).map((key) => (
            <React.Fragment key={key}>
                <label key={key}>
                    <input
                        type="radio"
                        value={options[key]}
                        checked={selectedOption === options[key]}
                        onChange={handleOptionChange}
                    />
                    <span> {options[key]}</span>
                </label>
                <br />
            </React.Fragment>
        ));
    };

    const renderFeedback = () => {
        if (isSelected && selectedOption) {
            const alertClass = isCorrect ? 'alert-success' : 'alert-danger';
            const alertMessage = isCorrect ? '¡Correcto!' : 'Incorrecto';
            return (
                <div className={`alert ${alertClass} p-1 w-25 text-center mb-0 ms-auto me-auto`} role="alert">
                    {alertMessage}
                </div>
            );
        }
        return null;
    };

    const renderProcess = () => {
        if (showProcess.pitagoras) {
            return (
                <div className="mt-2">
                    <Latex>{process}</Latex>
                </div>
            );
        }
        return null;
    };

    const renderScoreboard = () => {
        if (showScoreboard) {
            return (
                <div>
                    <h3 className="text-center mb-3">Resultados</h3>
                    <div className="scoreboardCard">
                        <p className="me-auto mt-0 mb-0">Puntaje</p>
                        <p className="mt-0 pt-1 mb-0">{scoreResult}%</p>
                        <span><BsBarChartFill size={20} style={{color: colorChart}} /></span>
                    </div>
                    <br />
                    <button className="btn btn-outline-secondary" onClick={restartExercises}>Regresar</button>
                </div>
            )
        }
    }
    return (
        <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            {
                showScoreboard
                    ? renderScoreboard()
                    : (
                        <>

                            <span>{content}</span>
                            <br />
                            <br />
                            <img src={img} className="img-fluid rounded w-75" alt="" />
                            <br /><br />
                            <div>
                                {renderOptions()}
                            </div>

                            <div className="d-flex mt-4">
                                <button className="btn btn-outline-secondary" onClick={previousObject}>Atrás</button>
                                {renderFeedback()}
                                <div className="d-flex gap-2 ms-auto">
                                    <button className="btn btn-secondary" onClick={validateOption}>Enviar</button>
                                    <button className="btn btn-outline-secondary" onClick={nextObject}>Siguiente</button>
                                </div>
                            </div>

                            <br />

                            {
                                showSolution &&
                                <button className="btn btn-outline-secondary mt-3" type="button" onClick={onShowProcess}>
                                    Solución
                                </button>
                            }

                            {renderProcess()}
                        </>
                    )
            }
        </div>
    )
}
