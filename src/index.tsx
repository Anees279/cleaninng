

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Global Styles
const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    padding-left: 0;
    padding-right: 0;
  }
`;

root.render(
  <React.StrictMode>
    {/* Inject global styles */}
    <style>{globalStyles}</style>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
