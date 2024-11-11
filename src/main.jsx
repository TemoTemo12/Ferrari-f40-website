import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This is where Tailwind CSS is included

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
