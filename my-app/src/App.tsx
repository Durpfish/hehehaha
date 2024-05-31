import React from 'react';
import logo from './logo.svg';
import HomePage from './HomePage';
import './App.css';

function App() {
  const username = 'User'; //TODO replace with actual user logic

  return (
    <div className="App">
      <HomePage username={username} />
    </div>
  );
};

export default App;
