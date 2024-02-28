import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import questions from "./questions.json";
import apartments from './apartment.json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App questions={questions} apartments={apartments} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
