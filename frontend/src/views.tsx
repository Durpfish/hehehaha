import { MedicalHistory, MedicalHistoryView } from "./types";

export const toMedicalHistoryView = (record: MedicalHistory): MedicalHistoryView => {
    const dateCreated = new Date(record.dateTimeCreated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeCreated = new Date(record.dateTimeCreated).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateAccessed = new Date(record.dateTimeAccessed).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeAccessed = new Date(record.dateTimeAccessed).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
  
    return {
      key: record.id,
      bodyPart: record.bodyPart,
      recordType: record.recordType,
      dateCreated,
      timeCreated,
      dateAccessed,
      timeAccessed,
      accessLocation: record.accessLocation,
      accessTerminal: record.accessTerminal,
      accessAction: record.accessAction,
      accessedBy: record.accessedBy,
      accessorRole: record.accessorRole,
    } as MedicalHistoryView;
  };

