
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
const User = () => {
    const router = useRouter();
    const { user } = useUser();
    // Access the state object
    console.log(user);
    console.log(JSON.stringify(user))
  
    return (
      <div>
        <h1>Other Page</h1>
        
        
      </div>
    );
  };

  
export default User;
