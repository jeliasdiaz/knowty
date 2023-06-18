import React from "react";
import Latex from "react-latex";
import { useControlObjects } from '../../../helpers/controlObjects';
import mru from "../data/mru.json";
import { BsBarChartFill } from "react-icons/bs";
import { TopWave } from "../../../components";

export const MruPractice = () => {
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
        restartExercises
    } = useControlObjects(mru, "mru");

    const { content, options, process } = mru[currentObject.mru];

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
        if (showProcess.mru) {
            return (
                <div>
                    <Latex>{process?.stepOne}</Latex><br />
                    <Latex>{process?.mruOne}</Latex><br /><br />
                    <Latex>{process?.stepTwo}</Latex><br />
                    <Latex>{process?.mruTwo}</Latex><br /><br />
                    <Latex>{process?.mruThree}</Latex><br /><br />
                    <Latex>{process?.mruFour}</Latex><br /><br />
                    <Latex>{process?.mruFive}</Latex>
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
                        <p className="mt-0 mb-0 pt-1">{scoreResult}%</p>
                        <span><BsBarChartFill size={20} className="scoreChartColor" /></span>
                    </div>
                    <br />
                    <button className="btn btn-outline-secondary" onClick={restartExercises}>Regresar</button>
                </div>
            )
        }
    }
    return (
        <div className="homeCard">
            <TopWave />
            <div className="subjectCard ownShadow">
                <h2>M.R.U.</h2>
                {
                    showScoreboard
                        ? renderScoreboard()
                        : (
                            <>
                                <span>{content}</span>
                                <br />
                                <br />
                                {renderOptions()}

                                <br />
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
        </div>

    );
};
