import { Link } from "react-router-dom"
import TopWave from "../../components/TopWave"

export const NotFound = () => {
  return (
    <div className="notFoundContainer">
        <TopWave />
        <div className="notFound" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <h1>404</h1>
            <p className="pt-4">Lo siento, puede que sea un error en la URL o esta ruta no existe. De todos modos, puedes regresar al inicio.</p>
            <Link to="/" className="btn-secondary btn">Ir al inicio</Link>
        </div>
    </div>
  )
}
