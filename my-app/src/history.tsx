import React from 'react';
import { Table, Collapse } from 'antd';
import './history.css'; // Make sure to create this CSS file for additional styling

const { Panel } = Collapse;

const History = () => {
  // Dummy medical history data
  const medicalHistory = [
    {
      key: '1',
      date: '2024-05-31',
      time: '10:00 AM',
      type: 'X-Ray',
      doctorName: 'Dr. Tiew',
      hospitalName: 'Changi General Hospital',
    },
    {
      key: '2',
      date: '2024-05-30',
      time: '11:30 AM',
      type: 'Blood Test',
      doctorName: 'Dr. Koey',
      hospitalName: 'Tan Tock Seng General Hospital',
    },
    {
      key: '3',
      date: '2024-05-29',
      time: '09:45 AM',
      type: 'MRI',
      doctorName: 'Dr. Lee',
      hospitalName: 'Chong Pang Camp Medical Center',
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
  ];

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
        <div style={{ width: '800px' }}> {/* Set the width of the container */}
          <Table
            dataSource={medicalHistory}
            columns={columns}
            expandable={{ expandedRowRender }}
          />
        </div>
      </div>
    </div>
  );
};

export default History;