import React from 'react';
import './devices.css';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Devices = () => {
    const navigate = useNavigate();

    // Dummy data for devices
    const devices = [
        { id: 1, name: 'Pacemaker', brand: 'Brand A', type: 'Type A', serialNumber: 'SN001', clsRating: 4 },
        { id: 2, name: 'Blood Pressure Meter', brand: 'Brand B', type: 'Type B', serialNumber: 'SN002', clsRating: 2 },
        { id: 3, name: 'Artificial Heart Valve', brand: 'Brand C', type: 'Type C', serialNumber: 'SN003', clsRating: 3 },
    ];

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>My Devices</div>
            </div>
            <div className="devicesTableContainer">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Device Name</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Serial Number</th>
                            <th>CLS Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map(device => (
                            <tr key={device.id}>
                                <td>{device.name}</td>
                                <td>{device.brand}</td>
                                <td>{device.type}</td>
                                <td>{device.serialNumber}</td>
                                <td>{device.clsRating}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
  
export default Devices;
