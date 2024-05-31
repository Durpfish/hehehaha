import db from './db';

export const getDevices = async () => {
  try {
    const devicesQuery = `
      SELECT 
        id AS "id", 
        serialnumber AS "serialNumber", 
        name AS "name", 
        brand AS "brand", 
        vendor AS "vendor", 
        type AS "type", 
        osversioncurrent AS "osVersionCurrent", 
        osversionlatest AS "osVersionLatest", 
        clsrating AS "clsRating", 
        remarks AS "remarks"
      FROM devices
      WHERE isCatalog = false;
    `;

    const { rows } = await db.query(devicesQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching devices:', err);
    throw err;
  }
};


export const getCatalog = async () => {
  try {
    const catalogQuery = `
      SELECT 
        id AS "id", 
        serialnumber AS "serialNumber", 
        name AS "name", 
        brand AS "brand", 
        vendor AS "vendor", 
        type AS "type", 
        osversioncurrent AS "osVersionCurrent", 
        osversionlatest AS "osVersionLatest", 
        clsrating AS "clsRating", 
        remarks AS "remarks"
      FROM devices
      WHERE isCatalog = true;
    `;

    const { rows } = await db.query(catalogQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching catalog:', err);
    throw err;
  }
};

export const getRecords = async () => {
  try {
    const recordsQuery = `
      SELECT 
        id AS "id", 
        body_part AS "bodyPart", 
        record_type AS "recordType", 
        date_time_created AS "dateTimeCreated", 
        date_time_accessed AS "dateTimeAccessed", 
        access_location AS "accessLocation", 
        access_terminal AS "accessTerminal", 
        access_action AS "accessAction", 
        accessed_by AS "accessedBy", 
        accessor_role AS "accessorRole"
      FROM medical_records;
    `;

    const { rows } = await db.query(recordsQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching medical records:', err);
    throw err;
  }
};
