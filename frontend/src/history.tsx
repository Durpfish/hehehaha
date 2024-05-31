import React, {useEffect, useState} from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './history.css';
import { sampleHistoryColumns, sampleMedicalHistory } from './data';
import { MedicalHistoryView } from './types';
import { toMedicalHistoryView } from './views';
import fetchData from './utils/fetchData';
import { MedicalHistory } from './types';



const History = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [catalog, setCatalog] = useState<MedicalHistory[]>([]);
  const [catalogView, setCatalogView] = useState<MedicalHistoryView[]>([]);

  useEffect(() => {
    fetchData("/records", setCatalog, setLoading)
  }, []);

  useEffect(() => {
    setCatalogView(catalog.map(toMedicalHistoryView))
  }, [catalog]);

  const onBackButtonClick = () => {
    navigate('/HomePage');
  }

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
        <div style={{ width: '1000px' }}>
          <Table
            dataSource={catalogView}
            columns={columns}
            expandable={{ expandedRowRender }}
            loading={loading}
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
