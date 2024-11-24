import React from 'react';

export default function ExtractedResponse({response}) {
  return (
    <div className="container">
      <div className="header">
        <h2>Doctor's Medical Prescription</h2>
        <div className="rx">Rx</div>
      </div>

      <div className="section">
        <div>
          <strong>Patient's Name:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.name}</span>
        </div>
        <div>
          <strong>S/D/O/W/O:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.guardian_name}</span>
        </div>
        <div>
          <strong>Date of Birth:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.dob}</span>
        </div>
        <div>
          <strong>Age:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.age}</span>
        </div>
        <div>
          <strong>Sex:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.sex}</span>
        </div>
        <div>
          <strong>Occupation:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.occupation}</span>
        </div>
        <div>
          <strong>Health Insurance No:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.insurance_no}</span>
        </div>
        <div>
          <strong>Health Care Provider:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.healthcare_providern}</span>
        </div>
        <div>
          <strong>Health Card Number:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.health_card_no}</span>
        </div>
        <div>
          <strong>Patient ID No:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.patient_id_no}</span>
        </div>
        <div>
          <strong>Patient Address:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.address}</span>
        </div>
        <div>
          <strong>Cell No:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.patient_info.cell_no}</span>
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Diagnosed With:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.diagnosis.diagnosed_with}</span>
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Blood Pressure:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.diagnosis.blood_pressure}</span>
        </div>
        <div>
          <strong>Pulse Rate:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.diagnosis.pulse_rate}</span>
        </div>
        <div>
          <strong>weight:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif', float:'right'}}> {response.diagnosis.weight}</span>
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Allergies:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.diagnosis.allergies}</span>
        </div>
        <div>
          <strong>Disabilities if any:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.diagnosis.disabilities}</span>
        </div>
      </div>

      <div className="section">
        <table className="medication-table">
            <thead>
            <tr>
                <th>Drugs</th>
                <th>Unit (Tablet / Syrup)</th>
                <th>Dosage (Per Day)</th>
            </tr>
            </thead>
            <tbody>
            {response.drugs.map((medication, index) => (
                <tr key={index}>
                <td>{index + 1}. {medication.name}</td>
                <td>{medication.unit}</td>
                <td>{medication.dosage}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>

      <div className="section">
        <div>
          <strong>Diet To Follow:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.diet_to_follow.diet_to_follow}</span>
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Brief history of patient</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.history.brief_history}</span>
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Follow Up Physician:</strong>
          <span style={{color:'green',fontStyle:"italic",fontFamily:'Arial, Helvetica, sans-serif'}}> {response.history.follow_up_physician}</span>
        </div>
      </div>
    </div>
  );
}