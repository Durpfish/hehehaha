// DeviceCard.tsx
import React from 'react';
import { Card, Col, Divider } from 'antd';
import { Device } from "./types";

type DeviceCardProps = {
  device: Device;
  onClick: () => void;
};

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onClick }) => {
  return (
    <Col key={device.id} md={8}>
      <Card
        hoverable
        style={{ padding: 10 }}
        cover={<img height="320px" width="280px" alt="example" src="/logo192.png" />}
        onClick={onClick}
      >
        <Card.Meta
          title={<h2>{device.name}</h2>}
          description={device.type}
        />
        <Divider orientation="center">Brand</Divider>
        <p style={{ textAlign: 'center' }}>{device.brand}</p>
        <Divider orientation="center">CLS Rating</Divider>
        <p style={{ textAlign: 'center' }}>{device.clsRating}</p>
      </Card>
    </Col>
  );
};

export default DeviceCard;
