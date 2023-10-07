// components/UserForm.js

import React, { useState, useEffect } from 'react';

function UserForm({ selectedUser, addUser, editUser }) {
  const [user, setUser] = useState(selectedUser || { fullname: '', username: '', password: '', role: '' });

  useEffect(() => {
    setUser(selectedUser || { fullname: '', username: '', password: '', role: '' });
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({ fullname: '', username: '', password: '', role: '' });
  };

  return (
    <div className="container" style={{width:400}}>
      <h5 style={{textAlign:'center', textDecoration: 'underline' }}>{selectedUser ? 'Edit User' : 'Add User'}</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={user.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Role</label>
          <select
            name="role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            required
          >
             <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          {selectedUser ? 'Save Changes' : 'Add User'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
