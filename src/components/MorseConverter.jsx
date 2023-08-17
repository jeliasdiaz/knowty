import { useEffect, useState } from "react";
import Latex from "react-latex";
import PropTypes from 'prop-types'

const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

const Inputs = ({ onInput, value }) => {
    const equal = `$$=$$`

    return (
        <div className="mt-4 mb-4">
            <div className="d-flex gap-4 mt-3 mb-3">
                <div className="d-flex gap-2">
                    <input type="text" className="numberInput w-50" onInput={onInput} />

                    <span className="mt-2"><Latex>{equal}</Latex></span>

                    <input type="text" className="numberInput w-50" placeholder="resultado" readOnly={true} value={value} />
                </div>
            </div>
        </div>
    )
}

Inputs.propTypes = {
    onInput: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export const MorseConverter = () => {
    const [morse, setMorse] = useState("")
    const [text, setText] = useState("")

    const [morseSecond, setMorseSecond] = useState("")
    const [textSecond, setTextSecond] = useState("")

    const onMorse = (e) => {
        const data = e.target.value;
        setMorse(data);
    };
    const onText = (e) => {
        const data = e.target.value;
        setTextSecond(data);
    };

    useEffect(() => {
        const decodeMorse = (morseCode) => {
            return morseCode
                .trim()
                .split(" ")
                .map(code => MORSE_CODE[code])
                .join("");
        };

        setText(decodeMorse(morse));
    }, [morse]);

    useEffect(() => {

        const encodeMorse = (text) => {
            return text
                .toUpperCase()
                .split("")
                .map((letter) => {
                    if (letter === " ") {
                        return " "; // Return space for spaces
                    } else {
                        for (const code in MORSE_CODE) {
                            if (MORSE_CODE[code] === letter) {
                                return code; // Return the Morse code for the letter
                            }
                        }
                    }
                    return ""; // Return an empty string if the letter is not found in MORSE_CODE
                })
                .join(" ");
        };
        setMorseSecond(encodeMorse(textSecond));

    }, [textSecond])



    return (
        <div className="subjectCard mb-5 ownShadow">
            <h3>Traductor morse</h3>

            <h4>Morse a texto</h4>
            <Inputs onInput={onMorse} value={text} />

            <h4>Texto a Morse</h4>
            <Inputs onInput={onText} value={morseSecond} />

        </div>

    )
}
