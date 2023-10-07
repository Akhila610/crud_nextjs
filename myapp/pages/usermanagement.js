// pages/UserManagement.js

import React, { useState, useEffect } from 'react';
import UserTable1 from '../components/UserTable1';
import UserForm from '../components/UserForm';
import { insertAndFetch } from '../utils/api'; // Import the API function
import { useUser } from '../context/UserContext';
import Layout from '../components/Layout';
import { API_BASE_URL } from '../api_baseurl';


function UserManagement() {
const { loginuser } = useUser();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    // Fetch the list of users from your backend API
    fetch(`${API_BASE_URL}/getusers`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const addUser =async (user) => {
      try {
        if(loginuser.role == "admin"){
        const response =  await insertAndFetch(user);
        console.log('User registration successful:', response);
        setUsers([...users, response]);
        }
        else{
            alert("Sorry you cant add new User ")
        }
      } catch (error) {
        console.error('User registration failed:', error.message);
      }

  };

  const editUser = async (user) => {
    try {
        if((loginuser.role == "admin") || (loginuser.id == user.id)){
         const response = await fetch(`${API_BASE_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Extract JSON data
      const updatedUsers = users.map((u) => (u.id === user.id ? data : u));
      setUsers(updatedUsers);
      setSelectedUser(null);
        }else alert(" Sorry, You have no privilege to edit others data |||| ")
      
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };
  
  const deleteUser = (id) => {
    // Make an API call to delete the user from the backend
    if((loginuser.role == "admin")){
    fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error('Error deleting user:', error));
    }else{
      alert("Sorry You can't delete a User")
    }
  };

  return (
    <Layout>
    <div>
      <h1 className ="h1" style={{marginLeft:'500px'}}>User Management</h1>
      <UserForm selectedUser={selectedUser} addUser={addUser} editUser={editUser} />
      <UserTable1 users={users} setSelectedUser={setSelectedUser} deleteUser={deleteUser} />
    </div>
    </Layout>
  );
}

export default UserManagement;
