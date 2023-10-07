// components/UserRegistrationForm.js

import React from 'react';

const UserRegistrationForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default UserRegistrationForm;
