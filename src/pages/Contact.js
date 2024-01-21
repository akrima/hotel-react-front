import React, { useState } from 'react';
import GoogleMapComponent from '../components/GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique de soumission de formulaire ici
    console.log('Formulaire soumis :', formData);
    // Effacez le formulaire après la soumission
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Ajout de la carte en bas */}
      <div className="mt-4">
        <h2>Here we are:</h2>
        <GoogleMapComponent />
      </div>
      <div className="mt-4"></div>
    </div>

  );
};

export default Contact;