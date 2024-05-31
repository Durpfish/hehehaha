export interface Device {
  id: string; // unique identifier of the device
  serialNumber: string; // unique identifier of the device
  name: string; // name of the device
  brand: string; // brand of the device in the format of "Brand A", "Brand B", "Brand C", etc.
  vendor: string; // manufacturer of the device in the format of "Vendor A", "Vendor B", "Vendor C", etc.
  type: string; // type of the device (tablet, phone, computer, etc.)
  osVersionCurrent: string; // current operating system version of the device
  osVersionLatest: string; // latest available operating system version for the device
  clsRating: number; // device's classification rating
  remarks: string; // additional comments or details about the device
}
  
export interface MedicalHistory {
    id: string; // unique identifier of the medical record
    bodyPart: string; // body part of the medical record
    recordType: string; // type of the medical record (x-ray, MRI, blood test, etc.)
    dateTimeCreated: string; // when the record was created
    dateTimeAccessed: string; // when the record was accessed
    accessLocation: string; // which hospital the record was accessed
    accessTerminal: string; // which terminal within the hospital the record was accessed
    accessAction: string; // what action was taken on the record (view, edit, delete, create)
    accessedBy: string; // full name of person who accessed the record
    accessorRole: string; // role of the person who accessed the record (nurse, doctor, admin)
  }

export interface MedicalHistoryView {
    key: string;
    bodyPart: string;
    recordType: string;
    dateCreated: string;
    timeCreated: string;
    dateAccessed: string;
    timeAccessed: string;
    accessLocation: string;
    accessTerminal: string;
    accessAction: string;
    accessedBy: string;
    accessorRole: string;
}

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
  }
