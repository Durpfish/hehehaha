import "./devices.css";
import "antd/dist/reset.css";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { sampleDevicesColumns } from "./data";
import fetchData from "./utils/fetchData";

const Devices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false)

  const onBackButtonClick = () => {
    navigate("/HomePage");
  };

  const onCatalogButtonClick = () => {
    navigate("/catalog");
  };

  useEffect(() => {
    fetchData("/devices", setDevices, setLoading)
  }, []);

  const columns = sampleDevicesColumns;

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
          loading={loading}
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
