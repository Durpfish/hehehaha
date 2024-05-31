import React from 'react';
import { Table, Collapse } from 'antd';
import './history.css'; // Make sure to create this CSS file for additional styling

const { Panel } = Collapse;

const History = () => {
  const medicalHistory = [
    {
      key: '1',
      date: '2024-05-31',
      type: 'X-Ray',
      doctorName: 'Dr. Smith',
      hospitalName: 'City Hospital',
    },
    {
      key: '2',
      date: '2024-05-30',
      type: 'Blood Test',
      doctorName: 'Dr. Johnson',
      hospitalName: 'General Hospital',
    },
    {
      key: '3',
      date: '2024-05-29',
      type: 'MRI',
      doctorName: 'Dr. Lee',
      hospitalName: 'Medical Center',
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  // State to keep track of expanded entries
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const expandedRowRender = (record: any) => (
    <div>
      <p>Doctor: {record.doctorName}</p>
      <p>Hospital: {record.hospitalName}</p>
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