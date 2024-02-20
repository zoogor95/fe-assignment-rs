import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Meal App!</h1>
            <p>Discover new recipes, save your favorite meals and generate random meals to try.</p>
            <img src='/images/home_image.png' alt="Delicious food" />
        </div>
    );
};

export default Home;
