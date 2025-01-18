// src/components/FoodCard.js
import React, { useEffect, useState } from 'react';
import { fetchFoodData } from '../api/foodApi'; // Adjust the path as needed

const FoodCard = ({ mealName }) => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFoodData(mealName); // Fetch meals by name
      setFoodData(data); // Set the fetched data to state
    };
    
    fetchData();
  }, [mealName]); // Re-fetch when the mealName changes

  if (!foodData.length) {
    return <p>No meals found</p>;
  }

  return (
    <div className="food-card">
      {foodData.map((meal) => (
        <div key={meal.idMeal} className="card">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img" />
          <div className="card-body">
            <h3>{meal.strMeal}</h3>
            <p>{meal.strArea} - {meal.strCategory}</p>
            <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
