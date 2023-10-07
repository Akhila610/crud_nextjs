import axios from 'axios';
import { stringify } from 'postcss';

import { API_BASE_URL } from '../api_baseurl';


export async function registerUser(userData) {
  try {
  
  
    const response = await axios.post(`${API_BASE_URL}/register`,userData);
    return response.data;
    
  } catch (error) {
    console.log(error.data)
    throw error;
  }
}

export async function insertAndFetch(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/insert-fetch`,userData);
    return response.data;
    
  } catch (error) {
    console.log(error.data)
    throw error;
  }
}
export async function getAll() {
  axios.get(`${API_BASE_URL}/users`)
  .then((response) => {
    alert(response.data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
