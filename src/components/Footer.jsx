import "./Footer.css"
import { AiFillYoutube } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
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
            <MembersCard name="Jose Díaz" description="Creador del proyecto y página. Creador de contenido para YouTube" icon={<AiFillYoutube size={36} />} iconTwo={<FaDev size={34} />} />

            <MembersCard name="Wilmar Fontalvo" description="Creador de videos y encargado principal de YouTube" icon={<AiFillYoutube size={36} />} />

            <MembersCard name="Yader Vega" description="Encargado del marketing y contribuidor al diseño de la página" icon={<BsMegaphoneFill size={34} />} />

            <MembersCard name="Mauricio Lopez" description="Principal encargado del marketing de la página y proyecto" icon={<BsMegaphoneFill size={34} />} />

            <MembersCard name="David Cáceres" description="Encargado de la creación de videos para el canal de YouTube" icon={<AiFillYoutube size={36} />} />
          </div>
        </div>

        <div className="textFooter d-block d-sm-none">
          <h1>Knowty</h1>
          <div className="d-flex">
            <MembersCard name="David Cáceres" description="Encargado de la creación de videos para el canal de YouTube" icon={<AiFillYoutube size={36} />} />

            <MembersCard name="Wilmar Fontalvo" description="Creador de videos y encargado principal de YouTube" icon={<AiFillYoutube size={36} />} />
          </div>

          <div>
            <MembersCard name="Jose Díaz" description="Creador del proyecto y página. Creador de contenido para YouTube" icon={<AiFillYoutube size={36} />} iconTwo={<FaDev size={34} />} optionalClass="pt-4" />
          </div>

          <div className="d-flex">
            <MembersCard name="Yader Vega" description="Encargado del marketing y contribuidor al diseño de la página" icon={<BsMegaphoneFill size={34} />} />

            <MembersCard name="Mauricio Lopez" description="Principal encargado del marketing de la página y proyecto" icon={<BsMegaphoneFill size={34} />} />
          </div>
        </div>
      </div>

      <div class="footerContainer">
        <div class="d-flex justify-content-between">
          <div class="mb-3">
            <h3 className="contactUs">Contactanos!</h3>
            <div className="d-flex gap-2 ">
              <div className=" footerIcons ownShadow">
                <a href="mailto:formuapp2022@gmail.com"><SiGmail size={30} /></a>
              </div>
              <div className=" footerIcons ownShadow">
                <a href="https://www.youtube.com/@formuapp1757"><AiFillYoutube size={30} /></a>
              </div>
              <div className=" footerIcons ownShadow">
                <a href="https://www.instagram.com/formuapp2022/"><FaInstagram size={30} /></a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="sectionTitle">Enlaces</h5>
            <div className="sectionsLinks">
              <Link to="/" className="d-block text-decoration-none text-black">Inicio</Link>
              <Link to="/info" className="d-block text-decoration-none text-black">Sobre nosotros</Link>
              <Link to="/blog" className="d-block text-decoration-none text-black">Blog</Link>
              <Link to="/buscar" className="d-block text-decoration-none text-black">Buscar</Link>
            </div>
          </div>
        </div>

        <div class="d-flex pt-4 mt-4 border-top text-center copyright">
          <p>Copyright &copy; 2022 - {currentYear} Knowty.</p>
        </div>
      </div>
    </footer>
  )
}
