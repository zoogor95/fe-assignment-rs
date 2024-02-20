import React, { createContext, useState } from 'react';

export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [mealsData, setMealsData] = useState({
    1: [ // Breakfast
      { id: 1, name: 'Pancakes', img: '/images/pancakes.jpg', isFavorite: false },
      { id: 2, name: 'Eggs Benedict', img: '/images/eggs_benedict.jpg', isFavorite: false },
      // more breakfast meals...
    ],
    2: [ // Lunch
      { id: 3, name: 'Chicken Salad', img: '/images/chicken_salad.jpg', isFavorite: false },
      { id: 4, name: 'Beef Taco', img: '/images/beef_taco.jpg', isFavorite: false },
      // more lunch meals...
    ],
    3: [ // Dinner
      { id: 5, name: 'Chicken Pasta Bake', img: '/images/chicken_pasta_bake.jpg', isFavorite: false },
      { id: 6, name: 'Lamb Shoulder', img: '/images/lamb_shoulder.jpg', isFavorite: false },
      // more dinner meals...
    ],
    // more categories...
  });
  const [favorites, setFavorites] = useState([]);

  return (
    <MealsContext.Provider value={{ mealsData, setMealsData, favorites, setFavorites }}>
      {children}
    </MealsContext.Provider>
  );
};