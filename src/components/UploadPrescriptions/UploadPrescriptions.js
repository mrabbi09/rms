import React from 'react';
import './UploadPrescriptions.css';

const UploadPrescriptions = () => {
  return (
    <section className="upload-prescriptions">
      <h1>Upload Prescriptions</h1>
      <form>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </section>
  );
};

export default UploadPrescriptions;