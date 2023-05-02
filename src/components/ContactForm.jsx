import { useRef } from "react";
import emailjs from "@emailjs/browser"
import "./Footer.css"
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
  };

    return (
        <div className="container">
            <div className="titleForm ownShadow">
                <div className="titleFormItem left">
                    <div className="title">
                        <span>CONTACTANOS</span>
                    </div>
                </div>
                <div className="screen-body-item">
                    <form ref={form} className="app-form" onSubmit={sendEmail} >
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="Nombre" name="user_name" required/>
                        </div>
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="Correo" name="user_email" required/>
                        </div>
                        <div className="app-form-group message">
                            <input className="app-form-control" placeholder="Mensaje" name="message" required />
                        </div>
                        <div className="app-form-group buttons">
                            <button className="app-form-button">SEND</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
