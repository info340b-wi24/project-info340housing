import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './style.css';
// import questions from "./questions.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
