import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import "../css/Footer.css"
export const ContactForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xhxomcp', 'template_1j6k309', form.current, '7Kg2oCK8qyZmPM9z_')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

        setEmail("")
    };

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const onEmail = (e) => {
        const mailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        const enteredEmail = e.target.value;
        setEmail(enteredEmail);

        if (enteredEmail.match(mailValidation)) {
            setEmailError("");
        } else if (!enteredEmail.match(mailValidation) && enteredEmail.length > 5) {
            setEmailError("Por favor, ingresa un correo válido.");
        }
    };

    return (
        <div className="containerForm">
            <div className="titleForm ownShadow-lg">
                <div className="titleFormItem left">
                    <div className="title">
                        <span>CONTACTANOS</span>
                    </div>
                </div>
                <div className="screen-body-item">
                    <form ref={form} className="app-form" onSubmit={sendEmail} >
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="Nombre" name="user_name" required autoComplete="off" />
                        </div>
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="Correo" name="user_email" value={email} onInput={onEmail} autoComplete="off" />
                            {emailError && <small className="errorMesageEmail">{emailError}</small>}
                        </div>
                        <div className="app-form-group message">
                            <input className="app-form-control" placeholder="Mensaje" name="message" required autoComplete="off" />
                        </div>
                        <div className="app-form-group buttons">
                            {
                                emailError
                                    ? <button className="app-form-button-disabled" disabled >SEND</button>
                                    : <button className="app-form-button" >SEND</button>
                            }
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
