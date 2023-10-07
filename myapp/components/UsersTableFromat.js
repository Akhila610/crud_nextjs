// USer Table
import React from 'react';

function UsersTableFormat({ users }) {
  return (
    <div>
      <h3> User List</h3>
    
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>User Name</th>
          <th>Role</th>
          {/* Add more table headers for additional user data */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.username}>
            <td>{user.fullname}</td>
            <td>{user.username}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default UsersTableFormat;
