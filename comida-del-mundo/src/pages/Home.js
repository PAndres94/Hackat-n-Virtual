// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchFoodData } from '../api/foodApi';
import FoodCard from '../components/Foodcard';

function Home() {
  const [foodData, setFoodData] = useState([]);
  
  useEffect(() => {
    const getFoodData = async () => {
      const data = await fetchFoodData();
      setFoodData(data);
    };
    getFoodData();
  }, []);

  return (
    <div className="home">
      <h2>Delicious Food</h2>
      <div className="food-list">
        {foodData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          foodData.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
