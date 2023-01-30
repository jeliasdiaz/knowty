import "./Footer.css"
import { AiFillYoutube } from "react-icons/ai";
import { BsMegaphoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import MembersCard from "./MembersCard";
import { Link } from "react-router-dom";

export const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="footer">
      <div className="footerContent container">
        <div className="textFooter d-none d-md-block d-lg-block">
          <h1>Knowty</h1>
          <div className="d-flex justify-content-center">
            <MembersCard name="Jose Díaz" description="Creador del proyecto, página y encargado del canal YouTube." icon={<HiCode size={34} />} iconTwo={<AiFillYoutube size={36} />} animationDuration={600} />

            <MembersCard name="Wilmar Fontalvo" description="Creador de videos. Encargado de animar y editar." icon={<AiFillYoutube size={36} />} animationDuration={800} />

            <MembersCard name="Yader Vega" description="Encargado del marketing y contribuidor al diseño de la página." icon={<BsMegaphoneFill size={34} />} animationDuration={1000} />

            <MembersCard name="Mauricio Lopez" description="Principal encargado del marketing de la página y proyecto." icon={<BsMegaphoneFill size={34} />} animationDuration={1200} />

            <MembersCard name="David Cáceres" description="Encargado de la creación de videos para el canal de YouTube." icon={<AiFillYoutube size={36} />} animationDuration={1400} />
          </div>
        </div>

        <div className="textFooter d-block d-sm-none">
          <h1>Knowty</h1>
          <div className="d-flex">
            <MembersCard name="David Cáceres" description="Encargado de la creación de videos para el canal de YouTube." icon={<AiFillYoutube size={36} />} animationDuration={600} />

            <MembersCard name="Wilmar Fontalvo" description="Creador de videos y encargado principal de YouTube." icon={<AiFillYoutube size={36} />} animationDuration={800} />
          </div>

          <div>
            <MembersCard name="Jose Díaz" description="Creador del proyecto, página y contenido para YouTube." icon={<HiCode size={34} />} iconTwo={<AiFillYoutube size={36} animationDuration={1000} />} optionalClass="pt-4 w-75 mx-auto" />
          </div>

          <div className="d-flex">
            <MembersCard name="Yader Vega" description="Encargado del marketing y contribuidor al diseño de la página." icon={<BsMegaphoneFill size={34} />} animationDuration={1200} />

            <MembersCard name="Mauricio Lopez" description="Principal encargado del marketing de la página y proyecto." icon={<BsMegaphoneFill size={34} />} animationDuration={1400} />
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <h3 className="contactUs">¡Contactanos!</h3>
            <div className="d-flex gap-2 ">
              <a href="mailto:knowtyinfo@gmail.com" target="_blank" rel="noreferrer" className="footerIcons ownShadow">
                <div><SiGmail size={30} className="contactIcon" /></div>
              </a>
              <a href="https://www.youtube.com/@formuapp1757" target="_blank" rel="noreferrer" className="footerIcons ownShadow">
                <div><AiFillYoutube size={30} className="contactIcon" /></div>
              </a>
              <a href="https://www.instagram.com/formuapp2022/" target="_blank" rel="noreferrer" className="footerIcons ownShadow">
                <div><AiFillInstagram size={30} className="contactIcon" /></div>
              </a>
            </div>
          </div>

          <div className="d-flex footerSecondFlex">
            <div className="creditos">
              <h5 className="sectionTitle">Creditos</h5>
              <div className="sectionsLinks">
                <Link to="/iconos" className="d-block text-black">Iconos</Link>
              </div>
            </div>

            <div>
              <h5 className="sectionTitle">Enlaces</h5>
              <div className="sectionsLinks">
                <Link to="/" className="d-block text-black">Inicio</Link>
                <Link to="/info" className="d-block text-black">Sobre nosotros</Link>
                <Link to="/blog" className="d-block text-black">Blog</Link>
                <Link to="/busqueda" className="d-block text-black">Buscar</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex border-top copyright">
          <p>Copyright &copy; 2022 - {currentYear} Knowty.</p>
        </div>
      </div>
    </footer>
  )
}
