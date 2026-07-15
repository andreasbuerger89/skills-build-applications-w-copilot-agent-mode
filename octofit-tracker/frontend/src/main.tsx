import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// VITE_CODESPACE_NAME is consumed in src/lib/api.js to build the API base URL safely.
// Example environment file: .env.local with VITE_CODESPACE_NAME=my-codespace
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
