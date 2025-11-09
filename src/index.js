import React from 'react';
import ReactDOM from 'react-dom/client';
import Aw from './aw';
// import './index.css';
// import App from './App';
import Calculator from './Calculator';
import './Calculator.css';
// import Weather from './Weather';
import Nav from './nav';
//  import App from './bookstore';
import App from './todo';
import RegistrationForm from './Registration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Aw />  */}
    {/* <App /> */}
    <Calculator />
    {/* <Booking /> */}
    {/* <Nav /> */}
    {/* <Weather /> */}
    <App />
    {/* <RegistrationForm /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
