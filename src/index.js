import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/darkMode.css'
import './css/katex.min.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { TitleContextSubject } from './context/TitleContextSubject';
import { PeriodicElementContext } from './context/PeriodicElementContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleContextSubject>
      <PeriodicElementContext>
        <App />
      </PeriodicElementContext>
    </TitleContextSubject>
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
