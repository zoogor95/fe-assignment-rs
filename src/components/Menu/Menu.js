import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const categories = [
    { id: 1, name: 'Breakfast', disabled: false },
    { id: 2, name: 'Lunch', disabled: false },
    { id: 3, name: 'Dinner', disabled: false },
    { id: 4, name: 'Dessert', disabled: true },
    { id: 5, name: 'Beverages', disabled: true }
  ];
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        {categories.map((category, index) => (
          <li key={index} className={"menu-item"} >
            {category.disabled ? (
              <span className="menu-button disabled">{category.name}</span>
            ) : (
              <Link className="menu-button" to={`/meals/${category.id}`}>{category.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
