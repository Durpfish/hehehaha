import React from 'react';
import './HomePage.css';

interface HomePageProps {
    username: string;
  }
  
  const HomePage: React.FC<HomePageProps> = ({ username }) => {
    return (
      <div className="container">
        <h1>Welcome, {username}</h1>
        <div className="button-container">
          <button className="square-button">My Records</button>
          <button className="square-button">My Devices</button>
        </div>
      </div>
    );
  };
  
  export default HomePage;