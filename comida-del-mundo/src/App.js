// src/App.js
import React, { useState } from 'react';
import FoodCard from './components/Foodcard';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  const [mealName, setMealName] = useState(''); 

  return (
    <div className="app-container">
      <Header />
      <div className="text-center mb-4">
        <h1>Busca Recetas de todo el Mundo</h1>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)} // Update meal name on input change
          placeholder="Ingresa el nombre del plato"
          className="form-control w-75 mx-auto mb-4"
        />
      </div>

      {/* Contenedor con cuadrícula de tarjetas */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <FoodCard mealName={mealName} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
