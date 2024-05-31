import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const onRecordsButtonClick = () => {
    navigate('/history');
  }
  const onDevicesButtonClick = () => {
      navigate('/devices');
    }
  
  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>
          Welcome, user123!
        </div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onRecordsButtonClick}
          value='My Records'
        />
        <input
          className={'inputButton'}
          type="button"
          onClick={onDevicesButtonClick}
          value='My Devices'
        />
      </div>
    </div>
  )
};
  
export default HomePage;