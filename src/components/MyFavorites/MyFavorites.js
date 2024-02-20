import React, { useContext } from 'react';
import './MyFavorites.css'; // Import your CSS file
import { MealsContext } from '../../context/MealsContext';

const MyFavorites = () => {
  const { favorites, setFavorites } = useContext(MealsContext);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };
  return (
    <div className="favorites-container">
      <h1>My Favorites</h1>
      {favorites.map((meal) => (
        <div key={meal.id} className="favorite-item">
          <img src={meal.img} alt={meal.name} className="favorite-image" />
          <h2 className="favorite-name">{meal.name}</h2>
          <button onClick={() => removeFavorite(meal.id)} className="remove-button">
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavorites;
