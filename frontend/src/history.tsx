import React from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './history.css';
import { sampleHistoryColumns, sampleMedicalHistory } from './data';
import { MedicalHistory, MedicalHistoryView } from './types';
import { toMedicalHistoryView } from './views';


const History = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/HomePage');
  }

  // TODO implement a proper backend
  const medicalHistory: MedicalHistoryView[] = sampleMedicalHistory.map(toMedicalHistoryView);
  const columns = sampleHistoryColumns;

  const expandedRowRender = (record: MedicalHistoryView) => (
    <div>
      <p>Body Part: {record.bodyPart}</p>
      <p>Record Type: {record.recordType}</p>
      <p>Date Created: {record.dateCreated}</p>
      <p>Time Created: {record.timeCreated}</p>
      <p>Date Accessed: {record.dateAccessed}</p>
      <p>Time Accessed: {record.timeAccessed}</p>
      <p>Access Location: {record.accessLocation}</p>
      <p>Access Terminal: {record.accessTerminal}</p>
      <p>Access Action: {record.accessAction}</p>
      <p>Accessed By: {record.accessedBy}</p>
      <p>Accessor Role: {record.accessorRole}</p>
    </div>
  );

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>My Medical Records</div>
      </div>
      <div className={'tableContainer'}>
        <div style={{ width: '800px' }}>
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
