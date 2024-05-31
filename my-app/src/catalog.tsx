import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Modal, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import 'antd/dist/reset.css';
import './catalog.css';

interface Device {
  id: number;
  name: string;
  brand: string;
  type: string;
  serialNumber: string;
  clsRating: number;
}

const Catalog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const devices: Device[] = [
    { id: 1, name: 'Pacemaker', brand: 'Brand A', type: 'Type A', serialNumber: 'SN001', clsRating: 4 },
    { id: 2, name: 'Blood Pressure Meter', brand: 'Brand B', type: 'Type B', serialNumber: 'SN002', clsRating: 2 },
    { id: 3, name: 'Artificial Heart Valve', brand: 'Brand C', type: 'Type C', serialNumber: 'SN003', clsRating: 3 },
  ];

  const columns: ColumnsType<Device> = [
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      render: () => <img src="/logo192.png" alt="icon" className="tableIcon" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Device, b: Device) => a.name.localeCompare(b.name),
      filters: [
        { text: 'Pacemaker', value: 'Pacemaker' },
        { text: 'Blood Pressure Meter', value: 'Blood Pressure Meter' },
        { text: 'Artificial Heart Valve', value: 'Artificial Heart Valve' },
      ],
      onFilter: (value, record) => record.name.includes(value as string),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: (a: Device, b: Device) => a.brand.localeCompare(b.brand),
      filters: [
        { text: 'Brand A', value: 'Brand A' },
        { text: 'Brand B', value: 'Brand B' },
        { text: 'Brand C', value: 'Brand C' },
      ],
      onFilter: (value, record) => record.brand.includes(value as string),
    },
    {
      title: 'CLS Rating',
      dataIndex: 'clsRating',
      key: 'clsRating',
      sorter: (a: Device, b: Device) => b.clsRating - a.clsRating,
      defaultSortOrder: 'ascend' as 'ascend',
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
    navigate('/devices');
  }


  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Browse all devices</div>
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
            title="Device Details"
            visible={isModalVisible}
            onOk={handleOk}
            cancelButtonProps={{ style: { display: 'none' } }}
            closeIcon={false}
          >
            <div className="modalContent">
              <img src="/logo192.png" alt="product" className="productImage" />
              <p><strong>Name:</strong> {selectedDevice.name}</p>
              <p><strong>Brand:</strong> {selectedDevice.brand}</p>
              <p><strong>Type:</strong> {selectedDevice.type}</p>
              <p><strong>Serial Number:</strong> {selectedDevice.serialNumber}</p>
              <p><strong>CLS Rating:</strong> {selectedDevice.clsRating}</p>
            </div>
          </Modal>
        )}
      </div>
      <div className="backButtonContainer">
        <Button type="primary" onClick={onBackButtonClick}>
          Back to my devices
        </Button>
      </div>
    </div>
  );
};

export default Catalog;
