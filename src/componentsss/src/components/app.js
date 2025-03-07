import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NearbyHospital from './components/NearbyHospital/NearbyHospital';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AmbulanceBooking from './components/AmbulanceBooking/AmbulanceBooking';
import Dashboard from './components/Dashboard/Dashboard';
import HospitalsDoctors from './components/HospitalsDoctors/HospitalsDoctors';
import Pharmacies from './components/Pharmacies/Pharmacies';
import ContactDoctor from './components/ContactDoctor/ContactDoctor';
import ContactDonor from './components/ContactDonor/ContactDonor';
import ContactAmbulance from './components/ContactAmbulance/ContactAmbulance';
import UploadPrescriptions from './components/UploadPrescriptions/UploadPrescriptions';
import BloodDonors from './components/BloodDonors/BloodDonors';
import Medicines from './components/Medicines/Medicines';
import AdminLogin from './components/AdminLogin/AdminLogin';
import UserLogin from './components/UserLogin/UserLogin';
import AdminRegister from './components/AdminRegister/AdminRegister';
import UserRegister from './components/UserRegister/UserRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Existing Routes */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nearby-hospital" element={<NearbyHospital />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ambulance-booking" element={<AmbulanceBooking />} />

            {/* New Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hospitals-doctors" element={<HospitalsDoctors />} />
            <Route path="/pharmacies" element={<Pharmacies />} />
            <Route path="/contact-doctor" element={<ContactDoctor />} />
            <Route path="/contact-donor" element={<ContactDonor />} />
            <Route path="/contact-ambulance" element={<ContactAmbulance />} />
            <Route path="/upload-prescriptions" element={<UploadPrescriptions />} />
            <Route path="/blood-donors" element={<BloodDonors />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/user-register" element={<UserRegister />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;