import "./Footer.css"
import { AiFillYoutube } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCopy } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent container">
        <div className="textFooter 	d-none d-md-block d-lg-block">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Jose Díaz</h4>
              <p>Creador del proyecto, programador de la página y creador de contenido para YouTube</p>
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />
              <FaDev size={34} className="position-absolute bottom-0 end-0 m-1 me-5" />
            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos y encargado principal de YouTube</p>
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />

            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Yader Vega</h4>
              <p>Encargado del marketing y contribuidor al diseño de la página</p>
              <BsMegaphoneFill size={34} className="position-absolute bottom-0 end-0 m-2" />
            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
              <BsMegaphoneFill size={34} className="position-absolute bottom-0 end-0 m-2" />
            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />
            </div>
          </div>
        </div>

        <div className="textFooter d-block d-sm-none">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />
            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos y encargado principal de YouTube</p>
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />
            </div>
          </div>
          <div>
            <div className="teamCardCenter ownShadow pb-2" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Jose Díaz</h4>
              <p>Creador del proyecto, programador de la página y creador de contenido para YouTube</p>
              <FaDev size={32} className="position-absolute bottom-0 end-0 m-1 me-5" />
              <AiFillYoutube size={36} className="position-absolute bottom-0 end-0 m-1" />
            </div>
          </div>
          <div className="d-flex">
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Yader Vega</h4>
              <p>Encargado del marketing y contribuidor al diseño de la página</p>
              <BsMegaphoneFill size={34} className="position-absolute bottom-0 end-0 m-2" />
            </div>
            <div className="teamCard ownShadow" data-aos="zoom-in-down" data-aos-duration="1400" >
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
              <BsMegaphoneFill size={34} className="position-absolute bottom-0 end-0 m-2" />
            </div>
          </div>
        </div>

        <div className="moreInformation ownShadow" data-aos="fade-down" data-aos-duration="1400" >
          <h3>¿Quieres saber más?</h3>
          <div className="flex-1 justify-content-evenly">
            <div className="mx-2">
              <SiGmail size={36} className="btn-gmail" />
              <div className="d-flex">
                <p className="FooterEmailText pe-2">formuapp2022@gmail.com</p>
                <CopyToClipboard text="formuapp2022@gmail.com">
                  <IoCopy id="IoCopy" size={22} onClick={() => toast.success("Texto copiado", {
                    style: {
                      borderRadius: '10px',
                      background: '#f6f6f6',
                      color: '#000',
                    },
                  })} />
                </CopyToClipboard>
              </div>
            </div>
            <div>
              <AiFillYoutube size={36} className="btn-youtube " /><br />
              <a href="https://www.youtube.com/@formuapp1757/videos" className="text-dark boldFooterText" target="_blank" rel="noreferrer">FormuApp</a>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </footer>
  )
}
