import { Column, Device, MedicalHistory } from "./types";

const appName = "Synergy";

export const sampleDevices1: Device[] = [
  {
    id: "1",
    serialNumber: "SC294857567A",
    name: "Pacemaker",
    brand: "OMR",
    vendor: "Vendor A",
    type: "Type A",
    osVersionCurrent: "1.0.0",
    osVersionLatest: "1.0.1",
    clsRating: 4,
    remarks: "Critical device, requires regular monitoring.",
    imageUrl: "/pacemaker.png",
  },
  {
    id: "2",
    serialNumber: "ICG69530",
    name: "Blood Pressure Meter",
    brand: "Nova",
    vendor: "Vendor B",
    type: "Type B",
    osVersionCurrent: "2.5.3",
    osVersionLatest: "2.6.0",
    clsRating: 2,
    remarks: "Battery issues in some units.",
    imageUrl: "/blood_pressure_meter.png",
  },
  {
    id: "3",
    serialNumber: "38502942331",
    name: "Artificial Heart Valve",
    brand: "Generative",
    vendor: "Vendor C",
    type: "Type C",
    osVersionCurrent: "3.1.2",
    osVersionLatest: "3.2.0",
    clsRating: 3,
    remarks: "Updated version pending approval.",
    imageUrl: "/artificial_heart_valve.png",
  },
];

export const sampleDevices2: Device[] = [
  {
    id: "1",
    serialNumber: "SN001",
    name: "Pacemaker",
    brand: "OMR",
    vendor: "Vendor A",
    type: "Type A",
    osVersionCurrent: "1.0.0",
    osVersionLatest: "1.0.1",
    clsRating: 4,
    remarks: "Critical device, requires regular monitoring.",
    imageUrl: "/pacemaker.png",
  },
  {
    id: "2",
    serialNumber: "SN002",
    name: "Blood Pressure Meter",
    brand: "Generative",
    vendor: "Vendor B",
    type: "Type B",
    osVersionCurrent: "2.5.3",
    osVersionLatest: "2.6.0",
    clsRating: 2,
    remarks: "Battery issues in some units.",
    imageUrl: "/blood_pressure_meter.png",
  },
  {
    id: "3",
    serialNumber: "SN003",
    name: "Artificial Heart Valve",
    brand: "Generative",
    vendor: "Vendor C",
    type: "Type C",
    osVersionCurrent: "3.1.2",
    osVersionLatest: "3.2.0",
    clsRating: 3,
    remarks: "Updated version pending approval.",
    imageUrl: "/artificial_heart_valve.png",
  },
  {
    id: "4",
    serialNumber: "SN004",
    name: "Insulin Pump",
    brand: "Nova",
    vendor: "Vendor D",
    type: "Type D",
    osVersionCurrent: "1.5.0",
    osVersionLatest: "1.5.5",
    clsRating: 4,
    remarks: "Recall due to software bug.",
    imageUrl: "/insulin.png",
  },
  {
    id: "5",
    serialNumber: "SN005",
    name: "Ventilator",
    brand: "Serra",
    vendor: "Vendor E",
    type: "Type E",
    osVersionCurrent: "2.0.0",
    osVersionLatest: "2.1.0",
    clsRating: 4,
    remarks: "High demand during flu season.",
    imageUrl: "/vent.png",
  },
  {
    id: "6",
    serialNumber: "SN006",
    name: "CT Scanner",
    brand: "Serra",
    vendor: "Vendor F",
    type: "Type F",
    osVersionCurrent: "4.0.0",
    osVersionLatest: "4.2.0",
    clsRating: 4,
    remarks: "Frequent updates required.",
    imageUrl: "/ct.png",
  },
  {
    id: "7",
    serialNumber: "SN007",
    name: "MRI Machine",
    brand: "Nova",
    vendor: "Vendor G",
    type: "Type G",
    osVersionCurrent: "5.1.0",
    osVersionLatest: "5.3.0",
    clsRating: 4,
    remarks: "High maintenance costs.",
    imageUrl: "/mri.png",
  },
  {
    id: "8",
    serialNumber: "SN008",
    name: "Glucose Monitor",
    brand: "Silmens",
    vendor: "Vendor H",
    type: "Type H",
    osVersionCurrent: "3.5.0",
    osVersionLatest: "3.6.0",
    clsRating: 3,
    remarks: "Software update to improve accuracy.",
    imageUrl: "/glucose.png",
  },
  {
    id: "9",
    serialNumber: "SN009",
    name: "Digital Stethoscope",
    brand: "OMR",
    vendor: "Vendor I",
    type: "Type I",
    osVersionCurrent: "1.2.0",
    osVersionLatest: "1.3.0",
    clsRating: 1,
    remarks: "New model coming next quarter.",
    imageUrl: "/steth.png",
  },
  {
    id: "10",
    serialNumber: "SN010",
    name: "Portable X-ray",
    brand: "Generative",
    vendor: "Vendor J",
    type: "Type J",
    osVersionCurrent: "2.8.0",
    osVersionLatest: "3.0.0",
    clsRating: 4,
    remarks: "Requires calibration after transport.",
    imageUrl: "/xray.png",
  },
];

export const sampleDevicesColumns: Column[] = [
  { title: "Device Name", dataIndex: "name", key: "name" },
  { title: "Brand", dataIndex: "brand", key: "brand" },
  { title: "Type", dataIndex: "type", key: "type" },
  { title: "Serial Number", dataIndex: "serialNumber", key: "serialNumber" },
  { title: "CLS Rating", dataIndex: "clsRating", key: "clsRating" },
];

export const sampleMedicalHistory: MedicalHistory[] = [
  {
    id: "1",
    bodyPart: "Thorax",
    recordType: "X-ray",
    dateTimeCreated: "2024-05-31T10:00:00Z",
    dateTimeAccessed: "2024-05-31T10:05:00Z",
    accessLocation: "Changi General Hospital",
    accessTerminal: "Terminal A1",
    accessAction: "view",
    accessedBy: "Jane Doe",
    accessorRole: "Nurse",
  },
  {
    id: "2",
    bodyPart: "Brachial",
    recordType: "MRI",
    dateTimeCreated: "2024-05-30T11:30:00Z",
    dateTimeAccessed: "2024-05-30T11:35:00Z",
    accessLocation: "Tan Tock Seng Hospital",
    accessTerminal: "Terminal A2",
    accessAction: "edit",
    accessedBy: "Samuel Smith",
    accessorRole: "Doctor",
  },
  {
    id: "3",
    bodyPart: "Cranial",
    recordType: "Blood Test", 
    dateTimeCreated: "2024-05-29T09:45:00Z",
    dateTimeAccessed: "2024-05-29T09:50:00Z",
    accessLocation: "Chong Pang Camp Medical Center",
    accessTerminal: "Terminal B1",
    accessAction: "view",
    accessedBy: "Fatimah Ali",
    accessorRole: "Nurse",
  },
  {
    id: "4",
    bodyPart: "Abdominal",
    recordType: "CT Scan",
    dateTimeCreated: "2024-05-28T14:00:00Z",
    dateTimeAccessed: "2024-05-28T14:05:00Z",
    accessLocation: "Singapore General Hospital",
    accessTerminal: "Terminal C1",
    accessAction: "edit",
    accessedBy: "Mika Tan",
    accessorRole: "Nurse",
  },
  {
    id: "5",
    bodyPart: "Pulmonary",
    recordType: "Ultrasound",
    dateTimeCreated: "2024-05-27T15:30:00Z",
    dateTimeAccessed: "2024-05-27T15:35:00Z",
    accessLocation: "Mount Elizabeth Hospital",
    accessTerminal: "Terminal D1",
    accessAction: "edit",
    accessedBy: "Chang Lee",
    accessorRole: "Doctor",
  },
  {
    id: "6",
    bodyPart: "Cerebral",
    recordType: "EEG",
    dateTimeCreated: "2024-05-26T08:45:00Z",
    dateTimeAccessed: "2024-05-26T08:50:00Z",
    accessLocation: "Khoo Teck Puat Hospital",
    accessTerminal: "Terminal E1",
    accessAction: "view",
    accessedBy: "Rahul Rao",
    accessorRole: "Doctor",
  },
  {
    id: "7",
    bodyPart: "Cardiac",
    recordType: "EKG",
    dateTimeCreated: "2024-05-25T13:15:00Z",
    dateTimeAccessed: "2024-05-25T13:20:00Z",
    accessLocation: "National University Hospital",
    accessTerminal: "Terminal F1",
    accessAction: "view",
    accessedBy: "Susan Loh",
    accessorRole: "Nurse",
  },
  {
    id: "8",
    bodyPart: "Gastric",
    recordType: "Endoscopy",
    dateTimeCreated: "2024-05-24T10:30:00Z",
    dateTimeAccessed: "2024-05-24T10:35:00Z",
    accessLocation: "Raffles Hospital",
    accessTerminal: "Terminal G1",
    accessAction: "edit",
    accessedBy: "Loh Mei",
    accessorRole: "Nurse",
  },
  {
    id: "9",
    bodyPart: "Colonic",
    recordType: "Colonoscopy",
    dateTimeCreated: "2024-05-23T12:00:00Z",
    dateTimeAccessed: "2024-05-23T12:05:00Z",
    accessLocation: "Sengkang General Hospital",
    accessTerminal: "Terminal H1",
    accessAction: "view",
    accessedBy: "Mei Ling",
    accessorRole: "Doctor",
  },
  {
    id: "10",
    bodyPart: "Dermatological",
    recordType: "Biopsy",
    dateTimeCreated: "2024-05-22T16:45:00Z",
    dateTimeAccessed: "2024-05-22T16:50:00Z",
    accessLocation: "Alexandra Hospital",
    accessTerminal: "Terminal I1",
    accessAction: "edit",
    accessedBy: "Kimberly Tan",
    accessorRole: "Nurse",
  }
];

export const sampleHistoryColumns: Column[] = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Date Accessed",
    dataIndex: "dateAccessed",
    key: "dateAccessed",
  },
  {
    title: "Access Location",
    dataIndex: "accessLocation",
    key: "accessLocation",
  },
  {
    title: "Record Type",
    dataIndex: "bodyPart",
    key: "bodyPart",
  },
];


export default appName;
