import { useEffect, useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { CollapseInformation } from "./CollapseInformation";

const MORSE_CODE = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "Ñ":"--.--",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
};

export const MorseConverter = () => {
    const [morse, setMorse] = useState("")
    const [text, setText] = useState("")
    const [textToMorse, setTextToMorse] = useState(true)

    const onMorse = (e) => {
        const data = e.target.value;
        setMorse(data);
    };
    const onText = (e) => {
        const data = e.target.value.toUpperCase();
        setText(data)
    };

    useEffect(() => {
        const decodeMorse = (morseCode) => {
            return morseCode
                .trim()
                .split(" ")
                .map(code => {
                    if (code === "/") {
                        return " "; // Replace Morse space with regular space
                    } else {
                        for (const [key, value] of Object.entries(MORSE_CODE)) {
                            if (value === code) {
                                return key; // Return the letter for the Morse code
                            }
                        }
                    }
                    return ""
                })
                .join("");
        };

        setText(decodeMorse(morse));
    }, [morse]);

    useEffect(() => {

        const encodeMorse = (text) => {
            return text
                .split("")
                .map((letter) => {
                    if (letter === " ") {
                        return " / "; // Return space for spaces
                    } else {
                        return MORSE_CODE[letter]
                    }
                })
                .join(" ");
        };
        setMorse(encodeMorse(text));

    }, [text])

    const switchMorse = () => setTextToMorse(!textToMorse)


    const copyToClipboardLeft = () => {
        const dataToCopy = textToMorse ? text : morse;
        navigator.clipboard.writeText(dataToCopy);
    };
    const copyToClipboardRight = () => {
        const dataToCopy = textToMorse ? morse : text;
        navigator.clipboard.writeText(dataToCopy);
    };

    return (
        <div className="subjectCard mb-5 ownShadow">
            <h3>Traductor Morse</h3>


            <div className="mt-4 mb-4">
                <div className="d-flex gap-4 mt-3 mb-3">
                    <div className="d-flex gap-3">
                        <div>
                            <div className="d-flex">
                                <h5>{textToMorse ? "Texto" : "Morse"}</h5>
                                <MdContentCopy className="ms-auto" onClick={copyToClipboardLeft} size={20} />

                            </div>
                            <textarea type="text" className="numberInputTwo" onChange={textToMorse ? (e) => onText(e) : (e) => onMorse(e)} value={textToMorse ? text : morse}></textarea>
                        </div>
                        <BsArrowLeftRight onClick={switchMorse} size={20} cursor="pointer" />

                        <div>
                            <div className="d-flex">
                                <h5>{textToMorse ? "Morse" : "Texto"}</h5>
                                <MdContentCopy className="ms-auto" onClick={copyToClipboardRight} size={20} cursor="pointer" />

                            </div>
                            <textarea type="text" className="numberInputTwo" readOnly={true} value={textToMorse ? morse : text} ></textarea>
                        </div>
                    </div>
                </div>

                <h4>Alfabeto del código Morse</h4>

                <h6 className="text-center">Letras</h6>
                <table className="table table-bordered text-end mx-auto">
                    <tbody>
                        <tr>
                            <td>A</td>
                            <td>{MORSE_CODE.A}</td>
                            <td>G</td>
                            <td>{MORSE_CODE.G}</td>
                            <td>M</td>
                            <td>{MORSE_CODE.M}</td>
                            <td>S</td>
                            <td>{MORSE_CODE.S}</td>
                            <td>Y</td>
                            <td>{MORSE_CODE.Y}</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>{MORSE_CODE.B}</td>
                            <td>H</td>
                            <td>{MORSE_CODE.H}</td>
                            <td>N</td>
                            <td>{MORSE_CODE.N}</td>
                            <td>T</td>
                            <td>{MORSE_CODE.T}</td>
                            <td>Z</td>
                            <td>{MORSE_CODE.Z}</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td>{MORSE_CODE.C}</td>
                            <td>I</td>
                            <td>{MORSE_CODE.I}</td>
                            <td>O</td>
                            <td>{MORSE_CODE.O}</td>
                            <td>U</td>
                            <td>{MORSE_CODE.U}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td>{MORSE_CODE.D}</td>
                            <td>J</td>
                            <td>{MORSE_CODE.J}</td>
                            <td>P</td>
                            <td>{MORSE_CODE.P}</td>
                            <td>V</td>
                            <td>{MORSE_CODE.V}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>E</td>
                            <td>{MORSE_CODE.E}</td>
                            <td>K</td>
                            <td>{MORSE_CODE.K}</td>
                            <td>Q</td>
                            <td>{MORSE_CODE.Q}</td>
                            <td>W</td>
                            <td>{MORSE_CODE.W}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>F</td>
                            <td>{MORSE_CODE.F}</td>
                            <td>L</td>
                            <td>{MORSE_CODE.L}</td>
                            <td>R</td>
                            <td>{MORSE_CODE.R}</td>
                            <td>X</td>
                            <td>{MORSE_CODE.X}</td>
                            <td colSpan={2}></td>
                        </tr>
                    </tbody>
                </table>

                <h6 className="text-center">Números</h6>
                <table className="table table-bordered text-end mx-auto">
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>{MORSE_CODE[0]}</td>
                            <td>6</td>
                            <td>{MORSE_CODE[6]}</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>{MORSE_CODE[1]}</td>
                            <td>7</td>
                            <td>{MORSE_CODE[7]}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{MORSE_CODE[2]}</td>
                            <td>8</td>
                            <td>{MORSE_CODE[8]}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{MORSE_CODE[3]}</td>
                            <td>9</td>
                            <td>{MORSE_CODE[9]}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{MORSE_CODE[4]}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{MORSE_CODE[5]}</td>
                            <td colSpan={2}></td>
                        </tr>
                    </tbody>
                </table>

                <h6 className="text-center">Puntuación</h6>
                <table className="table table-bordered text-end mx-auto">
                    <tbody>
                        <tr>
                            <td>.</td>
                            <td>{MORSE_CODE["."]}</td>
                            <td>{"("}</td>
                            <td>{MORSE_CODE["("]}</td>
                            <td>+</td>
                            <td>{MORSE_CODE["+"]}</td>
                            <td>" "</td>
                            <td>{MORSE_CODE[" "]}</td>
                        </tr>
                        <tr>
                            <td>,</td>
                            <td>{MORSE_CODE[","]}</td>
                            <td>{")"}</td>
                            <td>{MORSE_CODE[")"]}</td>
                            <td>-</td>
                            <td>{MORSE_CODE["-"]}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>{MORSE_CODE["?"]}</td>
                            <td>&</td>
                            <td>{MORSE_CODE["&"]}</td>
                            <td>_</td>
                            <td>{MORSE_CODE["_"]}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>'</td>
                            <td>{MORSE_CODE["'"]}</td>
                            <td>:</td>
                            <td>{MORSE_CODE[":"]}</td>
                            <td>"</td>
                            <td>{MORSE_CODE["\""]}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>!</td>
                            <td>{MORSE_CODE["!"]}</td>
                            <td>;</td>
                            <td>{MORSE_CODE[";"]}</td>
                            <td>$</td>
                            <td>{MORSE_CODE["$"]}</td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>/</td>
                            <td>{MORSE_CODE["/"]}</td>
                            <td>=</td>
                            <td>{MORSE_CODE["="]}</td>
                            <td>@</td>
                            <td>{MORSE_CODE["@"]}</td>
                            <td colSpan={2}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <CollapseInformation name="¿Qué es el código Morse?" id="morse" >
                <p>
                    Originado en el siglo XIX , el código Morse es un sistema de comunicación telegráfica que utiliza combinaciones de puntos y rayas para representar letras, números y caracteres especiales. Cada letra o símbolo se representa mediante una secuencia única de puntos (representados como cortos pulsos) y rayas (representadas como largos pulsos).
                    <br />
                    <br />
                    Este sistema de código permitía a los operadores enviar mensajes codificados a través de líneas telegráficas y, más tarde, a través de señales de radio. Aunque ha perdido gran parte de su uso práctico con el avance de las tecnologías de comunicación modernas, el código Morse sigue siendo relevante en algunas áreas, como la navegación marítima y aérea, así como en situaciones de emergencia, donde puede ser utilizado como una forma de comunicación de respaldo.
                </p>
            </CollapseInformation>
        </div>

    )
}
