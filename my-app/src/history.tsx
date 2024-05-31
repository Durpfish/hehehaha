import React, { useState } from 'react';
import './history.css'; // Make sure to create this CSS file for styling

const History = () => {
  // Dummy medical history data
  const medicalHistory = [
    {
      doctorName: "Dr. Tiew",
      hospitalName: "Changi General Hospital",
      dataType: "X-Ray",
      accessDate: new Date("2024-05-31T09:00:00"),
    },
    {
      doctorName: "Dr. Koey",
      hospitalName: "Tan Tock Seng Hospital",
      dataType: "Blood Test",
      accessDate: new Date("2024-05-30T15:30:00"),
    },
    {
      doctorName: "Dr. Lee",
      hospitalName: "Chong Pang Camp Medical Center",
      dataType: "MRI",
      accessDate: new Date("2024-05-29T11:45:00"),
    },
  ];

  // State to keep track of expanded entries
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>
          My Medical Records
        </div>
      </div>
      <div className={'historyContainer'}>
        {medicalHistory.map((record, index) => (
          <div key={index} className="record" onClick={() => toggleExpand(index)}>
            <div className="date-type">
              {index + 1}. {record.accessDate.toISOString().split('T')[0]}, {record.dataType}
            </div>
            {expandedIndex === index && (
              <div className="expanded-info">
                <div>Doctor: {record.doctorName}</div>
                <div>Hospital/Clinic: {record.hospitalName}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default History;