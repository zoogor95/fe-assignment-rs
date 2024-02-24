import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MealsContext } from '../../context/MealsContext';
import './Meals.css';

const Meals = () => {
  const { id } = useParams();
  const { favorites, setFavorites } = useContext(MealsContext);
  const [meals, setMeals] = useState([]);

  const toggleFavorite = (mealId) => {
    const updatedMeals = meals.map((meal) => {
      if (meal.idMeal === mealId) {
        const isFavorite = !meal.isFavorite;
        meal.isFavorite = isFavorite;
        if (isFavorite) {
          setFavorites([...favorites, meal]);
        } else {
          setFavorites(favorites.filter((item) => item.idMeal !== mealId));
        }
      }
      return meal;
    });
    setMeals(updatedMeals);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        const data = await response.json();
        setMeals(data.meals.map(meal => ({...meal, isFavorite: favorites.some(favorite => favorite.idMeal === meal.idMeal)})));
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, [id, favorites]);

  return (
    <div className="meals">
      <h1>{id} Meals</h1>
      <div className="meals-list">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-img" />
            <h2 className="meal-name">{meal.strMeal}</h2>
            <button className="fav-btn" onClick={() => toggleFavorite(meal.idMeal)}>
              {meal.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
