// src/api/foodApi.js
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // Base URL to search by meal name

export const fetchFoodData = async (mealName) => {
  try {
    const response = await fetch(`${API_URL}${mealName}`);
    const data = await response.json();
    return data.meals || []; // Return an empty array if no meals are found
  } catch (error) {
    console.error('Error fetching food data:', error);
    return [];
  }
};
