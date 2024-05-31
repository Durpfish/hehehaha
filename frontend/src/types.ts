export interface Device {
    serialNumber: string;
    name: string;
    brand: string;
    vendor: string;
    type: string;
    osVersionCurrent: string;
    osVersionLatest: string;
    clsRating: number;
    remarks: string;
  }
  
export interface MedicalHistory {
    id: string;
    dateCreated: string;
    dateAccessed: string;
    accessedBy: string;
    accessLocation: string;
    accessAction: string;
    bodyPart: string;
    doctorName: string;
    hospitalName: string;
  }

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
  }
