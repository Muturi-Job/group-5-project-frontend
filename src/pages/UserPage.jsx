import React, { useState } from 'react';
import UserForm from './UserForm';
import UserCard from './UserCard';
import './User.css';

const UserPage = () => {
  const [user, setUser] = useState(null);

  const handleFormSubmit = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>User Page</h1>
      <UserForm onFormSubmit={handleFormSubmit} />
      {user && <UserCard {...user} />}
    </div>
  );
};

export default UserPage;
