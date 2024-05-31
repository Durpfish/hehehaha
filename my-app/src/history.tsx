import React from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './history.css';
import { sampleDevicesColumns, sampleMedicalHistory } from './data';

const History = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/HomePage');
  }

  // TODO implement a proper backend
  const medicalHistory = sampleMedicalHistory
  const columns = sampleDevicesColumns

  const expandedRowRender = (record: any) => (
    <div>
      <p>Doctor: {record.doctorName}</p>
      <p>Hospital/Clinic: {record.hospitalName}</p>
      <p>Time accessed: {record.time}</p>
    </div>
  );

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>My Medical Records</div>
      </div>
      <div className={'tableContainer'}>
        <div style={{ width: '800px' }}> {}
          <Table
            dataSource={medicalHistory}
            columns={columns}
            expandable={{ expandedRowRender }}
          />
        </div>
      </div>
      <div className="backButtonContainer">
        <Button type="primary" onClick={onBackButtonClick}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default History;