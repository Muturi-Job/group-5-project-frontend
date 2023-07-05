import React, { useState } from 'react';
import './User.css';
const UserForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    location: '',
    bio: '',
    contact: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Form submission successful, reset form data
      setFormData({
        image: '',
        location: '',
        bio: '',
        contact: '',
        username: '',
        password: '',
      });
    } else {
      // Handle form submission error
      console.error('Form submission failed');
    }
  } catch (error) {
    // Handle fetch error
    console.error('Error sending form data', error);
  }
};


  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
