import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import 'antd/dist/reset.css';
import './StaffHomePage.css';

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onStub1ButtonClick = () => {
    //navigate('/history');
  }
  const onStub2ButtonClick = () => {
    //navigate('/devices');
  };
  const onSignOutButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="mainContainer">
      <Button type="primary" onClick={onSignOutButtonClick} className="signOutButton">
        Sign Out
      </Button>
      <Row justify="center" align="middle" style={{ height: '100vh', flexDirection: 'column' }}>
        <Col>
          <div className="titleContainer">
            <h1 className="welcomeMessage">Welcome, staff123!</h1>
          </div>
        </Col>
        <Col>
          <Row justify="center" gutter={[20, 0]}>
            <Col>
              <Button
                type="primary"
                className="customButton"
                onClick={onStub1ButtonClick}
              >
                stub
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                className="customButton"
                onClick={onStub2ButtonClick}
              >
                stub
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StaffHomePage;