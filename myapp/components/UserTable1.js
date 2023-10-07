// components/UserTable.js

import React from 'react';

function UserTable1({ users, setSelectedUser, deleteUser }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullname}</td>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => setSelectedUser(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable1;
