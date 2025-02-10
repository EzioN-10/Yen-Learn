import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Tutor from './Tutor'; // Imported the Tutor component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route */}
        <Route path="/tutor" element={<Tutor />} /> {/* Route for Tutor page */}
      </Routes>
    </Router>
  </React.StrictMode>
);