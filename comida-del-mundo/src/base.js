// src/base.js
import React, { useEffect, useState } from 'react';
import './styles.css'; // Estilos globales (puedes añadir tu propio archivo CSS aquí)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function Base() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Base;
