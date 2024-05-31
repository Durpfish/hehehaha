import { Column, Device, MedicalHistory } from "./types";

const appName = "Synergy";

export const sampleDevices: Device[] = [
  {
    id: 1,
    name: "Pacemaker",
    brand: "Brand A",
    type: "Type A",
    serialNumber: "SN001",
    clsRating: 4,
  },
  {
    id: 2,
    name: "Blood Pressure Meter",
    brand: "Brand B",
    type: "Type B",
    serialNumber: "SN002",
    clsRating: 2,
  },
  {
    id: 3,
    name: "Artificial Heart Valve",
    brand: "Brand C",
    type: "Type C",
    serialNumber: "SN003",
    clsRating: 3,
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
    key: "1",
    date: "2024-05-31",
    time: "10:00 AM",
    type: "X-Ray",
    doctorName: "Dr. Tiew",
    hospitalName: "Changi General Hospital",
  },
  {
    key: "2",
    date: "2024-05-30",
    time: "11:30 AM",
    type: "Blood Test",
    doctorName: "Dr. Koey",
    hospitalName: "Tan Tock Seng General Hospital",
  },
  {
    key: "3",
    date: "2024-05-29",
    time: "09:45 AM",
    type: "MRI",
    doctorName: "Dr. Lee",
    hospitalName: "Chong Pang Camp Medical Center",
  },
];

export const sampleHistoryColumns: Column[] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

export default appName;
