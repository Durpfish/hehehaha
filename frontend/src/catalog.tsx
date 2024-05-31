import React, { useState, useEffect } from 'react';
import fetchData from './utils/fetchData';
import { useNavigate } from 'react-router-dom';
import { Select, Modal, Button, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import 'antd/dist/reset.css';
import './catalog.css';
import { Device } from "./types";
import DeviceCard from "./device-card";
import { sampleDevices2 } from './data';

const { Option } = Select;

const Catalog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [loading, setLoading] = useState(false);
  const [catalog, setCatalog] = useState<Device[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<Device[]>([]);

  useEffect(() => {
    // fetchData("/catalog", setCatalog, setLoading)
    setLoading(false);
    setCatalog(sampleDevices2);
    setFilteredCatalog(sampleDevices2);
  }, []);
  
  /*
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
  */

  const handleCardClick = (device: Device) => {
    setSelectedDevice(device);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleFilterChange = (filters: Record<string, any | null>) => {
    let filteredData = [...catalog];

    if (filters.name && filters.name.length > 0) {
      filteredData = filteredData.filter(device => filters.name?.includes(device.name));
    }
    if (filters.brand && filters.brand.length > 0) {
      filteredData = filteredData.filter(device => filters.brand?.includes(device.brand));
    }

    setFilteredCatalog(filteredData);
  };


  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate('/devices');
  }

  const uniqueNames = Array.from(new Set(catalog.map(device => device.name)));
  const uniqueBrands = Array.from(new Set(catalog.map(device => device.brand)));

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Browse all devices</div>
      </div>
      <div className="catalogContainer">
      <div className="filterContainer">
        <Select
          mode="multiple"
          allowClear
          placeholder="Filter by Name"
          style={{ width: 200, marginRight: 16 }}
          onChange={(value) => handleFilterChange({ name: value })}
        >
          {uniqueNames.map(name => (
            <Option key={name} value={name}>{name}</Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          allowClear
          placeholder="Filter by Brand"
          style={{ width: 200 }}
          onChange={(value) => handleFilterChange({ brand: value })}
        >
          {uniqueBrands.map(brand => (
            <Option key={brand} value={brand}>{brand}</Option>
          ))}
        </Select>
      </div>
        <Row gutter={[40, 16]} className="products-row">
          {filteredCatalog.map(device => (
            <DeviceCard
              key={device.id}
              device={device}
              onClick={() => handleCardClick(device)}
            />
          ))}
        </Row>
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
