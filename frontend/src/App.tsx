import React from 'react';
import Login from './login'; // login page
import HomePage from './HomePage'; // records, devices
import Devices from './devices'; // list of my devices, clicking on device brings to /item/<id> modal
import StaffHomePage from './StaffHomePage';
import Catalog from './catalog'; // rank devices on CLS security labelling, need to classify devices
//import Inventory from './inventory'; // same as /devices, clicking on inventory item opens modal for item <id>
import Inventory from './inventory';
import History from './history'; // doctor access history (can be modal)
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
          <Route path="/StaffHomePage" element={<StaffHomePage/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/history" element={<History />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
