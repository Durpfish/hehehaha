import './devices.css';
import 'antd/dist/reset.css';
import { Table, Button, Alert, Space, Modal} from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { sampleDevicesColumns } from "./data";
// import fetchData from "./utils/fetchData";
import { sampleDevices1 } from './data';

const Devices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState(sampleDevices1);
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);

  const onBackButtonClick = () => {
    navigate("/HomePage");
  };

  const onCatalogButtonClick = () => {
    navigate("/catalog");
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   fetchData("/devices", setDevices, setLoading)
  // }, []);

  const columns = sampleDevicesColumns;

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>My Devices</div>
      </div>
      <div className="alertContainer">
        <Alert
          message="Warning"
          description="New vulnerability detected."
          type="warning"
          showIcon
          action={
            <Space direction="vertical">
              <Button type="primary" onClick={showModal}>
                More
              </Button>
              <Modal
                open={open}
                title="Security Alert: Critical vulnerabilities"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key="link"
                    href="https://google.com"
                    type="primary"
                    loading={loading}
                    onClick={handleOk}
                  >
          
                    Update Device
                  </Button>,
                  <Button key="submit" type="primary" onClick={onCatalogButtonClick}>
                    Browse Catalog
                  </Button>,
                ]}
              >
                <p><b>What has happened?</b></p>
                <p>Critical security vulnerabilities in Internet-based medical devices are being exploited actively by cyber attackers. This could potentially lead to system compromise and cause threatening complications if targeted by malicious activity.</p>
                <p><b>Which devices are affected?</b></p>
                <ul>
                  <li>Brand B SN002 Blood Pressure Meter - prior to version 125.0.6422.112</li>
                  <li>Brand C SN003 Artificial Heart Valve - prior to version 125.0.2535.67</li>
                </ul>
                <p><b>What do I need to do?</b></p>
                <p>Ensure that your device has been updated to the latest version. Alternatively, browse our Device Catalog for a replacement.</p>
              </Modal>
            </Space>
          }
          closable
        ></Alert>
      </div>
      <div className="devicesTableContainer">
        <Table
          columns={columns}
          dataSource={devices}
          rowKey="id"
          pagination={false}
          loading={loading}
        />
      </div>
      <div className="backButtonContainer">
        <Button style={{ backgroundColor: '#6cf0fc', fontWeight: 'bold'}} type="primary" onClick={onBackButtonClick}>
          Back
        </Button>
      </div>
      <div className="backButtonContainer">
        <Button style={{ backgroundColor: '#6cf0fc', fontWeight: 'bold'}} type="primary" onClick={onCatalogButtonClick} >
          Catalog
        </Button>
      </div>
    </div>
  );
};

export default Devices;
