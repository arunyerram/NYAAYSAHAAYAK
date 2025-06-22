import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Apps from '../chatbot/Apps.jsx';
import reportWebVitals from './reportWebVitals.js';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);
// 
reportWebVitals();
// 