import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import questions from "./questions.json";
import apartments from './apartment.json';
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFjNicrLe1vVTvrf1-Vr3yz_bsv2UfbkI",
  authDomain: "dubs-housing-56c78.firebaseapp.com",
  projectId: "dubs-housing-56c78",
  storageBucket: "dubs-housing-56c78.appspot.com",
  messagingSenderId: "969951576801",
  appId: "1:969951576801:web:fb2aad060d7eaa9f17eda0",
  databaseURL: "https://dubs-housing-56c78-default-rtdb.firebaseio.com"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Use createRoot to manage the root container
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App questions={questions} apartments={apartments} />
    </BrowserRouter>
  </React.StrictMode>
);
