import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InfoProvider } from './context/Context';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <InfoProvider>
    <App />

  </InfoProvider>
);
