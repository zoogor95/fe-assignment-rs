import React, { useState, useContext, useEffect } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './MealGenerator.css';

const MealGenerator = () => {
  const { mealsData, setMealsData, favorites, setFavorites } = useContext(MealsContext);

  // Combine all meals from all categories into one array
  const meals = Object.values(mealsData).flat();

  const [randomMeal, setRandomMeal] = useState(null);

  const generateMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    setRandomMeal(meals[randomIndex]);
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

  // Update the isFavorite property of the meals in mealsData when favorites change
  useEffect(() => {
    const updatedMealsData = { ...mealsData };
    for (const category in updatedMealsData) {
      updatedMealsData[category] = updatedMealsData[category].map((meal) => ({
        ...meal,
        isFavorite: favorites.some((favorite) => favorite.id === meal.id),
      }));
    }
    setMealsData(updatedMealsData);
  }, [favorites]);

  return (
    <div className="generator">
      <h1>Random Meal Generator</h1>
      <button className="generate-btn" onClick={generateMeal}>Generate Meal</button>
      {randomMeal && (
        <div className="meal-card">
          <img src={randomMeal.img} alt={randomMeal.name} className="meal-img" />
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
