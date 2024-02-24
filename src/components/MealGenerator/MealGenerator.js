import React, { useState, useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './MealGenerator.css';

const MealGenerator = () => {
  const { favorites, setFavorites } = useContext(MealsContext);

  const [randomMeal, setRandomMeal] = useState(null);

  const generateMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const meal = data.meals[0];
      setRandomMeal({
        id: meal.idMeal,
        name: meal.strMeal,
        img: meal.strMealThumb,
        isFavorite: false, // Assuming initially the meal is not a favorite
      });
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  const toggleFavorite = () => {
    if (!randomMeal) return;
    const updatedMeal = { ...randomMeal, isFavorite: !randomMeal.isFavorite };
    setRandomMeal(updatedMeal);
    if (updatedMeal.isFavorite) {
      setFavorites([...favorites, updatedMeal]);
    } else {
      setFavorites(favorites.filter((meal) => meal.id !== updatedMeal.id));
    }
  };

  return (
    <div className="generator">
      <h1>Random Meal Generator</h1>
      <button className="generate-btn" onClick={generateMeal}>Generate Meal</button>
      {randomMeal && (
        <div className="meal-card">
          <img src={randomMeal.img + '/preview'} alt={randomMeal.name} className="meal-img" />
          <h2 className="meal-name">{randomMeal.name}</h2>
          <button className="fav-btn" onClick={toggleFavorite}>
            {randomMeal.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MealGenerator;
