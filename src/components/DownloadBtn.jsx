import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types'

export const DownloadBtn = ({downloadApp, handleInstallBtn}) => {
  return (
    <button className="installCard ownShadow d-block d-sm-none" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
        <div className="d-flex gap-3 justify-content-center">
          <img src="/img/knowty.png" alt="logo" />
          <span onClick={downloadApp}>Descargar</span>
          <div>
            <MdClose size={35} className="closeInstallBtn" onClick={handleInstallBtn} />
          </div>
        </div>
      </button>
  )
}

DownloadBtn.propTypes = {
  downloadApp: PropTypes.func.isRequired,
  handleInstallBtn: PropTypes.func.isRequired
}
