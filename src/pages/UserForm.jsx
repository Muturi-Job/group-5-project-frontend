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
      const response = await fetch('https://group-5-back.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        setFormData({
          image: '',
          location: '',
          bio: '',
          contact: '',
          username: '',
          password: '',
        });
        console.log('User created:', user);
        window.location.reload();

        // Fetch the updated user list after form submission
        fetchUsers();
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData.errors);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://group-5-back.onrender.com/users');
      if (response.ok) {
        const usersData = await response.json();
        setUsers(usersData);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
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