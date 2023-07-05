import React from 'react';
import './User.css';

const UserCard = ({ username, bio, location, image }) => {
  return (
    <div>
      <h2>User Card</h2>
      <div className="card">
        <img src={image} alt={username} />
        <div>
          <h3>{username}</h3>
          <p>Bio: {bio}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
