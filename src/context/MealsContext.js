import React, { createContext, useState } from 'react';

export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <MealsContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </MealsContext.Provider>
  );
};