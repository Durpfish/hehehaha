import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Modal, Button, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import 'antd/dist/reset.css';
import './catalog.css';

interface Device {
  id: number;
  name: string;
  type: string;
  serialNumber: string;
  clsRating: number;
  hospitals: { name: string; numberOfDevices: number }[];
  url: string;
}

const Inventory: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [searchText, setSearchText] = useState('');

  const devices: Device[] = [
    {
      id: 1,
      name: 'Pacemaker',
      type: 'Cardiology',
      serialNumber: 'SN001',
      clsRating: 4,
      hospitals: [
        { name: 'KTPH', numberOfDevices: 10 },
        { name: 'SGH', numberOfDevices: 5 },
        { name: 'NUH', numberOfDevices: 8 },
      ],
      url:'/pacemaker.png'
    },
    {
      id: 2,
      name: 'Blood Pressure Meter',
      type: 'Cardiology',
      serialNumber: 'SN003',
      clsRating: 2,
      hospitals: [
        { name: 'NUH', numberOfDevices: 20 },
        { name: 'KTPH', numberOfDevices: 12 },
      ],
      url:'/blood_pressure_meter.png'
    },
    {
      id: 3,
      name: 'Artificial Heart Valve',
      type: 'Cardiology',
      serialNumber: 'SN004',
      clsRating: 3,
      hospitals: [
        { name: 'KTPH', numberOfDevices: 15 },
        { name: 'SGH', numberOfDevices: 6 },
      ],
      url:'/artificial_heart_valve.png'
    },
  ];

  const columns: ColumnsType<Device> = [
    {
        title: 'Icon',
        dataIndex: 'name',
        key: 'icon',
        render: (name: string) => {
          let iconSrc = '';
          switch (name) {
            case 'Pacemaker':
              iconSrc = '/pacemaker.png';
              break;
            case 'Blood Pressure Meter':
              iconSrc = '/blood_pressure_meter.png';
              break;
            case 'Artificial Heart Valve':
              iconSrc = '/artificial_heart_valve.png';
              break;
            // Add more cases for other devices
            default:
              iconSrc = '/default_icon.png'; // Default icon if device name doesn't match
          }
          return <img src={iconSrc} alt="icon" className="tableIcon" />;
        },
      },
    {
      title: 'Device Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: Device) => {
        return record.hospitals.map((hospital, index) => (
          <div key={index}>
            {index === 0 && name}
          </div>
        ));
      },
    },
    {
      title: 'Department',
      dataIndex: 'type',
      key: 'type',
      render: (name: string, record: Device) => {
        return record.hospitals.map((hospital, index) => (
          <div key={index}>
            {index === 0 && name}
          </div>
        ));
      },
    },
    {
      title: 'Available in',
      dataIndex: 'hospitals',
      key: 'hospitals',
      render: (hospitals: { name: string }[]) => {
        return hospitals.map((hospital, index) => <div key={index}>{hospital.name}</div>);
      },
    },
    {
      title: 'Number of Devices',
      dataIndex: 'hospitals',
      key: 'numberOfDevices',
      render: (hospitals: { numberOfDevices: number }[]) => {
        return hospitals.map((hospital, index) => <div key={index}>{hospital.numberOfDevices}</div>);
      },
    },
  ];

  const handleRowClick = (record: Device) => {
    setSelectedDevice(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/StaffHomePage');
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div style={{ fontSize: '50px', fontWeight: 'bold' }}>Browse all inventories</div>
        <Input
          placeholder="Search inventory..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: '400px',  marginTop: '20px' }}
        />
      </div>
      <div className="catalogContainer">
        <Table
          columns={columns}
          dataSource={devices}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
        {selectedDevice && (
          <Modal
            title="Inventory Details"
            visible={isModalVisible}
            onOk={handleOk}
            cancelButtonProps={{ style: { display: 'none' } }}
            closeIcon={false}
          >
            <div className="modalContent">
              <img src={selectedDevice.url} alt="product" className="productImage" />
              <p><strong>Device Name:</strong> {selectedDevice.name}</p>
              <p><strong>Type:</strong> {selectedDevice.type}</p>
              <p><strong>Serial Number:</strong> {selectedDevice.serialNumber}</p>
              <hr />
              {selectedDevice.hospitals && selectedDevice.hospitals.map((hospital, index) => (
                <div key={index}>
                  <p><strong>{hospital.name}</strong></p>
                  <p><strong>Number of Devices:</strong> {hospital.numberOfDevices}</p>
                  {index !== selectedDevice.hospitals.length - 1 && <hr />} {/* Add line if not the last hospital */}
                </div>
              ))}
            </div>
          </Modal>
        )}
      </div>
      <div className="backButtonContainer">
      <Button
        type="primary" onClick={onBackButtonClick} style={{ backgroundColor: '#2143d7', borderColor: '#2143d7', color: 'white', marginBottom: '10px', width: "120px",
        height: "40px", fontWeight: "bold", }}>
        Back
      </Button>
      </div>
    </div>
  );
};

export default Inventory;