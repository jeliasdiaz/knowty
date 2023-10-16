//* Install PWA close btn
import { memo, useEffect, useState } from "react";
import { DownloadBtn } from "./DownloadBtn";

export const InstallAppBtn = memo(() => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    const beforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setIsReadyForInstall(true);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPrompt);
    return () =>
      window.removeEventListener("beforeinstallprompt", beforeInstallPrompt);
  }, []);

  async function downloadApp() {
    const promptEvent = window.deferredPrompt;
    promptEvent.prompt();
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  }

  const [installBtn, setInstallBtn] = useState(true);

  const handleInstallBtn = () => setInstallBtn(!installBtn);

  return installBtn && isReadyForInstall ? (
    <DownloadBtn
      downloadApp={downloadApp}
      handleInstallBtn={handleInstallBtn}
    />
  ) : (
    ""
  );
});
