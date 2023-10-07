// components/LogoutButton.js
import { useRouter } from 'next/router';
import { API_BASE_URL } from '../api_baseurl';
import { useUser } from '../context/UserContext';

function LogoutButton() {
  const router = useRouter();
  const { setLoginUser } = useUser();


  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST', 
      });

      if (response.ok) {
        router.push("/"); 
      } else {
        // Handle errors, if any
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button  className="btn btn-primary" style={{marginLeft: '80%'}}onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
