import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import MovieContextProvider from './context/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MovieContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MovieContextProvider>
);
