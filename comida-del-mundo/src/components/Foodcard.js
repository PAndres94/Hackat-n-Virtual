// src/components/FoodCard.js
import React from 'react';

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <img src={food.image} alt={food.name} />
      <p>{food.description}</p>
    </div>
  );
}

export default FoodCard;
