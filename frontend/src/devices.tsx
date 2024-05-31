import './devices.css';
import 'antd/dist/reset.css';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {sampleDevices1, sampleDevicesColumns } from './data';


const Devices = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/HomePage');
  }

  const onCatalogButtonClick = () => {
    navigate('/catalog');
  }

  // TODO implement a proper backend
  const devices = sampleDevices1
  const columns = sampleDevicesColumns

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>My Devices</div>
      </div>
      <div className="devicesTableContainer">
        <Table
          columns={columns}
          dataSource={devices}
          rowKey="id"
          pagination={false}
        />
      </div>
      <div className="backButtonContainer">
        <Button type="primary" onClick={onBackButtonClick}>
          Back
        </Button>
      </div>
      <div className="backButtonContainer">
        <Button type="primary" onClick={onCatalogButtonClick}>
          Catalog
        </Button>
      </div>
    </div>
  );
};

export default Devices;
