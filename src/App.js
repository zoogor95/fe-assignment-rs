import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Menu from './components/Menu/Menu';
import Meals from './components/Meals/Meals';
import { MealsProvider } from './context/MealsContext';
import MyFavorites from './components/MyFavorites/MyFavorites';
import MealGenerator from './components/MealGenerator/MealGenerator';

function App() {
  return (
    <MealsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/meals/:id" element={<Meals />} />
          <Route path="/my-favorites" element={<MyFavorites />} />
          <Route path="/meal-generator" element={<MealGenerator/>} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </MealsProvider>
  );
}

export default App;
