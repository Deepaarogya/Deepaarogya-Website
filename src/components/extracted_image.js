import React from 'react';

// Styles for static and editable fields
const staticTextStyles = {
  color: 'green',
  fontStyle: 'italic',
  fontFamily: 'Arial, Helvetica, sans-serif',
  float: 'right',
};

// Styles for static and editable fields
const tdTextStyles = {
  color: 'green',
  fontStyle: 'italic',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const inputStyles = {
  color: 'green',
  fontStyle: 'italic',
  fontFamily: 'Arial, Helvetica, sans-serif',
  border: '1px solid #ddd',
  padding: '5px',
  width: '100%',
};

export default function ExtractedResponse({ response, isEditing, onInputChange }) {
  // A helper function to render editable or static fields
  const renderField = (label, value, fieldName) => {
    if (isEditing) {
      return (
        <input
          type="text"
          name={fieldName}
          value={value || ''}
          onChange={(e) => 
            onInputChange(fieldName, e.target.value)
          }
          style={inputStyles}
        />
      );
    }
    return (
      <span style={staticTextStyles}>
        {value || '-'}
      </span>
    );
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Doctor's Medical Prescription</h2>
        <div className="rx">Rx</div>
      </div>

      <div className="section">
        <div>
          <strong>Patient's Name:</strong>
          {renderField('Patient Name', response.patient_info.name, 'patient_info.name')}
        </div>
        <div>
          <strong>S/D/O/W/O:</strong>
          {renderField('Guardian Name', response.patient_info.guardian_name, 'patient_info.guardian_name')}
        </div>
        <div>
          <strong>Date of Birth:</strong>
          {renderField('DOB', response.patient_info.dob, 'patient_info.dob')}
        </div>
        <div>
          <strong>Age:</strong>
          {renderField('Age', response.patient_info.age, 'patient_info.age')}
        </div>
        <div>
          <strong>Sex:</strong>
          {renderField('Sex', response.patient_info.sex, 'patient_info.sex')}
        </div>
        <div>
          <strong>Occupation:</strong>
          {renderField('Occupation', response.patient_info.occupation, 'patient_info.occupation')}
        </div>
        <div>
          <strong>Health Insurance No:</strong>
          {renderField('Insurance No', response.patient_info.insurance_no, 'patient_info.insurance_no')}
        </div>
        <div>
          <strong>Health Care Provider:</strong>
          {renderField('Healthcare Provider', response.patient_info.healthcare_provider, 'patient_info.healthcare_provider')}
        </div>
        <div>
          <strong>Health Card Number:</strong>
          {renderField('Health Card No', response.patient_info.health_card_no, 'patient_info.health_card_no')}
        </div>
        <div>
          <strong>Patient ID No:</strong>
          {renderField('Patient ID No', response.patient_info.patient_id_no, 'patient_info.patient_id_no')}
        </div>
        <div>
          <strong>Patient Address:</strong>
          {renderField('Address', response.patient_info.address, 'patient_info.address')}
        </div>
        <div>
          <strong>Cell No:</strong>
          {renderField('Cell No', response.patient_info.cell_no, 'patient_info.cell_no')}
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Diagnosed With:</strong>
          {renderField('Diagnosed With', response.diagnosis.diagnosed_with, 'diagnosis.diagnosed_with')}
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Blood Pressure:</strong>
          {renderField('Blood Pressure', response.diagnosis.blood_pressure, 'diagnosis.blood_pressure')}
        </div>
        <div>
          <strong>Pulse Rate:</strong>
          {renderField('Pulse Rate', response.diagnosis.pulse_rate, 'diagnosis.pulse_rate')}
        </div>
        <div>
          <strong>Weight:</strong>
          {renderField('Weight', response.diagnosis.weight, 'diagnosis.weight')}
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Allergies:</strong>
          {renderField('Allergies', response.diagnosis.allergies, 'diagnosis.allergies')}
        </div>
        <div>
          <strong>Disabilities if any:</strong>
          {renderField('Disabilities', response.diagnosis.disabilities, 'diagnosis.disabilities')}
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
                <td style={tdTextStyles}>
                  {renderField('', medication.name, `drugs[${index}].name`)}
                </td>
                <td style={tdTextStyles}>
                  {renderField('', medication.unit, `drugs[${index}].unit`)}
                </td>
                <td style={tdTextStyles}>
                  {renderField('', medication.dosage, `drugs[${index}].dosage`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <div>
          <strong>Diet To Follow:</strong>
          {renderField('Diet to Follow', response.diet_to_follow.diet_to_follow, 'diet_to_follow.diet_to_follow')}
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Brief history of patient:</strong>
          {renderField('Brief History', response.history.brief_history, 'history.brief_history')}
        </div>
      </div>

      <div className="section">
        <div>
          <strong>Follow Up Physician:</strong>
          {renderField('Follow Up Physician', response.history.follow_up_physician, 'history.follow_up_physician')}
        </div>
      </div>
    </div>
  );
}
