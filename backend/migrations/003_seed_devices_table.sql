INSERT INTO devices (serialNumber, name, brand, vendor, type, osVersionCurrent, osVersionLatest, clsRating, remarks, isCatalog) VALUES
('SN001', 'Pacemaker', 'Brand A', 'Vendor A', 'Type A', '1.0.0', '1.0.1', 4, 'Critical device, requires regular monitoring.', TRUE),
('SN002', 'Blood Pressure Meter', 'Brand B', 'Vendor B', 'Type B', '2.5.3', '2.6.0', 2, 'Battery issues in some units.', TRUE),
('SN003', 'Artificial Heart Valve', 'Brand C', 'Vendor C', 'Type C', '3.1.2', '3.2.0', 3, 'Updated version pending approval.', TRUE),
('SN004', 'Insulin Pump', 'Brand D', 'Vendor D', 'Type D', '1.5.0', '1.5.5', 4, 'Recall due to software bug.', TRUE),
('SN005', 'Ventilator', 'Brand E', 'Vendor E', 'Type E', '2.0.0', '2.1.0', 5, 'High demand during flu season.', TRUE),
('SN006', 'CT Scanner', 'Brand F', 'Vendor F', 'Type F', '4.0.0', '4.2.0', 5, 'Frequent updates required.', TRUE),
('SN007', 'MRI Machine', 'Brand G', 'Vendor G', 'Type G', '5.1.0', '5.3.0', 5, 'High maintenance costs.', TRUE),
('SN008', 'Glucose Monitor', 'Brand H', 'Vendor H', 'Type H', '3.5.0', '3.6.0', 3, 'Software update to improve accuracy.', TRUE),
('SN009', 'Digital Stethoscope', 'Brand I', 'Vendor I', 'Type I', '1.2.0', '1.3.0', 1, 'New model coming next quarter.', TRUE),
('SN010', 'Portable X-ray', 'Brand J', 'Vendor J', 'Type J', '2.8.0', '3.0.0', 4, 'Requires calibration after transport.', TRUE);

INSERT INTO devices (serialNumber, name, brand, vendor, type, osVersionCurrent, osVersionLatest, clsRating, remarks, isCatalog) VALUES
('SN901', 'Pacemaker', 'Brand A', 'Vendor A', 'Type A', '1.0.0', '1.0.1', 4, 'Critical device, requires regular monitoring.', FALSE),
('SN902', 'Blood Pressure Meter', 'Brand B', 'Vendor B', 'Type B', '2.5.3', '2.6.0', 2, 'Battery issues in some units.', FALSE),
('SN903', 'Artificial Heart Valve', 'Brand C', 'Vendor C', 'Type C', '3.1.2', '3.2.0', 3, 'Updated version pending approval.', FALSE);
