import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <img src="/img/waveThree.svg" alt="" />
        <div className="notFoundContainer" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <h1>Lo sentimos</h1>
            <h6>Eso es un 404</h6>
            <p className="pt-4">Lo siento, puede que sea un error en la URL o esta ruta no existe. De todos modos, puedes regresar al inicio.</p>
            <Link to="/" className="btn-secondary btn">Ir al inicio</Link>
        </div>
    </div>
  )
}

export default NotFound