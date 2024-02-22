import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchComponent from './search.js';
=======
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './style.css';
import questions from "./questions.json";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> acd33671b865b8ce6d0742d9752e296917c16d48


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <SearchComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
=======
    <App questions={questions} />
  </React.StrictMode>
>>>>>>> acd33671b865b8ce6d0742d9752e296917c16d48
);
