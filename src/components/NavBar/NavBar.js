import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/" > Home </Link></li >
        <li className="nav-item"><Link to="/menu" > Menu </Link></li >
        <li className="nav-item"><Link to="/my-favorites" > My Favorites </Link></li >
        <li className="nav-item"><Link to="/meal-generator" > Meal Generator </Link></li >
        <li className="nav-item"><Link to="/about-me" > About Me </Link></li >
      </ul>
    </nav>
  );
};

export default NavBar;
