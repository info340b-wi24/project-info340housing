import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import questions from "./questions.json";
import apartments from './apartment.json';

// Use createRoot to manage the root container
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App questions={questions} apartments={apartments} />
    </BrowserRouter>
  </React.StrictMode>
);
