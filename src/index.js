import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchComponent from './search.js';


ReactDOM.render(
  <React.StrictMode>
    <SearchComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
