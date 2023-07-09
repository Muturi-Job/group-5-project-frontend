import React from 'react';

export default function ImproveSkills() {
  const handleSignUpClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/images/img_10 (1).jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        <ul>
          <li>Diverse range of recipes</li>
          <li>Includes detailed instructions</li>
          <li>Offers Cooking tips and techniques</li>
          <li>Professional chef reviews</li>
        </ul>
        <button className="btn" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
