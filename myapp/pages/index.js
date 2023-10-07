/*import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
     <h1> User Registeration</h1>
    </main>
  )
}
*/// pages/register.js
import { useState } from 'react';
import Link from 'next/link';
import { registerUser } from '../utils/api'; // Import the API function
import { useRouter } from 'next/router';
import UserRegistrationForm from '../components/UserRegistrationForm';
import Layout from '../components/Layout';



export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname:'',
    username: '',
    password: '',
    role:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    try {
        const response =  await registerUser(formData);
        console.log('User registration successful:', response);
        router.reload();
        
        // Optionally, you can redirect the user to a login page or display a success message.
      } catch (error) {
        console.error('User registration failed:', error.message);
        // Handle registration error, e.g., display an error message to the user.
      }
  };

  return (
    <Layout>
    <div className="container">
      <h1 className ="h1">User Register</h1>
      <form className = "form" onSubmit={handleSubmit}>
        <div className='col-8 grid-margin'>
      <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
     
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className='row'>
        <button className="btn btn-primary" style={{width: '150px',marginLeft:'35px'}} type="submit">Register</button> 
          <Link href="/userlogin" id="hreflink">
              Registered User Login here !!
          </Link>

        </div>
        </div>
      </form>
    </div>
    </Layout>
  );
}



