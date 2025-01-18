// src/api/foodApi.js
const API_URL = 'https://api.example.com/food'; // URL de ejemplo, cámbiala según la API que uses

export const fetchFoodData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching food data:', error);
    return [];
  }
};
