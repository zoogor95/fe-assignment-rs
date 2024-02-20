import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MealsContext } from '../../context/MealsContext';
import './Meals.css';

const Meals = () => {
  const { id } = useParams();
  const { mealsData, setMealsData, favorites, setFavorites } = useContext(MealsContext);

  const toggleFavorite = (mealId) => {
    const updatedMeals = mealsData[id].map((meal) => {
      if (meal.id === mealId) {
        meal.isFavorite = !meal.isFavorite;
        if (meal.isFavorite) {
          setFavorites([...favorites, meal]);
        } else {
          setFavorites(favorites.filter((item) => item.id !== mealId));
        }
      }
      return meal;
    });
    setMealsData({ ...mealsData, [id]: updatedMeals });
  };

  useEffect(() => {
    // Do something when favorites change...
  }, [favorites]);

  return (
    <div className="meals">
      <h1>{id} Meals</h1>
      <div className="meals-list">
        {mealsData[id].map((meal) => (
          <div key={meal.id} className="meal-card">
            <img src={meal.img} alt={meal.name} className="meal-img" />
            <h2 className="meal-name">{meal.name}</h2>
            <button className="fav-btn" onClick={() => toggleFavorite(meal.id)}>
              {meal.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
