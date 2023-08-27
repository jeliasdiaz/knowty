import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/darkMode.css'
import './css/katex.min.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'reactflow/dist/style.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { TitleContextSubject } from './context/TitleContextSubject';
import { PeriodicElementContext } from './context/PeriodicElementContext';
import { DarkModeContext } from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContext>
    <TitleContextSubject>
      <PeriodicElementContext>
        <App />
      </PeriodicElementContext>
    </TitleContextSubject>
    </DarkModeContext>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
/* serviceWorkerRegistration.register(); */
serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  },
});
