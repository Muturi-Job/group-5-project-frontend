import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserCard from './UserCard';
import './User.css';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

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

  const handleFormSubmit = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>User Page</h1>
      <UserForm onFormSubmit={handleFormSubmit} />
      <div className="page-content">
        {users.map((user) => (
          <UserCard
            key={user.id}
            username={user.username}
            bio={user.bio}
            location={user.location}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
