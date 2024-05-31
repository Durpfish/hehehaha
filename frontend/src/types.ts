export interface Device {
    id: number;
    name: string;
    brand: string;
    type: string;
    serialNumber: string;
    clsRating: number;
  }
  
export interface MedicalHistory {
    key: string;
    date: string;
    time: string;
    type: string;
    doctorName: string;
    hospitalName: string;
  }

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
  }
  