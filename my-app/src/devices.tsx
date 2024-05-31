import React from 'react';
import './devices.css';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'antd';
import 'antd/dist/reset.css';

const Devices = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/HomePage');
  }

  const onCatalogButtonClick = () => {
    navigate('/catalog');
  }

  // TODO add backend
  const devices = [
    { id: 1, name: 'Pacemaker', brand: 'Brand A', type: 'Type A', serialNumber: 'SN001', clsRating: 4 },
    { id: 2, name: 'Blood Pressure Meter', brand: 'Brand B', type: 'Type B', serialNumber: 'SN002', clsRating: 2 },
    { id: 3, name: 'Artificial Heart Valve', brand: 'Brand C', type: 'Type C', serialNumber: 'SN003', clsRating: 3 },
  ];

  const columns = [
    { title: 'Device Name', dataIndex: 'name', key: 'name' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Serial Number', dataIndex: 'serialNumber', key: 'serialNumber' },
    { title: 'CLS Rating', dataIndex: 'clsRating', key: 'clsRating' },
  ];

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
