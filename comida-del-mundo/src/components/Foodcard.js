// src/components/FoodCard.js
import React, { useEffect, useState } from 'react';
import { fetchFoodData } from '../api/foodApi'; // Ajusta la ruta según tu proyecto

const FoodCard = ({ mealName }) => {
  const [foodData, setFoodData] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFoodData(mealName); // Llamar a la API con el nombre del plato
      setFoodData(data); // Guardar los resultados de la API
    };
    
    fetchData();
  }, [mealName]); // Re-fetch cuando cambie el mealName

  if (!foodData.length) {
    return <p>No meals found</p>;
  }

  return (
    <>
      {foodData.map((meal) => (
        <div key={meal.idMeal} className="col">
          <div className="card">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{meal.strMeal}</h5>
              <p className="card-text">{meal.strArea} - {meal.strCategory}</p>
              <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Ver receta
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCard;
