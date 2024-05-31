import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import 'antd/dist/reset.css';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const onRecordsButtonClick = () => {
    navigate('/history');
  }
  const onDevicesButtonClick = () => {
    navigate('/devices');
  };

  return (
    <div className="mainContainer">
      <Row justify="center" align="middle" style={{ height: '100vh', flexDirection: 'column' }}>
        <Col>
          <div className="titleContainer">
            <h1 className="welcomeMessage">Welcome, user123!</h1>
          </div>
        </Col>
        <Col>
          <Row justify="center" gutter={[20, 0]}>
            <Col>
              <Button
                type="primary"
                className="customButton"
                onClick={onRecordsButtonClick}
              >
                My Records
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                className="customButton"
                onClick={onDevicesButtonClick}
              >
                My Devices
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;