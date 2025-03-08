import React, { useState } from 'react';
import styles from './AmbulanceBooking.module.css';

const AmbulanceBooking = () => {
  const [area, setArea] = useState('');
  const [features, setFeatures] = useState([]);
  const [rent, setRent] = useState(0);

  // List of Bangladesh districts
  const districts = [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh',
    'Comilla', 'Narayanganj', 'Gazipur', 'Tangail', 'Jessore', 'Bogra', 'Pabna', 'Dinajpur', 'Faridpur',
  ];

  // Ambulance features and their additional costs
  const ambulanceFeatures = [
    { id: 1, name: 'AC', cost: 500 },
    { id: 2, name: 'Non-AC', cost: 0 },
    { id: 3, name: 'ICU', cost: 1000 },
    { id: 4, name: 'Oxygen', cost: 300 },
    { id: 5, name: 'Stretcher', cost: 200 },
    { id: 6, name: 'First Aid Kit', cost: 100 },
  ];

  // Base rent for ambulance
  const baseRent = 1000;

  // Handle area selection
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  // Handle feature selection
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures([...features, value]);
    } else {
      setFeatures(features.filter((feature) => feature !== value));
    }
  };

  // Calculate total rent
  const calculateRent = () => {
    let totalRent = baseRent;
    features.forEach((feature) => {
      const selectedFeature = ambulanceFeatures.find((f) => f.name === feature);
      if (selectedFeature) {
        totalRent += selectedFeature.cost;
      }
    });
    setRent(totalRent);
  };

  // Handle booking
  const handleBooking = () => {
    if (!area) {
      alert('Please select an area.');
      return;
    }
    if (features.length === 0) {
      alert('Please select at least one feature.');
      return;
    }
    alert(`Ambulance booked for ${area} with features: ${features.join(', ')}. Total rent: ${rent} BDT.`);
    // Redirect or perform further actions
  };

  return (
    <div className={styles.bookingContainer}>
      <h2>Ambulance Booking</h2>
      <div className={styles.bookingForm}>
        {/* Area Selection */}
        <div className={styles.formGroup}>
          <label>Select Area:</label>
          <select value={area} onChange={handleAreaChange} required>
            <option value="">-- Select District --</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Ambulance Features */}
        <div className={styles.formGroup}>
          <label>Select Features:</label>
          <div className={styles.featuresList}>
            {ambulanceFeatures.map((feature) => (
              <div key={feature.id} className={styles.featureItem}>
                <input
                  type="checkbox"
                  id={feature.name}
                  value={feature.name}
                  onChange={handleFeatureChange}
                />
                <label htmlFor={feature.name}>
                  {feature.name} (+{feature.cost} BDT)
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rent Calculation */}
        <div className={styles.formGroup}>
          <button onClick={calculateRent} className={styles.calculateButton}>
            Calculate Rent
          </button>
          <p className={styles.rentDisplay}>Total Rent: {rent} BDT</p>
        </div>

        {/* Book Ambulance */}
        <button onClick={handleBooking} className={styles.bookButton}>
          Book Ambulance
        </button>
      </div>
    </div>
  );
};

export default AmbulanceBooking;