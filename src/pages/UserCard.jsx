import React from 'react';
import './User.css';

const UserCard = ({ username, bio, location, image }) => {
  return (
    <div className="card">
      <img src={image} alt={username} />
      <div className="card-content">
        <h3 className="title">{username}</h3>
        <p className="copy">Bio: {bio}</p>
        <p className="copy">Location: {location}</p>
      </div>
    </div>
  );
};

export default UserCard;
