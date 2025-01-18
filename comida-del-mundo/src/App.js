// src/App.js
import React, { useState } from 'react';
import FoodCard from './components/Foodcard';

const App = () => {
  const [mealName, setMealName] = useState('Arrabiata'); // Default meal to search for

  return (
    <div>
      <h1>Food Recipes</h1>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)} // Update meal name on input change
        placeholder="Search for a meal"
      />
      <FoodCard mealName={mealName} />
    </div>
  );
};

export default App;

