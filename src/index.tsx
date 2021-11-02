import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare global {
    interface Window { __data: { browserIdentifier: null|string } }
}

ReactDOM.render(
  <React.StrictMode>
    <App browserIdentifier={localStorage.getItem('stolzeHausIdentifier')}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
