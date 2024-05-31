import React from 'react';
import HomePage from './HomePage';
import Login from './login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/HomePage" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
