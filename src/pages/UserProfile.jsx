import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [contact, setContact] = useState(user.contact);
  const [location, setLocation] = useState(user.location);
  const [bio, setBio] = useState(user.bio);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setUsername(user.username);
    setContact(user.contact);
    setLocation(user.location);
    setBio(user.bio);
  };

  const handleUpdateClick = () => {
    setEditMode(false);

    user.username = username;
    user.contact = contact;
    user.location = location;
    user.bio = bio;
  };

  const handleLogoutClick = () => {
    fetch("https://group-5-back.onrender.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  };

  return (
    <section className="py-5 my-5">
      <div className="container">
        <h1 className="mb-5">Account Settings</h1>
        <div className="bg-white shadow rounded-lg d-block d-sm-flex">
          <div className="profile-tab-nav border-right">
            <div className="p-4">
              <div className="img-circle text-center mb-3">
                <img src={user.image} alt="Image" className="shadow" />
              </div>
              <h4 className="text-center">{user.username}</h4>
            </div>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="account-tab"
                data-toggle="pill"
                href="#account"
                role="tab"
                aria-controls="account"
                aria-selected="true"
              >
                <i className="fa fa-home text-center mr-1"></i>
                Account
              </a>
            </div>
          </div>
          <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 className="mb-4">Account Settings</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Username</label>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={user.username}
                        disabled
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Contact</label>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={user.contact}
                        disabled
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Location</label>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={user.location}
                        disabled
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Bio</label>
                    {editMode ? (
                      <textarea
                        className="form-control"
                        rows="4"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    ) : (
                      <textarea
                        className="form-control"
                        rows="4"
                        value={user.bio}
                        disabled
                      ></textarea>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {editMode ? (
                  <>
                    <button className="btn " onClick={handleUpdateClick}>
                      Update
                    </button>
                    <button className="btn " onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="btn " onClick={handleEditClick}>
                    Edit
                  </button>
                )}
                  <button className="btn" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
