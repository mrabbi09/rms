import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// Reusable Patient Card Component
const PatientCard = ({ patient }) => (
  <div className="patient-card">
    <img src={patient.image} alt={patient.name} className="patient-image" />
    <div className="patient-info">
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  </div>
);

// Reusable Appointment Card Component
const AppointmentCard = ({ appointment }) => (
  <div className="appointment-card">
    <h3>{appointment.patientName}</h3>
    <p>Time: {appointment.time}</p>
    <p>Doctor: {appointment.doctor}</p>
  </div>
);

const Dashboard = ({ data }) => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('');

  // Simulate fetching data from an API or props
  useEffect(() => {
    if (data) {
      setPatients(data.patients || []);
      setAppointments(data.appointments || []);
    } else {
      // Fallback mock data
      setPatients([
        { id: 1, name: 'John Doe', age: 34, condition: 'Diabetes', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Jane Smith', age: 28, condition: 'Hypertension', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Alice Johnson', age: 45, condition: 'Asthma', image: 'https://via.placeholder.com/150' },
      ]);

      setAppointments([
        { id: 1, patientName: 'John Doe', time: '10:00 AM', doctor: 'Dr. Smith' },
        { id: 2, patientName: 'Jane Smith', time: '11:00 AM', doctor: 'Dr. Brown' },
        { id: 3, patientName: 'Alice Johnson', time: '12:00 PM', doctor: 'Dr. Green' },
      ]);
    }
  }, [data]);

  // Filter patients by name or condition
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(filter.toLowerCase()) ||
      patient.condition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Healthcare Dashboard</h1>

      {/* Search Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search patients by name or condition..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="dashboard-content">
        {/* Patients Section */}
        <div className="patients-section">
          <h2>Patients</h2>
          <div className="patients-list">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))
            ) : (
              <p>No patients found.</p>
            )}
          </div>
        </div>

        {/* Appointments Section */}
        <div className="appointments-section">
          <h2>Appointments</h2>
          <div className="appointments-list">
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;