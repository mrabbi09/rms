import React from 'react';
import { FaHospital, FaAmbulance, FaPrescriptionBottle, FaHandHoldingHeart } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaHospital className="service-icon" />,
    title: "Hospital Management",
    description: "Efficient management of hospital operations and patient data."
  },
  {
    icon: <FaAmbulance className="service-icon" />,
    title: "Ambulance Booking",
    description: "Book an ambulance for emergency care, anytime, anywhere."
  },
  {
    icon: <FaPrescriptionBottle className="service-icon" />,
    title: "Prescription Upload",
    description: "Upload prescriptions for medication delivery and tracking."
  },
  {
    icon: <FaHandHoldingHeart className="service-icon" />,
    title: "Blood Donation",
    description: "Find blood donors quickly and efficiently in your area."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-list">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <button className="button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
