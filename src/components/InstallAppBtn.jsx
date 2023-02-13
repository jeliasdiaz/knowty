//* Install PWA close btn
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const InstallAppBtn = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    const promptEvent = window.deferredPrompt;
    promptEvent.prompt();
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  const [installBtn, setInstallBtn] = useState(true)

  const handleInstallBtn = () => {
    setInstallBtn(!installBtn)
  }
  return (
    installBtn && isReadyForInstall
    ?
    <button className="installCard ownShadow d-block d-sm-none" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
      <div className="d-flex gap-3 justify-content-center">
        <img src="/img/logo.svg" alt="logo" className="w-25" />
        <span onClick={downloadApp}>Descargar</span>
        <div>
          <MdClose size={35} className="closeInstallBtn mt-2" onClick={handleInstallBtn} />
        </div>
      </div>
    </button>
    :
    ''
  )
}

export default InstallAppBtn