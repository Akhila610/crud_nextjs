// components/Login.js
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import { API_BASE_URL } from '../api_baseurl';



const Login = () => {
  const router = useRouter();
  const {setLoginUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Replace with your login data
      })
        .then((response) => {
          if (!response.ok) {
            alert("User Not Found");
          }
          return response.json(); // Parse the JSON response here
        })
        .then((responseData) => {
          const message = responseData.message;
          if(message == "Login successfully"){
          // console.log(" resdata as ------------------"+ JSON.stringify(resData))
          const loginUserData = typeof responseData === "object" ? responseData : JSON.parse(responseData);

            setLoginUser(loginUserData);
            router.push('/usermanagement'); // Navigate to the usermanagement page

            //window.location.href = '/usermanagement'
          }
            
        else
        window.location.href = '/userlogin'
        })
        .catch((error) => {
          console.error('Error during login:', error);
        });    
  };

  return (
    <Layout>
    <div className="container">
      <h1 className ="h1">Login</h1>
      <form  className = "form">
      <div className='col-8 grid-margin'>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <br></br>
        <br></br>
        <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        
        <button type="button"  className="btn btn-primary" style={{width: '150px',marginLeft:'350px'}}  onClick={handleLogin}>
          Login
        </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default Login;
