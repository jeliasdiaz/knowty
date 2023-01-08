import "./Footer.css"
import { AiFillYoutube } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCopy } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";
import MembersCard from "./MembersCard";

export const Footer = () => {
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
            <MembersCard name="Jose Díaz" description="Creador del proyecto y página. Creador de contenido para YouTube" icon={<AiFillYoutube size={36} />} iconTwo={<FaDev size={34} />} optionalClass="pt-4"/>
          </div>

          <div className="d-flex">
            <MembersCard name="Yader Vega" description="Encargado del marketing y contribuidor al diseño de la página" icon={<BsMegaphoneFill size={34} />} />

            <MembersCard name="Mauricio Lopez" description="Principal encargado del marketing de la página y proyecto" icon={<BsMegaphoneFill size={34} />} />
          </div>
        </div>

        <div className="footerPaddingBottom">
          <div className="moreInformation ownShadow" data-aos="fade-down" data-aos-duration="1400" data-aos-once="true">
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
                <a href="https://www.youtube.com/@formuapp1757/videos" className="text-primary boldFooterText" target="_blank" rel="noreferrer">FormuApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </footer>
  )
}
