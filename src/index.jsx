import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
