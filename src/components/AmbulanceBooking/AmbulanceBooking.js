import React, { useState } from 'react';
import styles from './AmbulanceBooking.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AmbulanceBooking = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [features, setFeatures] = useState([]);
  const [rent, setRent] = useState(1000); // Base rent
  const [bookingDate, setBookingDate] = useState(new Date());
  const [errors, setErrors] = useState({});

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

  // Handle user info change
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // Handle patient info change
  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // Handle feature selection
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    let updatedFeatures = [...features];
    if (checked) {
      updatedFeatures.push(value);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== value);
    }
    setFeatures(updatedFeatures);
    calculateRent(updatedFeatures);
  };

  // Calculate total rent
  const calculateRent = (updatedFeatures) => {
    let totalRent = 1000; // Base rent
    updatedFeatures.forEach((feature) => {
      const selectedFeature = ambulanceFeatures.find((f) => f.name === feature);
      if (selectedFeature) {
        totalRent += selectedFeature.cost;
      }
    });
    setRent(totalRent);
  };

  // Handle booking
  const handleBooking = () => {
    const newErrors = {};
    if (!userInfo.name) newErrors.name = 'Name is required.';
    if (!userInfo.phone) newErrors.phone = 'Phone is required.';
    if (!userInfo.email) newErrors.email = 'Email is required.';
    if (!patientInfo.name) newErrors.patientName = 'Patient name is required.';
    if (!patientInfo.age) newErrors.age = 'Age is required.';
    if (!patientInfo.gender) newErrors.gender = 'Gender is required.';
    if (!pickupLocation) newErrors.pickupLocation = 'Pickup location is required.';
    if (!dropoffLocation) newErrors.dropoffLocation = 'Drop-off location is required.';
    if (features.length === 0) newErrors.features = 'At least one feature is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(
      `Ambulance booked successfully!\n\nUser Information:\nName: ${userInfo.name}\nPhone: ${userInfo.phone}\nEmail: ${userInfo.email}\n\nPatient Information:\nName: ${patientInfo.name}\nAge: ${patientInfo.age}\nGender: ${patientInfo.gender}\n\nPickup Location: ${pickupLocation}\nDrop-off Location: ${dropoffLocation}\n\nSelected Features: ${features.join(', ')}\nTotal Rent: ${rent} BDT\nBooking Date: ${bookingDate.toLocaleString()}`
    );
  };

  return (
    <div className={styles.bookingContainer}>
      <h2>Ambulance Booking</h2>
      <div className={styles.bookingForm}>
        {/* User Information */}
        <div className={styles.section}>
          <h3>User Information</h3>
          <div className={styles.formGroup}>
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleUserInfoChange}
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleUserInfoChange}
              required
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleUserInfoChange}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>

        {/* Patient Information */}
        <div className={styles.section}>
          <h3>Patient Information</h3>
          <div className={styles.formGroup}>
            <label>Patient Name:</label>
            <input
              type="text"
              name="name"
              value={patientInfo.name}
              onChange={handlePatientInfoChange}
              required
            />
            {errors.patientName && <span className={styles.error}>{errors.patientName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={patientInfo.age}
              onChange={handlePatientInfoChange}
              required
            />
            {errors.age && <span className={styles.error}>{errors.age}</span>}
          </div>
          <div className={styles.formGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={patientInfo.gender}
              onChange={handlePatientInfoChange}
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className={styles.error}>{errors.gender}</span>}
          </div>
        </div>

        {/* Location Details */}
        <div className={styles.section}>
          <h3>Location Details</h3>
          <div className={styles.formGroup}>
            <label>Pickup Location:</label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            >
              <option value="">-- Select District --</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.pickupLocation && <span className={styles.error}>{errors.pickupLocation}</span>}
          </div>
          <div className={styles.formGroup}>
            <label>Drop-off Location:</label>
            <select
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              required
            >
              <option value="">-- Select District --</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.dropoffLocation && <span className={styles.error}>{errors.dropoffLocation}</span>}
          </div>
        </div>

        {/* Ambulance Features */}
        <div className={styles.section}>
          <h3>Ambulance Features</h3>
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
          {errors.features && <span className={styles.error}>{errors.features}</span>}
        </div>

        {/* Booking Date */}
        <div className={styles.section}>
          <h3>Booking Date & Time</h3>
          <div className={styles.formGroup}>
            <label>Select Date & Time:</label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className={styles.datePicker}
            />
          </div>
        </div>

        {/* Rent Calculation */}
        <div className={styles.section}>
          <h3>Rent Calculation</h3>
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