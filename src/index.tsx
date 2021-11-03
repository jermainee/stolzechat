import React from 'react';
import ReactDOM from 'react-dom';
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import "../node_modules/bulma/css/bulma.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const stolzeHausIdentifier = localStorage.getItem('stolzeHausIdentifier')
if  (!stolzeHausIdentifier) {
    const fpPromise = FingerprintJS.load();

    (async () => {
        const fp = await fpPromise;
        const result = await fp.get();

        const browserIdentifier = result.visitorId;

        if (!browserIdentifier) {
            alert('Could not identify');
            return;
        }

        localStorage.setItem('stolzeHausIdentifier', browserIdentifier);
        window.location.reload();
    })();
}

console.log(stolzeHausIdentifier);

ReactDOM.render(
  <React.StrictMode>
    <App browserIdentifier={stolzeHausIdentifier}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
