import React, { useContext, useEffect } from 'react';
import './MyFavorites.css';
import { MealsContext } from '../../context/MealsContext';

const MyFavorites = () => {
  const { favorites, setFavorites } = useContext(MealsContext);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.idMeal !== id));
  };

  useEffect(()=>{},[])
  return (
    <div className="favorites-container">
      <h1>My Favorites</h1>
      {favorites.map((meal) => (
        <div key={meal.idMeal} className="favorite-item">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="favorite-image" />
          <h2 className="favorite-name">{meal.name}</h2>
          <button onClick={() => removeFavorite(meal.idMeal)} className="remove-button">
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavorites;
