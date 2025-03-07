import React from 'react';
import './NearbyHospital.css';

const NearbyHospitals = () => {
  const hospitals = [
    {
      name: "Bangabandhu Sheikh Mujib Medical University",
      address: "Shahbagh, Dhaka, Bangladesh",
      email: "info@bsmmu.edu.bd",
      phone: "+880 2 9661561"
    },
    {
      name: "Dhaka Medical College Hospital",
      address: "Shaheed Suhrawardy Avenue, Dhaka, Bangladesh",
      email: "contact@dhakamch.edu.bd",
      phone: "+880 2 55161892"
    },
    {
      name: "Savar Hospital",
      address: "Savar, Dhaka, Bangladesh",
      email: "info@savarhosp.org",
      phone: "+880 2 774054"
    },
    {
      name: "Evercare Hospital Dhaka",
      address: "Plot 81, Block E, Bashundhara R/A, Dhaka, Bangladesh",
      email: "info@evercarebd.com",
      phone: "+880 961 222 2222"
    },
    {
      name: "Apollo Hospital Dhaka",
      address: "Dhaka, Bangladesh",
      email: "info@apollodhaka.com",
      phone: "+880 2 9821801"
    },
    {
      name: "Square Hospital",
      address: "18/F, West Panthapath, Dhaka, Bangladesh",
      email: "info@squarehospital.com",
      phone: "+880 2 8123526"
    },
    {
      name: "United Hospital",
      address: "12, Road 3, Block A, Badda, Dhaka, Bangladesh",
      email: "info@unitedhospital.com.bd",
      phone: "+880 2 9890836"
    },
    {
      name: "Labaid Specialized Hospital",
      address: "House 47, Road 5, Dhanmondi, Dhaka, Bangladesh",
      email: "info@labaidgroup.com",
      phone: "+880 2 9121122"
    },
    {
      name: "Medinova Medical Services",
      address: "CDA Avenue, Dhaka, Bangladesh",
      email: "info@medinova.org",
      phone: "+880 2 9638853"
    },
    {
      name: "Delta Hospital",
      address: "House 2, Road 1, Block A, Dhaka, Bangladesh",
      email: "info@delta.com.bd",
      phone: "+880 2 9880422"
    },
    {
      name: "Bangladesh Medical College & Hospital",
      address: "House 25, Road 1, Dhanmondi, Dhaka, Bangladesh",
      email: "info@bmch.edu.bd",
      phone: "+880 2 9672635"
    },
    // Add more hospital data here...
  ];

  return (
    <div className="nearby-hospitals-container">
      <h1>Nearby Hospitals in Dhaka</h1>
      <table className="hospital-table">
        <thead>
          <tr>
            <th>Hospital Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.email}</td>
              <td>{hospital.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NearbyHospitals;
