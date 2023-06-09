import React from "react";
import Latex from "react-latex";
import { removeLineBreaks } from "../helpers/removeLineBreaks";
import vectores from "../data/vectores.json";
import { useControlObjects } from '../helpers/controlObjects';

export const VectorPractice = () => {
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
        result,
        showSolution,
        restartExercises
    } = useControlObjects(vectores, "vectores");

    const { content, img, options, process } = vectores[currentObject.vectores];

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
        if (showProcess.vectores) {
            return (
                <div>
                    <p>{process?.stepOne}</p>
                    <Latex>{process?.vectoresOne}</Latex><br />
                    <Latex>{process?.vectoresTwo}</Latex><br />
                    <Latex>{process?.vectoresThree}</Latex><br />
                    <Latex>{process?.vectoresFour}</Latex><br /><br />
                    <p>{process?.stepTwo}</p>
                    <Latex>{process?.vectoresFive}</Latex><br />
                    <Latex>{process?.vectoresSix}</Latex><br />
                    <Latex>{process?.vectoresSeven}</Latex><br /><br />
                    <p>{process?.stepThree}</p>
                    <Latex>{process?.vectoresEight}</Latex>
                </div>
            );
        }
        return null;
    };

    const scoreboard = () => {
        if (showScoreboard) {
            return (
                <div>
                    <h3 className="text-center">Scoreboard</h3>
                    <div className="d-flex justify-content-center gap-3">
                        <span>Imagen chulito</span>
                        <p>{result}%</p>
                    </div>
                    <br />
                    <button className="btn btn-outline-secondary" onClick={restartExercises}>Regresar</button>
                </div>
            )
        }
    }

    return (
        <div className="subjectCard ownShadow">
            <h2>Vectores</h2>

            {
                showScoreboard
                    ? scoreboard()
                    : (
                        <>

                            <span>{removeLineBreaks(content)}</span>
                            <img src={img} className="img-fluid rounded" alt="" />
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
    );
};
