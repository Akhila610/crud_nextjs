// pages/userdashboard.js

import React, { useEffect, useState } from 'react';
import UsersTableFormat from '../components/UsersTableFromat';
const API_BASE_URL = 'http://localhost:8080';

function Users() {
  const [users, setUsers] = useState([]);
console.log(" entered here in userdahsbaord page ")
  useEffect(() => {
    // Fetch the list of users from your backend API
    fetch('http://localhost:8080/getusers') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("data as "+ JSON.stringify(data))
        setUsers(data)})
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UsersTableFormat users={users} />
    </div>
  );
}

export default Users;
