import React, { useState } from 'react';
import './AmbulanceBooking.css';

const AmbulanceBooking = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    emergencyType: '',
    pickupLocation: '',
    destination: '',
    ambulanceType: 'basic', // Default to basic ambulance
    distance: null, // Distance in kilometers
    estimatedTime: null, // Estimated time in minutes
    rent: null, // Rent in INR
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateRent = () => {
    const { pickupLocation, destination, ambulanceType } = formData;

    if (!pickupLocation || !destination) {
      alert('Please enter both pickup location and destination.');
      return;
    }

    // Simulate distance calculation (replace with actual logic if needed)
    const distanceInKm = Math.floor(Math.random() * 50) + 1; // Random distance between 1 and 50 km

    // Rent calculation based on ambulance type
    let baseFare, rentPerKm;
    switch (ambulanceType) {
      case 'basic':
        baseFare = 500;
        rentPerKm = 100;
        break;
      case 'advanced':
        baseFare = 1000;
        rentPerKm = 150;
        break;
      case 'icu':
        baseFare = 2000;
        rentPerKm = 200;
        break;
      default:
        baseFare = 500;
        rentPerKm = 100;
    }

    const rent = baseFare + rentPerKm * distanceInKm;

    // Simulate estimated time calculation (replace with actual logic if needed)
    const estimatedTime = `${Math.floor(distanceInKm * 2)} minutes`; // 2 minutes per km

    setFormData({
      ...formData,
      distance: distanceInKm,
      estimatedTime,
      rent,
    });
  };

  const handleBookingConfirmation = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.pickupLocation || !formData.destination) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsBookingConfirmed(true);
    console.log('Booking Confirmed:', formData);
  };

  return (
    <div className="ambulance-booking-container">
      <h2>Ambulance Booking</h2>

      <div className="booking-form">
        <h3>Enter Patient and Booking Details</h3>
        <form onSubmit={handleBookingConfirmation}>
          {/* Patient Details */}
          <div className="form-group">
            <label>Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleFormChange}
              placeholder="Enter patient name"
              required
            />
          </div>
          <div className="form-group">
            <label>Patient Age:</label>
            <input
              type="number"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleFormChange}
              placeholder="Enter patient age"
              required
            />
          </div>
          <div className="form-group">
            <label>Patient Gender:</label>
            <select
              name="patientGender"
              value={formData.patientGender}
              onChange={handleFormChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Emergency Details */}
          <div className="form-group">
            <label>Emergency Type:</label>
            <select
              name="emergencyType"
              value={formData.emergencyType}
              onChange={handleFormChange}
              required
            >
              <option value="">Select</option>
              <option value="accident">Accident</option>
              <option value="heartAttack">Heart Attack</option>
              <option value="pregnancy">Pregnancy</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Location Details */}
          <div className="form-group">
            <label>Pickup Location:</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleFormChange}
              placeholder="Enter pickup location"
              required
            />
          </div>
          <div className="form-group">
            <label>Destination:</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleFormChange}
              placeholder="Enter destination"
              required
            />
          </div>

          {/* Ambulance Type */}
          <div className="form-group">
            <label>Ambulance Type:</label>
            <select
              name="ambulanceType"
              value={formData.ambulanceType}
              onChange={handleFormChange}
              required
            >
              <option value="basic">Basic Ambulance</option>
              <option value="advanced">Advanced Life Support Ambulance</option>
              <option value="icu">ICU Ambulance</option>
            </select>
          </div>

          {/* Rent Calculation */}
          <button type="button" onClick={calculateRent} disabled={!formData.pickupLocation || !formData.destination}>
            Calculate Rent
          </button>

          {formData.distance && (
            <div className="calculation-results">
              <p><strong>Distance:</strong> {formData.distance} km</p>
              <p><strong>Estimated Time:</strong> {formData.estimatedTime}</p>
              <p><strong>Rent Estimate:</strong> ₹{formData.rent}</p>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={!formData.distance || !formData.rent}>
            Confirm Booking
          </button>
        </form>
      </div>

      {isBookingConfirmed && (
        <div className="confirmation-message">
          <h3>Booking Confirmed!</h3>
          <p><strong>Patient Name:</strong> {formData.patientName}</p>
          <p><strong>Patient Age:</strong> {formData.patientAge}</p>
          <p><strong>Patient Gender:</strong> {formData.patientGender}</p>
          <p><strong>Emergency Type:</strong> {formData.emergencyType}</p>
          <p><strong>Pickup Location:</strong> {formData.pickupLocation}</p>
          <p><strong>Destination:</strong> {formData.destination}</p>
          <p><strong>Ambulance Type:</strong> {formData.ambulanceType}</p>
          <p><strong>Distance:</strong> {formData.distance} km</p>
          <p><strong>Estimated Time:</strong> {formData.estimatedTime}</p>
          <p><strong>Rent:</strong> ₹{formData.rent}</p>
        </div>
      )}
    </div>
  );
};

export default AmbulanceBooking;