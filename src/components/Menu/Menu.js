import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        {categories.map((category, index) => (
          <li key={index} className={"menu-item"} >
            <Link className="menu-button" to={`/meals/${category.strCategory}`}>{category.strCategory}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
