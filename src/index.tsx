import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
